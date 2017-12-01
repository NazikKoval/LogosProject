app.controller('HistoryController', ['HistoryService', HistoryController]);

function HistoryController(HistoryService) {
    var _this = this;

    _this.activeMonth = getCurrentMonth();
    _this.activeYear = getCurrentYear();
    _this.months = getMonths();

    refreshRecords();

    /**
     * Refreshing table of history records
     */
    function refreshRecords() {
        HistoryService.getRecords(_this.activeMonth, _this.activeYear)
            .then(function(response) {
                _this.records = response;
            });
    }

    /**
     * Previous arrow click handler
     */
    _this.prev = function() {
        _this.activeYear--;
        refreshRecords();
    };

    /**
     * Next arrow click handler
     */
    _this.next = function() {
        _this.activeYear++;
        refreshRecords();
    };

    /**
     * Month click handler
     * @param {number} month
     */
    _this.month = function(month) {
        _this.activeMonth = month;
        refreshRecords();
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

    /**
     * Returns array of months
     * @returns {Array}
     */
    function getMonths() {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }

}