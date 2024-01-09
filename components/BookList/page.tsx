"use client";
import React, { useEffect, useState } from "react";

interface Book {
    name: string;
    author: string;
    summary: string;
    image: string;
}

const fetchFromNotion = async () => {
    try {
        const res = await fetch("/api/notion/get-data");
        if (!res.ok) {
            throw new Error("Failed to fetch data from Notion API");
        }
        const data = await res.json();
        return data as Book[];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};

const BookList: React.FC = () => {
    const [data, setData] = useState<Book[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchFromNotion();
            setData(result);
        };

        fetchData().then(() => console.log("Data fetched from Notion API"));
    }, []);

    const handleButtonClick = (author: string) => {
        alert(`Button clicked for author: ${author}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {data && data.length > 0 ? (
                data.map((book, index) => (
                    <div
                        className="text-[#762837] dark:text-[#faefd6] border border-[#762837] dark:border-[#faefd6] rounded-br rounded-tl rounded-tr border-b-2 border-r-2 px-2 py-1 my-3"
                        key={index}
                    >
                        <div className="font-bold text-md">{book.name}</div>
                        <div className="font-normal text-sm">{book.author}</div>
                        <div className="text-sm font-light">{book.summary}</div>
                        <div className="flex sm:justify-start justify-center items-center">
                            {book.image && (
                                <img
                                    src={book.image}
                                    alt={`Cover of ${book.name}`}
                                    className="my-3 max-w-full rounded-md sm:w-40 sm:h-60"
                                />
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <div className="font-bold text-[#762837] dark:text-[#faefd6]">Loading...</div>
            )}
        </div>
    );
};

export default BookList;
