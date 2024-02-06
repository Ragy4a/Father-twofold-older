'use strict';

/**
 * @param {number} fathersAge - Возраст отца
 * @param {number} sonsAge - Возраст сына
 * @returns {string} - Информация о времени, через сколько лет или сколько лет назад отец будет/был вдвое старше сына
 */
function calculateFatherAsTwiceOld(fathersAge, sonsAge) {
  let years = 0;
  if (fathersAge === 0 && sonsAge === 0) {
    return 'Неправильный ввод данных!'
  }
  if (fathersAge < 0 || sonsAge < 0) {
    return `Возраст отца и сына должен быть положительным числом.`;
  }
  if (fathersAge - sonsAge < 15 && sonsAge - fathersAge > 15) {
    return 'Разница в возрасте отца и сына должна быть не меньше 15 лет.';
  }
  if (fathersAge / 2 === sonsAge) {
    return `Отец уже вдвое старше сына.`;
  } else if (fathersAge / 2 < sonsAge) {
    years = fathersAge - (sonsAge * 2);
    return years > 0 ? `Отец уже старше сына вдвое на ${years} лет.` : `Отец был старше сына вдвое ${-years} лет назад.`;
  } else {
    while (fathersAge / 2 > sonsAge) {
      fathersAge++;
      sonsAge++;
      years++;
    }
    return `Отец будет старше сына вдвое через ${years} лет.`;
  }
}

console.log(calculateFatherAsTwiceOld(0, 0));
