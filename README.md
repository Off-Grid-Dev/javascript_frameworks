# Greedy Little Pigs – E-Commerce Store

## Overview

Greedy Little Pigs is a modern e-commerce web application built with React and TypeScript. It features a responsive design, real-time product search, sorting, a shopping cart, checkout flow, and a contact form. The project demonstrates best practices in React development, state management, API integration, and user experience enhancements such as toast notifications.

## Features

- **Product Listing:** Browse products fetched from the Noroff Online Shop API.
- **Product Details:** View detailed information, reviews, and add items to your cart.
- **Search & Sort:** Real-time search with lookahead and sorting by price or name.
- **Shopping Cart:** Add, remove, and adjust quantities of products. Cart state is persisted.
- **Checkout:** Place an order, clear the cart, and receive confirmation.
- **Contact Form:** Submit inquiries with TypeScript-based validation and feedback.
- **Toast Notifications:** Reusable system for user feedback (add to cart, errors, etc.).
- **Responsive Design:** Works on desktop, tablet, and mobile.

## Tech Stack

- **React 19**
- **TypeScript**
- **React Router**
- **CSS Modules**
- **Vite** (for fast development and build)
- **Jest/Vitest** (for testing)

## API

- [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd javascript_ecom
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App Locally

Start the development server:

```bash
npm run spin
```

- The app will be available at `http://localhost:5173` (or as indicated in your terminal).

### Building for Production

To build the app for production:

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Running Tests

To run all tests:

```bash
npm test
```

To run tests with coverage:

```bash
npm run test:coverage
```

## Project Structure

```
├── src/
│   ├── context/         # React Contexts (Cart, Products, Search, Toast)
│   ├── layout/          # Layout and shared components
│   ├── pages/           # Page components (Home, Product, Cart, etc.)
│   ├── services/        # API calls and mock data
│   ├── styles/          # CSS Modules
│   ├── types/           # TypeScript type definitions
│   └── ui/components/   # UI components (Nav, SearchBar, etc.)
├── public/              # Static assets
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Deployment

- Deploy easily to Netlify, Vercel, or any static hosting provider.
- Ensure you build the project (`npm run build`) and deploy the contents of the `dist/` folder.

## Development History

This section documents the major improvements and features added during the development of this project on the `improvements-for-portfolio` branch. Each category includes links to relevant commits for reference.

### Project Setup & Configuration

- [Initial project setup with Vite and React](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/4aa0b19b754e5552ccc60c56d46c63afa0b73d56) - Installed Vite with React-SWC for fast development
- [Code formatting setup](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/16b84c24edbbc8e3e4e901482b31c0eac704439b) - Added Prettier, lint-staged, and Husky pre-commits for consistent code quality
- [Prettier configuration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/ef1cc654d17623b33ba46a64089c0c50f508a761) - Configured Prettier with custom settings
- [Netlify deployment setup](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/859888e32c1720e0a8c86dcea70e1065a9217f19) - Added Netlify configuration for build process

### TypeScript Migration

- [TypeScript installation and configuration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/bcb259f34afff94af701fe511f87cb15807c8850) - Initial setup of TypeScript with proper configurations
- [CSS Modules TypeScript integration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/9292af26c927d1305099acbc240dd1a5c9c690c0) - Made CSS modules work seamlessly with TypeScript
- [Type definitions for props](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/bb4dcf255a558be8bd93007155cf9e81dcdda6dc) - Created interface import file for ThemeStyles and other props
- [Merged TypeScript PR](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/9dd1ce4881af2254cddd5d9fb1c97bbf67ac3091) - Successfully merged TypeScript installation pull request

### Layout & Navigation

- [Core layout components](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/bd99e9bcba139c1df870327b2c23b0ca7f086657) - Created Home, Header, and Footer components
- [Layout component architecture](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/a21956d93185c07dd86eafe57da6e1d19b56e241) - Added Layout component to house header, footer, and content
- [React Router setup](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/8908996fd5e46ce51aac1249d3ec7d01557431ab) - Implemented routing with React Router
- [Responsive navigation menu](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/b01035e0989440be21fadce7f76dfbb2ff46c07e) - Added responsive nav menu with improved wrapper
- [Error page](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/7270e761187e54e52b2fd2408fca6c69251b13c1) - Created error page for non-existent routes

### Theming & Styles

- [Theme system setup](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/9e63c715299880ee93be30dc3a066d0850c6be93) - Created theme style file with CSS modules
- [Theme variables organization](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/58a6468596bbfc6e7ffe5ece2c2fd5b8fe4ff016) - Moved theme variables to module CSS file
- [Custom fonts integration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/0bc28b1cff5f2c24544e013c478841a00380f4e1) - Added Noto Serif and Quicksand fonts
- [Footer styling](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/9b24446494220c3ab59e77eb1ab80e0f05bc13a3) - Added comprehensive footer styles
- [Main component styles](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/51160882964490c1807b7e4dedcc439f72a7e58c) - Added styles for Main component and consolidated input/textarea styling

### Dark Mode Feature

- [Initial dark mode toggle](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/d4f157ad84b1f82143be89c980135aec52655b4c) - Set up base dark mode toggle functionality
- [Dark mode SVG icons](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/0bfe57a401eac1c6c3eaf27845a22f3260d351dd) - Started work on dark mode toggle SVG icons
- [SVG toggle implementation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/bea3617d96aba06b0b4136febddd35226b754eca) - Incorporated new SVG setup for dark mode toggle
- [Merged dark mode feature](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/15508693317c8bbfab480eced2caccb70c974b03) - Merged dark-mode-toggle branch
- [Final dark mode toggle](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/afbb6b54213c3572e5873098a80b524ce6568d01) - Implemented new dark-toggle-svg with animations

### Product Management & API

- [API integration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/c17ca7739aac0b86a2f6a0da0fe063cbfa7850cb) - Initial setup of api.ts with interfaces and utility functions for fetch requests
- [Product display component](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/ff2e9bb9095d398252dc9f78d24a9a50901ed443) - Initial setup of component to display products on home page
- [Product grid integration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/1e9d77d79fc055584d3abe7d94914dbfc98ea994) - Integrated API and set up component to display a grid of products with links
- [Individual product page](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/fbe1508d304e9c69e48f5645fae5e9ea39dde8de) - Added useParams for product detail fetching with loading and error states
- [Product sorting feature](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/fbf51b177b15fe14f71981e9aa2b7fa8d7bef493) - Implemented sorting of products alphabetically and by price

### Search Functionality

- [Live search implementation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/5f4cbbcbd4115564bafce93792b0ffb70e0fdd16) - Initial setup of live search functionality
- [Search context](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/7dc1ad833e825a2f12f3fc065f33a2b1e97bc5e4) - Created SearchContext with useCallback for performance
- [Search bar positioning](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/c5ac3d5a5fb08589cd63bc27ef94b19bd34922e2) - Placed search bar exclusively on home page

### Shopping Cart

- [Cart context setup](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/b5fdc3b30cf5f77c14f28f30ea16c7c4e8e38a22) - Created CartContext for global cart state management
- [Add to cart functionality](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/7c91a6efbbed37e0f4bbc10c9ea574c0c52bfb5a) - Implemented add to cart with quantity tracking
- [Cart page implementation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/c8b38e3ac5cf3ca4ae9ad84fdac5d85c8d8833a3) - Set up cart page with item display and quantity controls
- [Remove from cart](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/e5fa51f7b6e0b5b12f14c4ce5fcab48cbe63d75b) - Added remove item functionality
- [Cart persistence](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/8e82889d6efaf5be6aa8e42cf9bdd6cb2a2bc65d) - Implemented localStorage persistence for cart
- [Clear cart function](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/b08083416d12a94c646cf4ae23183aa926907a19) - Implemented clear cart functionality

### Checkout Process

- [Checkout navigation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/c88b1bff7024f1b419178df1c8c26e9f8c9e6c52) - Added navigation functionality to checkout button
- [Checkout success page](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/b88c32515be998358e09cb0ecb239004915b9adf) - Set up checkout page with thank you message and navigation
- [Cart clearing on checkout](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/1cecbeaa2347829f436dde40bce748853822632d) - Added function to clear cart and move to checkout success page
- [Empty cart handling](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/180e43f9b11973cfa77f73cb62db16648a441d05) - Checkout setup with redirect if cart is empty

### Toast Notifications

- [Toast context setup](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/b1bb5bb14ddb854fc0cab6d51b80b3f17d3ab0ae) - Created ToastContext for user notifications
- [Toast types implementation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/33e5e50cc373c61692a27d4ae4740a44348ade57) - Added specific toast types to each implementation
- [Toast color switching](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/f97fe01742145335984b37c79d665371238f1a93) - Created switch case for toast colors based on type

### Contact Form

- [Contact form base](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/7fb6a3e67558f53a6f2a9940bcde30622d156a9b) - Added base for contact form
- [Form validation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/51160882964490c1807b7e4dedcc439f72a7e58c) - Improved styling on contact form with better validation

### Testing

- [Component tests](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/856172126f34cfa88e9d9a9d6c6af2249d21c637) - Created tests for components with Vitest
- [Testing library integration](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/64cf8bb2f16e2d2c4f316621ea6d77e3cde86789) - Added user-event testing library
- [Test fixes](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/cf0e8c5ce7836efc17ff5774757cac47144cc8a0) - Fixed broken tests

### Documentation

- [JSDoc comments](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/28637f7d5cf90f9329e5d0f93e95c5add90ddecb) - Added JSDoc comments to components
- [JSDoc positioning improvements](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/3a93abfd583e05f920346d684f8faff764c9b453) - Improved positioning of JSDoc comments
- [Main page documentation](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/a49ab9896719928c3e08f42b6c614f5d4c9b8857) - Added JSDoc to main page
- [README updates](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/856172126f34cfa88e9d9a9d6c6af2249d21c637) - Updated README with project information

### Deployment & Bug Fixes

- [Netlify deployment](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/859888e32c1720e0a8c86dcea70e1065a9217f19) - Added Netlify configuration for deployment
- [Logo fix](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/6c290c1fbd951495f921c449a06f8e9ce60aa216) - Fixed logo not appearing on deployed site
- [Client-side routing fix](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/1cbe2dbd947c5ceb2b8e0996200d89d5100a32df) - Small fix to allow client-side routes
- [Mock data removal](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/6b66568066d604f9543edb7a85bd2d53c06c8ef8) - Removed mockData that was breaking the build
- [Deployment error fixes](https://github.com/Off-Grid-Dev/javascript_frameworks/commit/9624f782b5d14217b8c669f0ab8899ac56895b06) - Fixed small deployment errors

## License

This project is for educational purposes. See [LICENSE](LICENSE) if provided.

---

**Happy shopping with Greedy Little Pigs!**
