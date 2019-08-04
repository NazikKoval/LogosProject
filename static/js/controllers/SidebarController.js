app.controller('SidebarController', SidebarController);

function SidebarController() {
    var _this = this;
    _this.close = function() {
        $('.body-sidebar').fadeOut(500);
        $('.sidebar').removeClass('show');
    };
}