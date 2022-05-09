


    // <![CDATA[
jQuery.ajax({
url: 'https://api.ipdata.co?api-key=707d6b4c1028c1a7659278a928ac17764a3e7c232b2745974ea253e5',
  type: 'POST',
  dataType: 'jsonp',
  success: function (location) {
    
    
    const userCountryState = location.region;
    
    const userCountryName = location.country_name;
    
  
    
    
    jQuery('#country-name').html(location.country_name);
    

    
  
    
    
    
    jQuery('#country-name-product').html(location.country_name);
    
    
     
    

      
    
  if (userCountryName == "United States") {   
    
   // jQuery('#topgeopcopid').html('FREE EXPRESS DELIVERY TO');
   
    //
   // jQuery('#freeshippingnote-productpage').html('Free Express Delivery (1-5 Business Days)');
   //  jQuery('#secondbullet-productpage').html('Fully Insured Shipping');
    
    jQuery('#dhlheadline').html('FREE EXPRESS DELIVERY');
    jQuery('#dhlcopy').html('All orders over 190 USD are shipped with 1-5 Day Express for free.');
    jQuery('#country-name').html(location.region);
 	
//        $('*[id*=geofreeshippingoncollection]').each(function() {
//    $(this).html('FREE EXPRESS DELIVERY'); });

   
    $(".price__fordiscont").show();
    $(".progressbar__wrapper").show();
    
    
    }
    
    
    
 
    
    
      if (userCountryName == "Canada") {
        
        jQuery('#country-name').html(location.region);
        $(".price__fordiscont").show();
    	$(".progressbar__wrapper").show();
    
      
      }
    
      

    
    
  }
  
  
  
});
// ]]>




