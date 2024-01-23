function calculateExpenses(yearlyExpences) {
  let totalExpenses = 0;
  yearlyExpences.forEach((expense) => {
    if (expense > 1000) {
      totalExpenses += expense;
    }
  });
  return totalExpenses;
}
function testCalculateExpenses() {
  let expencesExamples = [
    {
      yearlyExpences: [
        2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
      ],
    },
    {
      yearlyExpences: [
        500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
      ],
    },
    {
      yearlyExpences: [
        20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
      ],
    },
  ];
  expencesExamples.forEach((example) => {
    const { yearlyExpences } = example;
    const totalExpenses = calculateExpenses(yearlyExpences);
    console.log(`Total expenses: ${totalExpenses}`);
  });
}
testCalculateExpenses();

// Функция `calculateExpenses` принимает массив `yearlyExpences` и производит расчет суммы затрат,
// исключая все значения, которые меньше или равны 1000.
// Расчет осуществляется с помощью метода `forEach`, который перебирает каждый элемент массива и
// прибавляет его к переменной `totalExpenses`, если значение больше 1000.
// Затем, тестовая функция `testCalculateExpenses` перебирает массив `expencesExamples`
// с помощью метода `forEach` и вызывает функцию `calculateExpenses` для каждого объекта.
// Результаты расчета выводятся с помощью `console.log`.
// Вызывая `testCalculateExpenses`, функция `calculateExpenses` будет вызвана три раза
// с различными массивами `yearlyExpences`, и результаты будут выведены в консоли.

// ВАРИАНТ 2

// function calculateExpenses(yearlyExpences) {
//   return yearlyExpences.reduce((total, expense) => {
//     if (expense > 1000) {
//       total += expense;
//     }
//     return total;
//   }, 0);
// }
// function testCalculateExpenses() {
//   let expencesExamples = [
//     {
//       yearlyExpences: [
//         2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
//       ],
//     },
//     {
//       yearlyExpences: [
//         500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
//       ],
//     },
//     {
//       yearlyExpences: [
//         20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
//       ],
//     },
//   ];
//   expencesExamples.forEach((example) => {
//     const { yearlyExpences } = example;
//     const totalExpenses = calculateExpenses(yearlyExpences);
//     console.log(`Total expenses: ${totalExpenses}`);
//   });
// }
// testCalculateExpenses();

// Метод `reduce` для вычисления суммы затрат.
// Внутри функции `reduce` мы проверяем, является ли каждый элемент больше 1000.
// Если да, то увеличиваем счетчик `total` на эту сумму.
// На каждой итерации `reduce` возвращает обновленное значение `total`,
// которое накапливается по мере прохода по массиву.
// Остальная часть кода, включая тестовую функцию `testCalculateExpenses`,
// остается неизменной и работает так же, как и в предыдущем варианте решения.

// function calculateExpenses(yearlyExpenses) {
//   let totalExpenses = 0;
//   for (let i = 0; i < yearlyExpenses.length; i++) {
//     if (yearlyExpenses[i] > 1000) {
//       totalExpenses += yearlyExpenses[i];
//     }
//   }
//   return totalExpenses;
// }
// const expenses = [1500, 500, 2000, 800, 1200, 3000, 1000, 5000, 900];
// const total = calculateExpenses(expenses);
// console.log(total); // Выведет: 12700

// ВАРИАНТ 3

// function calculateExpenses(yearlyExpences) {
//   let totalExpenses = 0;
//   yearlyExpences.forEach((expense) => {
//     if (expense > 1000) {
//       totalExpenses += expense;
//     }
//   });
//   return totalExpenses;
// }
// function testCalculateExpenses() {
//   let expencesExamples = [
//     {
//       yearlyExpences: [
//         2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
//       ],
//     },
//     {
//       yearlyExpences: [
//         500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
//       ],
//     },
//     {
//       yearlyExpences: [
//         20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
//       ],
//     },
//   ];
//   const results = []; // Массив для хранения результатов расчетов
//   expencesExamples.forEach((example) => {
//     const { yearlyExpences } = example;
//     const totalExpenses = calculateExpenses(yearlyExpences);
//     results.push(totalExpenses); // Добавление результата в массив results
//   });
//   console.log("Results:", results); // Вывод всех результатов
// }
// testCalculateExpenses();

// В этой реализации вместо вывода каждого результата с помощью `console.log`, мы создаем массив `results`,
// в который добавляем каждый результат расчета с помощью `results.push(totalExpenses)`.
// Затем мы выводим все результаты, используя `console.log('Results:', results)`.
// Теперь результаты будут храниться в массиве `results`.
