import { useState, useEffect } from 'react';

import './filter.css'

const Filter = (props) => {

    const [text, setText] = useState(' ');
    const [availability, setAvailability] = useState(false);
    const [size, setSize] = useState('');

    useEffect(() => {
        props.setFilter({text, availability, size});
    }, [text, availability, size])

    const isAvailability = (state) => {
        if (state === false) {
            setAvailability('в наличии');
        } else {
            setAvailability(false)
        }
    }

    return (
        <div>
            <form name="filterForm" className="filter__form">
                <label>Поиск по цвету
                    <input type="text" onChange={(e) => setText(e.target.value)}></input>
                </label>
                <label>Есть в наличии
                    <input type="checkbox" id='checkboxInput' onClick={() => isAvailability(availability)}></input>
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