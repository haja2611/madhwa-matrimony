// Header Scroll Effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// Scroll Animation
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".section-title, .section-subtitle, .about-img, .about-text, .service-card, .testimonial-slide, .hero-content h1, .hero-content p, .hero-content .btn, .cta h2, .cta p, .cta .btn"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("animate");
    }
  });
}

// Initialize animations when page loads
window.addEventListener("load", () => {
  // Animate hero content
  document.querySelector(".hero-content h1").classList.add("animate");
  setTimeout(() => {
    document.querySelector(".hero-content p").classList.add("animate");
  }, 300);
  setTimeout(() => {
    document.querySelector(".hero-content .btn").classList.add("animate");
  }, 600);

  // Set up scroll listener for other animations
  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load in case elements are already in view
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Simple testimonial slider
const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    text: '"Madhwa Matrimony made the process so easy and comfortable. We were matched based on deep compatibility, not just superficial factors. Six months after our first message, we got married!"',
    author: "Sarah & Michael",
    role: "Married since 2021",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    text: '"After years of unsuccessful dating, we found each other through Madhwa Matrimony. Their detailed profiles and compatibility matching made all the difference."',
    author: "Priya & Raj",
    role: "Married since 2020",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    text: "\"We were both skeptical about online matchmaking, but Madhwa Matrimony's personalized approach proved us wrong. We couldn't be happier!\"",
    author: "Emily & David",
    role: "Engaged, 2023",
  },
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector(".testimonials-container");

function showTestimonial(index) {
  const testimonial = testimonials[index];
  const testimonialSlide = document.querySelector(".testimonial-slide");

  // Reset animation
  testimonialSlide.classList.remove("animate");

  setTimeout(() => {
    testimonialSlide.innerHTML = `
                    <div class="testimonial-content">
                        <div class="testimonial-img">
                            <img src="${testimonial.img}" alt="${testimonial.author}">
                        </div>
                        <p class="testimonial-text">${testimonial.text}</p>
                        <h4 class="testimonial-author">${testimonial.author}</h4>
                        <p class="testimonial-role">${testimonial.role}</p>
                    </div>
                `;

    // Trigger animation
    setTimeout(() => {
      testimonialSlide.classList.add("animate");
    }, 50);
  }, 300);
}

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Auto-rotate testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000);

// Modal Functionality
const modal = document.getElementById("registration-modal");
const registerBtn = document.getElementById("register-btn");
const closeModal = document.querySelector(".close-modal");
const registrationForm = document.getElementById("registration-form");
const createProfile = document.getElementById("create-profile");
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
});
createProfile.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Form Submission
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;

  // Prepare WhatsApp message
  const lookingFor = gender === "groom" ? "Groom" : "Bride";
  const whatsappMessage = `New Registration from Madhwa Matrimony:%0A%0A*Name*: ${name}%0A*Email*: ${email}%0A*Phone*: ${phone}%0A*Looking for*: ${lookingFor}%0A*Age*: ${age}`;

  // Send to WhatsApp
  const whatsappUrl = `https://wa.me/918110813081?text=${whatsappMessage}`;
  window.open(whatsappUrl, "_blank");

  // Prepare email data (you'll need backend for actual email sending)
  const emailData = {
    name,
    email,
    phone,
    lookingFor: gender === "groom" ? "Groom" : "Bride",
    age,
  };

  // Here you would typically send the data to your server
  // For demo, we'll just log it and show an alert
  console.log("Form data to be sent to email:", emailData);
  alert(
    "Thank you for registering! We have opened WhatsApp for you to continue the conversation."
  );

  // Close the modal
  modal.style.display = "none";
  document.body.style.overflow = "auto";

  // Reset the form
  registrationForm.reset();

  // In a real implementation, you would send the data to your server
  // using fetch or XMLHttpRequest to handle the email sending
  // Example:
  /*
            fetch('your-email-script.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            */
});

// For actual email sending, you would need:
// 1. A server-side script (PHP, Node.js, etc.)
// 2. An email service or SMTP configuration
// Here's a basic example of what the PHP script might look like:
/*
        <?php
        header('Content-Type: application/json');
        
        $data = json_decode(file_get_contents('php://input'), true);
        
        $to = "your-email@example.com";
        $subject = "New Matrimony Registration";
        $message = "Name: " . $data['name'] . "\n";
        $message .= "Email: " . $data['email'] . "\n";
        $message .= "Phone: " . $data['phone'] . "\n";
        $message .= "Looking for: " . $data['lookingFor'] . "\n";
        $message .= "Age: " . $data['age'] . "\n";
        
        $headers = "From: " . $data['email'];
        
        if(mail($to, $subject, $message, $headers)) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false]);
        }
        ?>
        */
