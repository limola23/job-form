let bd = []
let name = document.querySelector('[aria-label="Name"]')
let lastname = document.querySelector('[aria-label="Lastname"]')
let wage = document.querySelector('[aria-label="Wage"]')
let email = document.querySelector('[aria-label="Email"]')
let gender = document.querySelector('[aria-label="Gender"]')
let position = document.querySelector('[aria-label="Position"]')
let jsonBtn = document.getElementById("btn-submit")

jsonBtn.addEventListener("click", function () {
    let data = {
        "name": name.value,
        "lastname": lastname.value,
        "wage": wage.value,
        "email": email.value,
        "gender": gender.value,
        "position": position.value
    }

    if (data.name === "" || data.lastname === "" || data.wage === "" || data.email === "" || data.gender === !gender.value || data.position === !position.value) {
        alert("Please fill all the items in the form")
        return
    }

    else
        bd.push(data)

        console.log (data)
    alert("Thank you, your information was successfully submitted")

    document.querySelector('[aria-label="Name"]').value = ""
    document.querySelector('[aria-label="Lastname"]').value = ""
    document.querySelector('[aria-label="Wage"]').value = ""
    document.querySelector('[aria-label="Email"]').value = ""
    document.querySelector('[aria-label="Gender"]').value = "default"
    document.querySelector('[aria-label="Position"]').value = "default"

})


gender.addEventListener("input", function changeColor() {

    let jsonBtn = document.getElementById("btn-submit");

    if (gender.value === "Male") {
        {
            jsonBtn.setAttribute("class", "btn btn-primary mt-5");
        }
    }

    else if (gender.value === "Female") {
        jsonBtn.setAttribute("class", "btn btn-danger mt-5");

    }  

    else {
        jsonBtn.setAttribute("class", "btn btn-dark mt-5");
    }
    
})

position.addEventListener("input", function otherPosition() {

    let other = document.getElementById("otherMm");

    if (position.value === "Other") {
            other.setAttribute("class", "form-control");
    }
    else if (position.value === "default"){
        other.setAttribute("class", "form-control d-none");
    }
    else {
        other.setAttribute("class", "form-control d-none");
    }
})