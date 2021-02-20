/* eslint-disable prettier/prettier */

function dropdown() {
  /* on click toggle between hiding and showing the dropdown content */

  document.getElementById("full-button").onclick = function toogleDropdown() {
    if (document.getElementById("myDropdown").style.display === "none") {
      document.getElementById("myDropdown").style.display = "block";
      document.getElementById("arrow").style.transform = "rotate(180deg)";

    } else {
      document.getElementById("myDropdown").style.display = "none";
      document.getElementById("arrow").style.transform = "rotate(0deg)";
    }
  };

  /* clicking outside the select element should close it
  document.getElementById('myDropdown').onclick = function clickedOutside(e) {
    if(e.target !== document.getElementById('myDropdown')) {
      document.getElementById("myDropdown").style.display = "none";
      document.getElementById("arrow").style.transform = "rotate(0deg)";
    }
  }
  */

  /* Easiest functional solution, but not pretty

  document.getElementById("option1").onclick = function option1() {
    document.getElementById("dropbtn").textContent = document.getElementById("option1").textContent;
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("arrow").style.transform = "rotate(0deg)";
  }

  document.getElementById("option2").onclick = function option2() {
    document.getElementById("dropbtn").textContent = document.getElementById("option2").textContent;
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("arrow").style.transform = "rotate(0deg)";
  }

  document.getElementById("option3").onclick = function option3() {
    document.getElementById("dropbtn").textContent = document.getElementById("option3").textContent;
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("arrow").style.transform = "rotate(0deg)";
  }

  document.getElementById("option4").onclick = function option4() {
    document.getElementById("dropbtn").textContent = document.getElementById("option4").textContent;
    document.getElementById("myDropdown").style.display = "none";
    document.getElementById("arrow").style.transform = "rotate(0deg)";
  }
  */

  function handleOptionClick(event) {
    let output;
    if(event.target.id === "option1") {
        document.getElementById("dropbtn").textContent = document.getElementById("option1").textContent;
        output = document.getElementById("option1").textContent;
      }
      else if(event.target.id === "option2") {
        document.getElementById("dropbtn").textContent = document.getElementById("option2").textContent;
        output = document.getElementById("option2").textContent;
      }
      else if(event.target.id === "option3") {
        document.getElementById("dropbtn").textContent = document.getElementById("option3").textContent;
        output = document.getElementById("option3").textContent;
      }
      else if(event.target.id === "option4") {
        document.getElementById("dropbtn").textContent = document.getElementById("option4").textContent;
        output = document.getElementById("option4").textContent;
      }
      else {
        document.getElementById("dropbtn").textContent = "Error";
      }
      document.getElementById("myDropdown").style.display = "none";
      document.getElementById("arrow").style.transform = "rotate(0deg)";
    };

  const selection = document.querySelectorAll(".selection");

  selection.forEach((option) => option.addEventListener("click", handleOptionClick));
}

export default dropdown;