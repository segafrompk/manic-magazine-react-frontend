import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home/Home';
import SingleArticle from './SingleArticle/SingleArticle';
import Category from './Category/Category';
import Author from './Author/Author';
import NotFound from './NotFound/NotFound';
import Subscribe from './Subscribe/Subscribe';
import Tags from './Tags';

const Body = () => {
    return (
        <div className='body'>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/top-posts' component={Home} />
                <Route path='/categories/:categoryName' component={Category} />
                <Route path='/tags/:tag' component={Tags} />
                <Route
                    path='/posts/:slug/:articleId'
                    component={SingleArticle}
                />
                {/* <Route path='/categories/:categoryName' component={Category} /> */}
                <Route path='/author/:autorId/posts'>
                    <Author filter='posts' />
                </Route>
                <Route path='/author/:autorId/photos'>
                    <Author filter='photos' />
                </Route>
                <Route path='/author/:autorId' exact>
                    <Author filter='all' />
                </Route>
                <Route path='/subscribe' component={Subscribe} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    );
};

export default Body;
