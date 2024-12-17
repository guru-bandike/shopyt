<h1 align="center" style="font-weight: bolder; color: #059d06">Shopyt</h1>

<p align="center">
  <a href="https://shopyt.vercel.app/" target="_blank">Visit Live App</a>
</p>

## Project Description

A **React-based E-commerce Application** that allows users to browse, add products to the cart, and manage orders. It includes features like authentication, dynamic cart management, and a responsive design.

---

## Features

- **User Authentication**: Login and register users via Firebase.
- **Product Listing**: Browse products available for purchase.
- **Add to Cart**: Users can add products to their shopping cart.
- **Cart Management**: View and update cart items and quantities.
- **Responsive Design**: Optimized for desktop and mobile views.
- **Error Pages**: Custom 404 page for invalid routes.

---

## Tech Stack

This project is built using:

### Frontend

- **React.js**: Framework for building interactive UIs.
- **React Router**: For managing routing in the app.
- **Firebase**: For authentication and database management.
- **React Bootstrap**: For responsive UI components.
- **CSS3**: For custom styling.

### Development Tools

- **Node.js & npm**: Dependency and package management.
- **VS Code**: Source code editor.

---

## Folder Structure

```
shopyt/
├── node_modules/
├── public/
│   ├── favicon.ico
├── src/
│   ├── components/
│   │   ├── card/
│   │   ├── cartItem/
│   │   ├── common/
│   │   ├── firebaseUI/
│   │   ├── layout/
│   ├── context/
│   │   ├── auth.context.js
│   │   ├── cart.context.js
│   │   ├── product.context.js
│   ├── pages/
│   │   ├── auth/
|   │   │   ├── auth/
│   │   |   ├── cart/
│   │   |   └── home/
│   │   └── misc/
|   |         └── page404/
│   ├── App.css
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js**: Download it from [Node.js official website](https://nodejs.org/).
- **npm**: Comes with Node.js.

### Clone the Repository

```bash
git clone https://github.com/guru-bandike/shopyt.git
cd shopyt
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

- Create a .env file in the root of the project by copying the provided .env.example file:

```bash
cp .env.example .env
```

- Open the **.env** file and replace the placeholder values with your actual environment settings.

### Start the Application

```bash
npm start
```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## License

This project is licensed under the MIT License.

---

<h3 align="center" style="font-weight: bolder; color: #059d06">Happy Coding!</h3>
