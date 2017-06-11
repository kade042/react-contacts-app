import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

export default class ContactsApp extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
    };
  }

  handleUserInput(searchTerm) {
    this.setState({ filterText: searchTerm });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)} />

        <ContactList  contacts={this.props.contacts}
                      filterText={this.state.filterText} />
      </div>
    );
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
