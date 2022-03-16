window.onload = pageLoad;

function pageLoad() {
    var ClickSubmit = document.getElementById("myForm");
    ClickSubmit.onsubmit = validateForm;
    getdata.onreset = cleartext;
}

function validateForm(e) {
    e.preventDefault()
    let Errormsg = document.getElementById("errormsg");
    Errormsg.innerText = ''
    const value = (key) => {
        return document.forms.myForm[key].value
    }
    if (value("firstname") == "") {
        Errormsg.innerText += "FirstName Required\n";
    }
    if (value("lastname") == "") {
        Errormsg.innerText += "LastName Required\n";
    }
    if (value("gender") == "") {
        Errormsg.innerText += "Gender Required\n";
    }
    if (value("date") == "") {
        Errormsg.innerText += "BirthDate Required\n";
    }
    if (value("email") == "") {
        Errormsg.innerText += "Email Required\n";
    }
    if (value("username") == "") {
        Errormsg.innerText += "Username Required\n";
    }
    if (value("password") == "") {
        Errormsg.innerText += "Password Required\n";
    }
    if (value("retypepassword") == "") {
        Errormsg.innerText += "Retype Password Required\n";
    }
    if (value("password") != value("retypepassword")) {
        Errormsg.innerText += "Password and Retype password are not the same\n";
    } else {
        const data = {
            firstname: value("firstname"),
            lastname: value("lastname"),
            gender: value("gender"),
            date: value("date"),
            email: value("email"),
            username: value("username"),
            password: value("password")
        }
        localStorage.setItem("user_" + Object.keys(localStorage).length, JSON.stringify(data));
        alert("REGISTER COMPLETE!");
        location.replace('login.html')
    }
}

function cleartext() {
    var Error = document.getElementById("errormsg");
    Error.textContent = null;
}