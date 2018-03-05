import React, { Component } from 'react';
import { capitalize } from '../helpers';

class Product extends Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      mouseOverName: false,
      mouseOverPrice: false
    };
  }

  handleBlur = (e) => {
    if(this.state.mouseOverName || this.state.mouseOverPrice) return;

    this.setState({ isEditing: false });
    if(this.name.value !== '' && this.price.value !== 0) {
      this.props.updateProduct(this.props.category, this.props.index, {
        name: this.name.value,
        price: this.price.value
      });
    }
  }

  handleClick = () => {
    this.setState({ isEditing: true });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter' && this.name.value !== '' && this.price.value !== 0) {
      this.setState({ isEditing: false });
      this.props.updateProduct(this.props.category, this.props.index, {
        name: this.name.value,
        price: this.price.value
      });
    }
  }

  handleMouseOver = (e) => {
     const name = capitalize(e.target.name);
    this.setState({ [`mouseOver${name}`]: true });
  }

   handleMouseLeave = (e) => {
     const name = capitalize(e.target.name);
    this.setState({ [`mouseOver${name}`]: false });
  }

  render() {
    return (
      <div>
        {
          this.state.isEditing
            ? <React.Fragment>
                <input 
                    autoFocus
                    type="text"
                    name="name"
                    defaultValue={this.props.name}
                    onBlur={this.handleBlur}
                    onKeyPress={this.handleKeyPress}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                    ref={(input => this.name = input)} />
                  <input 
                    type="text" 
                    name="price"
                    defaultValue={this.props.price}
                    onBlur={this.handleBlur}
                    onKeyPress={this.handleKeyPress}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                    ref={(input => this.price = input)} />
              </React.Fragment>
            : <span onClick={this.handleClick}>{this.props.name} ${this.props.price}</span>
        }
      </div>
    )
  }
}

export default Product;