app.controller('MainController', MainController);

function MainController() {
    var self = this;

    self.closeSidebar = function() {
        $('.body-sidebar').fadeOut(100);
        $('.sidebar').removeClass('show');
    };

    self.openSidebar = function() {
        $('.body-sidebar').fadeIn(100);
        $('.sidebar').addClass('show');
    };
}