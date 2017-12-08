app.controller('TimeController', TimeController);

function TimeController() {
    var self = this;

    self.getDate = function() {
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return day + "." + month + "." + year;
    };

    self.getTime = function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        return hours + ":" + minutes;
    };

    self.date = self.getDate();
    self.time = self.getTime();
}