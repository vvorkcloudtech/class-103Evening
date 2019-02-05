
var Ivalue ="";

$("#submit").on("click",function(){
    // Ivalue = $("#title").val();
    // $("#output").append("<h1>"+Ivalue+"</h1>");
    $("#output").append($('<FroalaEditor>').froalaEditor('html.get'))
});


$("#clear").on("click",function(){
    $("#output").html("");
});


