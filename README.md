# BASKITO - Grocery E-Commerce Platform

## 📝 Description

**BASKITO** is a comprehensive full-stack grocery e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform provides a seamless shopping experience for customers and a robust management system for sellers, featuring real-time inventory management, secure payment processing with Stripe webhooks, and an intuitive user interface.

The application offers a complete online grocery shopping solution with features like product browsing, cart management, secure checkout with multiple payment options, order tracking, and a dedicated seller dashboard for inventory and order management.

### 🔨 Key Features

**Customer Features:**
* • User registration and authentication with JWT tokens
* • Browse products by categories with search functionality  
* • Add items to cart with quantity management
* • Secure checkout with COD and Stripe payment integration
* • Address management for multiple delivery locations
* • Order history and tracking with real-time status updates
* • Responsive design for mobile and desktop

**Seller Features:**
* • Dedicated seller dashboard with authentication
* • Product management (add, edit, delete products)
* • Order management with status updates
* • Real-time inventory tracking
* • Image upload with Cloudinary integration

**Technical Features:**
* • JWT-based authentication with HTTP-only cookies
* • **Stripe webhook integration** for automatic payment status updates
* • Real-time cart synchronization and automatic cart clearing after successful payment
* • Cloudinary integration for image storage
* • MongoDB for scalable data storage
* • RESTful API architecture with secure payment processing

## 🕸️ Tech Stack

**Frontend:**
* 1. **React 19** - Frontend UI Library
* 2. **Vite** - Build tool and development server
* 3. **Tailwind CSS** - Utility-first CSS framework
* 4. **React Router DOM** - Client-side routing
* 5. **Axios** - HTTP client for API requests
* 6. **React Hot Toast** - Toast notifications
* 7. **React Context API** - State management

**Backend:**
* 8. **Node.js** - JavaScript runtime
* 9. **Express.js** - Backend web framework
* 10. **MongoDB** - NoSQL database
* 11. **Mongoose** - MongoDB object modeling
* 12. **JWT** - JSON Web Tokens for authentication
* 13. **bcryptjs** - Password hashing
* 14. **Stripe** - Payment processing with webhooks
* 15. **Cloudinary** - Cloud image storage
* 16. **Multer** - File upload middleware
* 17. **CORS** - Cross-origin resource sharing

## 🚀 Live Demo

