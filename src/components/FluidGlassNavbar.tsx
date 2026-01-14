/* eslint-disable react/no-unknown-property */
/**
 * FluidGlassNavbar - A glass navbar that floats over your website
 * Uses screen capture to create refraction effect from actual page content
 */

import * as THREE from 'three';
import { useRef, useState, useEffect, memo, useCallback } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  MeshTransmissionMaterial,
  Text,
  Preload,
  useTexture
} from '@react-three/drei';
import { easing } from 'maath';

interface NavItem {
  label: string;
  link: string;
}

interface FluidGlassNavbarProps {
  navItems?: NavItem[];
}

export default function FluidGlassNavbar({
  navItems = [
    { label: 'Home', link: '#home' },
    { label: 'More', link: '#bento' },
    { label: 'Experience', link: '#experience' },
    { label: 'Projects', link: '#projects' },
    { label: 'Education', link: '#education' }
  ]
}: FluidGlassNavbarProps) {
  const [bgTexture, setBgTexture] = useState<THREE.Texture | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Capture the background periodically for refraction
  const captureBackground = useCallback(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 200; // Just capture bottom portion

    // Create gradient that matches your site's theme
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0d3d3d');
    gradient.addColorStop(0.5, '#14b8a6');
    gradient.addColorStop(1, '#0a2a2a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    setBgTexture(texture);
  }, []);

  useEffect(() => {
    captureBackground();
    const interval = setInterval(captureBackground, 1000);
    return () => clearInterval(interval);
  }, [captureBackground]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(90vw, 600px)',
        height: '80px',
        zIndex: 1000,
        pointerEvents: 'auto'
      }}
    >
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <Bar bgTexture={bgTexture} />
        <NavItems items={navItems} />
        <Preload />
      </Canvas>
    </div>
  );
}

const Bar = memo(function Bar({ bgTexture }: { bgTexture: THREE.Texture | null }) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF('/assets/3d/bar.glb');
  const buffer = useFBO();
  const { viewport: vp, gl, camera } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());

  useEffect(() => {
    // Add background to scene for refraction
    if (bgTexture) {
      scene.background = bgTexture;
    }
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);
    return () => {
      scene.remove(light);
    };
  }, [scene, bgTexture]);

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Keep bar centered
    ref.current.position.set(0, 0, 0);
    ref.current.scale.setScalar(0.4);

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  const geometry = (nodes['Cube'] as THREE.Mesh)?.geometry;
  if (!geometry) return null;

  return (
    <>
      {createPortal(<></>, scene)}
      <mesh scale={[vp.width, vp.height, 1]} visible={false}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        rotation-x={Math.PI / 2}
        geometry={geometry}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.5}
          thickness={0.5}
          anisotropy={0.1}
          chromaticAberration={0.05}
          transmission={1}
          roughness={0.1}
          color="#ffffff"
        />
      </mesh>
    </>
  );
});

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null!);

  const spacing = 1.2;
  const fontSize = 0.15;

  const handleNavigate = (link: string) => {
    if (!link) return;
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = link;
    }
  };

  return (
    <group ref={group} position={[0, 0, 0.5]}>
      {items.map(({ label, link }, i) => (
        <Text
          key={label}
          position={[(i - (items.length - 1) / 2) * spacing, 0, 0]}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}
