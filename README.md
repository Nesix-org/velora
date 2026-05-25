# Velora

A modern, full-featured e-commerce platform built with Next.js 16, React 19, and TypeScript. Velora provides a seamless shopping experience with support for product browsing, cart management, wishlist functionality, user authentication, and more.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Key Features Explained](#key-features-explained)
- [Components](#components)
- [Styling](#styling)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **Product Catalog**: Browse and filter products by category (Men's/Women's Clothes & Footwear)
- **Shopping Cart**: Add, remove, update quantities, and manage cart items with persistent storage
- **Wishlist**: Save favorite products for later
- **User Authentication**: Sign up and login functionality with form validation
- **Checkout Process**: Complete billing details and payment information
- **Flash Sales**: Time-limited promotional offers with countdown timer
- **Responsive Design**: Mobile-first approach with full desktop support
- **Blog Section**: Content management for articles and posts
- **Contact Page**: Customer support with FAQ section

### User Experience
- Smooth animations powered by Framer Motion
- International phone number input support
- Product ratings and reviews
- Empty state handling for cart and wishlist
- Confirmation modals for destructive actions
- SEO-optimized with Next.js metadata

## 🚀 Tech Stack

### Core Framework
- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Form Handling & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Additional Libraries
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel functionality
- **[React Fast Marquee](https://www.react-fast-marquee.com/)** - Scrolling marquee
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[input-otp](https://github.com/guilhermerodz/input-otp)** - OTP input component
- **[libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js)** - Phone number parsing and validation

### Development Tools
- **[ESLint](https://eslint.org/)** - Linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Tailwind animation utilities

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 20.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nesix/velora.git
cd velora
```

2. **Install dependencies**

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

Using pnpm:
```bash
pnpm install
```

Using bun:
```bash
bun install
```

### Running the Application

#### Development Mode

Start the development server with hot reload:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

#### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

#### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Cloudinary Setup

1. Copy `.env.example` to `.env.local`.
2. Fill in `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` from your Cloudinary dashboard.
3. Install dependencies so the `cloudinary` package is available:

```bash
npm install
```

The project is configured to accept remote product images from `res.cloudinary.com` through Next.js image optimization.

### Product Image Upload

- `POST /api/admin/product-images`
  Uploads a product image to Cloudinary using multipart form data with `file`, and optional `folder` and `alt`.
- `DELETE /api/admin/product-images`
  Deletes a Cloudinary image using `{ "publicId": "..." }`.
- `components/admin/ProductImageUploader.tsx`
  Reusable client uploader for an admin product form.
- `/resources/image-upload`
  Internal demo page to test upload, preview, and delete flow.
- `/admin/products/new`
  Mock admin product creation page backed by browser local storage.

## 📁 Project Structure

```
velora/
├── app/                          # Next.js App Router pages
│   ├── account/                  # User account management
│   ├── blog/                     # Blog pages
│   ├── cart/                     # Shopping cart page
│   ├── checkout/                 # Checkout process
│   ├── company/                  # Company information
│   ├── contact/                  # Contact page with FAQ
│   ├── faq/                      # FAQ page
│   ├── help/                     # Help center
│   ├── home-page/                # Home page components
│   ├── login/                    # Login page
│   ├── profile/                  # User profile
│   ├── resources/                # Resource pages
│   ├── signup/                   # Sign up page
│   ├── wishlist/                 # Wishlist page
│   ├── globals.css               # Global styles
│   ├── icon.svg                  # App icon
│   ├── layout.tsx                # Root layout with providers
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                  # Root page (redirects to home)
│
├── components/                   # Reusable React components
│   ├── auth/                     # Authentication components
│   ├── cartComponents/           # Cart-related components
│   │   ├── cartTable.tsx         # Desktop cart view
│   │   ├── cartMobileView.tsx    # Mobile cart view
│   │   ├── cartSummary.tsx       # Order summary
│   │   ├── emptyCart.tsx         # Empty cart state
│   │   └── justForYou.tsx        # Product recommendations
│   ├── checkout/                 # Checkout form components
│   │   ├── checkout-form.tsx     # Billing details form
│   │   └── proceed-to-payment.tsx # Payment summary
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.tsx       # Authentication state
│   │   └── context.tsx           # Cart state management
│   ├── homepage-components/      # Home page sections
│   │   ├── heroSection.tsx       # Hero banner
│   │   ├── flashSale.tsx         # Flash sale section
│   │   ├── newArrival.tsx        # New arrivals
│   │   ├── shopCategory.tsx      # Category browsing
│   │   ├── appBenefits.tsx       # Features showcase
│   │   └── appStoreExperience.tsx # App download section
│   ├── navbarComponents/         # Navigation components
│   ├── ui/                       # Shadcn UI components
│   │   └── [various UI primitives]
│   ├── wishlists/                # Wishlist components
│   ├── countDownTimer.tsx        # Countdown timer component
│   ├── footer.tsx                # Site footer
│   ├── menuItem.tsx              # Navigation menu item
│   ├── navbar.tsx                # Main navigation bar
│   ├── productCard.tsx           # Product display card
│   ├── providers.tsx             # Context providers wrapper
│   └── ViewAllProducts.tsx       # Product grid view
│
├── constants/                    # Static data and configurations
│   ├── blogCard.tsx              # Blog post data
│   └── products.ts               # Product catalog data
│
├── hooks/                        # Custom React hooks
│
├── lib/                          # Utility functions
│   ├── helper.ts                 # Helper functions
│   ├── menus.ts                  # Navigation menu data
│   └── utils.ts                  # Utility functions (cn for class merging)
│
├── public/                       # Static assets
│   ├── assets/                   # Images and icons
│   │   ├── bank/                 # Payment method icons
│   │   ├── menClothes/           # Men's clothing images
│   │   ├── menFootwear/          # Men's footwear images
│   │   ├── signup/               # Authentication page assets
│   │   └── wishlistproduct/      # Wishlist product images
│   ├── icons/                    # App icons
│   └── [various SVG files]
│
├── .gitignore                    # Git ignore rules
├── components.json               # Shadcn UI configuration
├── eslint.config.mjs             # ESLint configuration
├── LICENSE                       # MIT License
├── next.config.ts                # Next.js configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
├── package.json                  # Project dependencies
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
└── tsconfig.json                 # TypeScript configuration
```

## 🎯 Key Features Explained

### Shopping Cart Management

The shopping cart is powered by React Context and persists data to localStorage:

```typescript
// Usage in components
const { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
```

**Cart Features:**
- Add products with automatic quantity increment for duplicates
- Update item quantities
- Remove individual items
- Clear entire cart with confirmation modal
- Calculate total price automatically
- Persistent storage across browser sessions
- Mobile and desktop optimized views

### Authentication System

User authentication with local storage persistence:

```typescript
// Authentication context
const { user, isAuthenticated, login, logout } = useAuth();
```

**Auth Features:**
- Sign up with name, email, and password
- Login functionality
- Session persistence
- Protected routes ready for integration
- Form validation using React Hook Form and Zod

### Product Catalog

Products are organized by categories:
- Men's Clothing
- Men's Footwear  
- Women's Clothing
- Women's Footwear
- Accessories (Scarves)

Each product includes:
- Image
- Name and description
- Price with discount percentage
- Star rating
- Review count
- Category classification

### Theme System

Dark mode support using `next-themes`:
- Automatic system preference detection
- Manual theme toggle
- Persistent theme selection
- Smooth transitions

## 🧩 Components

### UI Components (Shadcn UI)

Pre-built accessible components:
- `Button` - Interactive button with variants
- `Input` - Form input fields
- `Dialog` - Modal dialogs
- `Dropdown Menu` - Dropdown menus
- `Checkbox` - Checkbox inputs
- `Radio Group` - Radio button groups
- `Switch` - Toggle switches
- `Tooltip` - Contextual tooltips
- `Accordion` - Collapsible content
- `Alert Dialog` - Confirmation dialogs
- `Label` - Form labels
- `Separator` - Visual dividers
- `Toggle` - Toggle buttons
- `Toggle Group` - Grouped toggles

### Custom Components

**Navigation:**
- `Navbar` - Main navigation with cart count, theme toggle, and user menu
- `Footer` - Site footer with links and social media

**Product Display:**
- `ProductCard` - Individual product card with image, name, price, rating
- `ViewAllProducts` - Grid layout for product browsing

**Cart:**
- `CartTable` - Desktop cart view with table layout
- `CartMobileView` - Mobile-optimized cart display
- `CartSummary` - Order total and checkout button
- `EmptyCart` - Empty state with call-to-action

**Checkout:**
- `CheckoutForm` - Billing and shipping information form
- `ProceedToPayment` - Order summary and payment options

**Home Page:**
- `HeroSection` - Main banner with featured content
- `FlashSaleSection` - Time-limited offers with countdown
- `NewArrival` - Latest products showcase
- `ShopCategory` - Category navigation
- `AppBenefits` - Feature highlights
- `AppStoreExperience` - Mobile app promotion

## 🎨 Styling

### Tailwind CSS Configuration

Velora uses **Tailwind CSS 4** with custom configuration:

**Custom Colors:**
- `bgWhite` - Background white
- `bgLemon` - Accent lemon yellow (#A1C249)

**Typography:**
- **Sans-serif**: Space Grotesk (via Google Fonts)
- **Serif**: Playfair Display (via Google Fonts)

**Utility Classes:**
```css
/* Custom border width utilities */
.border-l-15 /* 15px left border */
.border-l-25 /* 25px left border */
```

### Component Styling

- Uses `clsx` and `tailwind-merge` via the `cn()` utility for conditional classes
- Class Variance Authority (CVA) for component variants
- Responsive design with mobile-first approach
- Smooth animations using Framer Motion

## 📜 Scripts

```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "eslint"            // Run ESLint
}
```

## ⚙️ Configuration

### TypeScript (`tsconfig.json`)

- Target: ES2017
- Strict mode enabled
- Path aliases: `@/*` maps to root directory
- JSX: Preserve for Next.js

### Next.js (`next.config.ts`)

- App Router enabled
- React 19 support
- Image optimization
- Font optimization with `next/font`

### Shadcn UI (`components.json`)

- Style: New York variant
- RSC (React Server Components) enabled
- CSS variables for theming
- Base color: Neutral
- Icon library: Lucide

### ESLint (`eslint.config.mjs`)

- Next.js recommended rules
- TypeScript support
- Ignores build directories

## 🛠️ Customization

### Adding New Products

Edit `constants/products.ts`:

```typescript
export const cards: Product[] = [
  {
    id: 1,
    image: productImage,
    price: 99.99,
    name: "Product Name",
    discount: "-20%",
    rating: 4.5,
    reviews: "(123 reviews)",
    category: "men-clothes"
  },
  // Add more products...
];
```

### Adding New UI Components

Install Shadcn UI components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add card
```

### Customizing Theme Colors

Edit `app/globals.css` to modify CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Add custom colors */
}
```

## 🚧 Future Enhancements

- Backend API integration for products and user data
- Payment gateway integration (Stripe, PayPal)
- Product search and advanced filtering
- User reviews and ratings system
- Order history and tracking
- Email notifications
- Admin dashboard
- Product image gallery
- Size and color variants
- Inventory management
- Coupon/discount code system

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed


**Copyright (c) 2025 Nesix.org**


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful UI components
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vercel](https://vercel.com/) - Deployment platform
- All open-source contributors

## 📧 Contact & Support

- **Project Repository**: [GitHub](https://github.com/nesix/velora)
- **Organization**: Nesix.org
- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/nesix/velora/issues)

---

**Built with ❤️ using Next.js and React**

For more information about Next.js, check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
