(function() {
  var app = angular.module('menuStore', []);

  // app.filter('checks', function() {
  //   return function
  // });
  app.filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
  });

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
        {name:"Minestrone Soup", price:"xxx", cuisine:"italian"},
        {name:"Sweet Corn Soup", price:"xxx", cuisine:"chinese"},
        {name:"Hot and Sour", price:"xxx", cuisine:"chinese"},
        {name:"Manchow Soup", price:"xxx", cuisine:"chinese"},
        {name:"Clear Soup", price:"xxx", cuisine:"chinese"},
        {name:"Lemon Coriander", price:"xxx", cuisine:"thai"},
        {name:"Tom Yum", price:"xxx", cuisine:"thai"},
        {name:"Lemongrass", price:"xxx", cuisine:"thai"},
        {name:"Miso Miso", price:"xxx", cuisine:"thai"},
        {name:"Clear noodle soup", price:"xxx", cuisine:"thai"},
        {name:"A Mexican meal as a soup <br/><span class='subtext'> with cheese tortilla chips on the side</span>", price:"xxx", cuisine:"mexican"},
        {name:"Lime, chilly and coriander", price:"xxx", cuisine:"mexican"},
        {name:"Black bean and corn stew", price:"xxx", cuisine:"mexican"}
      ],
      salads: [
        {name:"Kachumber Salad <br/><span class='subtext'>Diced tomatoes, cucumber & onions seasoned with coriander & a tangy powder and lime.</span>", price:"xxx", cuisine:"indian"},
        {name:"Moong Salad", price:"xxx", cuisine:"indian"},
        {name:"Chickpea Salad", price:"xxx", cuisine:"indian"},
        {name:"Vegetable Salad Platter", price:"xxx", cuisine:"indian"},
        {name:"Cucumber Raita", price:"xxx", cuisine:"indian"},
        {name:"Fruit Chat <br/><span class='subtext'>Seasonal fruits chopped and served cold, with custard (optional) – healthy and refreshing.</span> ", price:"xxx", cuisine:"indian"},
        {name:"Bread and Cheese Platter", price:"xxx", cuisine:"italian"},
        {name:"Watermelon and Feta Cheese Salad <br/><span class='subtext'>Tossed with argula leaves</span>", price:"xxx", cuisine:"italian"},
        {name:"Ceaser Salad", price:"xxx", cuisine:"italian"},
        {name:"Goat Cheese Salad", price:"xxx", cuisine:"italian"},
        {name:"Kimchi", price:"xxx", cuisine:"chinese"},
        {name:"Papaya Salad", price:"xxx", cuisine:"thai"},
        {name:"Bangkok fruit Salad", price:"xxx", cuisine:"thai"},
        {name:"Spicy Cucumber Salad", price:"xxx", cuisine:"thai"},
        {name:"Spicy Corn Salad", price:"xxx", cuisine:"thai"},
        {name:"Raw Mango and Water Chestnut Salad", price:"xxx", cuisine:"thai"},
        {name:"Spring Roll Thai Salad", price:"xxx", cuisine:"thai"},
        {name:"A shot of Taco Salad", price:"xxx", cuisine:"mexican"},
        {name:"Sweet Corn and Beans <br/><span class='subtext'> with a splash of sour cream</span>", price:"xxx", cuisine:"mexican"},
        {name:"Corn and Coriander Salad", price:"xxx", cuisine:"mexican"}
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
        {name:"Samosa Chat", price:"xxx", cuisine:"indian"},
        {name:"Aamchi Maharashtra special", price:"xxx", cuisine:"indian"},
        {name:"Bruschetta", price:"xxx", cuisine:"italian"},
        {name:"Stir Fried Veggies", price:"xxx", cuisine:"italian"},
        {name:"Stuffed Mushrooms", price:"xxx", cuisine:"italian"},
        {name:"Garlic Bread", price:"xxx", cuisine:"italian"},
        {name:"Zuchini, Broccoli and Mushroom Panini", price:"xxx", cuisine:"italian"},
        {name:"Balsamic Dip with Assorted Bread", price:"xxx", cuisine:"italian"},
        {name:"Mashed Potato <br/><span class='subtext'> in a Garlic and Black Pepper sauce</span>", price:"xxx", cuisine:"italian"},
        {name:"Fried / Steamed Wantons", price:"xxx", cuisine:"chinese"},
        {name:"Veg Spring Roll", price:"xxx", cuisine:"chinese"},
        {name:"Vegetable Tempura", price:"xxx", cuisine:"chinese"},
        {name:"Kung Pao Potato", price:"xxx", cuisine:"chinese"},
        {name:"Paneer Chilly (Dry/ Gravy)", price:"xxx", cuisine:"chinese"},
        {name:"Vegetable Satay", price:"xxx", cuisine:"chinese"},
        {name:"Assorted exotic veg in a dark soy sauce", price:"xxx", cuisine:"chinese"},
        {name:"Cripsy fried Tofu", price:"xxx", cuisine:"thai"},
        {name:"Sweet & Sour Crispy Noodles", price:"xxx", cuisine:"thai"},
        {name:"Sweet & Spicy Trail Mix", price:"xxx", cuisine:"thai"},
        {name:"Exotic Vegetable in Basil", price:"xxx", cuisine:"thai"},
        {name:"Sauted Vegetable in Lettuce Wraps", price:"xxx", cuisine:"thai"},
        {name:"Vegetable Tempura", price:"xxx", cuisine:"thai"},
        {name:"Thai Vegetable Dim Sum", price:"xxx", cuisine:"thai"},
        {name:"Thai Sautéed Mushrooms", price:"xxx", cuisine:"thai"},
        {name:"Chips and Dips <br/><span class='subtext'> Choice of Sour Cream, Guacamole, Spicy Salsa, Cheese Jalapeño Sauce</span>", price:"xxx", cuisine:"mexican"},
        {name:"Jacket Potatoes", price:"xxx", cuisine:"mexican"},
        {name:"Quesadillas", price:"xxx", cuisine:"mexican"},
        {name:"Burrito Bowl in a Corn Puri", price:"xxx", cuisine:"mexican"},
        {name:"Black Bean and Goat Cheese Quesadillas", price:"xxx", cuisine:"mexican"},
        {name:"The Mexican bruschetta <br/><span class='subtext'> with avocado and tomato</span>", price:"xxx", cuisine:"mexican"},
        {name:"Nacho supreme", price:"xxx", cuisine:"mexican"},
        {name:"Mexican Butta (Corn on the cob)", price:"xxx", cuisine:"mexican"}
      ],
      main: [
        {name:"Paneer Makhani", price:"xxx", cuisine:"indian"},
        {name:"Baigan Bharta", price:"xxx", cuisine:"indian"},
        {name:"Dum Aloo", price:"xxx", cuisine:"indian"},
        {name:"Mixed Vegetable Tikka Masala", price:"xxx", cuisine:"indian"},
        {name:"Palak Paneer", price:"xxx", cuisine:"indian"},
        {name:"Malai Lofta", price:"xxx", cuisine:"indian"},
        {name:"Indian International", price:"xxx", cuisine:"indian"},
        {name:"Vegetable Kolapuri", price:"xxx", cuisine:"indian"},
        {name:"Black/Yellow Dal", price:"xxx", cuisine:"indian"},
        {name:"Assorted Roti's", price:"xxx", cuisine:"indian"},
        {name:"Rice", price:"xxx", cuisine:"indian"},
        {name:"Gnocchi in Pesto sauce", price:"xxx", cuisine:"italian"},
        {name:"Choice of Pasta <br/><div class='options' onclick=\"$('#choices').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choices'><div class='left'>Pasta<br><ol><li>Spaghetti</li><li>Fusilli</li><li>Penne</li><li>Farfalle</li></ol></div><div>Sauce <br/><ol><li>Homemade Alfredo</li><li>4 cheese</li><li>Arrabiata</li><li>Pomodoro</li><li>Aglio E Olio</li><li>Pesto</li><li>Vodka Sauce</li><li>Paprika</li></ol></div> </div></div>", price:"xxx", cuisine:"italian"},
        {name:"Choice of Pizza <br/><div class='options' onclick=\"$('#choicesPizza').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choicesPizza'><span><ol><li>Margherita</li><li>Veggie pizza</li><li>Our Special <br/><span class='subtext'>Pizza with a pesto base, cheese and tomatoes</span><li>Bumbaya pizza<br/><span class='subtext'> Capsicum, onions and tomatoes diced with a sweetened tomato puree</span></li></span></div></div>", price:"xxx", cuisine:"italian"},
        {name:"Three Mushroom Risotto", price:"xxx", cuisine:"italian"},
        {name:"Exotic Vegetables <br /> <span class='subtext'> Prepared in schezwan sauce </span>", price:"xxx", cuisine:"chinese"},
        {name:"American Chopsuey", price:"xxx", cuisine:"chinese"},
        {name:"Sweet and Sour Vegetable", price:"xxx", cuisine:"chinese"},
        {name:"Schezwan Noodles", price:"xxx", cuisine:"chinese"},
        {name:"Hot Pot Rice", price:"xxx", cuisine:"chinese"},
        {name:"Veg Fried Rice", price:"xxx", cuisine:"chinese"},
        {name:"Manchurian", price:"xxx", cuisine:"chinese"},
        {name:"Veg Fried Rice - Soy flavored", price:"xxx", cuisine:"chinese"},
        {name:"Pak choi and American corn <br /> <span class='subtext'> Prepared in in soy / schezwan sauce </span>", price:"xxx", cuisine:"chinese"},
        {name:"Tofu and Soft Vegetables <br /> <span class='subtext'> Prepared in black bean sauce </span>", price:"xxx", cuisine:"chinese"},
        {name:"Veg Hakka Noodles", price:"xxx", cuisine:"chinese"},
        {name:"Thai Fried rice", price:"xxx", cuisine:"thai"},
        {name:"Red Curry noodles with Veggies", price:"xxx", cuisine:"thai"},
        {name:"Pad Thai noodles", price:"xxx", cuisine:"thai"},
        {name:"Jasmine rice", price:"xxx", cuisine:"thai"},
        {name:"Coconut rice", price:"xxx", cuisine:"thai"},
        {name:"Rice noodles with Thai pesto", price:"xxx", cuisine:"thai"},
        {name:"Spicy Thai fried rice", price:"xxx", cuisine:"thai"},
        {name:"Sweet & Spicy noodles", price:"xxx", cuisine:"thai"},
        {name:"Red Thai Curry", price:"xxx", cuisine:"thai"},
        {name:"Green Thai Curry", price:"xxx", cuisine:"thai"},
        {name:"Masaman Curry", price:"xxx", cuisine:"thai"},
        {name:"Exotic vegetables tossed in a Basil flavored curry", price:"xxx", cuisine:"thai"},
        {name:"Mexican Pizza <br /> <span class='subtext'>  can be used as starters</span>", price:"xxx", cuisine:"mexican"},
        {name:"Fried Avocado Tacos", price:"xxx", cuisine:"mexican"},
        {name:"Make Your Own - burritos, taco (hard & soft)", price:"xxx", cuisine:"mexican"},
        {name:"Enchiladas", price:"xxx", cuisine:"mexican"},
        {name:"Mexican pasta", price:"xxx", cuisine:"mexican"},
        {name:"Mexican rice", price:"xxx", cuisine:"mexican"}
      ],
      desert: [
        {name:"Gulab Jamun", price:"xxx", cuisine:"indian"},
        {name:"Malai Kulfi", price:"xxx", cuisine:"indian"},
        {name:"Seasonal Ice Cream", price:"xxx", cuisine:"indian"},
        {name:"Tiramisu", price:"xxx", cuisine:"italian"},
        {name:"Chocolate Moussee", price:"xxx", cuisine:"italian"},
        {name:"Hand Crafted Sorbet", price:"xxx", cuisine:"italian"},
        {name:"Honey Glazed Noodles with Ice Cream", price:"xxx", cuisine:"chinese"},
        {name:"Seasonal Fresh Fruits with Custard or Ice Cream", price:"xxx", cuisine:"chinese"},
        {name:"Lychee Ice Cream (seasonal)", price:"xxx", cuisine:"chinese"},
        {name:"Banana's in coconut milk", price:"xxx", cuisine:"thai"},
        {name:"Coconut Ginger ice-cream", price:"xxx", cuisine:"thai"},
        {name:"Fresh seasonal fruits with ice cream", price:"xxx", cuisine:"thai"},
        {name:"Lemon Coconut Cake with Lemon Gaze", price:"xxx", cuisine:"thai"},
        {name:"Churros", price:"xxx", cuisine:"mexican"},
        {name:"Dulce de leche cheesecakes", price:"xxx", cuisine:"mexican"},
        {name:"Arroz con leche (rice pudding)", price:"xxx", cuisine:"mexican"},
        {name:"Tres leches cake", price:"xxx", cuisine:"mexican"}
      ]
    }
  ];
})();
