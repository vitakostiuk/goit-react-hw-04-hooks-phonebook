import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.List}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.Item}>
        {name}
        <span className={s.Number}>{number}</span>
        <button
          type="button"
          className={s.Btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
