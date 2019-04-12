/*window.onload = function(){
    $("#start").mouseover(start);
    $("h2").text("Click the \"S\" to begin.");
    validate();
};*/

'use strict';
$(function(){
    $("#start").mouseover(start);
    $("h2").text("Click the \"S\" to begin.");
    validate();
});

function start(){
    $(".boundary").each(function(index, e){
        e = $(e);
        //this = $(this);
        e.removeClass("youlose");
    });
    set();
    $("h2").text("Go ahead towards \"E\".");
    $("#maze").mouseover(trace);
    $("#end").mouseover(end);
}

function set(){
    $(".boundary").mouseover(getLost);
}

function reset(){
    $("#end").off("mouseover");
    $("#maze").off("mouseover");
    $("#maze").off("mouseleave");
    $(".boundary").off("mouseover");
}

function trace(){
    $("#maze").mouseleave(getLost);
}

function end(){
    $("h2").text("you win ):");
    reset();
}

function getLost(){
    $("#end").off("mouseover");
    $("h2").text("Sorry you lose :(. Click the \"S\" to try again.");
    $(".boundary").each(function(index, e){
        e = $(e);
        e.addClass("youlose");
    });
}

function validate(){
    $(".validation").css("position", "fixed");
    $(".validation").css("bottom", '0');
    $(".validation").css("right", '0');
    $(".validation").css("opacity", '.5');
}