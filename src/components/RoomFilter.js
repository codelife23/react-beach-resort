import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms}) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms, 'type');

    //add all
    types = ['all', ...types];

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">
                    room type
                    </label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end select type*/}

                {/*guests*/}
                <div className="form-group">
                    <label htmlFor="capacity">
                    Guests
                    </label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                {/*end guests*/}

                {/*room price*/}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input name="price" type="range" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                {/*end room price*/}
                
                {/* size */}
                <div className="form-group">
                    <lable htmlFor="size">
                        room size
                    </lable>
                    <div className="size-inputs">
                        <input name="minSize" type="number" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input name="maxSize" type="number" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end of size */}

                {/*extras*/}
                <div className="form-group">
                    <div className="single-extra">
                        <input name="breakfast" type="checkbox" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <lable htmlFor="breakfast">breakfast</lable>
                    </div>

                    <div className="single-extra">
                        <input name="pets" type="checkbox" id="pets" checked={pets} onChange={handleChange} />
                        <lable htmlFor="pets">pets</lable>
                    </div>
                </div>
                {/*end of extras*/}
            </form>
        </section>
    )
}

export default RoomFilter;
