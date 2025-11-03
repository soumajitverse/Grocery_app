# BASKITO - Grocery E-Commerce Platform

## 📝 Description

**BASKITO** is a comprehensive full-stack grocery e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform provides a seamless shopping experience for customers and a robust management system for sellers, featuring real-time inventory management, secure payment processing with Stripe webhooks, integrated email notifications using SendGrid, and an intuitive user interface.

The application offers a complete online grocery shopping solution with features like product browsing, cart management, secure checkout with multiple payment options, order tracking, email verification, password reset functionality, and a dedicated seller dashboard for inventory and order management.

### 🔨 Key Features

**Customer Features:**

-  User registration and authentication with JWT tokens
-  Email verification with OTP on first sign up
-  Browse products by categories with search functionality
-  Add items to cart with quantity management
-  Secure checkout with COD and Stripe payment integration
-  Address management for multiple delivery locations
-  Order history and tracking with real-time status updates
-  Password reset functionality with OTP verification sent to registered email
-  Email notifications for order placement and password reset
-  Responsive design for mobile and desktop

**Seller Features:**

-  Dedicated seller dashboard with authentication
-  Product management
-  Order management with status updates
-  Real-time inventory tracking
-  Image upload with Cloudinary integration

**Technical Features:**

-  JWT-based authentication with HTTP-only cookies
-  **Stripe webhook integration** for automatic payment status updates
-  **SendGrid email service** for transactional emails
-  **OTP-based email verification** on user signup
-  **OTP-based password reset** for forgotten passwords
-  Real-time cart synchronization and automatic cart clearing after successful payment
-  Cloudinary integration for image storage
-  MongoDB for scalable data storage
-  RESTful API architecture with secure payment processing

## 🕸️ Tech Stack

**Frontend:**

- 1. **React 19** - Frontend UI Library
- 2. **Vite** - Build tool and development server
- 3. **Tailwind CSS** - Utility-first CSS framework
- 4. **React Router DOM** - Client-side routing
- 5. **Axios** - HTTP client for API requests
- 6. **React Hot Toast** - Toast notifications
- 7. **React Context API** - State management

**Backend:**

- 8. **Node.js** - JavaScript runtime
- 9. **Express.js** - Backend web framework
- 10. **MongoDB** - NoSQL database
- 11. **Mongoose** - MongoDB object modeling
- 12. **JWT** - JSON Web Tokens for authentication
- 13. **bcryptjs** - Password hashing
- 14. **Stripe** - Payment processing with webhooks
- 15. **SendGrid** - Email service for transactional emails
- 16. **Cloudinary** - Cloud image storage
- 17. **Multer** - File upload middleware
- 18. **CORS** - Cross-origin resource sharing

## 🚀 Live Demo

- **Frontend:** https://grocery-app-flax-five.vercel.app/
- **Backend API:** https://baskito-app.onrender.com/

## 📁 Project Structure

```
Grocery_app/
├── backend/
│ ├── config/
│ │ ├── cloudinary.js
│ │ ├── db.js
│ │ ├── token.js
│ │ └── sendgrid.js
│ ├── controllers/
│ │ ├── address.controller.js
│ │ ├── cart.controller.js
│ │ ├── order.controller.js # Stripe webhook implementation
│ │ ├── product.controller.js
│ │ ├── seller.controller.js
│ │ └── user.controller.js # Email verification & password reset
│ ├── middlewares/
│ │ ├── multer.js
│ │ ├── seller.auth.js
│ │ └── user.auth.js
│ ├── models/
│ │ ├── address.model.js
│ │ ├── order.model.js
│ │ ├── product.model.js
│ │ └── user.model.js
│ ├── routes/
│ │ ├── address.route.js
│ │ ├── cart.route.js
│ │ ├── order.route.js
│ │ ├── product.route.js
│ │ ├── seller.route.js
│ │ └── user.route.js
│ ├── utils/
│ │ └── sendEmail.js # Email sending utility
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── assets/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
└── README.md

```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB installation
- Stripe account for payment processing
- Cloudinary account for image storage
- SendGrid account for email service

