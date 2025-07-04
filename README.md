# My - Portfolio Website

A modern, responsive portfolio website built with Nuxt.js 3, showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean and professional design with Tailwind CSS
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Optimized with Nuxt.js 3 for excellent performance
- **SEO Optimized**: Built-in SEO features with proper meta tags
- **Contact Form**: Functional contact form with server-side processing
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **Google Fonts**: Custom typography with Inter and Fira Code fonts

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 3
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Icons**: Iconify
- **Animations**: AOS
- **Fonts**: Google Fonts
- **Content**: Nuxt Content

## 📁 Project Structure

```
my-portofolio/
├── components/
│   ├── features/          # Feature components (ContactForm, ProjectCard)
│   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   └── ui/               # Reusable UI components (BaseButton, BaseInput)
├── pages/                # Application pages
├── server/
│   └── api/              # API endpoints
├── stores/               # Pinia stores
├── assets/
│   └── css/              # Global styles
└── utils/                # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `pages/index.vue` - Main page content and SEO
- `components/sections/` - Individual section components
- `nuxt.config.ts` - Site configuration

### Styling
- Global styles: `assets/css/`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Inline in components

### Content
- Projects: Update `components/sections/ProjectsSection.vue`
- Skills: Update `components/sections/SkillsSection.vue`
- Experience: Update `components/sections/ExperienceSection.vue`
- Contact: Update `components/sections/ContactSection.vue`

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
EMAIL_API_KEY=your_email_api_key
SITE_URL=https://yourdomain.com
GTAG_ID=your_google_analytics_id
```

### Nuxt Configuration
Main configuration is in `nuxt.config.ts`:
- Modules configuration
- Google Fonts setup
- Runtime configuration
- SEO settings

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Static Site Generation
```bash
npm run generate
```

### Server-Side Rendering
```bash
npm run build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Email: jhery_it@yahoo.com
- GitHub: https://github.com/Jhero

---

Built with ❤️ using Nuxt.js 3
