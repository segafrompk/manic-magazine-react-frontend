import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';
import manic from '../../images/logo-glavni.png';
import logo from '../../images/logo-sajt-gornji-levi-ugao.svg';

const Header = () => {
    const [searchActive, setSearchActive] = useState(false);
    const onSearchClick = () => {
        setSearchActive(!searchActive);
    };

    if (searchActive) {
        return (
            <div className='header dark'>
                <img className='logo-top-corner' src={logo} alt='Manic logo' />
                <div className='logo-container'>
                    <p className='logo-center'>SEARCH</p>
                </div>
                <div className='menu-outter'>
                    <input className='search-input' type='text' />
                    <Search onSearchClick={onSearchClick} />
                </div>
            </div>
        );
    }
    return (
        <header className='header'>
            <img className='logo-top-corner' src={logo} alt='Manic logo' />
            <div className='logo-container'>
                <NavLink to='/'>
                    <img
                        className='logo-center'
                        src={manic}
                        alt='Manic Magazine'
                    />
                </NavLink>
            </div>
            <div className='menu-outter'>
                <Menu />
                <Search onSearchClick={onSearchClick} />
            </div>
        </header>
    );
};

export default Header;
