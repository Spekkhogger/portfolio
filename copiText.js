
// function copyHexCode(hex) {
//     const textarea = document.createElement('textarea');
//     textarea.value = hex;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);
//   }

// function handleColorBoxClick(event) {
//     const colorBox = event.target;
//     const hexCode = colorBox.dataset.hex;
//     copyHexCode(hexCode);
//     alert(`Copied HEX code: ${hexCode}`);
//   }

//   const colorBoxes = document.querySelectorAll('.color-box');
//   colorBoxes.forEach((colorBox) => {
//     colorBox.addEventListener('click', handleColorBoxClick);
//   });

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(colorText);
      console.log(colorText);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

const textBox = document.querySelectorAll(".hexText");
for (let i = 0; i < textBox.length; i++){
    const colorText = textBox[i].innerHTML;
    textBox[i].addEventListener("click", function(){
        console.log(colorText);
        navigator.clipboard.writeText(colorText);
    });
};
 