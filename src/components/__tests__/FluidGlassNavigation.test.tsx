/**
 * Tests for FluidGlassNavigation Component
 * Feature: fluid-glass-navbar-integration
 */

import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { 
  FallbackNavigation,
  DEFAULT_NAV_ITEMS,
  type NavItem
} from '../FluidGlassNavigation';
import { Home, Briefcase } from 'lucide-react';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    nav: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => (
      <nav className={className} {...props}>{children}</nav>
    ),
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
      <div {...props}>{children}</div>
    )
  }
}));

describe('FallbackNavigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders all navigation items', () => {
    render(<FallbackNavigation navItems={DEFAULT_NAV_ITEMS} />);
    
    DEFAULT_NAV_ITEMS.forEach(item => {
      const link = screen.getByRole('link', { name: item.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
    });
  });

  test('renders with custom nav items', () => {
    const customItems: NavItem[] = [
      { id: 'custom1', href: '#custom1', icon: Home, label: 'Custom 1' },
      { id: 'custom2', href: '#custom2', icon: Briefcase, label: 'Custom 2' }
    ];

    render(<FallbackNavigation navItems={customItems} />);
    
    expect(screen.getByRole('link', { name: 'Custom 1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Custom 2' })).toBeInTheDocument();
  });

  test('has correct data-testid', () => {
    render(<FallbackNavigation navItems={DEFAULT_NAV_ITEMS} />);
    
    const nav = screen.getByTestId('fallback-nav');
    expect(nav).toBeInTheDocument();
  });

  test('renders correct number of navigation buttons', () => {
    render(<FallbackNavigation navItems={DEFAULT_NAV_ITEMS} />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(DEFAULT_NAV_ITEMS.length);
  });

  test('each link has correct href attribute', () => {
    render(<FallbackNavigation navItems={DEFAULT_NAV_ITEMS} />);
    
    DEFAULT_NAV_ITEMS.forEach(item => {
      const link = screen.getByRole('link', { name: item.label });
      expect(link.getAttribute('href')).toBe(item.href);
    });
  });
});

describe('DEFAULT_NAV_ITEMS', () => {
  test('contains expected navigation items', () => {
    expect(DEFAULT_NAV_ITEMS).toHaveLength(5);
    
    const ids = DEFAULT_NAV_ITEMS.map(item => item.id);
    expect(ids).toContain('home');
    expect(ids).toContain('bento');
    expect(ids).toContain('experience');
    expect(ids).toContain('projects');
    expect(ids).toContain('education');
  });

  test('all items have required properties', () => {
    DEFAULT_NAV_ITEMS.forEach(item => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('href');
      expect(item).toHaveProperty('icon');
      expect(item).toHaveProperty('label');
      expect(item.href).toMatch(/^#/);
    });
  });

  test('all items have valid anchor hrefs', () => {
    DEFAULT_NAV_ITEMS.forEach(item => {
      expect(item.href.startsWith('#')).toBe(true);
      expect(item.href.length).toBeGreaterThan(1);
    });
  });

  test('all items have non-empty labels', () => {
    DEFAULT_NAV_ITEMS.forEach(item => {
      expect(item.label.length).toBeGreaterThan(0);
    });
  });

  test('all items have unique ids', () => {
    const ids = DEFAULT_NAV_ITEMS.map(item => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe('NavItem type', () => {
  test('accepts valid NavItem structure', () => {
    const validItem: NavItem = {
      id: 'test',
      href: '#test',
      icon: Home,
      label: 'Test'
    };
    
    expect(validItem.id).toBe('test');
    expect(validItem.href).toBe('#test');
    expect(validItem.label).toBe('Test');
    expect(validItem.icon).toBe(Home);
  });
});
