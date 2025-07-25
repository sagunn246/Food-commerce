import React, { useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

const Search = ({ MainData, setProductData }) => {
    const [search, setSearch] = useState("");
    console.log(search);
    useEffect(() => {
        console.log(MainData);
        console.log(search);
        let tempArray = MainData.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.mealType[0].toLowerCase().includes(search.toLowerCase())
        );
        setProductData(tempArray);
    }, [search]);

    return (
        <div>
            <div className="flex items-center border border-gray-300 rounded-sm">
                <input
                    type="text"
                    className="outline-none p-1 text-xs sm:text-sm md:text-base w-24 sm:w-40 md:w-52"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearch className="mr-2 text-base sm:text-lg" />
            </div>
        </div>
    );
};

export default Search;
