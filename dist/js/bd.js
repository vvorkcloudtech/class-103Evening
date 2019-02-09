$(function () {
    $('#edit').froalaEditor()
});

var Ivalue ="";

$("#submit").on("click",function(){
    Ivalue = $("#title").val();
    $("#output").append("<h1>"+Ivalue+"</h1>");
    // $("#output").append
    let CreatePostVal = ($('#edit').froalaEditor({toolbarInline: false}))
    console.log(CreatePostVal)
});


$("#clear").on("click",function(){
    $("#output").html("");
});


