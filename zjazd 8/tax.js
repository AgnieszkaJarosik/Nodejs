const express = require('express');
const router = express.Router();

const calculateTax = (tax, amount) => {
  const taxValue = tax * amount / 100;
  return {
      tax: taxValue,
      amount: amount - taxValue
  };
}

router.get('/:tax/:amount', function (req, res) {
  const {tax, amount} = req.params;
  const value = calculateTax(tax, amount);
  res.send(`tax - ${value.tax}, amount - ${value.amount}`);
});

router.post('/', function (req, res) {
  const {tax, amount} = req.body;
  const value = calculateTax(tax, amount);
  res.send(`tax - ${value.tax}, amount - ${value.amount}`);
});

module.exports = router;