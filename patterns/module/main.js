var basketModule = (function () {
    // private
    var basket = [];

    function doSomethingPrivate () {
        // ....
    }

    function doAnotherPrivate () {
        // ....
    }

    // return object to public scope
    return {

        // add item to basket
        addItem: function (items) {
            basket.push(items);
            console.log(basket);
        },

        // get count of basket
        getItemCount: function () {
            return basket.length;
        },

        // a public alias to a private
        doSomething: doSomethingPrivate,

        // get total value of items in basket
        getTotal: function () {
            var total = this.getItemCount(),
                countPrice = 0;

            while (total--) {
                countPrice += basket[total].price;
            }
            console.log(countPrice);
            return countPrice;
        }
    };
})();

var bread = {item: "bread", price: 1.50};
var cheese = {item: "cheese", price: 2.50};

basketModule.addItem(bread);
basketModule.addItem(cheese);

basketModule.getTotal();
