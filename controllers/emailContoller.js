const transporter = require("../config/nodeMailer");

const SendEmail = async (req, res) => {
  try {
    const { email, name, messages } = req.body;
    
    // Validation
    if (!name || !email || !messages) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    
    // Send email
    const info = await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: messages, // plain text
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${messages}</p>
      `,
    });

    console.log("Email sent: ", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      id: info.messageId,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Email sending failed",
      error: error.message,
    });
  }
};

module.exports = {
  SendEmail,
};
