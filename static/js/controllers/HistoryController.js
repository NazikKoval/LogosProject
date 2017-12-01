app.controller('HistoryController', HistoryController);
function HistoryController() {
    var _this = this;

    _this.activeMonth = getCurrentMonth();
    _this.activeYear = getCurrentYear();

    _this.prev = function() {
        _this.activeYear--;
    };

    _this.next = function() {
        _this.activeYear++;
    };

    _this.month = function(month) {
        _this.activeMonth = month;
    };
    
    function getCurrentMonth() {
        var date = new Date();
        return date.getMonth();
    }

    function getCurrentYear() {
        var date = new Date();
        return date.getFullYear();
    }

}