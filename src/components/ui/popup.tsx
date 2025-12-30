import { useEffect, useRef, useState } from "react";
import { FaExpandAlt, FaRegCalendar, FaRegCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import Statuses from "./status";
import { ASSIGNEES, INITIAL_STATUSES, PRIORITY_STATUSES, PROJECT_STATUS, TASK_LABELS } from "../../assets/data/popupStatus";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { MdOutlineLabel } from "react-icons/md";

interface PopupProps {
    onClose?: () => void;
}
export default function IssuePopup({ onClose }: PopupProps) {
    const [maximize, setMaximize] = useState(false);
    const [mounted, setMounted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log("File selected:", file.name);
        }
    };
    useEffect(() => {
        setMounted(true);
    }, []);

    return <div className={`absolute  left-1/2 -translate-x-1/2 w-1/2 border border-gray-700  bg-[#1c1d1f] rounded-lg transform duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            ${maximize ? 'top-[10%]' : 'top-[20%]'}`}>
        <div className=" p-3">
            <div className="header flex justify-between mb-3">
                <div className="flex gap-2">
                    <div className='font-medium bg-gray-700 border border-gray-700 rounded-md px-2 text-gray-400'>MUN</div>
                    <span className="text-gray-200 font-medium text-md">
                        New issue
                    </span>

                </div>
                <div className="flex gap-2 justify-center">
                    <div className="rounded-sm hover:bg-[#32353e] h-6 w-6 flex  items-center justify-center">
                        <FaExpandAlt onClick={() => setMaximize(!maximize)} className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className=' font-bold h-6 w-6 rounded-sm hover:bg-[#32353e] flex justify-center items-center' onClick={onClose}><IoClose className="w-5 h-5 text-gray-400" /></div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <input type="text" placeholder="Issue title" className="w-full placeholder:font-medium placeholder:text-gray-500 placeholder:text-2xl text-2xl font-medium px-2 mb-2 outline-none" />
                <textarea placeholder="Add description..." className={`w-full resize-none placeholder:text-xl placeholder:text-gray-500 text-xl  px-2  outline-none transform duration-300 ease-in-out ${maximize ? 'h-[60vh]' : 'h-20'}`}></textarea>
            </div>

            <div className="flex gap-2">
                <Statuses placeholder="Change status..." options={INITIAL_STATUSES} text={"todo"} icon={<FaRegCircle className="h-5 w-5" />} />
                <Statuses placeholder="Set priority to..." options={PRIORITY_STATUSES} text={"priority"} icon={<HiDotsHorizontal className="h-5 w-5" />} />
                <Statuses isFilterable={false} options={ASSIGNEES} text={"Assignee"} icon={<PiUserCircleDashedFill className="h-5 w-5" />} />
                <Statuses options={PROJECT_STATUS} text={"Projects"} placeholder="Move to project..." icon={<PiUserCircleDashedFill className="h-5 w-5" />} />
                <Statuses options={TASK_LABELS} text={"label"} placeholder="Add labels..." icon={<MdOutlineLabel className="h-5 w-5" />} />
                <div className="px-3 py-1  gap-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 transform transition-all duration-200 border rounded-md border-gray-700">
                    <FaRegCalendar className=" text-gray-500 h-4 w-4" />
                    <div className="text-gray-400 font-semibold">
                        Set due date
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t h-17 border-gray-700 px-4  flex justify-between items-center">
            <div className="rounded-sm hover:bg-[#32353e] h-7 w-7 flex  items-center justify-center" onClick={handleIconClick}>
                <RiAttachment2 className="h-5 w-5 text-gray-400" />
                {/* 3. Hidden input field */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
            <button className="bg-[#5e6ad2] text-white rounded-sm px-4 py-1.5 font-semibold cursor-pointer hover:bg-[#5361e4]">Create issue</button>
        </div>
    </div>
}