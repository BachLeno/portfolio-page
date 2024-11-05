// Import the configuration
import CONFIG from '../config.js';

// Initialize EmailJS
emailjs.init(CONFIG.USER_ID);

// Function to validate the form fields
function validateForm(contactForm) {
  const userName = contactForm.user_name.value.trim();
  const userEmail = contactForm.user_email.value.trim();
  const message = contactForm.message.value.trim();

  // Check if all fields are filled
  if (!userName || !userEmail || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  // Check if the email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(userEmail)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

// Function to send email using EmailJS
function sendEmail(event) {
  event.preventDefault();

  const contactForm = event.target;

  // Validate the form before sending
  if (!validateForm(contactForm)) {
    return; // Stop if validation fails
  }

  emailjs.sendForm(CONFIG.SERVICE_ID, CONFIG.TEMPLATE_ID, contactForm)
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert("Message Sent Successfully!");

      // Reset the form after successful email sending
      contactForm.reset();
    })
    .catch((error) => {
      console.error('Error in sending email:', error.text);
      alert("Failed to Send Message!");
    });
}

// Function to render the Contact section
export function renderContact() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <section id="contact">
      <h1><span class='gradient-text'>Contact Me</span></h1>
      <form id="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  `;

  // Attach the event listener to the form
  document.getElementById('contact-form').addEventListener('submit', sendEmail);
}
