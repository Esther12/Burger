// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $("#submit").on("click",function(event){
        event.preventDefault();
        var newBurger = {burger_name : $("#exampleFormControlInput1").val()};
        console.log("Add New burger" + newBurger.burger_name);
        $.ajax("/add", {
            type: "POST",
            data: newBurger
        }).then(function(data){
            location.reload();
        });
        
    });

    $(".eat-it").on("click",function(event){
        event.preventDefault();
        var burgerId = $(this).attr("data-id");

        var newStatus = { devoured : $(this).attr("data-status"),
                            id : burgerId};
        console.log(burgerId,newStatus);
        $.ajax("/update/" + burgerId, {
            type: "PUT",
            data: newStatus
        }).then(function(event){
            location.reload();
        })
    });

})