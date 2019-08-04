app.controller('MenuController', MenuController);

/**
 * Menu button click handler
 */
function MenuController() {
    var _this = this;
    _this.toggleMenu = function() {
        $('.body-sidebar').fadeIn(500);
        $('.sidebar').addClass('show');
    };
}