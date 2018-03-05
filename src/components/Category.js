import React, { Component } from 'react';
import AddProductForm from './AddProductForm';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      isEditting: false
    };
  }

  handleBlur = () => {
    this.setState({ isEditting: false });
    if(this.name.value !== '') {
      this.props.updateCategory(this.props.index, this.name.value);
    }
  }

  handleClick = () => {
    this.setState({ isEditting: true });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter' && this.name.value !== '') {
      this.setState({ isEditting: false });
      this.props.updateCategory(this.props.index, this.name.value);
    }
  }

  render() {
    return (
      <div className="category">
        {
          this.state.isEditting 
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
              .map(prodKey => <li key={prodKey}>{this.props.products[prodKey].name} ${this.props.products[prodKey].price}</li>)
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