### Backend Setup

1. **Clone the repository:**

```
git clone https://github.com/soumajitverse/Grocery_app.git
cd Grocery_app/backend
```

2. **Install dependencies:**

```
npm install
```

3. **Install SendGrid package:**

```
npm install @sendgrid/mail
```

4. **Environment Variables:** Create a `.env` file in the backend directory:

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com
NODE_ENV=production
OTP_EXPIRATION_TIME=10
```

5. **Start the development server:**

```
npm run dev
```

The backend server will start on `http://localhost:4000`

### Frontend Setup

1. **Navigate to frontend directory:**

```
cd ../frontend
```

2. **Install dependencies:**

```
npm install
```

3. **Environment Variables:** Create a `.env` file in the frontend directory:

```
VITE_CURRENCY=₹
VITE_BACKEND_URL=http://localhost:4000
VITE_FRONTEND_URL=http://localhost:5173
```

4. **Start the development server:**

```
npm run dev
```

The frontend application will start on `http://localhost:5173`

## 📋 API Endpoints

### Authentication

- ```
  POST /api/user/register
  ```
  - User registration (sends OTP verification email)
  - Request Body:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string",
      "mobile": "string"
    }
    ```

- ```
  POST /api/user/verify-email
  ```
  - Verify email with OTP (called after signup)
  - Request Body:
    ```json
    {
      "email": "string",
      "otp": "string"
    }
    ```

- ```
  POST /api/user/login
  ```
  - User login
  - Request Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- ```
  GET /api/user/is-auth
  ```
  - Check authentication status

- ```
  POST /api/user/logout
  ```
  - User logout

- ```
  POST /api/user/forgot-password
  ```
  - Send OTP to registered email for password reset (user must be logged out)
  - Request Body:
    ```json
    {
      "email": "string"
    }
    ```

- ```
  POST /api/user/verify-reset-otp
  ```
  - Verify OTP sent for password reset
  - Request Body:
    ```json
    {
      "email": "string",
      "otp": "string"
    }
    ```

- ```
  POST /api/user/reset-password
  ```
  - Reset password after OTP verification
  - Request Body:
    ```json
    {
      "email": "string",
      "newPassword": "string"
    }
    ```

### Products

- ```
  GET /api/product/all
  ```
  - Get all products

- ```
  GET /api/product/category/:category
  ```
  - Get products by category

- ```
  GET /api/product/:id
  ```
  - Get single product details

- ```
  POST /api/product/add
  ```
  - Add new product (seller only)
  - Request Body (multipart/form-data):
    ```
    name, price, quantity, category, description, image
    ```

### Cart

- ```
  POST /api/cart/add
  ```
  - Add item to cart
  - Request Body:
    ```json
    {
      "productId": "string",
      "quantity": "number"
    }
    ```

- ```
  POST /api/cart/update
  ```
  - Update cart item quantity
  - Request Body:
    ```json
    {
      "productId": "string",
      "quantity": "number"
    }
    ```

- ```
  POST /api/cart/remove
  ```
  - Remove item from cart
  - Request Body:
    ```json
    {
      "productId": "string"
    }
    ```

- ```
  GET /api/cart/user
  ```
  - Get user cart

### Orders

- ```
  POST /api/order/cod
  ```
  - Place Cash on Delivery order
  - Request Body:
    ```json
    {
      "addressId": "string",
      "items": "array"
    }
    ```

- ```
  POST /api/order/stripe
  ```
  - Place Stripe order and create payment session
  - Request Body:
    ```json
    {
      "addressId": "string",
      "items": "array"
    }
    ```

- ```
  GET /api/order/user
  ```
  - Get user orders with filtering and pagination

- ```
  GET /api/order/seller
  ```
  - Get all orders (seller only)

- ```
  POST /api/order/change-status
  ```
  - Update order status (seller only)
  - Request Body:
    ```json
    {
      "orderId": "string",
      "status": "string"
    }
    ```

### Payment Webhooks

- ```
  POST /stripe
  ```
  - Stripe webhook for payment status updates (triggered by Stripe)
  - Updates order payment status automatically
  - Clears user cart on successful payment

### Address

- ```
  POST /api/address/add
  ```
  - Add new delivery address
  - Request Body:
    ```json
    {
      "fullName": "string",
      "phoneNumber": "string",
      "street": "string",
      "city": "string",
      "state": "string",
      "postalCode": "string",
      "country": "string"
    }
    ```

- ```
  GET /api/address/user
  ```
  - Get all user addresses

## 💳 Advanced Payment Integration

The application features a sophisticated payment system with **Stripe webhook integration**:

### Payment Methods:

1. **Cash on Delivery (COD)** - Direct order placement without online payment
2. **Stripe Integration** - Secure online payment processing with real-time status updates

### Stripe Webhook Implementation:

- **🔐 Webhook Security** - Signature verification with `STRIPE_WEBHOOK_SECRET`
- **✅ Payment Success Handler** - Listens for `payment_intent.succeeded` events
  - Automatically updates order status (`isPaid: true`) in database
  - Clears user cart after successful payment
  - Extracts order and user data from session metadata
  - Sends order confirmation email to customer
- **❌ Payment Failure Handler** - Listens for `payment_intent.payment_failed` events
  - Automatically removes failed orders from database
  - Maintains data integrity
  - Sends payment failure notification email
- **📡 Real-time Updates** - Immediate database synchronization without user intervention

### Payment Flow:

1. User initiates Stripe checkout
2. Order created with `isPaid: false` status
3. Stripe processes payment and sends webhook
4. Backend automatically updates payment status
5. User cart cleared and order confirmed
6. Confirmation email sent to user
7. Real-time status reflection in user interface

## 📧 Email Service Integration with SendGrid

The application integrates **SendGrid** for sending transactional emails across multiple user workflows.

### Email Features:

#### 1. **Signup Verification Email**

- Triggered when user registers a new account
- Contains 6-digit OTP for email verification
- OTP valid for 10 minutes (configurable)
- User must verify email before account activation
- Professional HTML email template with branding

#### 2. **Email Verification Confirmation**

- Sent after user successfully verifies their email with OTP
- Confirms account activation
- Ready to proceed with shopping

#### 3. **Order Confirmation Email**

- Triggered automatically after successful order placement
- Includes order details:
  - Order ID and date
  - Product list with quantities and prices
  - Delivery address
  - Total amount
  - Expected delivery timeframe
- Different templates for COD and Stripe payments

#### 4. **Payment Confirmation Email**

- Sent after Stripe payment is successfully processed via webhook
- Confirms payment received
- Includes transaction details and receipt information
- Reassures customer with order fulfillment timeline

#### 5. **Password Reset Email**

- Sent when user requests password reset (logged out)
- Contains 6-digit OTP for password reset verification
- OTP valid for 10 minutes
- Secure password reset flow prevents unauthorized access
- User must verify OTP before resetting password

### Email Configuration

All emails are sent from the configured `SENDGRID_FROM_EMAIL` with proper branding and professional HTML templates. SendGrid handles email delivery, bounce management, and spam compliance.

## 🔐 Authentication & Security

### User Authentication Flow:

1. **Registration**:
   - User provides name, email and password
   - Password hashed with bcryptjs (salt rounds: 10)
   - User account created but marked as unverified

2. **Email Verification**:
   - User can manually request email verification by clicking "Verify Email" in the navbar after signing up
   - An OTP is generated and sent to the user's email via SendGrid when they request verification
   - User enters the OTP on the verification page
   - OTP validated with time-based expiration
   - Account marked as verified upon successful verification

3. **Login**:
   - User provides email and password
   - Password verified against stored hash using bcryptjs
   - JWT token generated and stored in HTTP-only cookie
   - User redirected to dashboard

4. **Password Reset** (when logged out):
   - User clicks "Forgot Password" link
   - Enters registered email address
   - OTP generated and sent to email via SendGrid
   - User submits OTP for verification
   - Upon verification, user can set new password
   - New password hashed and stored securely

### Security Measures:

- **JWT Authentication** with HTTP-only cookies
- **Password hashing** using bcryptjs with 10 salt rounds
- **OTP-based verification** for email and password reset with time-based expiration
- **CORS configuration** for secure cross-origin requests
- **Secure cookie** settings for production environment
- **Input validation** on both client and server side
- **Stripe webhook signature verification** for payment security
- **SendGrid SMTP authentication** for email service
- **Environment variables** for sensitive configuration

## 📱 Features Showcase

### Customer Dashboard

- Product browsing with category filters
- Smart search functionality
- Shopping cart with real-time updates
- Secure checkout process with automatic payment confirmation
- Email notifications for every transaction
- Order history and tracking with status updates
- Address management for multiple locations
- Password reset functionality with email verification

### Seller Dashboard

- Product inventory management with image uploads
- Order processing and status updates
- Real-time order notifications
- Analytics and insights
- Image upload integration with Cloudinary

### Email Notifications Center

- Automatic transactional email triggers
- Professional HTML email templates
- Real-time email delivery tracking
- Email bounce and complaint handling via SendGrid

## 🚀 Deployment

The application is deployed using:

- **Frontend:** Vercel - https://grocery-app-flax-five.vercel.app/
- **Backend:** Render - https://baskito-app.onrender.com/
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary
- **Email Service:** SendGrid
- **Payment Processing:** Stripe with webhook endpoints

### Deployment Commands

**For Render (Backend):**

- Build Command: `npm install`
- Start Command: `npm start` or `node server.js`
- **Important:** Configure Stripe webhook URL: `https://baskito-app.onrender.com/stripe`

