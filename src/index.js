'use strict';


/**
 * @param {number} fathersAge - Возраст отца
 * @param {number} sonsAge - Возраст сына
 * @returns {number} - Информация о времени, через сколько лет или сколько лет назад отец будет/был вдвое старше сына
 */
function calculateFatherAsTwiceOld(fathersAge, sonsAge) {
  let years = 0;
  if (fathersAge - sonsAge < 15 || sonsAge < 0) {
    return 'Неправильный ввод данных!'
  }
  if (fathersAge / 2 === sonsAge) {
    return `Отец уже вдвое старше сына.`;
  }
  if (fathersAge < sonsAge * 2) {
    years = fathersAge - (sonsAge * 2);
    return `Отец был старше сына вдвое ${-years} лет/год/года.`
  }
  if (fathersAge > sonsAge * 2) {
    years = fathersAge - (sonsAge * 2);
    return `Отец был старше сына вдвое ${years} лет/год/года.`
  }
}

console.log(calculateFatherAsTwiceOld(61, 30));
