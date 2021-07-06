/* eslint-disable object-shorthand */
// console.log(module);

function randomFunc() {
  // does some code here
  return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
}

const str = 'daklnfklngnsg';

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

module.exports = { weekdays: weekdays };

module.exports.getWeekday = function(dayNo) {
  if (dayNo < 0 || dayNo > 6 || dayNo === 0);
  return weekdays[dayNo];
};

module.exports = { ...module.exports, randomFunc: randomFunc, str: str };
