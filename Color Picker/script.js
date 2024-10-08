const colorPicker = document.getElementById('colorPicker');
const colorValue = document.getElementById('colorValue');
const copyButton = document.getElementById('copyButton');
 const heading = document.querySelector('h1');

colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor; // Change background color
     heading.style.color = selectedColor;  // change color of h1
    colorValue.textContent = selectedColor; // update hex code display
     copyButton.style.backgroundColor = selectedColor; //button color
});

//copy the hex code to the clipboard
copyButton.addEventListener('click', function() {
    const colorCode = colorValue.textContent;
    
    // create a temporary input to copy the text
    const tempInput = document.createElement('input');
    tempInput.value = colorCode;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // copy the value to clipboard
    document.body.removeChild(tempInput); // Remove the temporary input

    alert('Hex code copied to clipboard: ' + colorCode);
});
