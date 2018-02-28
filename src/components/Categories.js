import React, { Component } from 'react';
import Category from './Category';
import AddCategoryForm from './AddCategoryForm';

class Categories extends Component {
  renderCategory = (key) => {
    const { name, products } = this.props.categories[key];

    return (
      <Category 
        key={key} 
        index={key} 
        name={name} 
        products={products}
        updateCategory={this.props.updateCategory}
        removeCategory={this.props.removeCategory} />
    )
  }

  render() {
    return (
      <div>
        <h3>Categories</h3>
        <AddCategoryForm onSubmit={this.props.addCategory} />
        {
          Object
            .keys(this.props.categories)
            .map(this.renderCategory)
        }
      </div>
    )
  }
}

export default Categories;