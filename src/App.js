import './App.scss';
import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Sidebar from './components/SideBar/SideBar';

 const App = () => {
     
        return (
            <>
                <div className='App'></div>
                <Sidebar />
                <AppRoutes />

            </>
        )
    }


export default App;