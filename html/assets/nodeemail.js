const nodemailer = require("nodemailer");

async function sendMail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for 587
    auth: {
      user: "ultimatenexusconsultingpvtltd@gmail",
      pass: "Ultimatenexus@04"
    }
  });

  const mailOptions = {
    from: '"Ultimate Nexus Consulting"',
    to: "swathi.muthiyam.cholkar@gmail.com",
    subject: "Test Email from Gmail SMTP",
    text: "Hello! This email was sent using Gmail SMTP and Node.js.",
    html: "<h2>Hello!</h2><p>This email was sent using <b>Gmail SMTP</b>.</p>"
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent:", info.messageId);
}

sendMail().catch(console.error);
