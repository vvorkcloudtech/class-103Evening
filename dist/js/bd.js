$(function () {
    $('#edit').froalaEditor()
});

var Ivalue ="";

$("#submit").on("click",function(){
    Ivalue = $("#title").val();
    $("#output").append("<h1>"+Ivalue+"</h1>");
    $("#output").append($('#edit').froalaEditor('html.get'))
});


$("#clear").on("click",function(){
    $("#output").html("");
});


