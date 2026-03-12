# Tutur Frontend

> Frontend web application for the **Tutur Application** — a Natural Language Processing platform.

---

## Table of Contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Environment Setup](#environment-setup)
* [Running the Development Server](#running-the-development-server)
* [Building for Production](#building-for-production)

---

## Prerequisites

Ensure **Node.js** is installed on your system before proceeding.

**Recommended Version:** Node.js `>= 18`

📥 Download Node.js from the official website:
https://nodejs.org/

After installing Node.js, verify the installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/MiDev-Tutur/tutur-frontend.git
```

Navigate into the project directory:

```bash
cd tutur-frontend
```

Install all required project dependencies by running the following command in the **project root directory**:

```bash
npm install
```

---

## Environment Setup

The frontend application requires a backend API server to function properly.

1. Create a new `.env` file in the project root directory.

2. Add the backend API URL configuration:

```env
VITE_API_URL=http://localhost:8000
```

3. Ensure that the **Tutur Backend Server** is running before starting the frontend application.

---

## Running the Development Server

Once all dependencies are installed and the environment is configured, start the development server by running the following command in the **project root directory**:

```bash
npm run dev
```

The development server will start and the application will be available at:

```
http://localhost:5173
```

Vite will automatically reload the application whenever code changes are detected.

---

## Building for Production

To create an optimized production build, run the following command:

```bash
npm run build
```

The compiled files will be generated in the following directory:

```
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
tutur-frontend/
├── public/                     # Static assets
├── src/                        # Application source code
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Application pages
│   ├── assets/                 # Images and icons
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

*For any issues or questions, please open an issue in this repository.*
