import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Filter from "../filter/Filter";
import soulWhaleServices from "../../services/services";

import './listItems.css';
import picture from '../../recources/img/default.png'

const ListItems = (props) => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(6);
    const [filter, setFilter] = useState(null);
    const {getResource} = soulWhaleServices();
    let active = true;

    const getData = () => {
        getResource('../Data/data.json')
        .then(data => setData(data[props.name]))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getData();
    }, []);
    
    const filterData = (arr, filter) => {
        if (filter) {
            if (filter.size) {
                return arr.filter(item => item.size.includes(filter.size));
            }
            if (filter.availability) {
                return arr.filter(item => item.availability.includes(filter.availability)); 
            }
            if (filter.text.length > 0) {
                return arr.filter(item => item.title.includes(filter.text));
            } else {
                return arr;
            }
        } else {
            return arr;
        }
    }

    const renderItems = (arr, index, filter) => {
        const data = filterData(arr, filter);

        if (data.length <= index) {
            active = false;
        } 
        
        const items = data.map(item => {
            return (
                <Link 
                    to={`/catalog/${props.name}/${item.vendorCode}`}
                    tabIndex={0}>
                    <li 
                        key={item.vendorCode}
                        tabIndex={0}
                        className="listItems__li">
                            <p>{item.title}</p>
                            <img src={picture} alt={item.altimg} className="listItems__img"/>
                            <p>{item.availability}</p>
                            <p>Доступные размеры: {item.size}</p>
                    </li>
                </Link>

            )
        })
        return (
            <ul className="listItems__ul">
                {items.slice(0, index)}
            </ul>
        )
    }

    const items = renderItems(data, index, filter);

    let buttonStyle = active ? null : {'display': 'none'};

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content={`Catalog list with ${props.name}`}
                />
                <title>SoulWhale {props.name}</title>
            </Helmet>
            <Filter setFilter={setFilter}/>
            {items}
            <div className="wrapper">
                <button 
                    className="listItems__button" 
                    style={buttonStyle}
                    onClick={() => setIndex(i => i + 6)}>
                        Загрузить ещё</button>
            </div>
        </>
    )
}

export default ListItems;