// ================= LOGIN =================

function login(event) {

    event.preventDefault();


    const username =

        document.getElementById("username").value;


    const password =

        document.getElementById("password").value;


    if (

        username === "admin" &&

        password === "1234"

    ) {


        // Open Home Page in a new tab

        window.open(

            "home.html",

            "_blank"

        );


    }

    else {


        document.getElementById(

            "loginMessage"

        ).innerText =

            "Invalid username or password";


    }

}


// ================= LOGOUT =================

function logout() {


    // Open Login Page in a new tab

    window.open(

        "index.html",

        "_blank"

    );

}


// ================= APPOINTMENT =================

function bookAppointment(event) {


    event.preventDefault();


    const patientName =

        document.getElementById(

            "patientName"

        ).value;


    document.getElementById(

        "appointmentMessage"

    ).innerText =


        "Appointment booked successfully for "

        + patientName

        + "!";


}


// ================= BMI CALCULATOR =================

function calculateBMI() {


    const weight =

        document.getElementById(

            "weight"

        ).value;


    const height =

        document.getElementById(

            "height"

        ).value;


    if (

        weight === "" ||

        height === ""

    ) {


        document.getElementById(

            "bmiResult"

        ).innerText =


            "Please enter weight and height.";


        return;

    }


    const heightInMetres =

        height / 100;


    const bmi =

        weight /

        (

            heightInMetres *

            heightInMetres

        );


    document.getElementById(

        "bmiResult"

    ).innerText =


        "Your BMI is: "

        + bmi.toFixed(2);

}