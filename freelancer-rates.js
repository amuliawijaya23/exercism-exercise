const dayRate = (hourlyRate) => {
  return hourlyRate * 8;
};

const daysInBudget = (fixedBudget, hourlyRate) => {
  return Math.floor(fixedBudget / (hourlyRate * 8));
};

const priceWithMonthlyDiscount = (hourlyRate, numberOfDays, discountRate) => {
  const remainingDays = numberOfDays % 22;
  const daysInMonths = numberOfDays = remainingDays;

  const discountedRate = ((1 - discountRate) * hourlyRate) * (daysInMonths * 8);
  const proRatedRate = remainingDays * (hourlyRate * 8);

  return Math.ceil((discountedRate + proRatedRate));
};

module.exports = {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount
}