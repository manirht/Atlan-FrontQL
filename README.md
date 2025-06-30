# SQL Query Runner 🚀🌐

_A sleek, web-based SQL editor with powerful mock execution capabilities, meticulously crafted for seamless data exploration and dynamic learning._

---

## 🔗 Quick Access

[![Live Demo](https://img.shields.io/badge/Launch%20App-Live%20Demo-5D6D7E?style=for-the-badge&logo=vercel&logoColor=white)](https://atlan-frontend-sql.netlify.app/)
[![GitHub Repository](https://img.shields.io/badge/Source%20Code-GitHub%20Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/manirht/Atlan-FrontQL)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 📸 Glimpses of the Application

Dive into the user experience with these snapshots of the SQL Query Runner in action:

| Light Mode - Editor | Light Mode - Results | Dark Mode - Editor | Dark Mode - Results |
| :-----------------: | :------------------: | :----------------: | :-----------------: |
| ![App Screenshot](./screenshots/demo-light.png) | ![Screenshot 2025-04-01 002109](https://github.com/user-attachments/assets/d2c30b4d-cd47-47d0-b0a0-9183c9a17ca5) | ![Screenshot 2025-04-01 002121](https://github.com/user-attachments/assets/a7d750df-9b9c-4473-ad32-4bf55c7ead88) | ![Screenshot 2025-04-01 002233](https://github.com/user-attachments/assets/2fc633a8-f597-4313-8f65-57809cb53180) |

| Query History & Search | CSV Export Confirmation | Performance Profile |
| :--------------------: | :-----------------------: | :-----------------: |
| ![Screenshot 2025-04-01 003226](https://github.com/user-attachments/assets/69e1d052-0037-4986-a84e-95301f617f42) | ![Screenshot 2025-04-01 003239](https://github.com/user-attachments/assets/4e1a3e96-68db-496d-8c4f-114ccd0a6436) | ![Screenshot 2025-04-01 003328](https://github.com/user-attachments/assets/ce51e3e4-8165-4e55-8df0-d160b3f59efe) |

---

## ✨ Core Features

Experience a seamless and powerful SQL environment right in your browser:

* ✍️ **Intuitive SQL Editor:** Comes equipped with intelligent syntax highlighting and autocomplete for a smooth coding experience.
* 📚 **Predefined Queries Library:** Jumpstart your data exploration with a collection of ready-to-use SQL queries.
* ⚡ **Mock Query Execution:** Get instant feedback with mock execution, perfect for testing queries without a live database connection.
* ⏳ **Comprehensive Query History:** Easily revisit past queries with robust sorting and filtering capabilities.
* 📥 **CSV Export Functionality:** Download your query results directly to CSV format for further analysis.
* 🌗 **Dynamic Dark/Light Mode:** Toggle between sleek dark and vibrant light themes for personalized comfort.
* 🚀 **Performance Optimized:** Engineered for efficiency, ensuring smooth operation even with large datasets exceeding 10,000 rows.

---

## 🛠️ Tech Stack & Architecture

Built with a modern and robust set of technologies for optimal performance and maintainability:

* **Frontend:**
    * React.js [![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)](https://react.dev/)
    * Vite [![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat)](https://vitejs.dev/)
* **State Management:** Context API
* **Editor Core:** ACE Editor (chosen for its robust features and flexibility as a CodeMirror alternative)
* **Styling:** CSS Modules (for scoped and modular styling)
* **Icons:** Lucide React (for beautiful, customizable icons)
* **Build Tool:** npm + Vite
* **Hosting:** Vercel [![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=flat)](https://vercel.com/)
---

## 🚀 Getting Started

Follow these simple steps to set up and run the SQL Query Runner locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:

* `Node.js`: v16+ (LTS recommended)
* `npm`: v8+ (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_USERNAME/sql-query-runner.git](https://github.com/YOUR_USERNAME/sql-query-runner.git)

# 2. Navigate into the project directory
cd sql-query-runner

# 3. Install project dependencies
npm install

# 4. Start the development server
npm run dev
