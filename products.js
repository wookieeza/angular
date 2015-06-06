(function(){ // new closure
    var app = angular.module('store-products', []); // new module just for product stuff
    app.directive('productTitle', function(){ // translated from dash in directive
        return { // a directive configuration definition  object
            restrict: 'E', // e for element
            templateUrl: 'product-title.html' // url of template
        };
    });

    app.directive('productAttributeDirective', function(){
        return {
            restrict: 'A',
            templateUrl: 'product-attribute-directive.html'
        };
    });

    app.directive('productPanels', function(){ // bundle it here so you dont always have to remember to use product-panels and ng-controller x
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',

            controller: function (){
                this.tab = 1;
                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab){
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panels'
        };
    });
})();