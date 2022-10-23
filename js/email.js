function sendEmail(){
    Email.send({
        secureToken: "78a39c4e-4c9b-4466-89a8-a743ef57591a",
        To : 'asangenesis2k22@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "First Name:" + document.getElementById("firstname").value
        + "<br> Last Name:" + document.getElementById("lastname").value
        + "<br> Email:" + document.getElementById("email").value
        + "<br> School:" + document.getElementById("school").value
        + "<br> Message:" + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully!")
    );
}