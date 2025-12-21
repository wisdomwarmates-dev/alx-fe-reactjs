import {link} from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ backgroundColor: 'navy', padding: '10px', textAlign: 'center' }}>
            <link to="/" style={{ color: 'white', margin: '0 15px'}}>Home</link>
            <link to="/about" style={{ color: 'white', margin: '0 15px'}}>About</link>
            <link to="/services" style={{ color: 'white', margin: '0 15'}}>Services</link>
            <link to="/contact" style={{ color: 'white', margin: '0 15'}}>Contact</link>
        </nav>
    );
}

export default Navbar;
