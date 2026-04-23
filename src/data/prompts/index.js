import ownerCommsReporting from './owner-comms-reporting.js';
import revenuePerformance from './revenue-performance.js';
import expensesVendors from './expenses-vendors.js';
import monthEndClose from './month-end-close.js';
import accountingBookkeeping from './accounting-bookkeeping.js';
import budgetForecasting from './budget-forecasting.js';

export const CATEGORIES = [
  'Owner Comms & Reporting',
  'Revenue & Performance',
  'Expenses & Vendors',
  'Month-End Close',
  'Accounting & Bookkeeping',
  'Budget & Forecasting',
];

export const PROMPTS = [
  ...ownerCommsReporting,
  ...revenuePerformance,
  ...expensesVendors,
  ...monthEndClose,
  ...accountingBookkeeping,
  ...budgetForecasting,
];
