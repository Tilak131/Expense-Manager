// routes/stats.js
const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const authMiddleware = require("../middleware/auth");

// GET /api/stats
router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const allExpenses = await Expense.find({ user: userId });

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const monthlyExpenses = allExpenses.filter(
      (e) => new Date(e.date).getMonth() === currentMonth &&
             new Date(e.date).getFullYear() === currentYear &&
             e.type === "expense"
    );

    const monthlyIncome = allExpenses.filter(
      (e) => new Date(e.date).getMonth() === currentMonth &&
             new Date(e.date).getFullYear() === currentYear &&
             e.type === "credit"
    );

    const totalExpense = allExpenses
      .filter(e => e.type === "expense")
      .reduce((sum, item) => sum + Number(item.amount), 0);

    const totalIncome = allExpenses
      .filter(e => e.type === "credit")
      .reduce((sum, item) => sum + Number(item.amount), 0);

    const latestIncome = allExpenses
      .filter(e => e.type === "credit")
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10);

    const latestExpense = allExpenses
      .filter(e => e.type === "expense")
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 10);

    res.json({
      monthlyExpense: monthlyExpenses.reduce((sum, e) => sum + Number(e.amount), 0),
      monthlyIncome: monthlyIncome.reduce((sum, e) => sum + Number(e.amount), 0),
      totalExpense,
      totalIncome,
      latestIncome,
      latestExpense,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

module.exports = router;
