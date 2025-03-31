# SQL Query Runner 🚀

_A web-based SQL editor with mock execution capabilities, designed for data exploration and learning_

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge&logo=vercel)]


![App Screenshot](./screenshots/demo-light.png)  
*(Add screenshots in /screenshots folder - light/dark modes)*

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
// Context maintains:
{
  currentQuery: "SELECT * FROM customers",
  outputData: [/*...*/],
  savedQueries: [/*...*/],
  history: [/*...*/]
}
