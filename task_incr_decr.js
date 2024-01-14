function increment(num) {
  return ++num;
}
function decrement(num) {
  return --num;
}
let num = 5;
let incrementedNum = increment(num);
let decrementedNum = decrement(num);
console.log(`Результат инкремента: ${incrementedNum}`);
console.log(`Результат декремента: ${decrementedNum}`);
