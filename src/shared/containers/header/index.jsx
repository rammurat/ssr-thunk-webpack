import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Header = ({super_header, top_nav}) => {
    return (
        <header>
            <h1>Super header</h1>
            <ul className="flex-container nowrap">
                {super_header.map((row) => (
                    <li className="flex-item" key={row.key}>
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>

            <h1>Top navigation</h1>
            <ul className="flex-container nowrap">
                {top_nav.men.clothing.map((row) => (
                    <li className="flex-item" key={row.key}>
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>
        </header>
    )
}

Header.propTypes = {
    super_header: PropTypes.array,
    top_nav: PropTypes.object
}

export default Header