var dif=2;
var score=0;
var allCards = [
     "card20A", "card21A", 
     "card22A", "card23A", 
     "card24A", "card25A", 
     "card26A", "card27A", 
     "card28A"
];
$(document).ready(function() {
// set up soundmanager
soundManager.setup({
  url: 'swf/'
});

// create sound
soundManager.onready(function() {   
    
    for(var i= 0; i < allCards.length; i++)
{
    tmp = allCards[i].replace("card","");    
    soundManager.createSound(allCards[i], 'boards/0/'+tmp+'0.mp3');
}
});		
// debute le jeux


               
  startGame(dif);  
});
function contenur(){
var count=300;
countdown = setInterval(function(){
var sec=count%60;
var min=(count-sec)/60;
if (sec<10)
$("h1.countdown").html(min+":0"+sec);
else
$("h1.countdown").html(min+":"+sec);

if (count==0) {
clearInterval(countdown);
stopgame();
}
count--;
},1000);
};
function stopgame() {
score=0;
dif=2;
soundstop();
Sexy.confirm('<h1>Game Over</h1>', { onComplete: 
                                function(returnvalue) {
                                        if(returnvalue)
                                        {
                                        $(".card:first-child").addClass("first").removeClass("card-removed noclick");
                                        $(".card").not(".first").remove();
                                        $(".first").html();
                                        startGame(dif);
                                         }
                                        else
                                        {
                                            $(".card:first-child").addClass("first").removeClass("card-removed noclick");
                                            $(".card").not(".first").remove();
                                            $(".first").html();
                                            Sexy.alert('<h1>Game Over</h1>');
                                        }
                                }});
};
function startGame(iterat) {
                var step_tour=iterat-1;
                $(".tour").text(step_tour);
                if (iterat==2) {
                contenur();
		  }
                var matchingGame = {};
		matchingGame = allCards.sort(shuffle).slice(0,iterat);
		matchingGame.deck = $.merge(matchingGame, matchingGame);
		if ($(".card:first-child").hasClass("first")) {
				$(".card:first-child").removeClass("first");
				$(".card:first-child").html('<div class="face front"></div><div class="face back"></div>');
		};
		if (iterat==2) $(".clicks, .pairs").text("0");
		function shuffle() {
			return 0.5 - Math.random();
		};
		matchingGame.deck.sort(shuffle);
                var iterate=(iterat*2)-1;
		for (var i=0;i<iterate;i++) {
			$(".card:first-child").clone().appendTo("#cards")
		};
		
		
		$("#cards").children(".card").each(function(index) {
                        var _content=parseInt($(document).width());
                        _content=parseInt(_content/135);
                    	$(this).css({
				"left" : ($(this).width() + 10) * (index % _content),
				"top" : ($(this).height() + 10) * Math.floor(index/_content)
				});
			var pattern = $(matchingGame.deck).get();
			$(this).find(".back").addClass(pattern[index]);
			$(this).attr("data-pattern", pattern[index]);
			$(this).click(selectCard);
		});
	};
function selectCard() {
	if ($(".card-flipped").size() > 1) {
             return;
	}
        var cards= Array();
	if ($(this).hasClass("card-flipped") == false) {
		update($(".clicks:first"));
		update($(".clicks:last"));

		};
	$(this).addClass("card-flipped");
    soundstop();
    soundManager.play($(this).attr("data-pattern"));
        // insere music

	if ($(".card-flipped").size()== 2) {
		setTimeout(checkPattern,500);
		}
	};
function checkPattern() {
		if (isMatchPattern()) {
			$(".card-flipped").removeClass("card-flipped").addClass("card-removed");
			$(".card-removed").bind("fadeOut", removeTookCards);
			setTimeout(function() {
				$(".card-removed").addClass("noclick")
				}, 300);
			} else {
				$(".card-flipped").removeClass("card-flipped");
			}
		if ($("#cards").children().length == $("#cards").children(".card-removed").length) {
                         Sexy.confirm('<h1>Congratulation</h1><p>Step '+dif+'</p>', { onComplete: 
                                function(returnvalue) {
                                        if(returnvalue)
                                        {
                                              $(".card:first-child").addClass("first").removeClass("card-removed noclick");
					$(".card").not(".first").remove();
					$(".first").html();
					score+=pairs;
                                        if (dif<8)
                                        {
                                                	dif++;
							soundstop();
                                                        startGame(dif);
                                        }
                                         }
                                        else
                                        {
                                            Sexy.alert('<h1>Game Over</h1>');
                                        }
                                }
                });
		}
		var pairs = Math.floor($(".card-removed").length/2);
		if ($(".pairs:first").text() != (pairs+score)) {
			$(".pairs").text(pairs+score);
                        var tx_score=parseInt($(".score:first").text());
                        tx_score+=100;
                        $(".score").text(tx_score);
		}
	};
function isMatchPattern() {
	var cards = Array();
	$(".card-flipped").each(function() {
		cards.push($(this).attr("data-pattern"));
	});
	return (cards[0] == cards[1]);
};
function soundstop(){
    for(var i= 0; i < allCards.length; i++)
{
        soundManager.stop(allCards[i]);
}
};

function removeTookCards() {
	$(".card-removed").remove();
};
function update(j) {
	var n = parseInt(j.text(), 10);
	j.text(n + 1);
};
