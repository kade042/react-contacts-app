import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import ContactList from './ContactList';
import SearchList from './SearchList';

export default class ContactsApp extends Component {
  render() {
    return (
      <div>
        <SearchList />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

ContactsApp.proptypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
