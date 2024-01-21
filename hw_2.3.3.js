// Переменные с данными
// Сумма на счете пользователя
const userBalance = 500;
// Стоимость посылки
const packageCost = 100;
// Код из смс
const smsCode = "A001DFX0";
// Почтовые ячейки
const postBoxes = [null, null, null, "1432HGF", null];
// Данные из базы данных
const packageId = "1432HGF";
const postBoxNumber = postBoxes.indexOf(packageId);
// Проверка, если код получения равен коду из смс
if (packageId === smsCode) {
  // Списание средств со счета пользователя
  const updatedBalance = userBalance - packageCost;
  // Обновление ячейки почтового ящика
  postBoxes[postBoxNumber] = null;
  // Вывод информации о посылке и балансе
  console.log(
    `Заберите посылку ${packageId} из ячейки №${
      postBoxNumber + 1
    }. Ваш счет составляет: ${updatedBalance}ед.`
  );
}
console.log("Неверный код получения посылки.");

// Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: 400ед.
// В данном примере, проверяем, равен ли код получения из базы данных коду, полученному в смс.
// Если коды совпадают, мы списываем стоимость посылки со счета пользователя, обновляем информацию в базе данных
// и выводим сообщение с информацией о полученной посылке и балансе пользователя.
// А иначе, если коды не совпадают, выводится сообщение об ошибке.

// // Переменные с данными
// // Сумма на счете пользователя
// const userBalance = 500;
// // Стоимость посылки
// const packageCost = 100;
// // Код из смс
// const smsCode = "A001DFX0";
// // Почтовые ячейки
// const postBoxes = [null, null, null, "1432HGF", null];
// // Функция для получения посылки
// function getPackage(code) {
//   // Индекс ячейки с указанным кодом
//   const packageIndex = postBoxes.indexOf(code);

//   if (packageIndex !== -1) {
//     // Если ячейка найдена
//     // Убираем посылку из ячейки
//     postBoxes[packageIndex] = null;
//     // Вычисляем новый баланс
//     const newBalance = userBalance - packageCost;
//     console.log(
//       `Заберите посылку ${code} из ячейки №${
//         packageIndex + 1
//       }. Ваш счет составляет: ${newBalance}ед.`
//     );
//   } else {
//     console.log("Посылка не найдена.");
//   }
// }
// // Проверка кода из смс
// if (smsCode === "A001DFX0") {
//   // Получаем посылку
//   getPackage(smsCode);
// }
// console.log("Неправильный код из смс.");

// В этом решении используем переменные для хранения данных, таких как баланс пользователя (`userBalance`),
// стоимость посылки (`packageCost`), код из смс (`smsCode`) и почтовые ячейки (`postBoxes`).
// Cоздаем функцию `getPackage` для получения посылки.
// Внутри функции находим индекс ячейки с указанным кодом с помощью метода `indexOf` и проверяем, найдена ли ячейка.
// Если ячейка найдена, удаляем посылку из ячейки (`null`) и вычисляем новый баланс пользователя.
// Затем выводим сообщение с информацией о посылке и новом балансе.
// Проверяем, совпадает ли код из смс (`smsCode`) с кодом в базе данных.
// Если код совпадает, вызываем функцию `getPackage` для получения посылки.
// Если код не совпадает, выводим сообщение о неправильном коде.
