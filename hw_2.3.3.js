const user = {
  balance: 500,
};
const packageCost = 100;
const smsCode = "A001DFX0";
const database = {
  package: {
    id: "1432HGF",
    lockersNumber: 4,
    code: "A001DFX0",
  },
};
const lockers = [null, null, null, "1432HGF", null];
if (database.package.code === smsCode) {
  lockers[database.package.lockersNumber] = null;
  user.balance -= packageCost;
}
console.log(
  `Заберите посылку ${database.package.id} из ячейки #${database.package.lockersNumber}. 
Ваш счет составляет: ${user.balance} ед.`
);
