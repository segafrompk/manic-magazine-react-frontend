import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    return (
        <nav className='menu'>
            <MenuItem route='/top-posts' title='TOP POSTS' />
            <MenuItem route='/categories/music' title='MUSIC' />
            <MenuItem route='/categories/movies' title='MOVIES' />
            <MenuItem route='/categories/girls' title='GIRLS' />
            <MenuItem route='/categories/style-planner' title='STYLE PLANNER' />
            <MenuItem route='/categories/cars' title='CARS' />
            <MenuItem route='/categories/sports' title='SPORTS' />
            <MenuItem route='/categories/history' title='HISTORY' />
            <MenuItem route='/categories/culture' title='CULTURE' />
            <MenuItem route='/categories/art' title='ART' />
            <MenuItem route='/categories/lifestyle' title='LIFESTYLE' />
            <MenuItem route='/categories/news' title='NEWS' />
            <MenuItem
                route='/subscribe'
                title='SUBSCRIBE'
                highlight='highlight'
            />
        </nav>
    );
};

export default Menu;
