var PriceChooser = React.createClass({

	getInitialState: function() {
		return {
			price: 400
		};
	},

	onChange: function(e){
		this.setState({
			price: e.target.value
		});
	},

	filterProducts: function(e){
		e.preventDefault();
		this.props.onFilter(this.state.price);
	},

	render: function() {
		return (
			<form onSubmit={this.filterProducts}>
				<input onChange={this.onChange} value={this.state.price} /> 
				 
				<button> Search </button>
			</form>
			);
	}

});

export default PriceChooser;
