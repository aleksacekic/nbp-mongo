# Expense Tracker

A full-stack personal finance web app for tracking income and expenses, viewing your
current balance, and breaking spending down by category with charts.

**Live demo:** https://expense-tracker-aleksacekic.vercel.app/ (you can login with aleksacekic:aleksacekic)

## Features

- User registration and login (passwords hashed with SHA-256)
- Add income and expense entries with a name, category, and amount
- Running balance, total income, and total expenses
- Category breakdown shown as bar charts (Chart.js)
- Filter activity history by date and category
- Monthly reset of income/expense totals
- Data persisted in MongoDB Atlas

## Tech Stack

| Layer    | Technology                        |
| -------- | --------------------------------- |
| Frontend | Next.js 14 (App Router), React 18 |
| Charts   | Chart.js, react-chartjs-2         |
| Backend  | Next.js Server Actions            |
| Database | MongoDB Atlas (`mongodb` driver)  |
| Hosting  | Vercel                            |

## Screenshots

### Login

![Login screen](docs/screenshots/login.png)

### Dashboard

![Dashboard with balance and history](docs/screenshots/dashboard.png)

### Category charts

![Spending by category](docs/screenshots/charts.png)

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster and connection string

### Setup

```bash
git clone https://github.com/aleksacekic/nbp-mongo.git
cd nbp-mongo/expensetracker
npm install
```

Create `expensetracker/.env.local` with your connection string:

```bash
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTER.xxxxx.mongodb.net/expensetracker?retryWrites=true&w=majority
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Project Structure

```
expensetracker/
  src/app/
    login/          Login page
    register/       Registration page
    homepage/       Dashboard: balance, history list, charts, add buttons
    mongoAPI.js     Server actions (DB reads/writes)
    mongoDB.js      MongoDB client connection
    sha256.js       Password hashing helper
```

## License

MIT
