В JavaScript инкремент и декремент также являются операциями увеличения и уменьшения значения переменной на 1 соответственно. 
Есть две формы инкремента и декремента: префиксная и постфиксная.
Префиксная форма инкремента (++) и декремента (--) увеличивает или уменьшает значение переменной до ее использования в выражении.
Постфиксная форма инкремента (++) и декремента (--) увеличивает или уменьшает значение переменной после ее использования в выражении.
Вот пример двух функций на JavaScript для расчета инкремента и декремента:
```javascript
// Функция с инкрементом
function increment(num) {
  return ++num; // префиксный инкремент
}
// Функция с декрементом
function decrement(num) {
  return --num; // префиксный декремент
}
// Вызов функций и вывод результатов в консоль
let num = 5;
let incrementedNum = increment(num);
let decrementedNum = decrement(num);
console.log(`Результат инкремента: ${incrementedNum}`);
console.log(`Результат декремента: ${decrementedNum}`);
```
В этом примере функция `increment` принимает аргумент `num` и возвращает его значение с префиксным инкрементом (++num). 
Аналогично, функция `decrement` принимает аргумент `num` и возвращает его значение с префиксным декрементом (--num).
Затем инициализируем переменную `num` со значением 5. 
Вызывая функции `increment` и `decrement` с аргументом `num`, мы сохраняем результаты в переменные `incrementedNum` и `decrementedNum`.
Выводим результаты инкремента и декремента в консоль с помощью функции `console.log`.
При выполнении этого кода результат в консоли будет следующим:
Результат инкремента: 6
Результат декремента: 4