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
        {name:"Lentil Soup", description: "A healthy soup with red lentils cooked with a dash of Indian spices – served with papadams.", price:"99", cuisine:"indian"},
        {name:"Cream of mushroom (truffle)",description: "", price:"xxx", cuisine:"italian"},
        {name:"Tomato and Basil soup",  description: "", price:"xxx", cuisine:"italian"},
        {name:"Minestrone Soup",  description: "", price:"xxx", cuisine:"italian"},
        {name:"Sweet Corn Soup",  description: "", price:"xxx", cuisine:"chinese"},
        {name:"Hot and Sour", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Manchow Soup",  description: "", price:"xxx", cuisine:"chinese"},
        {name:"Clear Soup",  description: "", price:"xxx", cuisine:"chinese"},
        {name:"Lemon Coriander",  description: "", price:"xxx", cuisine:"thai"},
        {name:"Tom Yum",  description: "", description: "", price:"xxx", cuisine:"thai"},
        {name:"Lemongrass", description: "", price:"xxx", cuisine:"thai"},
        {name:"Miso Miso", description: "", price:"xxx", cuisine:"thai"},
        {name:"Clear noodle soup", description: "", price:"xxx", cuisine:"thai"},
        {name:"A Mexican meal as a soup", description: "with cheese tortilla chips on the side", price:"xxx", cuisine:"mexican"},
        {name:"Lime, chilly and coriander", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Black bean and corn stew", description: "", price:"xxx", cuisine:"mexican"}
      ],
      salads: [
        {name:"Kachumber Salad", description: "Diced tomatoes, cucumber & onions seasoned to taste.", price:"55", cuisine:"indian"},
        {name:"Moong Salad", description: "Sprouts tossed with onions & tomatoes and seasoned to taste.", price:"65", cuisine:"indian"},
        {name:"Chickpea Salad", description: "Small chickpeas tossed with onions & tomatoes, seasoned to taste.", price:"55", cuisine:"indian"},
        {name:"Vegetable Salad Platter", description: "Sliced vegetables (onion, cucumber and tomato) garnished with coriander, lime & greenchilies.", price:"50", cuisine:"indian"},
        {name:"Cucumber Raita", description: "Beaten curd mixed with cucumber, onions & coriander, garnished and seasoned to taste.", price:"99", cuisine:"indian"},
        {name:"Aloo Chat", description: "Diced potatoes tossed with tomatoes and onions, garnished and seasoned to taste.", price:"65", cuisine:"indian"},
        {name:"Fruit Chat", description: "Seasonal fruits chopped and served cold, with custard (optional) – healthy and refreshing", price:"105", cuisine:"indian"},
        {name:"Bread and Cheese Platter", description: "", price:"xxx", cuisine:"italian"},
        {name:"Watermelon and Feta Cheese Salad", description: "Tossed with argula leaves", price:"xxx", cuisine:"italian"},
        {name:"Ceaser Salad", description: "", price:"xxx", cuisine:"italian"},
        {name:"Goat Cheese Salad", description: "", price:"xxx", cuisine:"italian"},
        {name:"Kimchi", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Papaya Salad", description: "", price:"xxx", cuisine:"thai"},
        {name:"Bangkok fruit Salad", description: "", price:"xxx", cuisine:"thai"},
        {name:"Spicy Cucumber Salad", description: "", price:"xxx", cuisine:"thai"},
        {name:"Spicy Corn Salad", description: "", price:"xxx", cuisine:"thai"},
        {name:"Raw Mango and Water Chestnut Salad", description: "", price:"xxx", cuisine:"thai"},
        {name:"Spring Roll Thai Salad", description: "", price:"xxx", cuisine:"thai"},
        {name:"A shot of Taco Salad", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Sweet Corn and Beans", description: "with a splash of sour cream", price:"xxx", cuisine:"mexican"},
        {name:"Corn and Coriander Salad", description: "", price:"xxx", cuisine:"mexican"}
      ],
      appetizers: [
        {name:"Papdi Chat", description: "Puri and chur-mur tossed with potatoes, onions and ragda in hung curd and India pastes garnished with coriander.", price:"95", cuisine:"indian"},
        {name:"Sev Puri", description: "Puri layered with potatoes and onions, topped with a mint & Tamarind paste garnished with coriander.", price:"55", cuisine:"indian"},
        {name:"Veg Tandoor Platter", description: "Vegetables marinated and cooked in a tandoor.", price:"105", cuisine:"indian"},
        {name:"Masala Mushrooms", description: "Mushrooms tossed in a marinade and seasoned with Indian pickles.", price:"90", cuisine:"indian"},
        {name:"Stuffed Mirch Baby Potatoes", description: "Baby potatoes tossed in a marinade and cooked in a tandoor to taste.", price:"95", cuisine:"indian"},
        {name:"Paneer Tikka", description: "Diced cubes of cottage cheese marinated and cooked in a tandoor.", price:"99", cuisine:"indian"},
        {name:"Ragda Pattice", description: "Patty made with potatoes and peas dressed with a white bean curry prepared with Indian spices made to taste.", price:"90", cuisine:"indian"},
        {name:"Pani Puri", description: "A hollow puri filled with potatoes, sprouts, small chickpeas and ragda topped with tamarind paste to be eaten with mint flavored pani.", price:"70", cuisine:"indian"},
        {name:"Samosa Chat", description: "A potato dumpling with a crispy ‘padd’ crushed and topped with curd and mint and tamarind pastes.", price:"95", cuisine:"indian"},
        {name:"Aamcha Maharashtra special", description: "A mixed platter serving missal pav, pav vada and a pav bhaji sandwich made with the Bombay touch.", price:"85", cuisine:"indian"},
        {name:"Bruschetta", description: "", price:"xxx", cuisine:"italian"},
        {name:"Stir Fried Veggies", description: "", price:"xxx", cuisine:"italian"},
        {name:"Stuffed Mushrooms", description: "", price:"xxx", cuisine:"italian"},
        {name:"Garlic Bread", description: "", price:"xxx", cuisine:"italian"},
        {name:"Zuchini, Broccoli and Mushroom Panini", description: "", price:"xxx", cuisine:"italian"},
        {name:"Balsamic Dip with Assorted Bread", description: "", price:"xxx", cuisine:"italian"},
        {name:"Mashed Potato", description: "in a Garlic and Black Pepper sauce", price:"xxx", cuisine:"italian"},
        {name:"Fried / Steamed Wantons", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Veg Spring Roll", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Vegetable Tempura", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Kung Pao Potato", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Paneer Chilly (Dry/ Gravy)", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Vegetable Satay", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Assorted exotic Veg", description: "prepared in a dark soy sauce", price:"xxx", cuisine:"chinese"},
        {name:"Cripsy fried Tofu", description: "", price:"xxx", cuisine:"thai"},
        {name:"Sweet & Sour Crispy Noodles", description: "", price:"xxx", cuisine:"thai"},
        {name:"Sweet & Spicy Trail Mix", description: "", price:"xxx", cuisine:"thai"},
        {name:"Exotic Vegetable in Basil", description: "", price:"xxx", cuisine:"thai"},
        {name:"Sauted Vegetable in Lettuce Wraps", description: "", price:"xxx", cuisine:"thai"},
        {name:"Vegetable Tempura", description: "", price:"xxx", cuisine:"thai"},
        {name:"Thai Vegetable Dim Sum", description: "", price:"xxx", cuisine:"thai"},
        {name:"Thai Sautéed Mushrooms", description: "", price:"xxx", cuisine:"thai"},
        {name:"Chips and Dips ", description: "Choice of Sour Cream, Guacamole, Spicy Salsa, Cheese Jalapeño Sauce", price:"xxx", cuisine:"mexican"},
        {name:"Jacket Potatoes", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Quesadillas", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Burrito Bowl in a Corn Puri", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Black Bean and Goat Cheese Quesadillas", description: "", price:"xxx", cuisine:"mexican"},
        {name:"The Mexican bruschetta ", description: "with avocado and tomato", price:"xxx", cuisine:"mexican"},
        {name:"Nacho supreme", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Mexican Butta (Corn on the cob)", description: "", price:"xxx", cuisine:"mexican"}
      ],
      main: [
        {name:"Paneer Makhani", description: "", price:"115", cuisine:"indian"},
        {name:"Baigan Bharta", description: "", price:"105", cuisine:"indian"},
        {name:"Dum Aloo", description: "", price:"100", cuisine:"indian"},
        {name:"Mixed Vegetable Tikka Masala", description: "", price:"105", cuisine:"indian"},
        {name:"Palak Paneer", description: "", price:"115", cuisine:"indian"},
        {name:"Malai Lofta", description: "", price:"105", cuisine:"indian"},
        {name:"Vegetable Kolapuri", description: "", price:"125", cuisine:"indian"},
        {name:"Dal Tadka", description: "", price:"105", cuisine:"indian"},
        {name:"Dal Makahni", description: "", price:"120", cuisine:"indian"},
        {name:"Assorted Breads", description: "<div class='options' onclick=\"$('#choicesRoti').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choicesRoti' ><div class='left'>Roti<br><ol><li>Tandoori</li><li>Roomali Roti</li><li>Naan</li><li>Chapati</li></ol></div><div>Price <br/><ul class='price'><li>50</li><li>80</li><li>70</li><li>40</li></ul></div> </div></div>", price:"", cuisine:"indian"},
        {name:"Jeera Rice", description: "", price:"90", cuisine:"indian"},
        {name:"Steam Rice", description: "", price:"80", cuisine:"indian"},
        {name:"Gnocchi in Pesto sauce", description: "", price:"xxx", cuisine:"italian"},
        {name:"Choice of Pasta", description: "<div class='options' onclick=\"$('#choices').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choices'><div class='left'>Pasta<br><ol><li>Spaghetti</li><li>Fusilli</li><li>Penne</li><li>Farfalle</li></ol></div><div>Sauce <br/><ol><li>Homemade Alfredo</li><li>Four Cheese</li><li>Arrabiata</li><li>Pomodoro</li><li>Aglio E Olio</li><li>Pesto</li><li>Vodka Sauce</li><li>Paprika</li></ol></div> </div></div>", price:"xxx", cuisine:"italian"},
        {name:"Choice of Pizza", description: "<div class='options' onclick=\"$('#choicesPizza').toggleClass('show')\">Options <i class='fa fa-angle-down'></i><div id='choicesPizza'><span><ol><li>Margherita</li><li>Veggie pizza</li><li>Our Special <br/><span class='subtext'>Pizza with a pesto base, cheese and tomatoes</span><li>Bumbaya pizza<br/><span class='subtext'> Capsicum, onions and tomatoes diced with a sweetened tomato puree</span></li></span></div></div>", price:"xxx", cuisine:"italian"},
        {name:"Three Mushroom Risotto", description: "", price:"xxx", cuisine:"italian"},
        {name:"Exotic Vegetables", description: "prepared in schezwan sauce", price:"xxx", cuisine:"chinese"},
        {name:"American Chopsuey", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Sweet and Sour Vegetable", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Schezwan Noodles", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Hot Pot Rice", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Veg Fried Rice", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Manchurian", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Veg Fried Rice - Soy flavored", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Pak choi and American corn", description: "prepared in in soy / schezwan sauce", price:"xxx", cuisine:"chinese"},
        {name:"Tofu and Soft Vegetables", description: "prepared in black bean sauce", price:"xxx", cuisine:"chinese"},
        {name:"Veg Hakka Noodles", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Thai Fried rice", description: "", price:"xxx", cuisine:"thai"},
        {name:"Red Curry noodles with Veggies", description: "", price:"xxx", cuisine:"thai"},
        {name:"Pad Thai noodles", description: "", price:"xxx", cuisine:"thai"},
        {name:"Jasmine rice", description: "", price:"xxx", cuisine:"thai"},
        {name:"Coconut rice", description: "", price:"xxx", cuisine:"thai"},
        {name:"Rice noodles with Thai pesto", description: "", price:"xxx", cuisine:"thai"},
        {name:"Spicy Thai fried rice", description: "", price:"xxx", cuisine:"thai"},
        {name:"Sweet & Spicy noodles", description: "", price:"xxx", cuisine:"thai"},
        {name:"Red Thai Curry", description: "", price:"xxx", cuisine:"thai"},
        {name:"Green Thai Curry", description: "", price:"xxx", cuisine:"thai"},
        {name:"Masaman Curry", description: "", price:"xxx", cuisine:"thai"},
        {name:"Exotic vegetables tossed in a Basil flavored curry", description: "", price:"xxx", cuisine:"thai"},
        {name:"Mexican Pizza", description: "can be used as starters", price:"xxx", cuisine:"mexican"},
        {name:"Fried Avocado Tacos", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Make Your Own - burritos, taco (hard & soft)", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Enchiladas", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Mexican pasta", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Mexican rice", description: "", price:"xxx", cuisine:"mexican"}
      ],
      desert: [
        {name:"Gulab Jamun", description: "95", price:"xxx", cuisine:"indian"},
        {name:"Malai Kulfi", description: "90", price:"xxx", cuisine:"indian"},
        {name:"Seasonal Ice Cream", description: "80", price:"xxx", cuisine:"indian"},
        {name:"Tiramisu", description: "", price:"xxx", cuisine:"italian"},
        {name:"Chocolate Moussee", description: "", price:"xxx", cuisine:"italian"},
        {name:"Hand Crafted Sorbet", description: "", price:"xxx", cuisine:"italian"},
        {name:"Honey Glazed Noodles with Ice Cream", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Seasonal Fresh Fruits with Custard or Ice Cream", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Lychee Ice Cream (seasonal)", description: "", price:"xxx", cuisine:"chinese"},
        {name:"Banana's in coconut milk", description: "", price:"xxx", cuisine:"thai"},
        {name:"Coconut Ginger ice-cream", description: "", price:"xxx", cuisine:"thai"},
        {name:"Fresh seasonal fruits with ice cream", description: "", price:"xxx", cuisine:"thai"},
        {name:"Lemon Coconut Cake with Lemon Gaze", description: "", price:"xxx", cuisine:"thai"},
        {name:"Churros", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Dulce de leche cheesecakes", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Arroz con leche (rice pudding)", description: "", price:"xxx", cuisine:"mexican"},
        {name:"Tres leches cake", description: "", price:"xxx", cuisine:"mexican"}
      ]
    }
  ];
})();
