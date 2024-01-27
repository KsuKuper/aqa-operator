function doYouWantToBeAQA() {
  let wantToBeAQA = true;
  let attendITSwitcher = false;
  if (wantToBeAQA && attendITSwitcher) {
    console.log(
      "Congratulations! You want to become an AQA and you will be attending the IT Switcher school. Best of luck on your journey!"
    );
  } else if (wantToBeAQA) {
    console.log(
      "If you want to become an AQA, consider joining the IT Switcher school. It can provide you with valuable knowledge and skills."
    );
  } else {
    console.log(
      "If you're not interested in becoming an AQA, there are still plenty of opportunities for you as a QA professional. Keep pursuing your passion!"
    );
  }
}
doYouWantToBeAQA();
