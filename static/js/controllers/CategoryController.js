app.controller('CategoryController', ['CategoryService', CategoryController]);
function CategoryController(CategoryService) {
    var _this = this;

    CategoryService.getCategories().then(function(response) {
         _this.categories = response;
    });

    /**
     * Income icon click handler
     * @param {number} incomeId
     */
    _this.incomeClick = function(incomeId) {
        _this.incomeActive = incomeId;
        _this.savingActive = false;
        _this.savingsHighlighted = true;
        _this.expensesHighlighted = false;
    };

    /**
     * Savings icon click handler
     * @param {number} savingId
     */
    _this.savingsClick = function(savingId) {
        if ( !_this.incomeActive ) {
            _this.expensesHighlighted = true;
            _this.savingActive = savingId;
        } else {
            // TODO: calculator
            _this.incomeActive = false;
            _this.savingsHighlighted = false;
        }
    };

    /**
     * Expenses icon click handler
     * @param {number} expenseId
     */
    _this.expensesClick = function(expenseId) {
        if ( !_this.savingActive ) {
            alert('Спочатку виберіть категорію збережень');
        } else {
            // TODO: calculator
            _this.savingActive = false;
            _this.expensesHighlighted = false;
        }
    };

    /**
     * Plus icon click handler
     * @param {number} category
     */
    _this.plusClick = function(category) {
         // TODO: new icon
    };
};