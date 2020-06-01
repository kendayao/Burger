// runs post request when add burger button is clicked
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


// put request when change eat button is clicked (changes devour to true)
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

// put request when change eat button is clicked (changes devour to false)
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

// delete burger when delete button is clicked
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

