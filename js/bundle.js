(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _MoneySpender = require('./components/MoneySpender');

var _MoneySpender2 = _interopRequireWildcard(_MoneySpender);

React.render(React.createElement(_MoneySpender2['default'], null), document.querySelector('#app'));

},{"./components/MoneySpender":2}],2:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _PriceChooser = require('./PriceChooser');

var _PriceChooser2 = _interopRequireWildcard(_PriceChooser);

var _Product = require('./Product');

var _Product2 = _interopRequireWildcard(_Product);

var MoneySpender = React.createClass({
    displayName: 'MoneySpender',

    getInitialState: function getInitialState() {
        return {
            products: []
        };
    },

    filter: function filter(p) {
        var _this = this;

        var url = 'fakeapi.com/products.json';

        $.get(url, (function (result) {

            var filteredProducts = result.products.filter(function (el) {
                return el.price <= p;
            });

            //console.log(filteredProducts);

            _this.setState({
                products: filteredProducts
            });
        }).bind(this));
    },

    render: function render() {

        var newProduct = function newProduct(product) {
            return React.createElement(_Product2['default'], { name: product.name, price: product.price });
        };

        return React.createElement(
            'div',
            { className: 'app' },
            React.createElement(
                'h1',
                null,
                ' How much do you want to spend? '
            ),
            React.createElement(_PriceChooser2['default'], { onFilter: this.filter }),
            this.state.products.map(newProduct)
        );
    }

});

exports['default'] = MoneySpender;
module.exports = exports['default'];

},{"./PriceChooser":3,"./Product":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var PriceChooser = React.createClass({
	displayName: "PriceChooser",

	getInitialState: function getInitialState() {
		return {
			price: 200
		};
	},

	onChange: function onChange(e) {
		this.setState({
			price: e.target.value
		});
	},

	filterProducts: function filterProducts(e) {
		e.preventDefault();
		this.props.onFilter(this.state.price);
	},

	render: function render() {
		return React.createElement(
			"form",
			{ onSubmit: this.filterProducts },
			React.createElement("input", { onChange: this.onChange, value: this.state.price }),
			React.createElement(
				"button",
				null,
				" Search "
			)
		);
	}

});

exports["default"] = PriceChooser;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Product = React.createClass({
    displayName: "Product",

    render: function render() {
        return React.createElement(
            "div",
            { className: "product" },
            "Product ",
            this.props.name,
            " costs ",
            this.props.price
        );
    }

});

exports["default"] = Product;
module.exports = exports["default"];

},{}]},{},[1]);
