// initializing variables
const btns = document.querySelectorAll(".btns");
const inputEl = document.querySelectorAll(".inputs");
const titleEl = document.getElementById("title");

const user = [{ nameObj: "" }, { emailObj: "" }, { messageObj: "" }];

const send = (name, email, message) => {
  let error = false;
  let errorMessage = "";
  if (
    name != "" &&
    email != "" &&
    message != "" &&
    name != null &&
    email != null &&
    message != null
  ) {
    // Pushing data to array of obj
    user[0].nameObj = name;
    user[1].emailObj = email;
    user[2].messageObj = message;
    // Pushing Stuff to local system
    localStorage.setItem("name", JSON.stringify(user[0].nameObj));
    localStorage.setItem("email", JSON.stringify(user[1].emailObj));
    localStorage.setItem("message", JSON.stringify(user[2].messageObj));
    titleEl.textContent = "Sucessfuly Send!";
  } else {
    error = true;
    errorMessage = "Please fill the name, email and message inputs";
    titleEl.textContent = errorMessage;
  }
};

const reseat = () => {
  let error = false;
  let errorMessage = "";
  if (
    user[0].nameObj != "" &&
    user[1].emailObj != "" &&
    user[2].messageObj != ""
  ) {
    localStorage.clear();

    user[0].nameObj = "";
    user[1].emailObj = "";
    user[2].messageObj = "";

    titleEl.textContent = "Deleted the send!";
  } else {
    error = true;
    errorMessage = "There was no post found.";
    titleEl.textContent = errorMessage;
  }
};

// Calling Function
btns[0].addEventListener("click", () => {
  console.log(send(inputEl[0].value, inputEl[1].value, inputEl[2].value));
});
btns[1].addEventListener("dblclick", () => {
  console.log(reseat(inputEl[0].value, inputEl[1].value, inputEl[2].value));
});
