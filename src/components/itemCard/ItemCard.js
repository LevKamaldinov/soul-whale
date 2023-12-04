import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import soulWhaleServices from "../../services/services";


import picture from '../../recources/img/default.png'

const ItemCard = (props) => {

    const {id} = useParams();
    const [item, setItem] = useState([]);
    const {getResource} = soulWhaleServices();

    const getData = () => {
        getResource('../../Data/data.json')
        .then(data => data[props.name])
        .then(data => data.filter(el => el.vendorCode == id))
        .then(el => setItem(el))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getData();
    }, []);

    if (item[0]) {
        return (
            <>
                <Link to={`/catalog/${props.name}`}>
                    <button>Назад</button>
                </Link>
                <div className="itemCard">
                    <p>{item[0].title}</p>
                    <img src={picture} alt={item[0].altimg} className="itemCard__img"></img>
                    <p>{item[0].availability}</p>
                    <p>Доступные размеры: {item[0].size}</p>
                    <p>{item[0].vendorCode}</p>
                </div>
            </>
        )
    }
}

export default ItemCard;