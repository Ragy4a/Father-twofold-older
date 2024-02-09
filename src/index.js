'use strict';


/**
 * @param {number} fathersAge - Возраст отца
 * @param {number} sonsAge - Возраст сына
 * @returns {number} - Информация о времени, через сколько лет или сколько лет назад отец будет/был вдвое старше сына
 */
// debugger
function calculateFatherAsTwiceOld(fathersAge, sonsAge) {
  let years = 0;
  if (fathersAge - sonsAge < 15 || sonsAge < 15) {
    return 'Неправильный ввод данных!'
  }
  if (fathersAge / 2 === sonsAge) {
    return `Отец уже вдвое старше сына.`;
  }
  if (fathersAge < sonsAge * 2 || fathersAge > sonsAge * 2) {
    years = fathersAge - (sonsAge * 2);
    return years > 0  ? `Отец был старше сына вдвое ${years} лет/год/года назад.` :
    `Отец будет старше сына вдвое ${-years} лет/год/года назад.`;
  }
}

console.log(calculateFatherAsTwiceOld(50, 30));
