//*********用js引入脚ff-footer.html */
$(function(){
    $.ajax({
        url:'footer.html',
        type:'get',
        success:function(html){
            $(html).replaceAll('#footer');
            $(`<link rel='stylesheet' href='/css/footer.css'>`).appendTo('head');
            var script=document.createElement('script');
            script.src="js/ff-footer.js";
            document.body.appendChild(script);
        }
    })
})
