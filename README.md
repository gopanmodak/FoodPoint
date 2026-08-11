# 🍽️ Restaurant Management & Ordering App

A modern and responsive restaurant web application built with **React.js, Node.js, Express.js, and MongoDB**. This project provides a smooth user experience for browsing food items, managing a cart, placing orders, and managing restaurant data.

The application is designed with a clean and responsive UI using **Tailwind CSS and DaisyUI**.

---

## 🚀 Live Demo

🔗 **Live Website:** [Add your live website URL here]

🔗 **Server/API:** [Add your server URL here]

---

## 📸 Features

### 👤 User Features

* 🔐 User authentication
* 🍔 Browse restaurant food items
* 🔎 Search food items
* 🗂️ Filter food by category
* 📄 View food details
* 🛒 Add food to cart
* ➕ Increase/decrease food quantity
* 🗑️ Remove items from cart
* 💰 Calculate subtotal and total price
* 📦 Place food orders
* 📱 Fully responsive design

### 🛠️ Admin / Management Features

* ➕ Add new food items
* ✏️ Update food information
* 🗑️ Delete food items
* 📋 Manage food collection
* 📦 Manage customer orders
* 👥 Manage users
* 📊 View restaurant data

### 🎨 UI/UX

* Modern restaurant-style interface
* Responsive design for mobile, tablet, and desktop
* Tailwind CSS based styling
* DaisyUI components
* React Icons
* SweetAlert2 notifications
* Smooth and user-friendly navigation

---

## 🧑‍💻 Technologies Used

### Frontend

| Technology   | Purpose                |
| ------------ | ---------------------- |
| React.js     | Frontend UI            |
| React Router | Client-side routing    |
| Tailwind CSS | Styling                |
| DaisyUI      | UI Components          |
| React Icons  | Icons                  |
| SweetAlert2  | Alerts & notifications |

### Backend

| Technology     | Purpose                |
| -------------- | ---------------------- |
| Node.js        | Server runtime         |
| Express.js     | REST API               |
| MongoDB        | Database               |
| MongoDB Driver | Database communication |

---

## 📁 Project Structure

```text
restaurant-app/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── layouts/
│       ├── routes/
│       ├── context/
│       ├── hooks/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── .env
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/restaurant-app.git
```

### 2. Go to the Project Directory

```bash
cd restaurant-app
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

If your project uses authentication or other services, add the required environment variables here as well.

**Never commit your `.env` file to GitHub.**

---

## ▶️ Run the Application

### Start Backend Server

```bash
cd server
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

Example API structure:

### Food

```http
GET /foods
GET /foods/:id
POST /foods
PUT /foods/:id
DELETE /foods/:id
```

### Cart

```http
GET /cart
POST /cart
PUT /cart/:id
DELETE /cart/:id
```

### Orders

```http
GET /orders
GET /orders/:id
POST /orders
PUT /orders/:id
DELETE /orders/:id
```

> API endpoints may vary depending on the final implementation of the project.

---

## 🗄️ Database

This project uses **MongoDB** as the database.

Example food document:

```json
{
  "name": "Chicken Burger",
  "category": "Burger",
  "price": 250,
  "image": "food-image-url",
  "description": "Delicious chicken burger",
  "available": true
}
```

Example order document:

```json
{
  "customerName": "John Doe",
  "phone": "01XXXXXXXXX",
  "address": "Dhaka, Bangladesh",
  "items": [],
  "totalPrice": 750,
  "status": "pending"
}
```

---

## 📱 Responsive Design

The application is optimized for:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

---

## 🔮 Future Improvements

Some planned features:

* 💳 Online payment integration
* 🚚 Order delivery tracking
* 📍 Location-based delivery
* 📊 Advanced admin dashboard
* 📈 Sales analytics
* ⭐ Food reviews & ratings
* ❤️ Favorite foods
* 🔔 Order status notifications
* 🎟️ Coupon & discount system
* 🧾 Invoice generation
* 📧 Email order confirmation

---

## 🛡️ Security

* Environment variables for sensitive credentials
* MongoDB authentication
* API validation
* Protected admin routes
* Secure authentication handling
* `.env` excluded from Git

---

## 🤝 Contributing

Contributions are welcome!

If you want to contribute:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Make your changes
4. Commit your changes

```bash
git commit -m "Add new feature"
```

5. Push to your branch

```bash
git push origin feature/new-feature
```

6. Open a Pull Request

---

## 📄 License

This project is created for educational and development purposes.

---

## 👨‍💻 Developer

**Gopan Kumar Modak**

💻 Full Stack Web Developer

### Tech Stack

`React.js` • `Node.js` • `Express.js` • `MongoDB` • `Tailwind CSS` • `JavaScript`

---

⭐ If you like this project, consider giving it a **star** on GitHub!
