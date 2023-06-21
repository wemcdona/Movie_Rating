const movieTitle = $(".movie").val();
const movieRating = $(".rating").val();


$("button").on('click', function(){
    const movieTitle = $(".movie").val();
    const movieRating = $(".rating").val();
    const listItem = $("<li></li>").text(movieTitle + ":" + movieRating);
    $("#list ul").append(listItem);
})