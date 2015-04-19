var MoneySpender = React.createClass({

    getInitialState: function() {
        return {
            products: [{
                name:'iPhone 6s',
                price:'180'
            },{
                name:'Galaxy S6',
                price:'220'
            }] 
        };
    },

    filter: function(p){

        var filteredProducts = this.state.products.filter(function (el) {
          return el.price <= p;
        });

        this.setState({
            products: filteredProducts
        });

    },

    render: function() {

        var newProduct = function(product){
            return <Product name={product.name} price={product.price} />
        };

        return (
            <div>
                <h1> Money Spender </h1>

                <PriceChooser onFilter={ this.filter } />    


                { this.state.products.map(newProduct) }
            </div>
        );
    }

});

React.render(<MoneySpender />, document.body);