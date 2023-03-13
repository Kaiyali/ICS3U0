// const word = document.querySelector(".word");
// const sumbitBtn = document.querySelector(".submit");
// const word_display = document.querySelector(".name-display");

// sumbitBtn.addEventListener("click", function(){
//   const name = document.createElement("a");
//   const word_display = document.createTextNode(word.value);
//   name.appendChild(word_display)
// });



const canvas = document.querySelector(".canvas");
const inputMessage = document.querySelector(".word");
const displayMessage = document.createElement("div");
const color_picker = document.querySelector(".color-picker");
canvas.append(displayMessage);


inputMessage.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
		event.preventDefault();
		displayUserMessage();
		}
  });

function displayUserMessage() {
	displayMessage.innerHTML = inputMessage.value;
  displayMessage.style.color = color_picker.value;
}



