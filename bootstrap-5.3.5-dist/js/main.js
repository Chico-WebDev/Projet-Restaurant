document.addEventListener("DOMContentLoaded", function () {
    const phoneNumber = "2250586247542"; // Numéro sans le "+" (ex : France +33)
    const defaultMessage = "Bonjour, je suis intéressé par vos services, j'aimerais avoir plus d'information sur votre commande ou réservation !.";
    const message = encodeURIComponent(defaultMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    const button = document.getElementById("contactWhatsApp");
    button.addEventListener("click", function () {
      window.open(whatsappLink, "_blank");
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  document.getElementById("sendMail").addEventListener("click", () => {
    const message = document.getElementById('exampleFormControlTextarea1').value;
    const email = "chicowebdev@gmail.com";
    const subject = "Message depuis le site";
  
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.location.href = mailtoLink;
  })
  