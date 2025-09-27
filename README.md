# ExpenseTracker

A modern, responsive expense tracking application built with React, TypeScript, and Tailwind CSS. Track your expenses, manage budgets, and get AI-powered insights to help you manage your finances better.

## Features

- 📊 **Dashboard**: Overview of spending patterns, budgets, and key metrics
- 💳 **Credit Card Management**: Track multiple credit cards and their utilization
- 📝 **Expense Tracking**: Add, categorize, and manage expenses
- 🏷️ **Smart Categorization**: Automatic expense categorization with custom categories
- 📈 **Analytics & Insights**: AI-powered recommendations and spending insights
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd expense-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx    # Main dashboard with charts and stats
│   ├── ExpenseList.tsx  # Expense history and management
│   ├── Categories.tsx   # Category management
│   ├── CreditCards.tsx  # Credit card tracking
│   └── Insights.tsx     # AI insights and recommendations
├── types/               # TypeScript type definitions
└── App.tsx             # Main application component
```

## Features Overview

### Dashboard
- Monthly spending overview
- Category-wise spending breakdown
- Daily spending trends
- Budget utilization tracking
- Credit card balance monitoring

### Expense Management
- Add new expenses with categories
- Search and filter expenses
- Payment method tracking
- Merchant information
- Tag-based organization

### Category Management
- Custom expense categories
- Budget allocation per category
- Spending progress tracking
- Visual budget indicators

### Credit Card Tracking
- Multiple card management
- Balance and limit tracking
- Utilization percentage monitoring
- Payment due date reminders

### Insights & Analytics
- AI-powered spending insights
- Budget alerts and recommendations
- Spending pattern analysis
- Cost-saving opportunities

## Deployment

This application is designed to be deployed on Render. The build process creates a static site that can be served from any static hosting service.

### Deploy to Render

1. Connect your GitHub repository to Render
2. Choose "Static Site" as the site type
3. Set the build command to: `npm run build`
4. Set the publish directory to: `build`
5. Deploy!

## Future Enhancements

- [ ] Credit card API integration (Plaid, Yodlee)
- [ ] Bank account synchronization
- [ ] Receipt scanning with OCR
- [ ] Budget goal setting and tracking
- [ ] Expense sharing and collaboration
- [ ] Mobile app (React Native)
- [ ] Advanced analytics and reporting
- [ ] Export functionality (PDF, CSV)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help, please open an issue on GitHub.