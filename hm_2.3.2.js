// class Button {
//   constructor(width, height, type, color) {
//     this.width = width;
//     this.height = height;
//     this.type = type;
//     this.color = color;
//   }

//   onClick() {
//     console.log(`Width: ${this.width}`);
//     console.log(`Height: ${this.height}`);
//     console.log(`Type: ${this.type}`);
//     console.log(`Color: ${this.color}`);
//   }
// }
// function testButton(compareWidth, compareHeight, compareType, compareColor) {
//   const myButton = new Button(80, 40, "button", "green");

//   console.log(myButton.width === compareWidth);
//   console.log(myButton.height === compareHeight);
//   console.log(myButton.type === compareType);
//   console.log(myButton.color === compareColor);

//   myButton.onClick();
// }
// testButton(80, 40, "button", "green");

// Теперь функция `testButton` принимает аргументы `compareWidth`, `compareHeight`, `compareType` и `compareColor`,
// которые используются для сравнения с параметрами объекта `myButton`.
// Вызов функции `testButton` с передачей соответствующих значений позволит сравнить параметры одной кнопки с другой.
// Метод `onClick` теперь вызывается как `myButton.onClick()` и выводит объект `this` в консоль.

class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }
  onClick() {
    console.log(
      `Width: ${this.width}\nHeight: ${this.height}\nType: ${this.type}\nColor: ${this.color}`
    );
  }
}
function testButton(compareWidth, compareHeight, compareType, compareColor) {
  const myButton = new Button(80, 40, "button", "green");

  if (
    myButton.width === compareWidth &&
    myButton.height === compareHeight &&
    myButton.type === compareType &&
    myButton.color === compareColor
  ) {
    console.log("Test passed successfully!");
  } else {
    if (myButton.width !== compareWidth) {
      console.log(
        `Error: Button width does not match. ER: ${compareWidth}. AR: ${myButton.width}`
      );
    }
    if (myButton.height !== compareHeight) {
      console.log(
        `Error: Button height does not match. ER: ${compareHeight}. AR: ${myButton.height}`
      );
    }
    if (myButton.type !== compareType) {
      console.log(
        `Error: Button type does not match. ER: ${compareType}. AR: ${myButton.type}`
      );
    }
    if (myButton.color !== compareColor) {
      console.log(
        `Error: Button color does not match. ER: ${compareColor}. AR: ${myButton.color}`
      );
    }
  }

  myButton.onClick();
}
testButton(80, 40, "button", "green");
