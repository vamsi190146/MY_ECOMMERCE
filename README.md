# My E-Commerce Application

This project is a full-fledged e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a range of features from user authentication to product management, shopping cart, and order processing..

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Screenshots](#screenshots)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

This application allows users to browse products, add them to their cart, and complete the purchase. Admin users can manage products, categories, and orders through a dedicated admin dashboard.

## Features

- User authentication and authorization (Register, Login, Logout)
- Product management (CRUD operations for products)
- Category management (CRUD operations for categories)
- Shopping cart functionality
- Order management
- Admin dashboard
- Responsive design

## Technologies Used

- **Frontend:** React.js, Redux, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens), BCrypt
- **Payment Gateway:** Stripe

## Screenshots

### 1. Home Page

![Home Page](https://github.com/vamsi190146/MY_ECOMMERCE/blob/master/uploads/2.png)

The home page showcases featured products and categories. It provides easy navigation for users to explore different products.

### 2. Product Page

![Product Page](images/productpage.png)

The product page displays detailed information about the selected product, including images, description, price, and available quantity.

### 3. Shopping Cart

![Shopping Cart](https://github.com/vamsi190146/MY_ECOMMERCE/blob/master/uploads/3.png)

The shopping cart allows users to review the products they've selected, adjust quantities, and proceed to checkout.

### 4. Checkout Page

![Checkout Page](https://github.com/vamsi190146/MY_ECOMMERCE/blob/master/uploads/4.png)

The checkout page provides a summary of the order, including shipping details and payment options.


### 4. Payment

![Checkout Page](https://github.com/vamsi190146/MY_ECOMMERCE/blob/master/uploads/5.png)

The Payment page provides a summary of the payment options, including shipping details and payment options.


### 5. Admin Dashboard

![Admin Dashboard](https://github.com/vamsi190146/MY_ECOMMERCE/blob/master/uploads/6.png)

The admin dashboard allows administrators to manage products, categories, and orders with an easy-to-use interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vamsi190146/MY_ECOMMERCE.git
   cd MY_ECOMMERCE
   
2.Install dependencies for both the frontend and backend:

```bash
cd frontend
npm install

cd ../backend
npm install

3.Set up environment variables:

Create a .env file in the backend directory and add the following:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
4.Start the application:
cd backend
npm run dev
Open another terminal for the frontend:cd frontend
npm start


## Usage
Users can register, log in, browse products, add them to their cart, and place orders.
Admins can log in to the admin dashboard to manage products, categories, and orders.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
