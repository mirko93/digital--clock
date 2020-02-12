function clock() {
    let fullDate = new Date();
    let hours = fullDate.getHours();
    let minute = fullDate.getMinutes();
    let second = fullDate.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = ": " + minute;
    document.getElementById("second").innerHTML = ": " + second;
}

setInterval(clock, 100);
