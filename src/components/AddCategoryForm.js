import React, { Component } from 'react';

class AddCategoryForm extends Component {
  constructor() {
    super();

    this.state = {
      categoryName: ''
    };
  }

  handleChange = (e) => {
    this.setState({ categoryName: e.target.value });
  }

  onSubmit = () => {
    const category = {
      name: this.state.categoryName,
      products: {}
    };

    this.props.onSubmit(category);
    this.setState({ categoryName: '' });
  }

  render() {
    const { categoryName } = this.state;
    return (
      <div className="add-category">
        <input type="text" value={categoryName} onChange={this.handleChange} placeholder="New Category" />
        <button disabled={categoryName === ''} onClick={this.onSubmit}>Add</button>
      </div>
    )
  }
}

export default AddCategoryForm;