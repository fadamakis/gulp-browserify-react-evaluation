var Product = React.createClass({

    render: function() {
        return (
            <div>
                Product { this.props.name } costs { this.props.price }
            </div>
        );
    }

});

export default Product;