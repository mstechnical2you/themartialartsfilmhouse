
/*global$*/(document).ready(function(){
    /*global$*/("button").click(function(){
        var div = /*global$*/("div");
        startAnimation();
        function startAnimation(){
            div.animate({height: 300}, "slow");
            div.animate({width: 300}, "slow");
            div.css("background-color", "aqua");  
            div.animate({height: 100}, "slow");
            div.animate({width: 100}, "slow", startAnimation);
        }
    });
});

