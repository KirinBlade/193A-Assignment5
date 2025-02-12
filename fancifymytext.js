function showAlert() {
  alert("Hello, world!");
}

function makeTextBigger() {
  const textArea = document.getElementById("textArea");
  textArea.style.fontSize = "24pt";
}

function applyStyles() {
  const textArea = document.getElementById("textArea");
  const fancyShmancyRadio = document.getElementById("fancyShmancy");
  const boringBettyRadio = document.getElementById("boringBetty");

  // If FancyShmancy is selected, apply styles
  if (fancyShmancyRadio.checked) {
    alert("FancyShmancy selected! Applying bold font...");
    textArea.style.fontWeight = "bold";
    textArea.style.textDecoration = "underline";
    textArea.style.color = "blue";
  }

  // If BoringBetty is selected, remove styles
  else if (boringBettyRadio.checked) {
    alert("BoringBetty selected! Removing bold font...");
    textArea.style.fontWeight = "normal";
    textArea.style.textDecoration = "none";
    textArea.style.color = "black";
  }
}

// Function to uppercase from Moo button
function makeTextUppercase() {
  const textArea = document.getElementById("textArea");
  if (textArea) {
    let text = textArea.value.toUpperCase();

    //Using "."
    let sentences = text.split(".");
    for (let i=0; i < sentences.length; i++) {
      let sentence = sentences[i].trim();

      if (sentence.length > 0) {
        let words = sentence.split(" ");       // Adds space " "
        words[words.length - 1] += "-Moo";      // Adds "-Moo"
        sentences[i] = words.join(" ");         // Reassembles the sentence
      }
    }
    textArea.value = sentences.join(". ") + (text.trim().endsWith(".") ? "" : ".");      // Join the sentences back together with ". "
  } else {
    alert("Textarea not found!");
  }
}