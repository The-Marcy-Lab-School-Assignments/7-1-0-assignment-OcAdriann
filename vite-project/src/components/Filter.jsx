import { useState } from "react";

const Filter = ({ search, setSearch }) => {

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="ui search">
            <div className="ui icon input">
                <input 
                    className="prompt" 
                    placeholder="Search by Name..." 
                    value={search} 
                    onChange={handleChange} 
                />
                <i className="search icon" />
            </div>
        </div>
    );
};

export default Filter;
