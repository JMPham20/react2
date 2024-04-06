import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    
    // Add a new key/value pair in the state to keep track of type
    this.state = {
      search: "",
      selectedType: "All" // Initialize selectedType to "All"
    };
  }
  
  // Updates the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  }
  
  // Updates the selectedType in the state when a type is selected from the dropdown
  onSelectType = (type) => {
    this.setState({ selectedType: type });
  }
  
  // Filters items based on both the search term and the selected type
  filterItem = (item) => {
    const { search, selectedType } = this.state;
    const nameMatch = item.name.toLowerCase().includes(search);
    const typeMatch = selectedType === "All" || item.type.toLowerCase() === selectedType.toLowerCase();
    return nameMatch && typeMatch;
  }
  
  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        
        {/* Dropdown button for selecting produce type */}
        <DropdownButton
          title="Select Type"
          id="type-dropdown"
          onSelect={this.onSelectType}
        >
          <MenuItem eventKey="All">All</MenuItem>
          <MenuItem eventKey="Fruit">Fruit</MenuItem>
          <MenuItem eventKey="Vegetable">Vegetable</MenuItem>
        </DropdownButton>
        
        {/* Pass filtered produce to List component */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
