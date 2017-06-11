import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactItem from './ContactItem';

export default class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(
          (contact) => <ContactItem key={contact.email}
                                    name={contact.name}
                                    email={contact.email} />
        )}
      </ul>

    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
