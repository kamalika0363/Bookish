export default function Header() {
    return (
        <div className="flex flex-col">
            <div className="border border-[#762837] rounded-br-lg rounded-tl-lg border-b-2 border-r-2 px-2 py-1">
                <div className="font-bold">
                    ACTIVE_BOOK
                </div>
                <div className="font-mono text-xs font-semibold">
                    {'<script src="transmit:profile"></script>'} <br/>
                    {'<script src="read:this-book"></script>'} <br />
                    {'<script>let book="unbridged"</script>'} <br/>
                </div>
                <div className="mt-5 flex flex-row gap-2 text-sm justify-end items-end">
                    <button className="border border-[#762837] px-2 rounded-r-md rounded-tl-md font-semibold">
                        CLASSIC
                    </button>
                    <button className="border border-[#762837] px-2 rounded-r-md rounded-tl-md font-semibold">
                        MYSTERY
                    </button>
                    <button className="border border-[#762837] px-2 rounded-r-md rounded-tl-md font-semibold">
                        CRISIS
                    </button>
                </div>
            </div>
        </div>
    );
}
