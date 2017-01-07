
 jQuery(document).ready(function($){
     
                    $(".grid").click(function(e) {
          $("#products_wrapper ul.products-list").hide();
$("#products_wrapper ul#products-grid").show();
$('.view-list').removeClass('active');
$('.view-grid').addClass('active');
                    e.preventDefault();
                });

                $(".list").click(function(e) {
               $("#products_wrapper ul.products-list").show();
                $("#products_wrapper ul#products-grid").hide();
                $('.view-list').addClass('active');
                $('.view-grid').removeClass('active');

});


})
function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = url;
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
   // window.opener.location.href = url;
}
function showPopup(){
    html = '<div class="etheme-popup-overlay"></div><div class="etheme-popup"><div class="etheme-popup-content"></div></div>'
    jQuery('body').prepend(html);
    popupOverlay = jQuery('.etheme-popup-overlay');
    popupWindow = jQuery('.etheme-popup');
    popupOverlay.one('click',function(){
        hidePopup(popupOverlay,popupWindow);
    });
}
function hidePopup(popupOverlay,popupWindow){
    popupOverlay.fadeOut(400);
    popupWindow.fadeOut(400).html('');
}
 jQuery(document).ready(function($){
  $('.link-compare').click(function(){
		var idProduct = $(this).attr('id').replace('comparator_item_', '');
			$.ajax({
	  			url: 'index.php?controller=products-comparison&ajax=1&action=add&id_product=' + idProduct,
	 			async: true,
                            dataType: "json",
                            success: function(responseData) {
                                        if(responseData==0){   
                                        
                                             showPopup();        
                    productImageSrc = jQuery('.main-image_'+idProduct+' img').attr('src');                    
                    productImage = '<img width="72" src="'+productImageSrc+'" />';                    
                    //productName = jQuery('.main-image_'+idProduct+' img').attr('alt');                    
                    //cartHref = jQuery('#top-cart > a').attr('href');                    
                    popupHtml = productImage + notsuccessfullyaddcompare;
                    popupWindow.find('.etheme-popup-content').css('backgroundImage','none').html(popupHtml);                    
                    jQuery('.cont-shop').one('click',function(){
                        hidePopup(popupOverlay,popupWindow);
                    });       

                                
                                    }
                                    else{
                                     showPopup();        
                    productImageSrc = jQuery('.main-image_'+idProduct+' img').attr('src');                    
                    productImage = '<img width="72" src="'+productImageSrc+'" />';                    
                    productName = jQuery('.main-image_'+idProduct+' img').attr('alt');                    
                    //cartHref = jQuery('#top-cart > a').attr('href');                    
                    popupHtml = productImage + '<em>'+productName+'</em> ' + successfullycompareaddsuccess;
                    popupWindow.find('.etheme-popup-content').css('backgroundImage','none').html(popupHtml);                    
                    jQuery('.cont-shop').one('click',function(){
                        hidePopup(popupOverlay,popupWindow);
                    });  
                               
                                }
                            },
                            error: function(XMLHttpRequest, textStatus, errorThrown) {
                               
                            }
		});	
	});

$(".link-compare").click(function(e) {
e.preventDefault();
});
})