var dif=2;
var score=0;

// card
var allCards = [
     "cardAQ", "cardAK", 
     "cardBQ", "cardBK",
    "cardCQ", "cardCK",
     "cardDQ", "cardDK"
];

$(document).ready(function() {
soundManager.setup({
  url: 'swf/'
});
  soundManager.onready(function() {   
    
    for(var i= 0; i < allCards.length; i++)
{
        soundManager.createSound(allCards[i], 'data/'+allCards[i]+'.mp3');
}
});
  startGame(dif);  
});




function startGame(iterat) {
		var matchingGame = {};
		matchingGame = allCards.sort(shuffle).slice(0,iterat);
		matchingGame.deck = $.merge(matchingGame, matchingGame);
		if ($(".card:first-child").hasClass("first")) {
				$(".card:first-child").removeClass("first");
				$(".card:first-child").html('<div class="face front"></div><div class="face back"></div>');
		};
		if (iterat==2) $("#clicks, #pairs").text("0");
		function shuffle() {
			return 0.5 - Math.random();
		};
		matchingGame.deck.sort(shuffle);
                var iterate=(iterat*2)-1;
		for (var i=0;i<iterate;i++) {
			$(".card:first-child").clone().appendTo("#cards")
		};
		$("#cards").children(".card").each(function(index) {
			$(this).css({
				"left" : ($(this).width() + 10) * (index % 6),
				"top" : ($(this).height() + 10) * Math.floor(index/6)
				});
			var pattern = $(matchingGame.deck).get();
			$(this).find(".back").addClass(pattern[index]);
			$(this).attr("data-pattern", pattern[index]);
			$(this).click(selectCard);
		});
		setTimeout(function() {
		$("#update-val tr").remove();
		var items=[];
		$.ajax({
			type: "GET",
			url: "data/highscores.xml",
			dataType: "xml",
			success: function(xml) {
				$(xml).find('highscore').each(function(){
					var name_text = $(this).find('name').text();
					var value_text = parseInt($(this).find('value').text());
					items.push({"key":name_text,"value":value_text});
				});
				if (items.length >= 1) {
					$("#update-val").html("<thead><td>Name</td><td>Highscore</td></thead>");
					var j;
					var cmp = function(x, y){
							return x > y ? 1 : x < y ? -1 : 0
						}
					items = items.sort(function(x, y){
						return cmp(x.value, y.value) < cmp(y.value, x.value) ? -1:1
					});
					if (items.length<20) {
						for (j in items) {
							$('<tr></tr>').html('<td>' + items[j].key + '</td>' + '<td>' + items[j].value + '</td>').appendTo('#update-val');
							}
						} else {
							for (j=0;j<=19;j++) {
								$('<tr></tr>').html('<td>' + items[j].key + '</td>' + '<td>' + items[j].value + '</td>').appendTo('#update-val');
							}
						}
				} else {
						$('<tr></tr>').html('<td>Hmmmm... no records so far!</td>').appendTo('#update-val');
					}
			}
		});
		},1800);
	};
function selectCard() {
	if ($(".card-flipped").size() > 1) {
             
		return;
	}
        var cards= Array();
	if ($(this).hasClass("card-flipped") == false) {
		update($("#clicks"));
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
			$("#go-2-nxt-lvl").html("Step "+dif+"<br /><button id='reload'>OK</button></p>").fadeIn(1200);
			$("#reload").on("click", function() {
				$("#go-2-nxt-lvl").fadeOut(500);
				setTimeout(function() {
					$(".card:first-child").addClass("first").removeClass("card-removed noclick");
					$(".card").not(".first").remove();
					$(".first").html();
					var hs_value = $("#clicks").text();
					var name_value = $("#name_value").val();
					var ea_value = $("#ea_value").val();
					$.post("data/highscore.php?name=" + name_value + "&value=" + hs_value + "&email_add=" + ea_value);
					setTimeout(function() {
                                                score+=pairs;
                                                if (dif<=8)
                                                {
                                                dif++;
                                                soundstop();                        
						                        startGame(dif);
                                                }
					},100);
				},400);
			});
		}
		var pairs = Math.floor($(".card-removed").length/2);
		if ($("#pairs").text() != (pairs+score)) {
			$("#pairs").text(pairs+score);
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
}

function removeTookCards() {
	$(".card-removed").remove();
};
function update(j) {
	var n = parseInt(j.text(), 10);
	j.text(n + 1);
};
