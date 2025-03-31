# SQL Query Runner 🚀

_A web-based SQL editor with mock execution capabilities, designed for data exploration and learning_

###Link to the App
[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge&logo=vercel)](https://atlan-frontend-sql.netlify.app/)  



![App Screenshot](./screenshots/demo-light.png)
![Screenshot 2025-04-01 002109](https://github.com/user-attachments/assets/d2c30b4d-cd47-47d0-b0a0-9183c9a17ca5)

![Screenshot 2025-04-01 002121](https://github.com/user-attachments/assets/a7d750df-9b9c-4473-ad32-4bf55c7ead88)

![Screenshot 2025-04-01 002233](https://github.com/user-attachments/assets/2fc633a8-f597-4313-8f65-57809cb53180)

![Screenshot 2025-04-01 003226](https://github.com/user-attachments/assets/69e1d052-0037-4986-a84e-95301f617f42)

![Screenshot 2025-04-01 003239](https://github.com/user-attachments/assets/4e1a3e96-68db-496d-8c4f-114ccd0a6436)

![Screenshot 2025-04-01 003328](https://github.com/user-attachments/assets/ce51e3e4-8165-4e55-8df0-d160b3f59efe)


## ✨ Features

- **SQL Editor** with syntax highlighting & autocomplete
- **Predefined Queries** for quick exploration
- **Mock Query Execution** with instant results
- **Query History** with sorting/filtering
- **CSV Export** for result downloads
- **Dark/Light Mode** toggle
- **Performance Optimized** for large datasets (10k+ rows)

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **State Management**: Context API
- **Editor**: ACE Editor (CodeMirror alternative)
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Build**: npm + Vite
- **Hosting**: Vercel/Netlify

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm v8+

### Installation
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/sql-query-runner.git

# Install dependencies
npm install

# Start development server
npm run dev
```
### Project Structure
```bash
src/
├── components/      # Reusable components
├── constants/       # Predefined queries & data
├── context/         # State management
├── styles/          # Global CSS
└── App.jsx          # Root component
```
###🔑 Key Implementation Details
```bash
// Context maintains:
{
  currentQuery: "SELECT * FROM customers",
  outputData: [/*...*/],
  savedQueries: [/*...*/],
  history: [/*...*/]
}
```
