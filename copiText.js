
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
        navigator.clipboard.writeText(colorText);
        textBox[i].innerHTML += `     <i class="fa-regular fa-clipboard"></i>`
        // textBox[i].style.opacity = "40%"
        // textBox[i].style.backgroundColor = "(255, 255, 255, 40%)"

        // setTimeout(function() {
        //     textBox[i].style.opacity = "0";
        //     textBox[i].style.backgroundColor = "transparent";
        //   }, 500);
    });
};
 