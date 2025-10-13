# Sami Warraich - Personal WebsiteThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A minimalist personal website built with Next.js, featuring a clean design with resume and social links.## Getting Started

## 🚀 Tech StackFirst, run the development server:

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router```bash

- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)npm run dev

- **Language**: [TypeScript](https://www.typescriptlang.org/)# or

- **Analytics**: yarn dev

  - [Firebase Analytics](https://firebase.google.com/products/analytics)# or

  - [Microsoft Clarity](https://clarity.microsoft.com/)pnpm dev

- **Icons**: [Lucide React](https://lucide.dev/)# or

- **Deployment**: [GitHub Pages](https://pages.github.com/)bun dev

```

## ✨ Features

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- 🎨 **Minimalist Design**: Clean and professional layout

- 📱 **Responsive**: Works perfectly on all devicesYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- 🌙 **Dark Mode**: Automatic theme based on system preferences

- 🔍 **SEO Optimized**: Comprehensive metadata and OpenGraph tagsThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- 📊 **Analytics**: Firebase Analytics & Microsoft Clarity integration

- 🚀 **Performance**: Optimized for static export## Learn More

- ♿ **Accessible**: ARIA labels and semantic HTML

- 🎭 **Micro-interactions**: Smooth animations and hover effectsTo learn more about Next.js, take a look at the following resources:



## 📁 Project Structure- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

```

├── app/You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

│ ├── globals.css # Global styles and animations

│ ├── layout.tsx # Root layout with metadata## Deploy on Vercel

│ ├── page.tsx # Home page

│ ├── manifest.ts # PWA manifestThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

│ ├── robots.ts # Robots.txt configuration

│ └── sitemap.ts # Sitemap generationCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

├── components/
│ ├── analytics-provider.tsx # Analytics initialization
│ ├── divider.tsx # Reusable divider component
│ ├── resume-button.tsx # Resume CTA button
│ └── social-links.tsx # Social media links
├── config/
│ └── site.ts # Centralized site configuration
├── lib/
│ ├── clarity.ts # Microsoft Clarity utilities
│ └── firebase.ts # Firebase Analytics utilities
├── types/
│ └── env.d.ts # Environment variable types
└── public/ # Static assets

````

## 🛠️ Configuration

### Site Configuration

Edit `config/site.ts` to customize:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  url: "https://yourdomain.com",
  description: "Your description",
  keywords: ["keyword1", "keyword2"],

  links: {
    resume: "https://your-resume-link.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your@email.com",
  },

  social: {
    twitter: "@yourhandle",
  },
};
````

### Environment Variables

Required environment variables (already configured in GitHub Secrets):

```env
NODE_ENV=production

# Firebase Analytics
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# Microsoft Clarity
NEXT_PUBLIC_MS_CLARITY=
```

## 🚀 Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The static export will be in the `out/` directory.

## 📦 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.

### Manual Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be live at `https://samiwarraich.github.io`

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --muted-foreground: #737373;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --muted-foreground: #a3a3a3;
  }
}
```

### Components

All components are modular and reusable:

- `components/social-links.tsx` - Add/remove social platforms
- `components/resume-button.tsx` - Customize CTA button
- `components/divider.tsx` - Decorative separator

## 📊 Analytics

### Firebase Analytics

Events are automatically tracked. You can add custom events:

```typescript
import { logAnalyticsEvent } from "@/lib/firebase";

logAnalyticsEvent("custom_event", {
  param1: "value1",
});
```

### Microsoft Clarity

Session recordings and heatmaps are automatically enabled. Set custom tags:

```typescript
import { setTag } from "@/lib/clarity";

setTag("user_type", "visitor");
```

## 📝 SEO

The site includes:

- ✅ Dynamic `robots.txt`
- ✅ XML `sitemap.xml`
- ✅ OpenGraph meta tags
- ✅ Twitter Card meta tags
- ✅ Structured metadata
- ✅ PWA manifest

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork and customize this template for your own use!

---

Built with ❤️ by [Sami Warraich](https://github.com/samiwarraich)
