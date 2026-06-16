const myForm = document.getElementById("contactForm");

myForm.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const name = document.getElementById("userName").value;

    alert("Thank you " + name + "! Your message has been sent successfully.");

    myForm.reset();
});