const express = require('express');
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');
const router = express.Router();

router.get('/', auth, async (req, res, next) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    next(err);
  }
});

router.post('/', auth, async (req, res, next) => {
  try {
    const { type, category, amount, date } = req.body;
    if (!amount || !category || !type) {
      return res.status(400).json({ msg: 'Missing required fields' });
    }
    const expense = new Expense({ user: req.user.id, type, category, amount, date });
    await expense.save();
    res.json(expense);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', auth, async (req, res, next) => {
  try {
    const { type, category, amount, date } = req.body;
    const expense = await Expense.findOne({ _id: req.params.id, user: req.user.id });
    if (!expense) return res.status(404).json({ msg: 'Expense not found' });

    expense.type = type;
    expense.category = category;
    expense.amount = amount;
    expense.date = date;

    await expense.save();
    res.json(expense);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', auth, async (req, res, next) => {
  try {
    const expense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!expense) return res.status(404).json({ msg: 'Expense not found' });
    res.json({ msg: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
