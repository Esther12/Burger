$("#submit").on("click",function(event){
    var newBurger = $("#exampleFormControlInput1").val();
    $.ajax({
        url : "/add" + newBurger,
        method : "POST",
    }).then(function(data){
        window.location("/all");
    });
})

$(".eat-it").on("click",function(event){
    var burgerId = $(this).attr("data-id");

    var newStatus = $(this).attr("data-status");
    $.ajax("/update/" + burgerId, {
        type: "PUT",
        data: newStatus
      }).then(function(event){
          window.location("/all");
      })
})