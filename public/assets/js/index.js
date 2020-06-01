$(".add-burger").on("submit", function(event){
   event.preventDefault();
    
    var burgerName = $("#burger").val();
    console.log(burgerName)
    newBurger={
        name: burgerName,
        devoured: 0
    }


   $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
   }).then(function(){

    console.log("new burger added")
    location.reload();
   });
});



$(".change-devour").on("click", function(event){
    event.preventDefault();
    var id =$(this).data("id")
    var newDevouredState={
        devoured:1
    }

    $.ajax("/api/burgers/"+id, {
        type: "PUT",
        data: newDevouredState
    }).then(function(){

        console.log("Burger eaten!")
        location.reload();
    })

})

$(".throw-up").on("click", function(event){
    event.preventDefault();
    var id =$(this).data("id")
    var newDevouredState={
        devoured:0
    }

    $.ajax("/api/burgers/"+id, {
        type: "PUT",
        data: newDevouredState
    }).then(function(){

        console.log("Burger eaten!")
        location.reload();
    })

})

$(".delete-burger").on("click", function(event){
    event.preventDefault();
    var id =$(this).data("id")
    

    $.ajax("/api/burgers/" + id , {
        type: "DELETE"

    }).then(function(){
        console.log("Burger Deleted")
        location.reload();
    });


});

