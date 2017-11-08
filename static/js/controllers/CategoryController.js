app.controller('CategoryController', ['$scope', 'CategoryService', function($scope, CategoryService) {
    // Завантаження списку категорій в кожен розділ
    $scope.incomeCategories = CategoryService.getIncomeList();
    $scope.savingsCategories = CategoryService.getSavingsList();
    $scope.expensesCategories = CategoryService.getExpensesList();

    // Клік на іконки доходів
    $scope.incomeClick = function(incomeId) {
        $scope.incomeActive = incomeId; // виберемо id активного доходу (підсвіченого червоним)
        $scope.savingActive = false; // заберемо червону обводку у заощаджень
        $scope.savingsHighlighted = true; // додамо оранжеву обводку для защаджень
        $scope.expensesHighlighted = false; // заберемо оранжеву обводку для розходів
    };

    // Клік на іконки заощаджень
    $scope.savingsClick = function(savingId) {
        // якщо інока доходів неактивна - підсвітимо іконки заощаджень та збережемо id активної категорії доходу
        if ( !$scope.incomeActive ) {
            $scope.expensesHighlighted = true;
            $scope.savingActive = savingId;
            // якщо активна - виведемо alert з id активної категорії доходів та вибраної категорії заощаджень
            // потім знімемо підсвітку іконок
        } else {
            alert('ID доходів: ' + $scope.incomeActive + '\nID збережень: ' + savingId);
            $scope.incomeActive = false;
            $scope.savingsHighlighted = false;
        }
    };

    // Клік на іконки витрат
    $scope.expensesClick = function(expenseId) {
        // якщо нема активної іконки заощаджем - попередимо користувача
        if ( !$scope.savingActive ) {
            alert('Спочатку виберіть категорію збережень');
            // якщо є активна іконка заощаджень - виведемо ідентифікатори категорій, та знімемо всі підсвітки іконок
        } else {
            alert('ID збережень: ' + $scope.savingActive + '\nID витрат: ' + expenseId);
            $scope.savingActive = false;
            $scope.expensesHighlighted = false;
        }
    };

    // Додавання нової іконки
    $scope.plusClick = function(category) {
        alert('Створи нову іконку! ' + category)
    };
}]);