# 🛒 FreshCart - E-Commerce Application

A modern, fully-featured e-commerce platform built with **React**, **Vite**, and **Bootstrap** for seamless shopping experiences.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.3-purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-success)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🔐 **Authentication & Authorization**
- User registration and login
- Secure password validation
- User profile management
- Persistent session with localStorage
- Protected routes for authenticated users
- Password reset functionality

### 🛍️ **Shopping Features**
- Browse products with pagination
- Advanced search functionality
- Category and brand filtering
- Product details with ratings
- Shopping cart management (add, remove, update quantity)
- Wishlist functionality
- Save items for later

### 💳 **Checkout & Orders**
- Add to cart with real-time updates
- Persistent cart data
- Checkout process with address validation
- Order confirmation
- Order history tracking

### 🎨 **User Interface**
- Beautiful, modern design
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Loading states and skeleton screens
- Toast notifications for user feedback
- Professional footer with social links

### 🏠 **Navigation**
- Sticky navigation bar
- Home page with product sliders
- Category and brand pages
- Product details page
- Shopping cart page
- Wishlist page
- User profile page

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Fresh-Cart.git
   cd Fresh-Cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/Fresh-Cart/
   ```

---

## 📦 Project Structure

```
Fresh-Cart/
├── src/
│   ├── Components/
│   │   ├── Brand/              # Brand listing page
│   │   ├── Cart/               # Shopping cart page
│   │   ├── Category/           # Category browsing
│   │   ├── Footer/             # Footer component
│   │   ├── Home/               # Home page with sliders
│   │   ├── Login/              # Login form
│   │   ├── Navbar/             # Navigation bar
│   │   ├── Profile/            # User profile page
│   │   ├── Product-details/    # Product detail view
│   │   ├── SignUp/             # Registration form
│   │   ├── WishList/           # Wishlist page
│   │   └── ...
│   ├── Hooks/
│   │   ├── useCart.js          # Cart operations
│   │   ├── useProduct.js       # Product data fetching
│   │   ├── useWishList.js      # Wishlist operations
│   │   └── UserContext.jsx     # User authentication context
│   ├── App.jsx                 # Main app component
│   ├── index.jsx               # App entry point
│   └── index.css               # Global styles
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
├── vercel.json                 # Vercel deployment config
├── DEPLOYMENT.md               # Deployment guide
└── README.md                   # This file
```

---

## 🛠️ Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview
```bash
npm run preview
```
Previews the production build locally.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality.

---

## 🔌 API Integration

FreshCart integrates with **ecommerce.routemisr.com** API for all backend operations:

### Key Endpoints
- **Authentication**: `/api/v1/auth/signin`, `/api/v1/auth/signup`
- **Products**: `/api/v1/products`, `/api/v1/products/:id`
- **Categories**: `/api/v1/categories`
- **Brands**: `/api/v1/brands`
- **Cart**: `/api/v1/cart`
- **Wishlist**: `/api/v1/wishlist`
- **Orders**: `/api/v1/orders`

### Error Handling
- Automatic token refresh
- Error messages displayed to users
- API error logging
- Fallback error messages

---

## 🎯 Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **Vite 6.2.3** - Build tool
- **React Router 7.1.1** - Client-side routing

### UI & Styling
- **Bootstrap 5.3.3** - CSS framework
- **SCSS/SASS** - Preprocessor
- **Font Awesome 6.7.2** - Icon library

### State Management & Data Fetching
- **React Query 3.39.3** - Server state management
- **React Context API** - Client state management
- **Axios** - HTTP client

### Form Handling & Validation
- **Formik** - Form state management
- **Yup** - Schema validation

### Notifications & UI Components
- **React Hot Toast** - Toast notifications
- **React Loader Spinner** - Loading indicators
- **React Helmet** - Meta tags management
- **React Slick** - Carousel/slider

---

## 🔐 Authentication

### Login Process
1. User enters email and password
2. Credentials validated with Formik/Yup
3. API request to `/auth/signin`
4. Token received and stored in localStorage
5. User data saved to localStorage
6. Redirect to home page

### Protected Routes
All authenticated routes use `ProtectedRoute` component:
- `/home` - Home page
- `/cart` - Shopping cart
- `/wishList` - Wishlist
- `/profile` - User profile
- `/brand` - Brands page
- `/category` - Categories page

---

## 🎨 Styling & Customization

### Color Scheme
- **Primary Color**: #0aad0a (Green)
- **Secondary Color**: #f0f3f2 (Light Gray)
- **Rating Color**: #ffc908 (Gold)

### Fonts
- **Family**: "Encode Sans Expanded", sans-serif
- **Bootstrap**: Provides additional typography

### Responsive Design
- Mobile first approach
- Breakpoints: 576px, 768px, 992px, 1200px
- Flexible grid system (Bootstrap)

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit https://vercel.com
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel auto-detects all settings
   - Click "Deploy"

3. **Access Your Live App**
   ```
   https://fresh-cart-yourname.vercel.app
   ```

### Environment Variables (Vercel)
In your Vercel project settings, add:
```
VITE_API_BASE_URL=https://ecommerce.routemisr.com/api/v1
```

For detailed deployment guide, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📊 Performance

### Bundle Optimization
- Gzip compression enabled
- Tree-shaking for unused code
- Asset minification

### Current Bundle Size
- CSS: ~333.49 KB (60.89 KB gzipped)
- JavaScript: ~608.69 KB (192.76 KB gzipped)

### Load Time
- First Contentful Paint (FCP): < 2s
- Largest Contentful Paint (LCP): < 3s
- Time to Interactive (TTI): < 4s

---

## 🐛 Troubleshooting

### Issue: Blank page after login
**Solution**: Check browser console for errors, verify API endpoint is accessible

### Issue: Cart not updating
**Solution**: Ensure localStorage is enabled, check network requests in DevTools

### Issue: Profile page shows no data
**Solution**: Login again, verify userData is saved in localStorage

### Issue: Slow deployment on Vercel
**Solution**: First deployment takes 2-3 minutes, subsequent builds are faster

For more troubleshooting, see [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👨‍💻 Author

**Ibrahim Essam**
- 📫 Email: [Your Email]
- 🔗 GitHub: [@zoseribrahiim](https://github.com/zoseribrahiim)
- 💼 LinkedIn: [Ibrahim Ahmed](https://www.linkedin.com/in/ibrahim-ahmed-33191a276/)
- 🌐 Portfolio: [Your Portfolio URL]

---

## 🙏 Acknowledgments

- **API Provider**: [ecommerce.routemisr.com](https://ecommerce.routemisr.com)
- **Bootstrap Team**: For the amazing CSS framework
- **React Team**: For the powerful UI library
- **Vercel**: For seamless deployment platform

---

## 📧 Support & Contact

Have questions or found a bug? 

- 📱 Create an Issue on GitHub
- 💬 Reach out on LinkedIn
- 📧 Send an email

---

## 🔄 Version History

### v1.0.0 (March 2026)
- ✅ Initial release
- ✅ Full e-commerce functionality
- ✅ User authentication
- ✅ Shopping cart
- ✅ Wishlist
- ✅ Responsive design
- ✅ Vercel deployment ready

---

## 🎯 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Advanced filtering and sorting
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Real-time chat support
- [ ] Mobile app (React Native)

---

**Made with ❤️ by Ibrahim Essam**

*Last Updated: March 18, 2026*
