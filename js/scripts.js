const cat1 = $('#my-elem1'), 
	  cat2 = $('#my-elem2');
let cat1clicks =0,
 	cat2clicks =0;




cat1.click(function(e) {
  //the element has been clicked... do stuff here
cat1clicks++;
$("#clicks1").html(cat1clicks);
});


cat2.click(function(e) {
  //the element has been clicked... do stuff here
cat2clicks++;
$("#clicks2").html(cat2clicks);

});

