import FluidGlass from "@/components/FluidGlass";

const demoItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Projects", link: "#projects" },
];

const GlassNavbarPlayground = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-4xl h-[600px]">
        <FluidGlass
          mode="bar"
          barProps={{
            navItems: demoItems,
            scale: 0.1,
            ior: 1.25,
            thickness: 6,
            chromaticAberration: 0.05,
            anisotropy: 0,
            transmission: 1,
            roughness: 0,
          }}
        />
      </div>
    </div>
  );
};

export default GlassNavbarPlayground;


