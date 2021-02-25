import '../bootstrap-reboot.min.css';
import './App.css';
import './responsive.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import Body from './Pages/Body';
import Footer from './Footer/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Body />
            <Footer />
        </Router>
    );
};

export default App;
