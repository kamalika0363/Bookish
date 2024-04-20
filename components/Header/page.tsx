export default function Header() {
    return (
        <div className="flex flex-col">
            <div className="border border-[#762837] dark:border-stone-700 text-[#762837] dark:text-neutral-200 border-b-2 border-r-2 px-2 py-1">
                <div className="font-bold">ACTIVE_BOOK</div>
                <div className="font-mono text-xs font-semibold">
                    {'<script src="transmit:profile"></script>'} <br/>
                    {'<script src="read:this-book"></script>'} <br />
                    {'<script>let book="unbridged"</script>'} <br/>
                </div>
                <div className="flex flex-row items-end justify-end gap-2 mt-5 text-sm">
                    {['CLASSIC', 'MYSTERY', 'CRISIS'].map((genre) => (
                        <button
                            key={genre}
                            className="border border-[#762837] dark:border-stone-700 px-2 border-b-2 border-r-2 font-semibold"
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
