/* eslint-disable prettier/prettier */
function formHandling() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    const selection = document.getElementById("dropbtn").textContent;
    let message = document.getElementById("message").value;
    const checkbox = document.getElementById("checkbox").checked;

    if ((name !== "") && (email !== "") && (checkbox === true) && (selection !== "Dein Betreff")) {
      /* everything required is filled -> send all stuff to default email programm */
      /* but first test optional fields */
      if ((tel === "") && (message === "")) {
        tel = "No input from User.";
        message = "No input from User.";
      } else if ((tel !== "") && (message === "")) {
        message = "No input from User.";
      } else if ((message !== "") && (tel === "")) {
        tel = "No input from User.";
      } else {
        /* debugging */
        console.log('Error in optional');
      };
      
      const mailInformation = {
        from: name,
        emailFrom: email,
        telefon: tel,
        subject: selection,
        wording: message
      };

      // console.log(mailInformation);

      window.open(`mailto:contact@kaffeerösterei.com?subject=${mailInformation.subject}&body=${mailInformation.wording}`);

    }    
    else if ((name === "") && (email === "") && (checkbox === false) && (selection === "Dein Betreff")) {
      /* nothing filled */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
      document.getElementById("arrow").style.fill = "#ff0000";
    }
    else if ((name !== "") && (email !== "") && (checkbox === true) && (selection === "Dein Betreff")) {
      /* selection not filled */
      document.getElementById("arrow").style.fill = "#ff0000";
    }
    else if ((name !== "") && (email !== "") && (checkbox === false) && (selection !== "Dein Betreff")) {
      /* checkbox not checked */
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
    }
    else if ((name !== "") && (email === "") && (checkbox === true) && (selection !== "Dein Betreff")) {
      /* email not filled */
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
    }
    else if ((name === "") && (email !== "") && (checkbox === true) && (selection !== "Dein Betreff")) {
      /* name not filled */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
    }
    else if ((name !== "") && (email !== "") && (checkbox === false) && (selection === "Dein Betreff")) {
      /* checkbox not checked and selection not filled */
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
      document.getElementById("arrow").style.fill = "#ff0000";
    }
    else if ((name !== "") && (email === "") && (checkbox === true) && (selection === "Dein Betreff")) {
      /* email and selection not filled */
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
      document.getElementById("arrow").style.fill = "#ff0000";
    } 
    else if ((name !== "") && (email === "") && (checkbox === false) && (selection !== "Dein Betreff")) {
      /* email not filled and checkbox not checked */
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
    }
    else if ((name === "") && (email !== "") && (checkbox === true) && (selection === "Dein Betreff")) {
      /* name and selection not filled */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
      document.getElementById("arrow").style.fill = "#ff0000";
    }
    else if ((name === "") && (email !== "") && (checkbox === false) && (selection !== "Dein Betreff")) {
      /* name not filled and checkbox not checked */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
    } 
    else if ((name === "") && (email === "") && (checkbox === true) && (selection !== "Dein Betreff")) {
      /* name and email not filled */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
    } 
    else if ((name !== "") && (email === "") && (checkbox === false) && (selection === "Dein Betreff")) {
      /* email and selection not filled and checkbox not checked */
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
      document.getElementById("arrow").style.fill = "#ff0000";
    } 
    else if ((name === "") && (email !== "") && (checkbox === false) && (selection === "Dein Betreff")) {
      /* name and selection not filled and checkbox not checked */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
      document.getElementById("arrow").style.fill = "#ff0000";
    }
    else if ((name === "") && (email === "") && (checkbox === false) && (selection !== "Dein Betreff")) {
      /* name and email not filled and checkbox not checked */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
      document.getElementById("id-checkbox-span").style.backgroundColor = "#ff00002f";
    }
    else if ((name === "") && (email === "") && (checkbox === true) && (selection === "Dein Betreff")) {
      /* name, email and selection not filled */
      document.getElementById("name").style.backgroundColor = "#ff00002f";
      document.getElementById("name").style.color = "#ff0000";
      document.getElementById("email").style.backgroundColor = "#ff00002f";
      document.getElementById("email").style.color = "#ff0000";
      document.getElementById("arrow").style.fill = "#ff0000";
    }
    else {
      /* debugging */
      console.log('Error');
    }
  });
}
export default formHandling;
