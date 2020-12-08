//INDEX PAGE


            var fname = [];
            var email = [];
            var password = [];



            function input() {
                fname.push(document.getElementById("fname").value );
                email.push(document.getElementById("email").value );
                password.push(document.getElementById("password").value );


                localStorage.setItem("fname",  fname);
                localStorage.setItem("email", JSON.stringify(email));
                localStorage.setItem("password", JSON.stringify(password));

               

                alert("SignUp Sucessfully")

                window.location.href = "./signin.html"
                return (false);

            }


        

//SIGNIN PAGE





function login() {




    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let isFound = false;

    var names = JSON.parse(localStorage.getItem("name"));
    var emails = JSON.parse(localStorage.getItem("email"));
    var passwords = JSON.parse(localStorage.getItem("password"));



    for (let i = 0; i < emails.length; i++) {

        if (emails[i] === email) {
            isFound = i;
            break;
        }



    }


    if (isFound === false) {
        alert("user not found")



    } else if (passwords[isFound] === password) {
        alert("login sucess");

        window.location.href = "./home.html"



    } else {
        alert('Error password or username')
    }


    return false;
}

//HOME PAGE







