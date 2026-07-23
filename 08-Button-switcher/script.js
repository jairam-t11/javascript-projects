let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");
let fontWeightInput = document.getElementById("fontWeightInput");
let applyButton = document.getElementById("applyButton");
applyButton.onclick = function() {
    customButton.style.backgroundColor = bgColorInput.value;
    customButton.style.color = fontColorInput.value;
    customButton.style.fontSize = fontSizeInput.value;
    customButton.style.fontWeight = fontWeightInput.value;
    customButton.style.padding = paddingInput.value;
    customButton.style.borderRadius = borderRadiusInput.value;

}
