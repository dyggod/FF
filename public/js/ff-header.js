$(function(){
    $.ajax({
        url:'ff-header.html',
        type:'get',
        success: function(html) {
            //console.log(html);
            $(html).replaceAll('#header');
            //带着css样式过去
            
            $(`<link rel='stylesheet' href='css/ff-header.css'>`).appendTo('head');
            var script=document.createElement('script');
            script.src="js/ff-login.js";
            document.body.appendChild(script);
        }
    })
})