class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
  }
  onClick() {
    console.log(this.props);
  }
}
function testButton() {
  const myButton = new Button(80, 40, "button", "blue");
  console.log(myButton.width === 80);
  console.log(myButton.height === 40);
  console.log(myButton.type === "button");
  console.log(myButton.color === "blue");
}
testButton();
