// function calculateExpenses(yearlyExpenses) {
//   let totalExpenses = 0;
//   yearlyExpenses.forEach((expense) => {
//     if (expense > 1000) {
//       totalExpenses += expense;
//     }
//   });
//   return totalExpenses;
// }
// function testExpenseCalculation(expensesExamples) {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   expensesExamples.forEach((example) => {
//     const yearlyExpenses = example.yearlyExpenses;
//     yearlyExpenses.forEach((expense, index) => {
//       if (expense <= 1000) {
//         const month = new Date(null, index).toLocaleDateString("en", {
//           month: "long",
//         });
//         console.log(`${months[index]} expense is <= 1000`);
//       }
//     });
//     const totalExpenses = calculateExpenses(yearlyExpenses);
//     console.log(`Total expenses: $${totalExpenses}`);
//   });
// }
// const expensesExamples = [
//   {
//     yearlyExpenses: [
//       2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
//     ],
//   },
//   {
//     yearlyExpenses: [
//       500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
//     ],
//   },
//   {
//     yearlyExpenses: [
//       20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
//     ],
//   },
// ];
// testExpenseCalculation(expensesExamples);

function calculateExpenses(yearlyExpenses) {
  let totalExpenses = 0;
  const lowExpenseMonths = [];
  yearlyExpenses.forEach((expense, index) => {
    if (expense > 1000) {
      totalExpenses += expense;
    } else {
      const month = new Date(null, index).toLocaleDateString("en", {
        month: "long",
      });
      lowExpenseMonths.push(`${month}`);
    }
  });
  if (lowExpenseMonths.length > 0) {
    console.log(`Months with expenses <= 1000: ${lowExpenseMonths.join(", ")}`);
  }
  return totalExpenses;
}
function testExpenseCalculation(expensesExamples) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  expensesExamples.forEach((example) => {
    const yearlyExpenses = example.yearlyExpenses;
    const totalExpenses = calculateExpenses(yearlyExpenses);
    console.log(`Total expenses: $${totalExpenses}`);
    console.log();
  });
}
const expensesExamples = [
  {
    yearlyExpenses: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];
testExpenseCalculation(expensesExamples);
