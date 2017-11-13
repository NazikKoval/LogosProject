app.factory("CategoryService", function() {

    return {
        getIncomeList: function() {
            return [
                {
                    id: 1,
                    icon: 'img/category-income.png',
                    name: 'Income',
                    summ: 500
                },
                {
                    id: 2,
                    icon: 'img/category-income.png',
                    name: 'Income 2',
                    summ: 5500
                }
            ];
        },
        getSavingsList: function() {
            return [
                {
                    id: 11,
                    icon: 'img/category-cash.png',
                    name: 'Cash',
                    summ: 500
                },
                {
                    id: 12,
                    icon: 'img/catagory-bank.png',
                    name: 'Bank',
                    summ: 500
                }
            ];
        },
        getExpensesList: function() {
            return [
                {
                    id: 21,
                    icon: 'img/catagory-food.png',
                    name: 'Food',
                    summ: 500
                },
                {
                    id: 22,
                    icon: 'img/catagory-entertainment.png',
                    name: 'Entertaiment',
                    summ: 500
                }
            ];
        }
    }
});