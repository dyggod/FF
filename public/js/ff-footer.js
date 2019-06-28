//页面底部用户登录功能
(function(){
    //找到用户框和密码框
   let uname=document.getElementById('Funame');
   let upwd=document.getElementById('Fupwd');
   //绑定失去焦点事件
   uname.onblur=function(){
        let reg=/^\w{1,10}$/;
        testReg.call(this,reg);  
   }
    function testReg(reg){
        let input=this;
        //找到修改元素并修改
        let td=input.parentNode.nextElementSibling;
        //验证是否符合规则,不符合则显示
        if(reg.test(input.value)!==true){
            td.className='vali_fail'
        }
    }  
    upwd.onblur=function(){
        let reg=/^\d{6}$/;
        testReg.call(this,reg);
    } 
   //找到提交按钮
   let submit=document.getElementById('submit')
   //为按钮绑定事件处理函数
   submit.onclick=function(){
       let submit=this;
        ajax({
            url:'http://127.0.0.1:8080/user/login',
            type:'post',
            data:'uname='+uname.value+'&upwd='+upwd.value
        })
        .then(function(a){
            if(a==200){
                alert('登录成功')
                location.href=location;
            }else{alert('登录失败')}
        })
   }
})()
