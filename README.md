# ZenFlow Yoga

A modern, responsive yoga website built with Next.js, TypeScript, and Tailwind CSS. ZenFlow Yoga offers a serene digital experience for yoga enthusiasts to explore classes, read blogs, and connect with expert instructors.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Yoga Classes**: Showcase various yoga classes and programs
- **Expert Instructors**: Highlight experienced yoga instructors and their expertise
- **Blog System**: Comprehensive blog with dynamic routing and SEO optimization
- **Authentication**: Secure login and signup functionality
- **Private/Public Areas**: Separate layouts for authenticated and public users
- **SEO Optimized**: Built with Next.js for optimal search engine performance
- **Fast Loading**: Optimized with Next.js features for excellent performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/momenur/zenflow-yoga.git
cd zenflow-yoga
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
zenflow-yoga/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (private)/         # Protected routes
│   │   ├── (public)/          # Public routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── not-found.tsx      # 404 page
│   ├── components/            # Reusable components
│   │   ├── about/            # About page components
│   │   ├── auth/             # Authentication components
│   │   ├── blog/             # Blog components
│   │   ├── common-component/ # Shared components
│   │   ├── footer/           # Footer component
│   │   ├── home/             # Home page components
│   │   ├── navbar/           # Navigation component
│   │   └── ui/               # UI components
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── types/                    # Additional type definitions
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎯 Key Components

### Home Page

- Hero section with call-to-action
- About us section
- Yoga classes showcase
- Expert instructors
- Testimonials
- Blog preview
- Why choose us section

### Blog System

- Dynamic blog posts with slug routing
- Blog listing page
- SEO-optimized blog content
- Pagination support

### Authentication

- Login and signup forms
- Protected routes for authenticated users
- Separate layouts for public and private areas

### About Page

- Mission and values
- Team information
- Contact section

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Styling

The project uses Tailwind CSS with custom design tokens:

- Primary colors: Yoga-inspired gradients
- Secondary colors: Accent colors for highlights
- Responsive typography and spacing
- Custom animations and transitions

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interactions
- Optimized images and assets

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure the build settings
3. Deploy with a single click

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)

## 📞 Contact

For questions or support, please reach out through the contact form on the website or create an issue in this repository.
