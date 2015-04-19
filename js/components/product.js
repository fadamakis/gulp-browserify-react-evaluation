var Product = React.createClass({

    render: function() {
        return (
            <div className="product">
                Product { this.props.name } costs { this.props.price }. You can find it <a href={ this.props.url } target="_blank">here</a>.
            </div>
        );
    }

});

export default Product;