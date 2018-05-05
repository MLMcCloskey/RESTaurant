$(document).ready(function(){
    console.log('linked js')

    $.get("/api/patrons")
    .then (function(data){
        console.log(data)
    })

    $("#reserveButton").on("click", function(event) {
        event.preventDefault();
  
        var newPatron = {
          name: $("#reserve_name").val().trim(),
          phone: $("#reserve_phone").val().trim(),
          email: $("#reserve_email").val().trim()
        };
  
        // Question: What does this code do??
        $.post("/api/patrons", newPatron)
          .then(function(data) {
            console.log(data);
            alert("Adding you to waiting list... We'll text you when we a Mom becomes available.");
          });
  
      });
})