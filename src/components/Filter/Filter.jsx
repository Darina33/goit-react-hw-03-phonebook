import React from "react";
import PropTypes from "prop-types";
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
    return (<div className={css.box}><label className={css.text}>Find contacts by name<input className={css.input}type="text" value={filter} onChange={onChange}></input></label></div>)
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;