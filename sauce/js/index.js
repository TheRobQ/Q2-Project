$(document).ready(function() {


  $(".signin").submit(function(event) {
    event.preventDefault();
    console.log('clicked');
    const username = $("input#user").val().toLowerCase();
    const password = $("input#pass").val();
    $.ajax({
      url: `/user`,
      type: 'POST',
      data: {
        email: username,
        password: password
      },
      success: function(data) {
        console.log(data);
        localStorage.setItem("user", data.id)
        window.location.href = "map.html"
      },
      error: function(data) {
        console.log('error');
        Materialize.toast('Please check your user name and / or password and try again', 6000)
      },
    })
  });
})