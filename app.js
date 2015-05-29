(function(){
  var app = angular.module('store',[]);
  app.controller('StoreController', function(){
     this.products = gems;
  });

  app.controller('PanelController',function(){
     this.tab = 1;

     this.selectTab = function(setTab) {
        this.tab = setTab;
     };

     this.isSelected = function(checkTab){
        return this.tab === checkTab;
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
