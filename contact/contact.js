

  
  $(".submit-email").on('click',function() {
  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Protocolo SMTP ainda não configurado!',
  footer: '<a href="https://www.linkedin.com/in/lucas-bergonsi/" target="_blank" >Entre em contato por outro canal!</a>'
})
});
