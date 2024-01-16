import { useState, useEffect } from 'react';

import './filter.css'

const Filter = (props) => {

    const [size, setSize] = useState('');
    const [color, setColor] = useState(' ');

    useEffect(() => {
        props.setFilter({size, color});
    }, [size, color]);

    // const setRightColor = (str) => {
    //     let text = str.toLowerCase();
    //     let finalText = '';
    //     if (text.includes('ё')) {
    //         finalText = text.replace('ё', 'е');
    //     };
    //     setColor(finalText);
    // };

    return (
        <div>
            <form name="filterForm" className="filter__form">
                <label>Поиск по цвету
                    <input type="text" onChange={(e) => setColor(e.target.value)}></input>
                </label>
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="">Выберите размер</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </form>            
        </div>
    )
}

export default Filter;