//هون عملنا برمجيات ل زر لما يكبس بشتغل الفيديو لما تكباس كمان مره بوقف
function playvid() {
  let vidou = document.getElementById("video");
  if (vidou.paused) {
    vidou.play();
  } else {
    vidou.pause();
  }
}
//
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let year = new Date();
let year1 = year.getFullYear();
let copyrigth = document.getElementById("years");
copyrigth.innerHTML = year1;
