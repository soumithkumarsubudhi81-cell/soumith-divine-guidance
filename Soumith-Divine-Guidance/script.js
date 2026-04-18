function sendToWhatsApp() {
  let name = document.querySelectorAll("input")[0].value;
  let date = document.querySelectorAll("input")[1].value;
  let question = document.querySelector("textarea").value;
  let phone = document.querySelectorAll("input")[2].value;

  let message = `New Booking:
Name: ${name}
DOB: ${date}
Question: ${question}
WhatsApp: ${phone}`;

  let url = "https://wa.me/918249257255?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}