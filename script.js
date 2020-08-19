setInterval(() => {
    var date = new Date();
    var hTime = date.getHours();
    var mTime = date.getMinutes();
    var sTime = date.getSeconds();
    var hRotation = 30*hTime + mTime/2;
    var mRotation = 6*mTime;
    // var sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    // seconds.style.transform = `rotate(${sRotation}deg)`;
}, 1000);