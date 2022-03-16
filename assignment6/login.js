window.onload = loginLoad;

function loginLoad() {
    var ClickSubmit = document.getElementById("myLogin");
    ClickSubmit.onsubmit = checkLogin;
}

function checkLogin(e) {
    e.preventDefault()
    const LoginUsername = document.forms["myLogin"]["username"].value;
    const LoginPassword = document.forms["myLogin"]["password"].value;

    Object.keys(localStorage).forEach((key, index) => {
        const values = JSON.parse(localStorage.getItem(key))
        if (values.username == LoginUsername) {
            if (values.password == LoginPassword) {
                alert("LOGIN SUCCESS!")
            } else {
                alert("YOUR PASSWORD ARE WRONG!")
            }
        } else {
            if (index + 1 == Object.keys(localStorage).length) {
                alert("OUR USERNAME ARE WRONG!")
            }
        }
    })
}