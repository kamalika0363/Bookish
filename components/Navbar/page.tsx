"use client";
import { BookHeartIcon } from 'lucide-react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {useEffect, useState} from "react";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="flex flex-row gap-2 py-4">
            <div className="flex items-center justify-center">
                <BookHeartIcon className="text-[#762837] dark:text-neutral-200" size={26} />
            </div>
            <div className={`text-lg font-semibold px-2 border-b-2 border-r-2 border ${theme === 'light' ? 'border-[#762837] text-[#762837]' : 'dark:border-stone-700 dark:text-neutral-200'}`}>
                Bookish
            </div>
            <button className="text-[#762837] dark:text-neutral-200" onClick={toggleTheme}>
                {theme === 'light' ? (
                    <Moon size={20} />
                ) : (
                    <Sun size={20} />
                )}
            </button>
        </div>
    );
}
