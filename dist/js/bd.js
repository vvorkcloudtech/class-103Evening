
var Ivalue ="";

$("#submit").on("click",function(){
<<<<<<< HEAD
    Ivalue = $("#title").val();
    $("#output").append("<h1>"+Ivalue+"</h1>");
    // $("#output").append
    let CreatePostVal = ($('#edit').froalaEditor({toolbarInline: false}))
    console.log(CreatePostVal)
=======
    // Ivalue = $("#title").val();
    // $("#output").append("<h1>"+Ivalue+"</h1>");
    $("#output").append($('<FroalaEditor>').froalaEditor('html.get'))
>>>>>>> 7ee8b07c3d5d22faf349617ad62d42cbffa9b011
});


$("#clear").on("click",function(){
    $("#output").html("");
});


