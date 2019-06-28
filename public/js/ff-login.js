$(function(){
    //1.点击头部登录功能

    //查询登录事件按钮a 按照id=login,绑定点击事件
    $('#login').click(function(){
        //判断如果是a#login元素触发
        //查询div.alert元素,加入属性class=in
        $('div.alert').fadeToggle();
   })
   //查询到div.alert下的span元素,绑定点击事件
   $('div.alert>span').click(function(){
       //点击span,使其父元素div.alert移除属性in
       $(this).parent().fadeOut();
   }) 

//1.头部登录验证功能

    //查询用户框和密码框,绑定失去焦点事件
    $('input#uname').blur(function(){
        //定义正则表达式
        let reg=/^\w{1,10}$/;
        vali.call(this,reg)
    })
    //定义成验证函数
    function vali(reg){
        let $input=$(this)
        //如果input的内容不符合规则,就给有.vali-info的td修改css隐藏
        if(reg.test($input.val())!==true){
            $input.parent().parent().next().children().addClass('vali-false')
        }else{ $input.parent().parent().next().children().removeClass('vali-false')}
    }
    //密码框
    $('input#upwd').blur(function(){
        let reg=/^\d{6,15}$/;
        vali.call(this,reg);
    })
    //点击提交按钮,进行数据库交互
    $('button#login').click(function(){
        //console.log('登录打桩')
        $.ajax({
        url:'http://127.0.0.1:8080/user/login',
        type:'post',
        data:{uname:uname.value,upwd:upwd.value},
        success: function(result) {
            console.log('登录打桩')
            if(result==200){
                alert('登录成功')
                location.href='http://127.0.0.1:5500/index.html'
            }
            else {
                alert('登录失败')
            }
        }
        })
    })


})