$(document).ready(function(){
    console.log('linked js')
    $.get("/api/patrons")
    .then (function(data){
        console.log(data)
    })
})


$("#reserveButton").on("click", function(event) {
    // event.preventDefault();

    var newPatron = {
        name: $("#reserve_name").val().trim(),
        phone: $("#reserve_phone").val().trim(),
        email: $("#reserve_email").val().trim()
    };
    console.log(newPatron);
    
    // Question: What does this code do??
    $.post("/api/patrons", newPatron)
    .then(function(data) {
        console.log(data);
        alert("Adding you to waiting list... We'll text you when we a Mom becomes available.");
    });
    // $("#reserve_name").val().empty();
    
});
        
$.get("/api/patrons", function(data) {
    for (var i = 0; i < data.length; i++) {
        var wellSection = $("<div class='card'>");
        wellSection.addClass("well");
        wellSection.attr("id", "patron-well-" + i);
        
        if (i<5){
            $("#tableWell-01").append(wellSection);

            $("#patron-well-" + i).append("<h3>" + data[i].name + "</h3>"+"<hr>");
            $("#patron-well-" + i).append("<h4>Phone: " + data[i].phone + "</h4>");
            $("#patron-well-" + i).append("<h4>E-mail: " + data[i].email + "</h4>"); 
        }
        else{
            $("#tableWell-02").append(wellSection);

            $("#patron-well-" + i).append("<h3>" + data[i].name + "</h3>"+"<hr>");
            $("#patron-well-" + i).append("<h4>Phone: " + data[i].phone + "</h4>");
            $("#patron-well-" + i).append("<h4>E-mail: " + data[i].email + "</h4>");
        }       
    }
  });