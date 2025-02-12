/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const discountFor3Days = 20;
  const discountFor7Days = 50;

  if (days >= 7) {
    return baseCost * days - discountFor7Days;
  } else if (days >= 3) {
    return baseCost * days - discountFor3Days;
  } else {
    return baseCost * days;
  }
}

module.exports = calculateRentalCost;
