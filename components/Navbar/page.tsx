import { BookHeartIcon } from 'lucide-react';

export default function Navbar(){
    return(
        <div className="flex flex-row gap-2 py-4">
            <div className="flex justify-center items-center">
                <BookHeartIcon color="#762837" size={26} />
            </div>
            <div className="text-lg font-semibold px-2 rounded-bl rounded-tr border-b-2 border-r-2 border border-[#762837]">
                Bookish
            </div>
        </div>
    );
}