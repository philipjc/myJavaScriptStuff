var basketModule = (function () {
    // private
    var basket = [];

    function doSomethingPrivate () {
        // ....
    }

    function doAnotherPrivate () {
        // ....
    }


    // add item to basket
    function addItem (items) {
      basket.push(items);
      console.log(basket);
    };

    // get count of basket
    function getItemCount () {
      return basket.length;
    };

    // get total value of items in basket
    function getTotal () {
        var total = getItemCount(),
            countPrice = 0;

        while (total--) {
            countPrice += basket[total].price;
        }
        console.log(countPrice);
        return countPrice;
    };

    return {
      addBasketItem: addItem,
      getBasketCount: getItemCount,
      totalValue: getTotal
    };

})();

var bread = {item: "bread", price: 2.50};
var cheese = {item: "cheese", price: 2.70};

basketModule.addBasketItem(bread);
basketModule.addBasketItem(cheese);

basketModule.totalValue();
