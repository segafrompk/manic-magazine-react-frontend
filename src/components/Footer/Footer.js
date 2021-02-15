import React from 'react';
import Menu from '../Header/Menu';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-menu'>
                <div>
                    <Menu />
                </div>
            </div>
            <div className='copyright'>
                &#169; 2020 MANIC magazine. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
