$(document).ready(function(e){$("#podokonn a").click(function(){$("#podokonn a").removeClass("active");var pics=$(this).attr("href");$(this).addClass("active")
$("#podok_big").attr("src",pics);return false;})
if($('.tabs-button').length){$('.tabs-button > div, .tabs-icons > div').each(function(){var _curTab=$(this);_curTab.on('click',function(){if($(this).hasClass('active'))
{$('.tabs-button > div, .tabs-icons > div').removeClass('active');$('.tabs-content > div').removeClass('active');}
else
{var tabname=$(this).data('tab-name');$('.tabs-button > div, .tabs-icons > div').removeClass('active');$('.tabs-content > div').removeClass('active');$(this).addClass('active');$('#'+tabname).addClass('active');}})});}
if($('.sample-crs').length){$('.sample-crs').jcarousel({scroll:1,wrap:'both'})}
if($('.first-crl').length){function firstSliderInit(fNubmer){var liCout=0;$('.product-page .item-nav-block li').each(function(){$(this).data('my-index',liCout);liCout++;});var ulCount=$('.product-page .item-nav-block ul.item-nav').length;$('.product-page .item-nav-block ul.item-nav').first().addClass("active");$('.first-crl .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.first-crl .prev',next:'.first-crl .next',items:{start:fNubmer},scroll:{fx:'scroll',items:1,duration:1000,onBefore:function(data){var curLi,pos=$(this).triggerHandler('currentPosition');$('li[data-my-index="'+pos+'"]').addClass('active');$('.product-page .item-nav-block li').removeClass('active').each(function(){var dataPos=$(this).data('my-index');if(pos==dataPos)
{curLi=$(this);}});$('.product-page .item-nav-block ul.item-nav').removeClass('active');curLi.addClass('active');var bindex=curLi.parent().addClass('active').index();$('.product-page ul.large-btn li').find('a').removeClass('active');$('.product-page ul.large-btn li:eq('+(bindex-1)+')').find('a').addClass('active');setTimeout(function(){$('.second-crl .carousel').trigger('slideTo',pos);},300);}}});}
var url=window.location.search,startIndex=url.indexOf('='),ednIndex=url.indexOf('&'),firstParam,secondParam,index;firstParam=url.slice(startIndex+1,(+ednIndex));startIndex=url.indexOf('=',ednIndex);secondParam=url.slice(startIndex+1);if(firstParam=='standart'){index=0;if(secondParam=='rehau'){index=0;}else if(secondParam=='kbe'){index=1;}}else if(firstParam=='classic'){index=2;if(secondParam=='sib'){index=2;}else if(secondParam=='kbe'){index=3;}}else if(firstParam=='premium'){index=4;if(secondParam=='rehau'){index=4;}else if(secondParam=='kbe'){index=5;}}else{index=0;}
firstSliderInit(index);}
$('.product-page ul.large-btn li').on('click',function(){var pos=$('.product-page .item-nav-block ul.item-nav:eq('+$(this).index()+') li').first().data('my-index');$('.first-crl .crl').trigger('slideTo',pos);setTimeout(function(){$('.second-crl .carousel').trigger('slideTo',pos);},300);return false;});$('.product-page .item-nav-block li').on('click',function(){$('.first-crl .crl').trigger('slideTo',$(this).data('my-index'));setTimeout(function(){$('.second-crl .carousel').trigger('slideTo',$(this).data('my-index'));},300);return false;});if($('.second-crl').length){$('.second-crl .carousel').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.second-crl .prev',next:'.second-crl .next',pagination:'.second-crl .slider-pagination',scroll:{fx:'scroll',items:1,duration:1000,onBefore:function(data){var pos=$(this).triggerHandler('currentPosition');setTimeout(function(){$('.first-crl .crl').trigger('slideTo',pos);},300);}}});}
if($('.color-crl').length){$('.color-crl .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.color-crl .prev',next:'.color-crl .next',pagination:'.color-crl .slider-pagination',scroll:{fx:'scroll',items:1}})}
if($('.quality-crl').length){$('.quality-crl .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.quality-crl .prev',next:'.quality-crl .next',pagination:'.quality-crl .slider-pagination',scroll:{fx:'scroll',items:1}})}
if($('.quality-cr2').length){$('.quality-cr2 .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.quality-cr2 .prev',next:'.quality-cr2 .next',pagination:'.quality-cr2 .slider-pagination',scroll:{fx:'scroll',items:1}})}
if($('.quality-cr3').length){$('.quality-cr3 .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.quality-cr3 .prev',next:'.quality-cr3 .next',pagination:'.quality-cr3 .slider-pagination',scroll:{fx:'scroll',items:1}})}
if($('.quality-cr4').length){$('.quality-cr4 .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.quality-cr4 .prev',next:'.quality-cr4 .next',pagination:'.quality-cr4 .slider-pagination',scroll:{fx:'scroll',items:1}})}
if($('.action').length){$('.action .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.action .btn-crls.prev',next:'.action .btn-crls.next',scroll:{fx:'uncover',items:1}})}
if($('.our-work-crl').length){$('.our-work-crl .crl').carouFredSel({responsive:true,width:'100%',auto:false,prev:'.our-work-crl .flipto-prev',next:'.our-work-crl .flipto-next',pagination:'.our-work-crl .slider-pagination',scroll:{fx:'uncover',items:1}})}
if($('.panorama').length){$('.panorama .crl').jcarousel({scroll:1,wrap:'both'})}
if($('.product-carousel').length){$('.product-carousel .crl').jcarousel({scroll:5,wrap:'both'})}
if($('.clients-carousel').length){$('.clients-carousel .crl').jcarousel({scroll:3,wrap:'both'})}
if($('.sert-carousel').length){$('.sert-carousel .crl').jcarousel({scroll:4,wrap:'both'})}
$('.switch .handle a').click(function(e){if(!$('.switch').hasClass('active')){$('.switch .handle').animate({left:60},200);$('.findings-sample img').eq(0).fadeOut(500);$('.findings-sample img').eq(1).fadeIn(500);$('.switch').addClass('active');}else{$('.switch .handle').animate({left:32},200);$('.findings-sample img').eq(1).fadeOut(500);$('.findings-sample img').eq(0).fadeIn(500);$('.switch').removeClass('active');}
return false;});$('.switch .left').click(function(e){$('.switch .handle').animate({left:32},200);$('.findings-sample img').eq(1).fadeOut(500);$('.findings-sample img').eq(0).fadeIn(500);$('.switch').removeClass('active');return false;});$('.switch .right').click(function(e){$('.switch .handle').animate({left:66},200);$('.findings-sample img').eq(0).fadeOut(500);$('.findings-sample img').eq(1).fadeIn(500);$('.switch').addClass('active');return false;});$('.findings-sample img').eq(0).show();});$(window).load(function(e){if($('.gallery-crs').length){$('.gallery-crs').flipster({itemContainer:'ul',itemSelector:'li',style:'carousel',start:0,enableKeyboard:true,enableMousewheel:true,enableTouch:true,enableNav:false,enableNavButtons:true,onItemSwitch:function(){}});}
if($('.com-crl').length){$('.com-crl').flipster({itemContainer:'ul',itemSelector:'li',style:'carousel',start:0,enableKeyboard:true,enableMousewheel:true,enableTouch:true,enableNav:false,enableNavButtons:true,onItemSwitch:function(){}});}});