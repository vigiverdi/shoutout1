
var iterationcard = 1;

while(iterationcard <= channelcount) {

if (iterationcard == 1) {

	var htmlcard = '<div class="channel_'+iterationcard+' card activee"><img src="'+imgUrl+'" class="channelImage"><div class="card-content"><div class="channelName">'+chanName+'</div> <hr class="new">	<div class="odometer subscriberCount">0</div></div></div>';

} else {
	var htmlcard = '<div class="channel_'+iterationcard+' card"><img src="'+imgUrl+'" class="channelImage"><div class="card-content"><div class="channelName">'+chanName+'</div> <hr class="new"> 	<div class="odometer subscriberCount">0</div></div></div>';
}

$('body').append(htmlcard);

iterationcard++;

};

		function fn60sec() {

		var ytdata="";

		var channelList = [];

		var channelName = [];

		var channelImage = [];

		var subscriberCount = [];

		$.getJSON('data/channels.json', function(channels){

		channelList = channels.reverse();

				ytdata="https://apilcnl.glitch.me/api/yt/channel/" + channelList;

				$.getJSON(ytdata, function(result){

					console.log(result);
					ytJSON = result;
		  			var iteration = 0;
		  	   		while (iteration <= Math.min(channelcount-1,result.items.length-1)) {

   	   					var channelNumber = channelList.indexOf(result.items[iteration].id) + 1;

						channelName[iteration] = result.items[iteration].snippet.title;

						subscriberCount[iteration] = result.items[iteration].statistics.subscriberCount;

						channelImage[iteration] = result.items[iteration].snippet.thumbnails.high.url;

						$(".channel_" + channelNumber + " .channelName").html(channelName[iteration]);

						$('.channel_' + channelNumber + ' .subscriberCount').html(subscriberCount[iteration]);

						$('.channel_' + channelNumber + ' .channelImage').attr('src',channelImage[iteration]);

						iteration++;

					};
				});
			});

			}

		fn60sec();
		setInterval(fn60sec, 30000);







