// if (location.pathname.match(/fullcpgrid/i) ? true : false) {
//     document.documentElement.style.fontSize = "32px"
//   }
document.addEventListener('DOMContentLoaded', function () {
  const qrCodeElement = document.querySelector('.qr-code');

  qrCodeElement.addEventListener('click', function () {
      qrCodeElement.classList.toggle('expanded');
  });

  if (location.pathname.match(/fullcpgrid/i)) {
      document.documentElement.style.fontSize = "32px";
  }
});
