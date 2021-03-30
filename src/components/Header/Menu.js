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
            <MenuItem route='/categories/gear' title='GEAR' />
            <MenuItem route='/categories/fitness' title='FITNESS' />
            <MenuItem
                route='/categories/culture-and-art'
                title='CULTURE & ART'
            />
            <MenuItem route='/categories/travel' title='TRAVEL' />
            <MenuItem route='/categories/lifestyle' title='LIFESTYLE' />
            <MenuItem route='/categories/grooming' title='GROOMING' />
            <MenuItem
                route='/subscribe'
                title='SUBSCRIBE'
                highlight='highlight'
            />
        </nav>
    );
};

export default Menu;
