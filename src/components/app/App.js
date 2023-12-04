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
                            <Route path='about' element={<AboutUs/>}/>
                            <Route path='catalog' element={<Catalog/>}/>
                            <Route path='contacts' element={<Contacts/>}/>
                            <Route path='catalog/dress' element={<ListItems name='dress'/>}/>
                            <Route path='catalog/dress/:id' element={<ItemCard name='dress'/>}/>
                            <Route path='catalog/tshirt' element={<ListItems name='tshirt'/>}/>
                            <Route path='catalog/tshirt/:id' element={<ItemCard name='tshirt'/>}/>
                            <Route path='catalog/pants' element={<ListItems name='pants'/>}/>
                            <Route path='catalog/pants/:id' element={<ItemCard name='pants'/>}/>
                            <Route path='catalog/accessories' element={<ListItems name='accessories'/>}/>
                            <Route path='catalog/accessories/:id' element={<ItemCard name='accessories'/>}/>
                        </Routes>
                    </main>
                    <AppFooter/>
                </div>
            </Router>
        </>


    )
}

export default App;