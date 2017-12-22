import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Routes from '../routes';

const App = () =>
    <div>
        <Header/>
        { Routes }
        <Footer/>
    </div>;

export default App;
