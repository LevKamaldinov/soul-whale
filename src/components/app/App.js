import './app.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import AppHeader from "../appHeader/AppHeader";
import Catalog from "../catalog/Catalog";
import AppFooter from "../appFooter/AppFooter";
import Contacts from '../contacts/Contacts';
import AboutUs from '../aboutUs/AboutUs';
import MainPage from '../pages/MainPage';

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='about' element={<AboutUs/>}/>
                            <Route path='catalog' element={<Catalog/>}/>
                            <Route path='contacts' element={<Contacts/>}/>
                            {/* <AboutUs/>
                            <Catalog/>
                            <Contacts/> */}
                        </Routes>
                    </main>
                    <AppFooter/>
                </div>
            </Router>
        </>


    )
}

export default App;