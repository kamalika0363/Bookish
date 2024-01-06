"use client";
import React, { useEffect, useState } from "react";

interface Book {
    author: string;
    summary: string;
}

const fetchFromNotion = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/notion/get-data");
        if (!res.ok) {
            throw new Error("Failed to fetch data from Notion API");
        }
        const data = await res.json();
        return data as Book[]; // Assuming the shape of data is an array of Book objects
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

const BookList: React.FC = () => {
    const [data, setData] = useState<Book[]>([]); // Specify the type for data state

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchFromNotion();
            setData(result);
        };

        fetchData().then(r => console.log("Data fetched from Notion API"));
    }, []);

    const handleButtonClick = (author: string) => {
        alert(`Button clicked for author: ${author}`);
    };

    return (
        <div className="flex flex-col mt-3 border border-[#762837] rounded-br-lg rounded-tl-lg border-b-2 border-r-2 px-2 py-1 my-2">
            <div className="my-2 font-semibold border border-[#762837] rounded-br-lg rounded-tl-lg border-b-2 border-r-2 px-2 py-1">
                Book List
            </div>
            <div>
                <ul>
                    {data && data.length > 0 ? (
                        data.map((book, index) => (
                            <li
                                className="border border-[#762837] rounded-br-lg rounded-tl-lg border-b-2 border-r-2 px-2 py-1 my-3"
                                key={index}
                            >
                                <div className="font-semibold">{book.author}</div>
                                <div className="text-sm font-light">{book.summary}</div>
                                <button
                                    className="border border-[#762837] px-2 rounded-r-md rounded-tl-md font-medium mt-2 text-xs"
                                    onClick={() => handleButtonClick(book.author)}
                                >
                                    Get Book
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="font-bold">Loading...</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default BookList;
