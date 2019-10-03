$( "document" ).ready(function() {

$("button").click(function(){
    let input= $(".input").val();
    let sentence = input.split(' ');
    let firstLetter=input.charAt(0);
    let lowerfirstLetter=firstLetter.toLowerCase();
    let secondPiece=input.slice(1);

    sentence.forEach(function(input){
            if( lowerfirstLetter === "a" || lowerfirstLetter === "e" || lowerfirstLetter === "i" ||
            lowerfirstLetter === "o" || lowerfirstLetter === "u"){
           $(".output").text(`${secondPiece}${lowerfirstLetter}way`);
            }else {
            $(".output").text(`${secondPiece}${firstLetter}ay`);

    }


});

});
