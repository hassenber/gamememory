$(document).ready(function () {
	$("#save").click(function () {
		$.post("save.php");
		setTimeout(location.reload, 700);
      });
      $("#display").click(function () {
        var value = $("#single option:selected").val();
        var items=[];
		$.ajax({
			type: "GET",
			url: "../data/save/" + value,
			dataType: "xml",
			success: function(xml) {
				$(xml).find('highscore').each(function(){
					var name = $(this).find('name').text();
					var value = $(this).find('value').text();
					var time = $(this).find('time').text();
					var email = decode64($(this).find('email_add').text());
					items.push({"key":name,"value":value,"time":time,"email":email});
				}); //close each(
				$("#values-txt").html("<thead><td>Name</td><td>Highscore</td><td>Email Address</td><td>Date</td></thead>");
				for (j in items) {
					$('<tr></tr>').html('<td>' + items[j].key + '</td><td>' + items[j].value + '</td><td>' + items[j].email + '</td><td>' + items[j].time + '</td>').appendTo('#values-txt');
				}
			}
		});
      });
    });
function decode64(input) {
	var keyStr = "ABCDEFGHIJKLMNOP" +
               "QRSTUVWXYZabcdef" +
               "ghijklmnopqrstuv" +
               "wxyz0123456789+/" +
               "=";
     var output = "";
     var chr1, chr2, chr3 = "";
     var enc1, enc2, enc3, enc4 = "";
     var i = 0;

     // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
     var base64test = /[^A-Za-z0-9\+\/\=]/g;
     //if (base64test.exec(input)) {
    //    alert("There were invalid base64 characters in the input text.\n" +
    //          "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
    //          "Expect errors in decoding.");
    // }
     input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

     do {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
           output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
           output = output + String.fromCharCode(chr3);
        }

        chr1 = chr2 = chr3 = "";
        enc1 = enc2 = enc3 = enc4 = "";

     } while (i < input.length);

     return unescape(output);
  }