$(document).ready(function(){
    console.log('linked js')

    $.get("/api/patrons")
    .then (function(data){
        console.log(data)
    })
})