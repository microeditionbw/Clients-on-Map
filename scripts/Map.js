jQuery(document).ready(function () {
  /*
  * load all cities from cities.json
  */


for(var i=0;i<json.cities.length;i++)
{
 // set id's
  jQuery('.Map-draw').append('<div data-city="'+i+'" style="margin-left:'+json.cities[i].x+'px;margin-top:'+json.cities[i].y+'px;" class="circle"></div>');
}
  /* city load end*/

  /* view modal */
  jQuery('.circle').hover(function() {

    var city=jQuery(this).data("city");
    var html="";
    var name="";
    jQuery(".partners").css({"-moz-column-count":"1","-webkit-column-count":"1","column-count":"1"});
     jQuery(".modal").css({"width":"175px"});
    for(var i=0;i<json.cities.length;i++)
    {
      if(i==city)
      {
        if(json.cities[i].partners.length>=10){ //если больше 10 партнеров
          jQuery(".partners").css({"-moz-column-count":"2","-webkit-column-count":"2","column-count":"2"});
          jQuery(".modal").css({"width":"350px"});
        }
        name="<strong>"+json.cities[i].name+"</strong>";
       
        for(var child=0;child<json.cities[i].partners.length;child++)
        {
         html+="<span>"+json.cities[i].partners[child]+"</span>";
        }
      }

    }
    jQuery('.city').html(name);
        var position = jQuery(this).offset();
     jQuery(".modal").css({top: position.top+35, left: position.left-(jQuery(".modal").width()/2)+3});
   
    jQuery(".modal").removeClass("scaleOut").addClass("scaleIn");

     jQuery('.partners').html(html);
    jQuery(".modal").show();
 
}, 
function() {
  jQuery(".modal").removeClass("scaleIn").addClass("scaleOut");
  //jQuery(".modal").fadeOut(40).removeClass("scaleIn").addClass("scaleOut");
});



});


/*
* узнать координату города
jQuery(".Map-draw").click(function(e){
   var parentOffset = jQuery(this).parent().offset(); 
   var relX = e.pageX - parentOffset.left;
   var relY = e.pageY - parentOffset.top;
   alert("x: " + relX + " y:" +relY);
});*/