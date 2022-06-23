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
    
    
     
      
    jQuery('#country-name-product2').html(location.country_name);
  jQuery('#country-name-product3').html(location.country_name);
      
    
  if (userCountryName == "United States") {   
    
$(".topbarshipping").show();
    jQuery('.topbarlocation').html(location.region);
   
    jQuery('#country-name').html(location.region);
     jQuery('#country-name-product2').html(location.region);
 	jQuery('#country-name-product3').html(location.region);
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




