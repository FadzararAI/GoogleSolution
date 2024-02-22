import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from './pages/Home';
import NotFound from './pages/404';
import LoginPage from './pages/authentication/Login';

const App = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" name="Home" element={<Home />} /> */}
                <Route path="/" name="Login" element={<LoginPage />} />
                <Route path="/dashboard" name="Dashboard" element={<Home />} />
                <Route path="*" name="404 Not Found" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
library.add(fas)