**For Vercel (Frontend):**

- Build Command: `npm run build`
- Output Directory: `dist`

### Environment Variables for Production

**Backend (.env):**

```
PORT=4000
MONGODB_URI=<your_production_mongodb_uri>
JWT_SECRET=<your_secure_jwt_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_key>
CLOUDINARY_API_SECRET=<your_cloudinary_secret>
SENDGRID_API_KEY=<your_sendgrid_api_key>
SENDGRID_FROM_EMAIL=<your_verified_sendgrid_email>
NODE_ENV=production
OTP_EXPIRATION_TIME=10
```

**Frontend (.env):**

```
VITE_CURRENCY=₹
VITE_BACKEND_URL=https://baskito-app.onrender.com
VITE_FRONTEND_URL=https://grocery-app-flax-five.vercel.app
```

### Stripe Webhook Configuration

1. Go to Stripe Dashboard → Webhooks
2. Add endpoint: `https://baskito-app.onrender.com/stripe`
3. Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET` environment variable
5. Keep this secret secure and never commit to version control

### SendGrid Configuration

1. Sign up for SendGrid account
2. Create and verify sender email address
3. Generate API key with Mail Send Full Access permissions
4. Store API key in `SENDGRID_API_KEY` environment variable
5. Store verified sender email in `SENDGRID_FROM_EMAIL` environment variable

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Soumajit Majumder**

- GitHub: @soumajitverse
- Project Link: https://github.com/soumajitverse/Grocery_app

## 🙏 Acknowledgments

- React and Vite community for excellent tooling
- Stripe for secure payment processing and webhook infrastructure
- SendGrid for reliable transactional email service
- Cloudinary for image storage solutions
- MongoDB for reliable database services
- Tailwind CSS for utility-first styling
- Render for reliable backend hosting
- Vercel for seamless frontend deployment

**Built with ❤️ by Soumajit Majumder**
