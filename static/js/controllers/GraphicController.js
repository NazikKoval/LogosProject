app.controller('graphController', function ($scope) {
    // Options
    $scope.width = 940;
    $scope.height = 450;
    // Data 
    function colorFunc() {
        return ('#' + Math.floor(Math.random() * 16777215).toString(16))
    };
    $scope.spend = [
        {
            product: 'phone',
            data: '03.10.17',
            price: 36,
            color: colorFunc()
      }
                    , {
            product: 'phone6',
            data: '03.10.17',
            price: 154,
            color: colorFunc()
      }
                    , {
            product: 'phone54',
            data: '03.10.17',
            price: 62,
            color: colorFunc()
      }
                    , {
            product: 'phone12',
            data: '03.10.17',
            price: 182,
            color: colorFunc()
      }
                    , {
            product: 'phone4',
            data: '03.10.17',
            price: 100,
            color: colorFunc()
      }
                    , {
            product: 'phone32',
            data: '03.10.17',
            price: 20,
            color: colorFunc()
      }
                           , {
            product: 'phone12',
            data: '03.10.17',
            price: 104,
            color: colorFunc()
      }

    ];
    $scope.table = [
        {
            name: 'phone',
            spend: '50$',
            data: '03.10.17'
      }
                    , {
            name: 'laptop',
            spend: '100$',
            data: '07.10.17'
      }
                    , {
            name: 'water',
            spend: '1$',
            data: '10.10.17'
      }
        , {
            name: 'food',
            spend: '20$',
            data: '11.10.17'
      }
        , {
            name: 'avv',
            spend: '100$',
            data: '11.10.17'
      }
, {
            name: 'avv',
            spend: '100$',
            data: '11.10.17'
      }, {
            name: 'avv',
            spend: '100$',
            data: '11.10.17'
      }, {
            name: 'avv',
            spend: '100$',
            data: '11.10.17'
      }
    ];
    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    $scope.max = 0;
    var arrLength = $scope.spend.length;
    for (var i = 0; i < arrLength; i++) {
        // Find Maximum X Axis Value
        if ($scope.spend[i].price > $scope.max) $scope.max = $scope.spend[i].price;
    }
    // End Controller  
});
