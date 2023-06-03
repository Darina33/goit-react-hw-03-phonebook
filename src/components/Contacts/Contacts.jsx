import React from "react";
import PropTypes from "prop-types";
import css from './Contacts.module.css';


const Contacts = ({ contacts, onDeleteContact }) => {
    return (<ul className={css.list}>{ contacts.map(({ id, name, number }) => { return (<li className={css.item} key={id}>{name}: {number}<button className={css.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button></li>)})}</ul>)
}

Contacts.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
};

export default Contacts