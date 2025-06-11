
# 🌱 Greencart

**Greencart** is an innovative full-stack e-commerce platform that connects local producers—such as farmers, bakers, and poultry farmers—directly with consumers. Built from scratch, this project promotes fair pricing, fresher goods, and stronger local economies by eliminating the need for middlemen.It also featured with Admin pannel means a Seller Dashboard who can manage products and also integrate with cash on delivery and online payments

## 🚀 Live Demo

https://greencart-theta-wheat.vercel.app/

---

## ✨ Features

* 🛒 **Product Listing:** Display products by category with images, pricing, availability, and offers.
* 📦 **Cart System:** Add/remove items, change quantity, and view totals dynamically.
* 💳 **Payment Integration:** Supports both Cash on Delivery (COD) and Stripe-based online payments.
* 🧾 **Order Management:** Tracks placed orders; integrates with Stripe Webhooks for real-time payment status.
* 🔒 **Authentication & Authorization:** Secure login system using JWT and user-based order access.
* 🧑‍🌾 **Seller/Admin View:** Access all paid/COD orders with details for order fulfillment.
* 📬 **Newsletter Subscription:** Users can subscribe for updates and promotions.
* 📱 **Mobile Responsive UI:** Optimized for mobile and tablet views using Tailwind CSS.
* 🎨 **Modern Design:** Clean UI built with reusable React components.

---

## 🛠 Tech Stack

### Frontend

* **React.js**
* **React Router**
* **Context API** (for global state)
* **Tailwind CSS**
* **Axios**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Stripe API**
* **JWT for Auth**
* **Cookie Parser**

---

## 📁 Project Structure

```
greencart/
├── client/              # React frontend
│   ├── components/      # Reusable UI components
│   ├── pages/           # Routes like Home, Product Details, Orders
│   ├── context/         # App-wide state using Context API
│   └── App.js
├── server/              # Express backend
│   ├── models/          # Mongoose schemas (User, Product, Order)
│   ├── routes/          # API endpoints
│   ├── controllers/     # Business logic for routes
│   ├── middleware/      # Auth middlewares
│   └── server.js        # Entry point
```

---

## 🧪 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/ManozBachhav/greencart.git
cd greencart
```

2. **Setup Backend**

```bash
cd server
npm install
```

* Add a `.env` file with:

  ```
  MONGODB_URI=your_mongo_uri
  JWT_SECRET=your_jwt_secret
  STRIPE_SECRET_KEY=your_stripe_secret
  STRIPE_WEBHOOK_SECRET=your_webhook_secret
  ```

3. **Setup Frontend**

```bash
cd ../client
npm install
npm start
```

---

## ⚙️ Future Improvements

* UPI integration for online payments
* Product stock notifications
* Delivery tracking system
* Farmer onboarding panel
* Multilingual support


---


