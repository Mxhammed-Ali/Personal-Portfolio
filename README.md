# Mohammed Ali Abdul Basheer - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer specializing in AI-powered solutions and automation.

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL will be here]

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Fluid Glass Navigation** - Modern glassmorphism UI design
- **Interactive Projects** - Carousel galleries for project showcases
- **Smooth Animations** - Framer Motion powered transitions
- **Dark Theme** - Eye-friendly dark mode interface
- **Downloadable CV** - Direct CV download functionality

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn/ui** - Component library
- **Lucide React** - Icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/Personal-portfolio.git

# Navigate to project directory
cd Personal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 Deployment

This project is configured for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

```bash
# Build and deploy
npm run deploy
```

## 📁 Project Structure

```
Personal-portfolio/
├── public/              # Static assets
│   ├── Mohd-Ali-CV.pdf # CV file
│   └── placeholder.svg # Placeholder images
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   ├── types/          # TypeScript types
│   └── hooks/          # Custom React hooks
├── .github/
│   └── workflows/      # GitHub Actions
└── vite.config.ts      # Vite configuration
```

## 🔧 Configuration

### Update Repository Name

In `vite.config.ts`, update the base path:

```typescript
base: mode === 'production' ? '/YOUR-REPO-NAME/' : '/',
```

### Update Personal Information

Edit the following files to customize with your information:
- `src/components/Hero.tsx` - Name, title, social links
- `src/components/WorkExperience.tsx` - Work history
- `src/components/Projects.tsx` - Projects
- `src/components/Education.tsx` - Education details
- `src/components/Skills.tsx` - Technical skills

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 🔒 Privacy Note

**Important**: GitHub Pages hosts public repositories. All code, assets, and files (including your CV) will be publicly accessible. If you need private hosting, consider alternatives like Vercel or Netlify.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Mohammed Ali Abdul Basheer
- Email: mohdali2112@gmail.com
- LinkedIn: [md-ali-basheer](https://www.linkedin.com/in/md-ali-basheer/)
- GitHub: [Mxhammed-Ali](https://github.com/Mxhammed-Ali)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Built with [Lovable](https://lovable.dev)
- Icons by [Lucide](https://lucide.dev)
- UI components by [Shadcn/ui](https://ui.shadcn.com)

---

Made with ❤️ by Mohammed Ali Abdul Basheer
