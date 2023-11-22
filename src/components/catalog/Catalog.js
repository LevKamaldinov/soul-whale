// import soulWhaleServices from "../../services/services";
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
                <li 
                    key={i}
                    tabIndex={0}>
                        <img src={`${require(`../../recources/img/catalogImg/${item.altimg}.jpg`)}`} alt={item.alt} height={500} width={500}/>
                        <a>{item.title}</a>
                        <p>{item.count} позиций</p>
                </li>
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