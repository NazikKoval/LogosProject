sidebarApp.controller("SidebarAppCtrl", function($scope) {
        $scope.state = false;
            
        $scope.toggleState = function() {
            $scope.state = !$scope.state;
        }; 
            
        $scope.register = function() {
            alert("You need register!!!");
        };
            
        $scope.toggleStateMessage = function() {
            $scope.state = !$scope.state;
            $scope.toggleState = $scope.register;
        };
    
    
});

        
sidebarApp.directive('sidebarDirective', function () {
    return {
        link: function (scope, element, attr) {
            scope.$watch(attr.sidebarDirective, function (newVal) {
                if(newVal) {
                    element.addClass('show');
                    document.querySelector('.body-sidebar').style.display = 'block';
                    return;
                } else {
                    element.removeClass('show');
                    document.querySelector('.body-sidebar').style.display = 'none';
                }
                
            });
        }
    };
});