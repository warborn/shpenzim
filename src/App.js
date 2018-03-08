import React, { Component } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Calendar from './components/Calendar';
import sampleCategories from './sampleCategories';

class App extends Component {
  constructor() {
    super();

    this.state = {
      categories: {}
    };
  }

  componentWillMount() {
    this.setState({ categories: sampleCategories});
  }

  addCategory = (category) => {
    // Create a copy of the categories object
    const categories = {...this.state.categories};
    // Add new category
    const timestamp = Date.now();
    categories[`category-${timestamp}`] = category;
    // Update categories state
    this.setState({ categories });
  }

  addProduct = (key, product) => {
    const categories = {...this.state.categories};
    const timestamp = Date.now();
    categories[key].products[`product-${timestamp}`] = product;
    this.setState({ categories });
  }

  updateCategory = (key, updatedName) => {
    const categories = {...this.state.categories};
    categories[key].name = updatedName;
    this.setState({ categories });
  }

  updateProduct = (key, productKey, updatedProduct) => {
    const categories = {...this.state.categories};
    categories[key].products[productKey] = updatedProduct;
    this.setState({ categories });
  }

  removeCategory = (key) => {
    const categories = {...this.state.categories};
    // categories[key] = null; // For firebase
    delete categories[key];
    this.setState({ categories });
  }

  removeProduct = (key, productKey) => {
    const categories = {...this.state.categories};
    // categories[key].products[productKey] = null; // For firebase
    delete categories[key].products[productKey];
    this.setState({ categories });
  }
  
  render() {
    const { categories } = this.state;
    return (
      <div className="shpenzim">
        <Header title="Shpenzim" />

        <div className="main">
          <Categories 
            categories={categories}
            addCategory={this.addCategory}
            addProduct={this.addProduct}
            updateCategory={this.updateCategory}
            updateProduct={this.updateProduct}
            removeCategory={this.removeCategory}
            removeProduct={this.removeProduct} />
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
