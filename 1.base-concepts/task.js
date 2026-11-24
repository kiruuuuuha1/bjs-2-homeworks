"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c; 

  if (d < 0) {
    return []; 
  }

  if (d === 0) {
    return [-b / (2 * a)]; 
  }

  return [
    (-b + Math.sqrt(d)) / (2 * a),
    (-b - Math.sqrt(d)) / (2 * a)
  ]; 
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const EveryMonth = percent / 100 / 12;
  const loanBody = amount - contribution;
  const payment = loanBody * (EveryMonth + EveryMonth / ((1 + EveryMonth) ** countMonths - 1));
  const total = payment * countMonths + contribution;
  return Number(total.toFixed(2));
}