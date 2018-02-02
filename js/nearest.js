  /**
  * Restrict special characters in address input 
  */
  jQuery(function(){
 
      jQuery('#edit-nearest-store-address').keyup(function()
	      {
		      var yourInput = jQuery(this).val();
		      re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
		      var isSplChar = re.test(yourInput);
		      if (isSplChar) {
			      var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
			      jQuery(this).val(no_spl_char);
		      }
	      });
 
  });
  
  