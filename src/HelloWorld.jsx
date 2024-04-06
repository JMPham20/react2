// Import necessary modules from the React library
import React, { Component } from 'react';

// Define a class-based React component named HelloWorld
class HelloWorld extends Component {
  // Render method to define what the component should render
  render() {
    // Return JSX code representing the component's UI
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
}

// Export the HelloWorld component so it can be imported and used in other files
export default HelloWorld;
