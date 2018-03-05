import React, { Component } from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
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

  removeCategory = (key) => {
    const categories = {...this.state.categories};
    // categories[key] = null; // For firebase
    delete categories[key];
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
            removeCategory={this.removeCategory} />
        </div>
      </div>
    );
  }
}

export default App;
