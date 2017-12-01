app.controller('HistoryController', HistoryController);
function HistoryController() {
    var _this = this;

    _this.activeMonth = getCurrentMonth();
    _this.activeYear = getCurrentYear();

    /**
     * Previous arrow click handler
     */
    _this.prev = function() {
        _this.activeYear--;
    };

    /**
     * Next arrow click handler
     */
    _this.next = function() {
        _this.activeYear++;
    };

    /**
     * Month click handler
     * @param {number} month
     */
    _this.month = function(month) {
        _this.activeMonth = month;
    };

    /**
     * Current month number
     * @returns {number}
     */
    function getCurrentMonth() {
        var date = new Date();
        return date.getMonth();
    }

    /**
     * Current year
     * @returns {number}
     */
    function getCurrentYear() {
        var date = new Date();
        return date.getFullYear();
    }

}