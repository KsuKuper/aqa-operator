// ВАРИАНТ 1

let scores = [
  87, 95, 72, 80, 91, 68, 89, 93, 77, 85, 79, 88, 84, 76, 82, 90, 83, 70, 75,
  86, 92, 78, 94, 81,
];
console.log("Исходный массив баллов:", scores);
for (let i = 0; i < scores.length - 1; i++) {
  for (let j = 0; j < scores.length - i - 1; j++) {
    console.log("_________новая итерация");
    console.log("сравниваем пару", scores[j], "и", scores[j + 1]);
    console.log("сравниваем индексы", j, "и", j + 1);
    console.log("работаем с массивом", scores);
    if (scores[j] < scores[j + 1]) {
      let temp = scores[j];
      scores[j] = scores[j + 1];
      scores[j + 1] = temp;
    }
    console.log("получился промежуточный массив", scores);
  }
}
console.log("Отсортированный массив баллов:", scores);

// ВАРИАНТ 2

// let scores = [
//   82, 56, 74, 68, 91, 45, 65, 89, 76, 60, 83, 70, 62, 87, 79, 72, 94, 54, 69,
//   78, 86, 58, 75, 80,
// ];
// console.log("Исходный массив:", scores);
// let length = scores.length;
// let sorted = false;
// while (!sorted) {
//   sorted = true;
//   for (let i = 0; i < length - 1; i++) {
//     console.log("_________новая итерация");
//     console.log("Сравниваем пару", scores[i], "и", scores[i + 1]);
//     console.log("Сравниваем индексы", i, "и", i + 1);
//     console.log("Работаем с массивом", scores);
//     if (scores[i] < scores[i + 1]) {
//       let temp = scores[i];
//       scores[i] = scores[i + 1];
//       scores[i + 1] = temp;
//       sorted = false;
//     }
//     console.log("Получился промежуточный массив", scores);
//   }
//   length--;
// }
// console.log("Отсортированный массив:", scores);

// ВАРИАНТ 3

// function bubbleSort(arr) {
//   const n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }
// const unsortedArray = [
//   87, 95, 72, 80, 91, 68, 89, 93, 77, 85, 79, 88, 84, 76, 82, 90, 83, 70, 75,
//   86, 92, 78, 94, 81,
// ];
// const sortedArray = bubbleSort(unsortedArray);
// console.log(sortedArray);
// Output:
// 68, 70, 72, 75, 76, 77, 78, 79,
// 80, 81, 82, 83, 84, 85, 86, 87,
// 88, 89, 90, 91, 92, 93, 94, 95
// ]
