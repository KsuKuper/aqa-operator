const players = [];
// Функция для генерации тестовых данных
const generateTestData = () => {
  const names = [
    " John",
    "K su",
    "Ksu ",
    "",
    "!@$%@#",
    "Emma",
    "jdnbfkjdnkjvjdfjkvkjdf",
  ];
  for (let i = 1; i <= 7; i++) {
    const player = {
      id: i,
      name: names[i - 1],
      scorePoints: Math.floor(Math.random() * 100 + 1),
    };
    players.push(player);
  }
};
// Генерируем тестовые данные и выводим их в консоль
generateTestData();
console.log(players);
// Создаем пустой массив для хранения очков игроков
const scorePointsArr = [];
// Добавляем очки каждого игрока в массив scorePointsArr
players.forEach((player) => {
  scorePointsArr.push(player.scorePoints);
});
// Находим максимальное значение в массиве scorePointsArr
const maxScore = Math.max(...scorePointsArr);
// Создаем массив игроков с максимальным количеством очков
const playersWithMaxScore = players.filter(
  (player) => player.scorePoints === maxScore
);
console.log(scorePointsArr);
console.log(maxScore);
console.log(playersWithMaxScore);
// Проверяем, если массив игроков с максимальным количеством очков не пустой
if (playersWithMaxScore.length > 0) {
  // Выводим информацию о игроке с наибольшим количеством очков в консоль
  console.log(
    `Player with the highest score: ${playersWithMaxScore[0].name} ${playersWithMaxScore[0].scorePoints} points`
  );
} else {
  console.log("No player found with the highest score");
}
