const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// CRUD
router.post('/', async (req, res) => {
  const emp = await Employee.create(req.body);
  res.json(emp);
});
router.get('/', async (req, res) => {
  const emps = await Employee.find();
  res.json(emps);
});
router.put('/:id', async (req, res) => {
  const emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(emp);
});
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
