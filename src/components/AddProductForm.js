import React, { Component } from 'react';

class AddProductForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      price: 0
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (category) => {
    const product = {
      name: this.state.name,
      price: this.state.price
    };

    this.props.addProduct(category, product);

    this.setState({
      name: '',
      price: 0
    });
  }

  render() {
    const { name, price } = this.state;
    const isValid = name !== '' && price !== 0;

    return (
      <div className="add-product">
        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" />
        <input type="text" name="price" value={price} onChange={this.handleChange} placeholder="Price" />
        <button disabled={!isValid} onClick={() => this.handleSubmit(this.props.category)}>Add</button>
      </div>
    )
  }
}

export default AddProductForm;