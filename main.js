//Program Title
document.getElementById("check-btn").addEventListener("click", btnClicked);
outputE1 = document.getElementById("pass-info");

function btnClicked() {
  //INPUT
  let pass = document.getElementById("check-in").value;
  //PROCESS
  if (pass.length >= 13) {
    outputE1.innerHTML = `<h2 class="strength" >Very Strong</h2>`;
    outputE1.style.color = "green";
    document.getElementById("check-in").style.borderColor = "green";
  } else if (pass.length <= 12 && pass.length >= 9) {
    outputE1.innerHTML = `<h2 class="strength">Strong</h2>`;
    outputE1.style.color = "lime";
    document.getElementById("check-in").style.borderColor = "lime";
  } else if (pass.length <= 8 && pass.length >= 5) {
    outputE1.innerHTML = `<h2 class="strength">Okay</h2>`;
    outputE1.style.color = "orange";
    document.getElementById("check-in").style.borderColor = "orange";
  } else if (pass.length <= 4 && pass.length >= 1) {
    outputE1.innerHTML = `<h2 class="strength">Weak</h2>`;
    outputE1.style.color = "red";
    document.getElementById("check-in").style.borderColor = "red";
  } else {
    outputE1.innerHTML = `<h2 class="strength">Please provide a password.</h2>`;
    outputE1.style.color = "black";
    document.getElementById("check-in").style.borderColor = "black";
  }
  //OUTPUT
}
