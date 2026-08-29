# IDR – Rare Gem Embedded Watches

IDR is a premium luxury watch brand focused on creating unique timepieces featuring carefully selected rare and precious gemstones.

This project is the official web platform for IDR, designed to showcase the brand's collections and provide customers with a premium online shopping experience.

---

## ✨ Features

- 🕰️ Premium watch collection showcase
- 💎 Rare gem-embedded watch products
- 🛒 Shopping cart functionality
- 👤 Customer registration and login
- 🔐 Secure authentication (JWT & bcrypt)
- 📦 Order management
- 💳 Online payment integration
- 🔎 Product search and filtering
- ❤️ Wishlist functionality
- 📱 Responsive design for desktop, tablet, and mobile
- 🛠️ Admin dashboard for managing products and orders
- 📊 Product and order management
- 🖼️ High-quality product images and galleries

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** CSS3 / Modern Vanilla CSS
- **HTTP Client:** Axios / Fetch API
- **State Management:** React Context API & Hooks

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB & Mongoose
- **Authentication:** JSON Web Tokens (JWT) & bcrypt

### Development Tools
- Git & GitHub
- VS Code

---

## 📁 Project Structure

```text
IDR/
│
├── frontend/                 # React frontend (Vite)
│   ├── public/               # Static public assets
│   └── src/
│       ├── assets/           # Images, icons, and media
│       ├── components/       # Reusable UI components
│       │   ├── common/       # Generic components (Buttons, Inputs, Modals)
│       │   └── layout/       # Layout components (Navbar, Footer, Sidebar)
│       ├── context/          # Global state contexts (Auth, Cart)
│       ├── hooks/            # Custom React hooks (useAuth, useCart)
│       ├── pages/            # Page-level route views (Home, Products, etc.)
│       ├── routes/           # Routing configuration
│       ├── services/         # API service integration layer
│       ├── utils/            # Helper functions and constants
│       ├── App.css           # App-level styling
│       ├── App.jsx           # Root application component
│       ├── index.css         # Global styles & design tokens
│       └── main.jsx          # Vite React entry point
│
├── backend/                  # Node.js + Express backend
│   ├── config/               # Database and server configuration
│   ├── controllers/          # Request handlers & controller logic
│   ├── middleware/           # Auth and validation middleware
│   ├── models/               # Mongoose schemas & data models
│   ├── routes/               # Express API endpoints
│   ├── services/             # Business logic & external services
│   └── server.js             # Express server entry point
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🚀 Getting Started & Setup Guide

Follow these instructions to set up and run the project locally on your machine.

### 📋 Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) (v9.x or later) or `yarn` / `pnpm`
- [MongoDB](https://www.mongodb.com/) (Local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection URI)
- [Git](https://git-scm.com/)

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/Isuru128/IDR.git
cd IDR
```

---

### 💻 2. Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `frontend/` directory (or copy from `.env.example` if available):
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend application will start at `http://localhost:5173`.

---

### ⚙️ 3. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd ../backend
   # Or from the root directory: cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/idr_luxury_db
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=30d
   NODE_ENV=development
   ```

4. **Start the backend server:**
   ```bash
   # Development mode with auto-reload (nodemon)
   npm run dev

   # Or standard start
   npm start
   ```
   The backend API will run at `http://localhost:5000`.

---

## 🧪 Available Scripts

### Frontend (`cd frontend`)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server (`http://localhost:5173`) |
| `npm run build` | Compiles and builds production-ready bundle to `dist/` |
| `npm run preview` | Previews the production build locally |

### Backend (`cd backend`)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs backend server with nodemon for live-reload |
| `npm start` | Runs backend server in production mode |

---

## 🔒 License

This project is licensed under the [MIT License](LICENSE).


Hero overlay example:

IDR
Where Time Meets Rarity

Discover a masterpiece where rare gemstones meet precision horology.