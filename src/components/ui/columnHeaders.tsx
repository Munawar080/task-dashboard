import type { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
interface ColumnContainerHeaderProps {
    label?: string;
    icon?: ReactNode;
    numberOfItems: number;
}
export default function ColumnContainerHeader({label, icon, numberOfItems = 0}: ColumnContainerHeaderProps) {
  return (
   <div className="header flex justify-between px-3 py-2">
                    <div className='flex gap-2 items-center'>
                        <div className="text-lg">
                      {icon}
                        </div>
                      <div className='font-medium text-lg'>{label}</div>
                      <div className='font-medium text-lg  text-gray-400'>{numberOfItems}</div>
                    </div>
                    <div className='flex gap-2 justify-between items-center text-gray-400 '>
                        <div className="rounded-sm hover:bg-gray-700 hover:text-white h-6 w-6 flex justify-center items-center">

                      <HiDotsHorizontal className="text-sm"/>
                        </div>
                        <div className="rounded-sm hover:bg-gray-700 hover:text-white h-6 w-6 flex justify-center items-center">

                      <FaPlus className="text-sm"/>
                        </div>
                    </div>
                  </div>
  )
}