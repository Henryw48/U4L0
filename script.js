/* displayImage().then(response => {
    console.log("The image is displayed well");
  })
  .catch(error => {
    console.log("Alert. There is an error here.");
  })
  async function displayImage(){
    const response = await fetch("food.jpg");
    const blob = await response.blob();
    document.getElementById('food').src = URL.createObjectURL(blob)
  } */

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
  const verse = verseChoose.value;
  updateDisplay(verse);
});

function updateDisplay(verse) {
  verse = verse.replace(" ", "").toLowerCase();
  const url = `${verse}.txt`;
}

fetch ()
  .then((response) => {
    if (!response.ok) {
        throw newError('HTTP error: ${response.status}');
    }
    return response.text();
  })
  .then((text) => {
    poemDisplay.textContent = text;
  })
  .catch((error) => {
    poemDisplay.textContent = 'Could not fetch verse: ${error}';
  });