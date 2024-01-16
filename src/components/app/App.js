import './app.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import AppHeader from "../appHeader/AppHeader";
import Catalog from "../catalog/Catalog";
import AppFooter from "../appFooter/AppFooter";
import Contacts from '../contacts/Contacts';
import AboutUs from '../aboutUs/AboutUs';
import MainPage from '../pages/MainPage';
import ListItems from '../listItems/ListItems';
import ItemCard from '../itemCard/ItemCard';

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <AppHeader/>
                    <main>
                        <Routes>
                            <Route path='/' element={<MainPage/>}/>
                            <Route path='info' element={<AboutUs/>}/>
                            <Route path='catalog' element={<Catalog/>}/>
                            {/* <Route path='contacts' element={<Contacts/>}/> */}
                            <Route path='catalog/jackets' element={<ListItems name='jackets'/>}/>
                            <Route path='catalog/jackets/:id' element={<ItemCard name='jackets'/>}/>
                            <Route path='catalog/blouses' element={<ListItems name='blouses'/>}/>
                            <Route path='catalog/blouses/:id' element={<ItemCard name='blouses'/>}/>
                            <Route path='catalog/pants' element={<ListItems name='pants'/>}/>
                            <Route path='catalog/pants/:id' element={<ItemCard name='pants'/>}/>
                            <Route path='catalog/skirts' element={<ListItems name='skirts'/>}/>
                            <Route path='catalog/skirts/:id' element={<ItemCard name='skirts'/>}/>
                        </Routes>
                    </main>
                    <AppFooter/>
                </div>
            </Router>
        </>


    )
}

export default App;