$(document).ready(function(){
  // Your code goes below
  console.log("Page loaded");

  var request = $.ajax({
    url: "https://dog.ceo/api/breeds/image/random/3",
    method: "GET",
  });

  request.done(function( response ) {
  	console.log("here is the response", response)
   

   	// //(1) replace image
   	// $("#beach1").attr("src",response.message);

   	// //(2) append to end
   	// $("#slideshowList").append('<li>\
    //         	<img src='+response.message+' alt="" uk-cover>\
    //     		<div class="uk-position-center uk-position-small uk-text-center uk-light">\
    //         	    <h2 class="uk-margin-remove">Find Your Beach</h2>\
    //         	    <p class="uk-margin-remove">It\'s around here somewhere.</p>\
    //         	</div>\
    //     	</li>');

    //(3) three different random dog images using one request; loop through them, appending each one to the slideshow
    for(var i=0;i<response.message.length;i++){
      $("#slideshowList").append('<li>\
            	<img src='+response.message[i]+' alt="" uk-cover>\
        		<div class="uk-position-center uk-position-small uk-text-center uk-light">\
            	    <h2 class="uk-margin-remove">Find Your Beach</h2>\
            	    <p class="uk-margin-remove">It\'s around here somewhere.</p>\
            	</div>\
        	</li>');
    }



   });

  request.fail(function( requestObject, textStatus ) {
    alert( "Request failed: " + textStatus );
  });

});