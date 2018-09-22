let clickCount = 0;

// Get reference to the elements
const button = document.getElementById("my-button");
const counter = document.getElementById("my-counter");

// Create function for increasing the click count
const updateClickCount = () => {
  clickCount++;
  // The line below used to be span.innerHTML, which is vulnerable to cross-site
  // scripting attacks. Below the the correct line to use. :)
  counter.textContent = `Clicked ${clickCount} times!`;
};

// Listen to mouse clicks on the button and invoke updateClickCount
// when the event is triggered
button.addEventListener("click", updateClickCount);