- **Frontend:** [https://grocery-app-flax-five.vercel.app/](https://grocery-app-flax-five.vercel.app/)
- **Backend API:** [https://baskito-app.onrender.com/](https://baskito-app.onrender.com/)

## 📁 Project Structure

```
Grocery_app/
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── token.js
│   ├── controllers/
│   │   ├── address.controller.js
│   │   ├── cart.controller.js
│   │   ├── order.controller.js      # Stripe webhook implementation
│   │   ├── product.controller.js
│   │   ├── seller.controller.js
│   │   └── user.controller.js
│   ├── middlewares/
│   │   ├── multer.js
│   │   ├── seller.auth.js
│   │   └── user.auth.js
│   ├── models/
│   │   ├── address.model.js
│   │   ├── order.model.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── address.route.js
│   │   ├── cart.route.js
│   │   ├── order.route.js
│   │   ├── product.route.js
│   │   ├── seller.route.js
│   │   └── user.route.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- Stripe account for payment processing
- Cloudinary account for image storage

### Backend Setup

1. **Clone the repository:**
```bash
git clone https://github.com/soumajitverse/Grocery_app.git
cd Grocery_app/backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Variables:**
Create a `.env` file in the backend directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NODE_ENV=production
```

4. **Start the development server:**
```bash
npm run dev
```

The backend server will start on `http://localhost:4000`

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd ../frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Environment Variables:**
Create a `.env` file in the frontend directory:
```env
VITE_CURRENCY=₹
VITE_BACKEND_URL=http://localhost:4000
VITE_FRONTEND_URL=http://localhost:5173
```

4. **Start the development server:**
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📋 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/is-auth` - Check authentication
- `POST /api/user/logout` - User logout

### Products
- `GET /api/product/all` - Get all products
- `GET /api/product/category/:category` - Get products by category
- `GET /api/product/:id` - Get single product
- `POST /api/product/add` - Add new product (seller only)

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item
- `POST /api/cart/remove` - Remove item from cart
- `GET /api/cart/user` - Get user cart

### Orders
- `POST /api/order/cod` - Place COD order
- `POST /api/order/stripe` - Place Stripe order
- `GET /api/order/user` - Get user orders
- `GET /api/order/seller` - Get all orders (seller)
- `POST /api/order/change-status` - Update order status

### Payment Webhooks
- `POST /stripe` - Stripe webhook for payment status updates

### Address
- `POST /api/address/add` - Add new address
- `GET /api/address/user` - Get user addresses

## 💳 Advanced Payment Integration

The application features a sophisticated payment system with **Stripe webhook integration**:

### Payment Methods:
1. **Cash on Delivery (COD)** - Direct order placement without online payment
2. **Stripe Integration** - Secure online payment processing with real-time status updates

### Stripe Webhook Implementation:
* **🔐 Webhook Security** - Signature verification with `STRIPE_WEBHOOK_SECRET`
* **✅ Payment Success Handler** - Listens for `payment_intent.succeeded` events
  - Automatically updates order status (`isPaid: true`) in database
  - Clears user cart after successful payment
  - Extracts order and user data from session metadata
* **❌ Payment Failure Handler** - Listens for `payment_intent.payment_failed` events  
  - Automatically removes failed orders from database
  - Maintains data integrity
* **📡 Real-time Updates** - Immediate database synchronization without user intervention

### Payment Flow:
1. User initiates Stripe checkout
2. Order created with `isPaid: false` status
3. Stripe processes payment and sends webhook
4. Backend automatically updates payment status
5. User cart cleared and order confirmed
6. Real-time status reflection in user interface

## 🔐 Authentication & Security

- **JWT Authentication** with HTTP-only cookies
- **Password hashing** using bcryptjs with salt rounds
- **CORS configuration** for secure cross-origin requests
- **Secure cookie** settings for production environment
- **Input validation** on both client and server side
- **Stripe webhook signature verification** for payment security

## 📱 Features Showcase

### Customer Dashboard
- Product browsing with category filters
- Smart search functionality
- Shopping cart with real-time updates
- Secure checkout process with automatic payment confirmation
- Order history and tracking
- Address management

### Seller Dashboard
- Product inventory management
- Order processing and status updates
- Analytics and insights
- Image upload for products

## 🚀 Deployment

The application is deployed using:
- **Frontend:** Vercel - [https://grocery-app-flax-five.vercel.app/](https://grocery-app-flax-five.vercel.app/)
- **Backend:** Render - [https://baskito-app.onrender.com/](https://baskito-app.onrender.com/)
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary
- **Payment Processing:** Stripe with webhook endpoints

### Deployment Commands

**For Render (Backend):**
- Build Command: `npm install`
- Start Command: `npm start` or `node server.js`
- **Important:** Configure Stripe webhook URL: `https://baskito-app.onrender.com/stripe`

**For Vercel (Frontend):**
- Build Command: `npm run build`
- Output Directory: `dist`

### Stripe Webhook Configuration:
1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://baskito-app.onrender.com/stripe`
3. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET` environment variable

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Soumajit Majumder**
- GitHub: [@soumajitverse](https://github.com/soumajitverse)
- Project Link: [https://github.com/soumajitverse/Grocery_app](https://github.com/soumajitverse/Grocery_app)

## 🙏 Acknowledgments

- React and Vite community for excellent tooling
- Stripe for secure payment processing and webhook infrastructure
- Cloudinary for image storage solutions
- MongoDB for reliable database services
- Tailwind CSS for utility-first styling
- Render for reliable backend hosting

---

**Built with ❤️ by Soumajit Majumder**