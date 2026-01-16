document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

function sendEmail() {
    // Get the form elements by name
    debugger;
    var inputname = document.querySelector('input[name="name"]');
    var inputemail = document.querySelector('input[name="email"]');
    var inputmessage = document.querySelector('textarea[name="message"]');

    // Check if elements exist
    if (!inputname || !inputemail || !inputmessage) {
        alert("Form elements not found.");
        return false;
    }

    // Check if values are provided
    if (!inputname.value.trim() || !inputemail.value.trim() || !inputmessage.value.trim()) {
        alert("Please enter all fields.");
        return false; // Prevent further action
    }

    // If all values exist, proceed (e.g., submit form or send email)
    try {
        Email.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: inputname.value,
            from_email: inputemail.value,
            message: inputmessage.value
        }, "YOUR_USER_ID").then(
            function(response) {
                alert("Email sent successfully!");
                document.querySelector('form').reset();
            },
            function(error) {
                alert("Failed to send email. Please try again.");
            }
        );
    } catch (err) {
        console.error('Email setup error:', err);
        alert('An error occurred while setting up email sending.');
    }
    return false; // Prevent form submission
}

function SMTP(host, username, password) {
    debugger;
    try{
    Email.send({
    Host: "smtp.gmail.com",
    Username: "ultimatenexusconsultingpvtltd@gmail",
    Password: "Ultimatenexus@04",
    To: "swathi.muthiyam.cholkar@gmail.com",
    From: "ultimatenexusconsultingpvtltd@gmail",
    Subject: "Email from JavaScript",
    Body: "Hello! This email was sent using Gmail + JavaScript"
}).then(
  message => alert(message)
);
}
catch (err) {
        console.error('Email setup error:', err);
        alert('An error occurred while setting up email sending.');
}
}

function homepageimageflash(){
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    const images = ['images/ideo_Omega_N-0.jpg', 'images/ON-H2.jpg', 'images/ON-H1.jpg'];
    let currentIndex = 0;   
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('hero-image').src = images[currentIndex];
    }, 2000);
}


