// Получить массив объектов из файла json
// const players = require("./test_data.json");

const players = [];
const generateTestData = () => {
  const names = ["John", "Emma", "Michael", "Sophia", "Daniel"];
  for (let i = 1; i <= 5; i++) {
    const player = {
      id: i,
      name: names[i - 1],
      scorePoints: Math.floor(Math.random() * 100) + 1,
    };
    players.push(player);
  }
};

// Вариант решения с for..in

// Создать пустой массив для хранения очков
let scores = [];
// Заполнить новый массив значениями очков
// for (let i in players) {
//   scores.push(players[i].scorePoints);
// }
// Использование Math для поиска максимального значения
let maxScore = Math.max(...scores);
// Поиск игрока с максимальным значением очков и вывод в консоль
for (let i in players) {
  if (players[i].scorePoints === maxScore) {
    console.log(players[i]);
  }
}

// Вариант решения с forEach

// Создать пустой массив для хранения очков 
// Заполнить новый массив значениями очков из исходного массива players 
// Используя Math и метод поиска максимального значения,
// найти максимум с помощью оператора spread (...) 
// Вывести игрока с максимальным значением scorePoints в консоль
// Результат в консоли:
// {
//     "id": 1,
//     "name": "Ivan",
//     "scorePoints": 4500
// }

let scores1 = [];
players.forEach((player1) => {
  scores1.push(player1.scorePoints);
});
const maxScore1 = Math.max(...scores);
const playerWithMaxScore = players.find(
  (player) => player.scorePoints === maxScore1
);
console.log(playerWithMaxScore);