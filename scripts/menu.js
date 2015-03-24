(function() {
  var app = angular.module('menuStore', []);

  // app.filter('checks', function() {
  //   return function
  // });
  app.controller('StoreController', function($scope){
   this.menus = details;
   $scope.typefilter = 'indian';
   $scope.clicked = function(type){
     $scope.typefilter = type;
   }
  });

  var details = [
    {
      soups: [
        {name:"Lentil Soup", price:"xxx", cuisine:"indian"},
        {name:"Cream of mushroom (truffle)", price:"xxx", cuisine:"italian"},
        {name:"Tomato and Basil soup", price:"xxx", cuisine:"italian"},
        {name:"Minestrone Soup", price:"xxx", cuisine:"italian"}
      ],
      salads: [
        {name:"Kachumber Salad", price:"xxx", cuisine:"indian"},
        {name:"Moong Salad", price:"xxx", cuisine:"indian"},
        {name:"Chickpea Salad", price:"xxx", cuisine:"indian"},
        {name:"Vegetable Salad Platter", price:"xxx", cuisine:"indian"},
        {name:"Cucumber Raita", price:"xxx", cuisine:"indian"},
        {name:"Fruit Chat", price:"xxx", cuisine:"indian"},
        {name:"Bread and Cheese Platter", price:"xxx", cuisine:"italian"},
        {name:"Watermelon and Feta Cheese Salad", price:"xxx", cuisine:"italian"},
        {name:"Ceaser Salad", price:"xxx", cuisine:"italian"},
        {name:"Goat Cheese Salad", price:"xxx", cuisine:"italian"}
      ],
      appetizers: [
        {name:"Papdi Chat", price:"xxx", cuisine:"indian"},
        {name:"Aloo Chat", price:"xxx", cuisine:"indian"},
        {name:"Sev Puri", price:"xxx", cuisine:"indian"},
        {name:"Veg Tandoor Platter", price:"xxx", cuisine:"indian"},
        {name:"Masala Mushrooms", price:"xxx", cuisine:"indian"},
        {name:"Mirch Baby Potatoes", price:"xxx", cuisine:"indian"},
        {name:"Paneer Tikka", price:"xxx", cuisine:"indian"},
        {name:"Ragda Pattice", price:"xxx", cuisine:"indian"},
        {name:"Pani Puri", price:"xxx", cuisine:"indian"},
        {name:"Samosa chat", price:"xxx", cuisine:"indian"},
        {name:"Aamchi Maharashtra special", price:"xxx", cuisine:"indian"},
        {name:"Bruschetta", price:"xxx", cuisine:"italian"},
        {name:"Stir Fried Veggies", price:"xxx", cuisine:"italian"},
        {name:"Stuffed Mushrooms", price:"xxx", cuisine:"italian"},
        {name:"Garlic Bread", price:"xxx", cuisine:"italian"},
        {name:"Zuchini, Broccoli and Mushroom Panini", price:"xxx", cuisine:"italian"},
        {name:"Balsamic Dip with Assorted Bread", price:"xxx", cuisine:"italian"},
        {name:"Mashed Potato in a Garlic and Black Pepper sauce", price:"xxx", cuisine:"italian"}
      ],
      main: [
        {name:"Paneer Makhani", price:"xxx", cuisine:"indian"},
        {name:"Baigan Bharta", price:"xxx", cuisine:"indian"},
        {name:"Dum Aloo", price:"xxx", cuisine:"indian"},
        {name:"Mixed vegetable tikka masala", price:"xxx", cuisine:"indian"},
        {name:"Palak Paneer", price:"xxx", cuisine:"indian"},
        {name:"Malai kofta", price:"xxx", cuisine:"indian"},
        {name:"Indian International", price:"xxx", cuisine:"indian"},
        {name:"Vegetable Kolapuri", price:"xxx", cuisine:"indian"},
        {name:"Black/Yellow dal", price:"xxx", cuisine:"indian"},
        {name:"Assorted Roti's", price:"xxx", cuisine:"indian"},
        {name:"Rice", price:"xxx", cuisine:"indian"},
        {name:"Gnocchi in Pesto sauce", price:"xxx", cuisine:"italian"},
        {name:"Choice of Pasta", price:"xxx", cuisine:"italian"},
        {name:"Choice of Pizza", price:"xxx", cuisine:"italian"},
        {name:"Special Pizza", price:"xxx", cuisine:"italian"},
        {name:"Three Mushroom Risotto", price:"xxx", cuisine:"italian"},
        {name:"Indian Style Pizza", price:"xxx", cuisine:"italian"}
      ],
      desert: [
        {name:"Gulab Jamun", price:"xxx", cuisine:"indian"},
        {name:"Malai Kulfi", price:"xxx", cuisine:"indian"},
        {name:"Seasonal Ice Cream", price:"xxx", cuisine:"indian"},
        {name:"Tiramisu", price:"xxx", cuisine:"italian"},
        {name:"Chocolate Moussee", price:"xxx", cuisine:"italian"},
        {name:"Hand Crafted Sorbet", price:"xxx", cuisine:"italian"}
      ]

    }
  ];
})();
