<style rel="stylesheet"> .spr-review-content-body{ opacity:0; }</style>
<script type="text/javascript">
ryviu();
var tabclass = document.getElementsByClassName("review_tab");   

document.addEventListener('click', function (e) {
   if(e.target.getAttribute('href') == '#shopify-product-reviews' || hasClass(e.target,'review_tab')){
   	  ryviu();
   }
}, false); 
  
function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}  
  
function ryviu(){
	setTimeout(function(){
		var reviewItems = document.getElementsByClassName("spr-review-content-body");
		if(reviewItems.length > 0 && reviewItems[0].getAttribute('data-ryviu') != 'ok'){
			getRyviu(reviewItems);  
		}else{
			ryviu();
		}
	}, 100);
}
function getRyviu(ryviuItems){ 
    
	for (var i = 0; i < ryviuItems.length; i++) {

	    var reviewCt = ryviuItems[i].innerText;	           
      
		if(reviewCt.indexOf('@') > 1){
			var reviewCtArr = reviewCt.split('@');
	
			var urls = findUrls(reviewCtArr[1]);
	
			var imageHtml = '';
			for(var k = 0; k < urls.length; k++){ 
				imageHtml += '<div onclick="showImg(this,\''+urls[k]+'\')" style="float:left; overflow:hidden;float:left; margin-right: 5px;"><a class="reviewImgs" href="javascript:void(0)" data-src="'+urls[k]+'_350x350.jpg"><img src="'+urls[k]+'_50x50.jpg" /></a></div>';
			}
            imageHtml += '<p style="clear:both; float:left; padding-top: 10px;" class="bigImg"></p>'; 
			

			//Add content with images
			ryviuItems[i].innerHTML = '<p>'+reviewCtArr[0]+'</p>'+imageHtml;
        }else{
        	ryviuItems[i].innerHTML = '<p>'+reviewCt+'</p>'
        }
		ryviuItems[i].setAttribute ('data-ryviu','ok');
      
        ryviuItems[i].style.opacity = '1';

	}
    
}
  
function showImg(elm, img){
	elm.parentNode.lastChild.innerHTML = '<div style="position:relative;"><a style="position: absolute; right: 0; top: 0;  background: #333;  height: 35px; width: 35px; font-size: 15px; display: block;  text-align: center;  opacity: 0.8; line-height: 35px;  color: #FFF; border-radius: 35px;" href="javascript:void(0)" onclick="closeRyviuImg(this)">X</a><img src="'+img+'_350x350.jpg" /></div>';
}

function closeRyviuImg(elm){
	elm.parentNode.innerHTML = '';
}

function findUrls( text )
{
    var source = (text || '').toString();
    var urlArray = [];
    var url;
    var matchArray;

    // Regular expression to find FTP, HTTP(S) and email URLs.
    var regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

    // Iterate through any URLs in the text.
    while( (matchArray = regexToken.exec( source )) !== null )
    {
        var token = matchArray[0];
        urlArray.push( token );
    }
    return urlArray;
}
</script>