"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProducts = void 0;
var React = require("react");
var CartProduct_1 = require("../../components/cart/cartProduct/CartProduct");
var CartProducts = function (_a) {
    var cart = _a.cart, changeQuantity = _a.changeQuantity, onPlaceOrder = _a.onPlaceOrder;
    var productIdToCartProductMap = cart.productIdToCartProductMap;
    var totalCost = Object.values(productIdToCartProductMap).reduce(function (total, product) {
        return total + product.price;
    }, 0);
    var onClick = function (event) {
        onPlaceOrder();
    };
    return (React.createElement(React.Fragment, null,
        Object.values(productIdToCartProductMap).map(function (cartProduct, index) {
            return React.createElement(React.Fragment, { key: "cart-product-" + index },
                React.createElement(CartProduct_1.CartProduct, { cart: cartProduct, onQuantityChange: changeQuantity }),
                React.createElement("hr", null));
        }),
        React.createElement("div", null,
            React.createElement("strong", { className: "d-block" },
                "Sub-total (inc. VAT) = $",
                totalCost),
            React.createElement("strong", null, "NB: VAT will be removed at checkout for Yearbook 5 purchases."),
            React.createElement("p", null, "Free Returns. Free Repairs For Life.")),
        React.createElement("hr", null),
        React.createElement("div", null,
            React.createElement("button", { onClick: onClick }, "Checkout"))));
};
exports.CartProducts = CartProducts;
//# sourceMappingURL=CartProducts.js.map