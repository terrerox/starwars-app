import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomeScreen } from '../components/home/HomeScreen';
import { PersonScreen } from '../components/person/PersonScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={ <HomeScreen />  } />
                <Route path="/:personName" element={ <PersonScreen />  } />    
            </Routes>
        </BrowserRouter>
    )
}