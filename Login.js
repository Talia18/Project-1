let users = {
  Ariel: { name: "Ariel", password: 95781 },
  David: { name: "David", password: 74281 },
  Eli: { name: "Eli", password: 32678 },
  Yakov: { name: "Yakov", password: 25697 },
  Ben: { name: "Ben", password: 38195 },
};

let loginBtn = document.getElementById("login");
// console.log("login->", loginBtn);
loginBtn.addEventListener("click", () => {
  let inputUserName = document.getElementById("userName").value;
  let inputUserPassword = Number(document.getElementById("password").value);
  let HTML;
  let user = users[inputUserName];
  // console.log("user", user);
  if (user) {
    let password = user.password;
    // console.log("password", password);
    if (inputUserPassword == password) {
      HTML = "Login Succed";
      document.getElementById("loginFromJS").style.color = "green";
      document.getElementById("loginFromJS").style.fontSize = "17px";
    } else {
      HTML = "One of deatil not true, try again pass";
      document.getElementById("loginFromJS").style.color = "red";
      document.getElementById("loginFromJS").style.fontSize = "17px";
    }
  } else {
    HTML = "One of deatil not true, try again name";
    document.getElementById("loginFromJS").style.color = "red";
    document.getElementById("loginFromJS").style.fontSize = "17px";
  }
  document.getElementById("loginFromJS").innerText = HTML;
});
