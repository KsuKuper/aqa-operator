// Переменные имени и фамилии студента
const firstName = "Ksu";
const lastName = "Kuper";
// Переменныемс баллами по каждому модулю
const introScore = 45;
const gitScore = 95;
const jsScore = 115;
// Расчет среднего значания
const averageScore = (introScore + gitScore + jsScore) / 3;
// Вывод результата в консоль
console.log(
  `Средний балл студента ${firstName} ${lastName} за домашние задания по модулям:`
);
console.log(`- введение: ${introScore}`);
console.log("- git:", gitScore);
console.log("- js:", jsScore);
console.log(`Средний балл: ${averageScore}`);
