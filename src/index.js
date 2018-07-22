'use strict';

// 所有用到的设备的id
// button
// sg1
// sg2
// pd1
// pd2



$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    // 在 `#button` 按下时读取两个滑动电位器的模拟信号
    $('#button').on('push', function () {
        var temp=0;
        console.log('Button pushed.');
        $('#led-r').turnOn();
        
        // 定义读取模拟信号的回调函数
        function handleV(error, voltage) {
            var temp;
            console.log("当前电压信号为："+ voltage);

            temp =  parseFloat(voltage);
            return temp;
        }

    
        

            

        console.log($('#pd1').getInputVoltage(handleV));

        });
        


    // 在 `#button` 释放时根据两个模拟信号计算小人要跳的距离，换算成时间，传给机械臂.
    $('#button').on('release', function () {

        // 。。。待完成

        // $('#sg1').setAngle(90);
        console.log('Button released.');
        $('#led-g').turnOff();
        
    });
});

$.end(function () {
    $('#led-r').turnOff();
});