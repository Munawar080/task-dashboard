import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
interface SidebarProps {
    isOpen?: boolean;
onToggle?: () => void;
}
export default function Sidebar({onToggle, isOpen}: SidebarProps) {
    return (
        <aside className={`sidebar relative transition-all`}>
            <div className="rounded-full absolute right-[10px] top-4 flex justify-center items-center cursor-pointer border border-gray-400 h-6 w-6
            hover:bg-white transition-all" onClick={onToggle}>
                {isOpen ? (<MdOutlineChevronRight className="hover:text-gray-900"/>) :
                (<MdOutlineChevronLeft className="hover:text-gray-900"/>)}
            </div>
            <h2 className="text-gray-400 text-xl">Sidebar</h2>
        </aside>
    )

}