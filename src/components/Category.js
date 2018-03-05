import React, { Component } from 'react';
import AddProductForm from './AddProductForm';
import Product from './Product';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false
    };
  }

  componentDidUpdate() {
    if(this.name) {
      this.name.focus();
    }
  }

  handleBlur = () => {
    this.setState({ isEditing: false });
    if(this.name.value !== '') {
      this.props.updateCategory(this.props.index, this.name.value);
    }
  }

  handleClick = () => {
    this.setState({ isEditing: true });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter' && this.name.value !== '') {
      this.setState({ isEditing: false });
      this.props.updateCategory(this.props.index, this.name.value);
    }
  }

  renderProduct = (key) => {
    return (
      <li key={key}>
        <Product 
          {...this.props.products[key]} 
          category={this.props.index} 
          index={key} 
          updateProduct={this.props.updateProduct} />
        <button onClick={() => this.props.removeProduct(this.props.index, key)}>&times;</button>
      </li>
    )
  }

  render() {
    return (
      <div className="category">
        {
          this.state.isEditing 
            ? <input 
                type="text" 
                defaultValue={this.props.name}
                onBlur={this.handleBlur}
                onKeyPress={this.handleKeyPress}
                ref={(input => this.name = input)} />
            : <h5 onClick={this.handleClick}>{this.props.name}</h5>
        }
        <button onClick={() => this.props.removeCategory(this.props.index)}>&times;</button>
        <hr/>
        <ul>
          {
            Object
              .keys(this.props.products)
              .map(this.renderProduct)
          }
        </ul>
        <AddProductForm 
          category={this.props.index}
          addProduct={this.props.addProduct} />
      </div>
    )
  }
}

export default Category;