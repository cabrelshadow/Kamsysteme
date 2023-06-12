const getValidateForms = document.querySelectorAll("[novalidate]");
getValidateForms.forEach((form, i) => {
  // get submit button in form
  const submitButton = form.querySelector("button[type=submit]");
  // get data from input

  submitButton &&
    submitButton.addEventListener("click", e => {
      const inputs = form.querySelectorAll("[required]");
      console.log(inputs);
      inputs.forEach(getinput => {
        if (
          getinput.value === "" ||
          (getinput.getAttribute("type") === "checkbox" && !getinput.checked)
        ) {
          getinput.style.borderColor = "red";
          e.preventDefault();
        } else {
          document.write = "loading ...";
          getinput.style.borderColor = "green";
        }
      });
    });
});
