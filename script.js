const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");

  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Preselect service when clicking a service card
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("serviceType");
    serviceSelect.value = link.dataset.service;
  });
});

// Contact form: prepare WhatsApp enquiry
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("serviceType").value;
  const message = document.getElementById("customerMessage").value.trim();

  if (!name || !phone || !service) {
    alert("Please fill in your name, phone number and required service.");
    return;
  }

  /*
    IMPORTANT:
    Replace this placeholder with the GPM Pest Control WhatsApp number.
    Use country code and digits only, without +, spaces or hyphens.
    Example format for India: 919876543210
  */
  const businessWhatsAppNumber = "919494977241";

  if (!/^91\d{10}$/.test(businessWhatsAppNumber)) {
    alert(
      "The website owner needs to add the correct WhatsApp number in script.js before enquiries can be sent."
    );
    return;
  }

  const enquiry =
    `Hello GPM Pest Control,\n\n` +
    `I would like to enquire about your service.\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}\n` +
    `Details: ${message || "Not provided"}\n\n` +
    `Please contact me with more information.`;

  const whatsappURL =
    `https://wa.me/${businessWhatsAppNumber}?text=` +
    encodeURIComponent(enquiry);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});