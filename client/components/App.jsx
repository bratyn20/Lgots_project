import React from 'react';
import Lgotsmenu from './Lgotsmenu.jsx';
import Lgotsgrid from './Lgotsgrid.jsx';

const App = React.createClass({
    render() {
        return (
                <div className='App'>
                    <Lgotsmenu />
                    <Lgotsgrid />
                </div>
        ); 
    }
});

export default App;

