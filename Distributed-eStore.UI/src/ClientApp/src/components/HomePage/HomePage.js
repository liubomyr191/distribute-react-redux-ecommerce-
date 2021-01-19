"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
var React = require("react");
require("./HomePage.css");
var HomePage = function () {
    return React.createElement("div", { className: "home-page" },
        React.createElement("div", { className: "top-image-container" },
            React.createElement("a", { href: "#", className: "home-page__link" },
                React.createElement("h1", { className: "home-page__text" },
                    "Just Launched ",
                    React.createElement("br", null),
                    " Summer Products"),
                React.createElement("h3", { className: "home-page__shop-now" }, "SHOP NOW"))),
        React.createElement("div", { className: "bottom-image-container" },
            React.createElement("a", { href: "#", className: "home-page__link" },
                React.createElement("div", { className: "tide-text-container" },
                    React.createElement("h5", { className: "tide-text-container__text" },
                        "Every day, 38,356,164 pounds of trash are dumped into our oceans.",
                        React.createElement("br", null),
                        "Let's turn the tide."),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("span", { className: "tide-text-container__title" }, "We Quit"),
                            React.createElement("br", null),
                            React.createElement("span", null, "Our plan to remove all single-use plastics from our supply chain.")),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("span", { className: "tide-text-container__title" }, "Get Dirty & Do Good"),
                            React.createElement("br", null),
                            React.createElement("span", null, "Join us at an upcoming cleanup")),
                        React.createElement("div", { className: "col-md-4" },
                            React.createElement("span", { className: "tide-text-container__title" }, "Let's turn the tide"),
                            React.createElement("br", null),
                            React.createElement("span", null, "Our DIY Cleanup Kit includes all the tools you need to organize your own cleanup anytime.")))))));
};
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map