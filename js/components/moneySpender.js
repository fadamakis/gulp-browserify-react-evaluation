import PriceChooser from './PriceChooser';
import Product from './Product';

var MoneySpender = React.createClass({

    getInitialState: function() {
        return {
            products: [] 
        };
    },

    filter: function(p){

        var url = "fakeapi.com/products.json";

        $.get(url, (result) => {

            var filteredProducts = result.products.filter(function (el) {
              return el.price <= p;
            });
            
            //console.log(filteredProducts);

            this.setState({
                products: filteredProducts
            });

        }.bind(this));

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


export default MoneySpender;