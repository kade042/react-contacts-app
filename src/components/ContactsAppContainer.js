import React, { Component } from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import ContactsApp from './ContactsApp';

export default class ContactsAppContainer extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    fetch('./dist/contacts.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ contacts: responseData });
    })
    .catch((error) => {
      console.log('Error fetching and pasrsing data', error);
    });
  }

  render() {
    return (
      <ContactsApp contacts={this.state.contacts} />
    );
  }
}
