app.controller('CategoryController', ['CategoryService', CategoryController]);
function CategoryController(CategoryService) {
    var _this = this;

    _this.incomeCategories = CategoryService.getIncomeList();
    _this.savingsCategories = CategoryService.getSavingsList();
    _this.expensesCategories = CategoryService.getExpensesList();

    /**
     *
     * @param incomeId
     */
    _this.incomeClick = function(incomeId) {
        _this.incomeActive = incomeId;
        _this.savingActive = false;
        _this.savingsHighlighted = true;
        _this.expensesHighlighted = false;
    };

    /**
     *
     * @param savingId
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
     *
     * @param expenseId
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
     *
     * @param category
     */
    _this.plusClick = function(category) {
         // TODO: new icon
    };
};