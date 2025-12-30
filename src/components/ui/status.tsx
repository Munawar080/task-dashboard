import { useEffect, useRef, useState, type ReactNode } from "react";
import type { StatusType } from "../../interfaces/status";
interface Status {
    text: string;
    icon: ReactNode;
    options: StatusType[];
    placeholder?: string;
    isFilterable?: boolean;   
}
function Statuses({ text, icon, options, placeholder, isFilterable= true }: Status) {
    const [status, setStatus] = useState({ text: text, icon: icon });
    const [showOptions, setShowOptions] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterIndex, setFilterIndex] = useState(-1);

    // template ref for input
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleFilter(event: React.ChangeEvent<HTMLInputElement>): void {
        setSearchQuery(event.target.value);
    }
    const filteredItems = options.filter((s) =>
        s.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    function navigateOptions(event: React.KeyboardEvent<HTMLDivElement>): void {
        if(event.key === "ArrowDown") {
            setFilterIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
        } else if(event.key === "ArrowUp") {
            setFilterIndex((prevIndex) => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
        } else if(event.key === "Enter" && filterIndex >= 0) {
            const selectedStatus = filteredItems[filterIndex];
            setStatus({ icon: selectedStatus.icon, text: selectedStatus.text });
            setShowOptions(false);
            setFilterIndex(-1);
        }
    }

    useEffect(() => { 
        0// focus input when options are shown
        if (showOptions && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showOptions]);

    return (
        <>
            <div className="relative ">
                <button onClick={() => setShowOptions(!showOptions)} className="flex group gap-1 px-2 py-1  text-gray-500  items-center justify-between border-gray-700
                 bg-gray-800 hover:bg-gray-700 transform transition-all duration-200 border rounded-md">
                    {status.icon}
                    <span className="text-gray-400 capitalize  group-hover:text-gray-200 font-semibold">
                        {status.text}
                    </span>
                </button>

                {showOptions &&
                    <div className="absolute top-11 border border-gray-700 bg-[#1c1d1f] rounded-lg  w-90 flex flex-col">
                        {isFilterable && <div className="px-4 py-3">
                            <input  placeholder={placeholder} onKeyDown={navigateOptions} type="text" ref={inputRef} onChange={handleFilter} className="outline-none placeholder:text-gray-500 placeholder:text-lg placeholder:font-semibold" />

                        </div>}
                        <div className="border-t border-gray-700 px-2 py-2">
                            {filteredItems.length > 0 && filteredItems.map((s, index) => (
                                <div  key={s.id} onClick={() => { setStatus({ icon: s.icon, text: s.text }); setShowOptions(false); }}
                                    className={`py-2 flex items-center gap-2 hover:bg-gray-600/20 rounded-md px-2 cursor-pointer
                                 text-gray-300 capitalize ${filterIndex === index ? 'bg-gray-600/30' : ''}`} tabIndex={0}>
                                    {s.icon} <span className="font-semibold text-lg">{s.text}
                                    </span>
                                </div>
                            ))}

                            <span>
                                {filteredItems.length === 0 && <div className="text-gray-500 px-2 py-2">{`No match found`}</div>}
                            </span>

                        </div>
                    </div>}

            </div>
        </>
    )
}

export default Statuses;