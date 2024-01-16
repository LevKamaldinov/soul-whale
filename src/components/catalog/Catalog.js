// import soulWhaleServices from "../../services/services";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import './catalog.css';

const Catalog = () => {
    const [catalogList, setCatalogList] = useState([]);

    useEffect(() => {
        fetch('./Data/data.json')
            .then(res => res.json())
            .then(data => setCatalogList(data.catalog))
            .catch(error => console.log(error));
    }, []);

    function renderCatalog(arr) {
        const items = arr.map((item, i) => {
            return (
                <Link 
                    to={item.altimg}
                    key={i}
                    tabIndex={0}
                    className="catalogList__li">
                        <h2>{item.title}</h2>
                        <img src={`${require(`../../recources/img/catalogImg/${item.altimg}.jpg`)}`} alt={item.altimg} className="catalogList__img"/>
                        {/* <p>{item.count} позиций</p> */}
                </Link>
            )
        })

        return (
            <ul className="catalogList">
                {items}
            </ul>
        )
    };

    const items = renderCatalog(catalogList);

    return (
        <>
            {items}
        </>
    )
}

export default Catalog;