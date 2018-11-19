// window.onload = function () {
//     /*获得button对象*/
//     var btn = document.getElementById('btn')
//     /*声明定时器*/
//     var timer = null
//     /*标识是系统滑动还是用户滑动*/
//     var isScroll = false
//     /*用户滑动时执行*/
//     window.onscroll = function () {
//         if (!isScroll){
//             clearInterval(timer)
//         }
//         isScroll = false
//     }
//     /*返回顶部的点击事件*/
//     btn.onclick = function () {
//         timer = setInterval(function () {
//             /*获得距离顶部的距离*/
//             var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//             /*滑动的速度 floor向下取整*/
//             var speed = Math.floor(-scrollTop/9)
//             /*回到顶部时，清除定时器*/
//             if(scrollTop == 0){
//                 clearInterval(timer)
//             }
//             document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed
//             /*系统滑动*/
//             isScroll = true
//         },30)
//     }
// }

window.onload = function() {
    var obtn = document.getElementById('btn');
    var timer = null;
    var isTop = true;
    //获取页面的可视窗口高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    //滚动条滚动时触发
    window.onscroll = function(){
        //在滚动的时候增加判断
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;//特别注意这句，忘了的话很容易出错
        if (osTop >= clientHeight / 4) {
            obtn.style.display = 'block';
        }else{
            obtn.style.display = 'none';
        }

        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    };


    btn.onclick = function(){

        //设置定时器
        timer = setInterval(function(){
            //获取滚动条距离顶部的高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;  //同时兼容了ie和Chrome浏览器

            //减小的速度
            var isSpeed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
            //console.log( osTop + isSpeed);

            isTop = true;

            //判断，然后清除定时器
            if (osTop == 0) {
                clearInterval(timer);
            }
        },30);

    };
}