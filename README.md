# Rahul S - Immersive Portfolio

A highly animated, immersive portfolio website showcasing AR/VR development, video editing, and game design work.

## 🚀 Features

- **Interactive 3D Hero Scene** - Floating film-roll, camera, pet, and planet with mouse parallax
- **Particle System** - Interactive background particles that respond to mouse hover and clicks
- **Lovable AI Companion** - RahulBot assists visitors with navigation and quick info
- **Custom Film-Roll Cursor** - Animated cursor with hover states
- **Smooth Page Transitions** - Framer Motion powered animations between pages
- **Dark/Light Theme Toggle** - Switch between themes seamlessly
- **Responsive Design** - Fully responsive across all devices
- **SEO Optimized** - Proper meta tags, semantic HTML, and structured data

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks
- **Framer Motion** - Smooth animations and page transitions
- **Three.js / react-three-fiber** - 3D graphics and interactive scenes
- **tsParticles** - Interactive particle system
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **shadcn/ui** - Beautiful UI components

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero3DScene.tsx       # 3D floating objects scene
│   ├── ParticleBackground.tsx # Interactive particles
│   ├── Navigation.tsx         # Main navigation bar
│   ├── SocialToolbar.tsx      # Fixed social media links
│   ├── AICompanion.tsx        # RahulBot assistant
│   ├── ThemeToggle.tsx        # Dark/Light theme switcher
│   └── ui/                    # shadcn UI components
├── pages/
│   ├── Hero.tsx              # Landing page with 3D scene
│   ├── About.tsx             # About section
│   ├── Projects.tsx          # Portfolio projects
│   ├── Skills.tsx            # Skills visualization
│   ├── Contact.tsx           # Contact form
│   └── NotFound.tsx          # 404 page
├── data/
│   ├── site.json             # Site configuration & contact info
│   └── projects.json         # Project data
└── index.css                 # Design system & theme variables

public/
└── resume.pdf                # Downloadable resume
```

## 🎨 Customization

### Update Site Information

Edit `src/data/site.json` to update:
- Name and tagline
- Contact information (email, phone)
- Social media links
- About text
- Skills and proficiency levels

### Update Projects

Edit `src/data/projects.json` to:
- Add/remove projects
- Update project descriptions
- Change demo links
- Modify tech stack tags

### Change Theme Colors

Edit `src/index.css` to customize:
- Color scheme (primary, secondary, accent)
- Gradients and glow effects
- Animation timings
- Shadow effects

### Replace Assets

Images are stored in:
- `src/assets/` - Project thumbnails and images
- `public/` - Static files like resume PDF

### Modify 3D Scene

Edit `src/components/Hero3DScene.tsx` to:
- Change 3D object shapes and colors
- Adjust animation speeds
- Modify parallax behavior

## 🚀 Deployment

This project is ready for deployment on:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

Simply connect your repository and deploy!

## ⚙️ Environment Variables

No environment variables required for basic functionality.

For contact form backend integration, add:
- Email service API key (EmailJS, SendGrid, etc.)

## 📱 Responsive Design

Fully responsive breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- `prefers-reduced-motion` support
- Custom cursor can be disabled
- Semantic HTML structure

## 🎭 Performance

- Lazy-loaded 3D assets
- Optimized particle count
- Compressed images
- Code splitting
- Tree-shaking

## 📄 License

All rights reserved - Rahul S © 2025

## 🤝 Contact

- Email: rahulsaravanan44@gmail.com
- Phone: +91 9944819246

---

Built with ❤️ using Lovable
