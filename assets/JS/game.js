$(document).ready(function(){

    var randomScore = Math.floor(Math.random()*100+1)
    console.log(randomScore);

    $('#displayScore').text(randomScore);

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

    var lose = 0;

    $('#wins').text(wins);
    $('#losses').text(lose);

    function reset(){
        var randomScore = Math.floor(Math.random()*100+1)
            
         $('#displayScore').text(randomScore);

        var gem1 = Math.floor(Math.random()*10+1)
        var gem2 = Math.floor(Math.random()*10+1)
        var gem3 = Math.floor(Math.random()*10+1)
        var gem4 = Math.floor(Math.random()*10+1)
        myScore=0;
        $('#yourScore').text(myScore)
    }

    $('#gem1').on('click', function(){
        myScore = myScore + gem1;
        if (myScore === randomScore){
            wins++;
            $('#wins').text(wins);
        }
        else (myScore > randomScore)
            lose++;
            $('#losses').text(lose);
        

    })
    $('#gem2').on('click', function(){
        myScore = myScore + gem2;
        if (myScore === randomScore){
            wins++;
            $('#wins').text(wins);
        
        }
        else (myScore > randomScore)
            lose++;
            $('#losses').text(lose);
        
    })
    $('#gem3').on('click', function(){
        myScore = myScore + gem3;
        if (myScore === randomScore){
            wins++;
            $('#wins').text(wins);
        }
        else (myScore > randomScore)
            lose++;
            $('#losses').text(lose);

        
    })
    $('#gem4').on('click', function(){
        myScore = myScore + gem4;
        if (myScore === randomScore){
            wins++;
            $('#wins').text(wins);

        }
        else (myScore > randomScore)
            lose++;
            $('#losses').text(lose);
        
    })

});