'use strict';


/**
 * 
 * @param {number} fathersAge - Возраст отца
 * @param {number} sonsAge - Возраст сына
 * @returns {string} - вывод информации
 */
function calculateFatherAsTwiceOld (fathersAge, sonsAge) {
  let years = 0;
  if (fathersAge <= 0) {
    return `Father's age can not be negative.`; // поставил шаблонные скобки из за того что нельзя написать ' в таких же кавычках. По-другому не понял как.
  }
  if (fathersAge - sonsAge < 15) {
    return 'Difference of ages can not be less than 15 years.';
  };
  while (fathersAge / 2 > sonsAge) {
    fathersAge++;
    sonsAge++;
    years++;
    if (fathersAge / 2 === sonsAge) {
      return `Father will be twice older in ${years} year.`;
    }
  }
  return fathersAge;
};

console.log(calculateFatherAsTwiceOld(15, 0))
