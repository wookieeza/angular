(function(){
  var app = angular.module('store',[]);
  app.controller('StoreController', function(){
     this.products = gems;
  });

 

  app.controller('ReviewController', function(){
  	this.review = {};

  	this.addReview = function(product) {
  		this.review.createdOn = Date.now();
  		product.reviews.push(this.review);
  		this.review = {};
  	}
  });

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


var gems = [
  {
	name: 'Dodecahedron',
	price: 2.95,
	dateDiscovered: '1388123412323',
	description: ' this is my new polygonal gem',
	images: [
       {
       	thumb:'images/dodeca-thumb.png',
       	full:'images/dodecahedron.png'
       	 ,
       }
	],
	reviews:[
      {
        stars:5,
        body: "I love this product!",
        author:"joe@thomas.com"
      },
      {
        stars: 1,
        body: "This product sucks",
        author: "tim@hater.com"
      },
      {
        stars: 2,
        body: "Meh",
        author: "so@hso.com"
      }
	],
	canPurchase: false,
	soldOut: false
  },
  {
	name: 'Polyhedron',
	price: 3.95,
	dateDiscovered: '1388123412323',
	description: ' this is my new polygonal gem!!!',
	images: [
       {
       	 thumb:'images/poly_thumb.png',
       	 full:'images/polyhedron.png'
       }
	],
	reviews:[
      {
        stars:5,
        body: "I love this product!",
        author:"joe@thomas.com"
      },
      {
        stars: 1,
        body: "This product sucks",
        author: "tim@hater.com"
      },
      {
        stars: 2,
        body: "Meh",
        author: "so@hso.com"
      }
	],
	canPurchase: true,
	soldOut: false
  },
  {
	name: 'Diamond',
	price: 3,
	dateDiscovered: '1388123412323',
	description: ' this is my new diamond gem!!!',
	images: [
       {
       	thumb:'images/diamond_thumb.png',
       	 full:'images/diamond.png'
       }
	],
	
    reviews:[
      {
        stars:5,
        body: "I love this product!",
        author:"joe@thomas.com"
      },
      {
        stars: 1,
        body: "This product sucks",
        author: "tim@hater.com"
      },
      {
        stars: 2,
        body: "Meh",
        author: "so@hso.com"
      }
	],
	canPurchase: true,
	soldOut: false
  }
]


})();
