let clickCount = 0;

// Get reference to the elements
const button = document.getElementById("my-button");
const counter = document.getElementById("my-counter");

// Create function for increasing the click count
const updateClickCount = () => {
  clickCount++;
  counter.innerHTML = `Clicked ${clickCount} times!`;
};

// Listen to mouse clicks on the button and invoke updateClickCount
// when the event is triggered
button.addEventListener("click", updateClickCount);
