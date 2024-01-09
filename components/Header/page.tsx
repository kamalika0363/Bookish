export default function Header() {
    return (
        <div className="flex flex-col">
            <div className="border border-[#762837] dark:border-[#faefd6] text-[#762837] dark:text-[#faefd6] rounded-r rounded-tl border-b-2 border-r-2 px-2 py-1">
                <div className="font-bold">ACTIVE_BOOK</div>
                <div className="font-mono text-xs font-semibold">
                    {'<script src="transmit:profile"></script>'} <br/>
                    {'<script src="read:this-book"></script>'} <br />
                    {'<script>let book="unbridged"</script>'} <br/>
                </div>
                <div className="mt-5 flex flex-row gap-2 text-sm justify-end items-end">
                    {['CLASSIC', 'MYSTERY', 'CRISIS'].map((genre) => (
                        <button
                            key={genre}
                            className="border border-[#762837] dark:border-[#faefd6] px-2 rounded-r rounded-tl border-b-2 border-r-2 font-semibold"
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
