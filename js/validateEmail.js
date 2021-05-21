"use strict";

const validateEmail = () => {
  const emailForm = document.querySelector("form");
  const emailInput = document.querySelector("#email-input");
  const emailMsg = document.querySelector(".email-message");

  // check input
  const checkInput = () => {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      setErrorMsg(emailInput, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorMsg(emailInput, "Email is not valid");
    } else {
      setSuccessMsg(emailInput, "Valid email");
    }
  };

  // error message
  const setErrorMsg = (input, message) => {
    emailMsg.innerText = message;
    emailMsg.style.color = "hsl(354, 100%, 66%)";
    emailInput.className = "email-message error";
  };

  // success message
  const setSuccessMsg = (input, message) => {
    emailMsg.innerText = message;
    emailMsg.style.color = "hsl(145, 63%, 49%)";
    emailInput.className = "email-message success";
  };

  // check if valid email
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  // submit form
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
  });
};

export default validateEmail;
