/**
 * jquery.freshline.Parallax - jQuery Plugin for Parallax Effects (freshline)
 * @version: 1.1 (03.10.2011)
 * @requires jQuery v1.2.2 or later 
 * @author Krisztian Horvath
 * All Rights Reserved, use only in freshline Templates or when Plugin bought at Envato ! 
**/




(function($,undefined){	
	
	
	
	////////////////////////////
	// THE PLUGIN STARTS HERE //
	////////////////////////////
	
	$.fn.extend({
	
		
		// OUR PLUGIN HERE :)
		fhtimer: function(options) {
	
		
			
		////////////////////////////////
		// SET DEFAULT VALUES OF ITEM //
		////////////////////////////////
		var defaults = {		
			targetDD:31,
			targetMM:12,
			targetYY:2020
		};
		
		options = $.extend({}, $.fn.fhtimer.defaults, options);
					
	
		return this.each(function() {
					
			var timerDiv=$(this);
			
			var opt=options
			
			setInterval(function() {
					var dif = dateDiff(new Date(),(opt.targetMM+"/"+opt.targetDD+"/"+opt.targetYY));
					timerDiv.find('#DD').html(dif.d);
					timerDiv.find('#HH').html(dif.h);
					timerDiv.find('#MM').html(dif.m);
					timerDiv.find('#SS').html(dif.s);
				}, 1000);
			
			
			
			
			
		})
	}
})


		///////////////////////////////
		//  --  LOCALE FUNCTIONS -- //
		///////////////////////////////
		
			function dateDiff( str1, str2 ) {
								
				var diff = Date.parse( str2 ) - Date.parse( str1 ); 
				
				return isNaN( diff ) ? NaN : {
					diff : diff,
					ms : Math.floor( diff            % 1000 ),
					s  : Math.floor( diff /     1000 %   60 ),
					m  : Math.floor( diff /    60000 %   60 ),
					h  : Math.floor( diff /  3600000 %   24 ),
					d  : Math.floor( diff / 86400000        )
				};
			}

	
				
})(jQuery);			

				
			

			   