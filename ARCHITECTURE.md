# Portfolio Architecture

## 🏗️ Project Structure

```
src/
├── components/
│   ├── shared/           # Reusable UI components
│   │   ├── SectionHeader.tsx
│   │   └── AnimatedCard.tsx
│   ├── ui/              # shadcn/ui components
│   ├── Hero.tsx         # Landing section
│   ├── WorkExperience.tsx
│   ├── AcademicProjects.tsx
│   ├── Education.tsx
│   ├── BentoGrid.tsx    # Feature showcase grid
│   └── Navigation.tsx   # Bottom dock navigation
├── types/
│   └── index.ts         # Shared TypeScript types
├── lib/
│   └── utils.ts         # Utility functions
├── pages/
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx
└── index.css            # Design system & animations
```

## 🎨 Design System

### Color Tokens (HSL)
All colors are defined in `src/index.css` using HSL values:
- `--background`: Main background
- `--foreground`: Text color
- `--card`: Card backgrounds
- `--primary`: Brand color (teal/cyan)
- `--secondary`: Secondary surfaces
- `--accent`: Accent color
- `--muted`: Muted text/surfaces
- `--border`: Border colors

### Usage
```tsx
// ✅ Correct - Use semantic tokens
<div className="bg-card text-card-foreground border-border">

// ❌ Wrong - Don't use direct colors
<div className="bg-slate-900 text-white border-gray-700">
```

## 🎭 Animations

### Framer Motion
All animations use Framer Motion for smooth, performant transitions:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

### Shared Components
- **SectionHeader**: Animated section titles with subtitles
- **AnimatedCard**: Card with scale-in animation and hover effects

## 📱 Responsive Design

### Mobile-First Approach
All components use Tailwind's responsive prefixes:

```tsx
// Base (mobile) → sm (640px+) → md (768px+) → lg (1024px+)
<div className="text-base sm:text-lg md:text-xl lg:text-2xl">
```

### Key Breakpoints
- **Mobile**: < 640px - Single column, compact spacing
- **Tablet**: 640px - 1024px - 2-column grids
- **Desktop**: > 1024px - Multi-column layouts

## 🔧 Component Patterns

### Type Safety
All data structures are typed in `src/types/index.ts`:

```tsx
import type { WorkItem, Project, EducationItem } from "@/types";
```

### Consistent Layouts
All sections follow this pattern:
1. Section wrapper with responsive padding
2. Max-width container
3. SectionHeader component
4. Content grid with AnimatedCard components

## 🎯 Best Practices

### DO:
- ✅ Use semantic color tokens from design system
- ✅ Use Framer Motion for animations
- ✅ Import types from `@/types`
- ✅ Use shared components (SectionHeader, AnimatedCard)
- ✅ Add responsive classes for all screen sizes
- ✅ Use flex-shrink-0 on icons in flex layouts
- ✅ Test on mobile, tablet, and desktop

### DON'T:
- ❌ Use direct color values (text-white, bg-black)
- ❌ Use CSS animations instead of Framer Motion
- ❌ Define types inline in components
- ❌ Forget mobile-first responsive design
- ❌ Use fixed widths without responsive alternatives

## 🚀 Adding New Sections

1. Create component in `src/components/`
2. Define types in `src/types/index.ts` if needed
3. Use `SectionHeader` and `AnimatedCard`
4. Add responsive classes
5. Add to `src/pages/Index.tsx`
6. Update navigation in `src/components/Navigation.tsx`

## 📦 Dependencies

- **framer-motion**: Smooth animations
- **lucide-react**: Icon library
- **tailwindcss**: Utility-first CSS
- **embla-carousel-react**: Image carousels
- **class-variance-authority**: Component variants
- **react-router-dom**: Routing

## 🎨 Customization

### Colors
Edit HSL values in `src/index.css`:
```css
:root {
  --primary: 173 80% 40%;  /* Teal */
  --accent: 192 91% 36%;   /* Cyan */
}
```

### Animations
Adjust Framer Motion transitions:
```tsx
transition={{ duration: 0.6, delay: 0.2 }}
```

### Spacing
All sections use consistent responsive padding:
```tsx
className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
```
