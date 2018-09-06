$(document).ready(function(){

    var randomScore = Math.floor(Math.random()*100+1)
    console.log(randomScore);

    $('.displayScore').html(randomScore);

    var gem1 = Math.floor(Math.random()*10+1);
        console.log(gem1);
    var gem2 = Math.floor(Math.random()*10+1);
        console.log(gem2);
    var gem3 = Math.floor(Math.random()*10+1);
        console.log(gem3);
    var gem4 = Math.floor(Math.random()*10+1);
        console.log(gem4);

    var myScore = 0;

    var wins = 0;
        console.log(wins);
    var lose = 0;
        console.log(lose);

    $('.wins').html('Wins: ' + wins);
    console.log(wins);
    $('.losses').html('losses: ' + lose);

    $('.gemOne').on('click', function(){
       console.log("hi");
       myScore = myScore + gem1;
       $('.yourScore').html(myScore);
       console.log(myScore);
        if (myScore === randomScore){
            wins++;
            $('.wins').html('Wins: ' + wins);

        }
        else if (myScore > randomScore)
            lose++;
            $('.losses').html('losses: 0' + lose);
        

    })
    $('.gemTwo').on('click', function(){
       myScore = myScore + gem2;
       $('.yourScore').html(myScore);
       console.log(myScore);
        if (myScore === randomScore){
            wins++;
            $('.wins').html('Wins: ' + wins);
        
        }
        else if (myScore > randomScore)
            lose++;
            $('.losses').html('losses: 0' + lose);
        
    })
    $('.gemThree').on('click', function(){
        myScore = myScore + gem3;
        $('.ourScore').html(myScore);
        console.log(myScore);
        if (myScore === randomScore){
            wins++;
            $('.wins').html('Wins: ' + wins);
        }
        else if (myScore > randomScore)
            lose++;
            $('.losses').html('losses: 0' + lose);

        
    })
    $('.gemFour').on('click', function(){
        myScore = myScore + gem4;
        $('.yourScore').html(myScore);
        console.log(myScore);
        if (myScore === randomScore){
            wins++;
            $('.wins').html('Wins: ' + wins);

        }
        else if (myScore > randomScore)
            lose++;
            $('.losses').html('losses: 0' + lose);
        
    })

});