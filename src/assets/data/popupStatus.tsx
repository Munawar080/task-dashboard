import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { FaCircleHalfStroke, FaCircleXmark } from "react-icons/fa6";
import type { StatusType } from "../../interfaces/status";
import { HiDotsHorizontal } from "react-icons/hi";
import { BiSignal3, BiSignal2, BiSignal1 } from "react-icons/bi";
import { BsExclamationSquareFill } from "react-icons/bs";
import { PiUserCircleDashedFill } from "react-icons/pi";
import { TbCircleDotted } from "react-icons/tb";

export const INITIAL_STATUSES: StatusType[] = [{ id: 1, value: 'todo', text: 'todo', icon: <FaRegCircle className="h-5 w-5" /> },
{ id: 2, value: 'in progress', text: 'in progress', icon: <FaCircleHalfStroke className='text-yellow-600 h-5 w-5' /> },
{ id: 3, value: 'done', text: 'done', icon: <FaCheckCircle className='text-sky-800 h-5 w-5' /> }, 
{ id: 4, value: 'canceled', text: 'canceled', icon: <FaCircleXmark className='text-red-600 h-5 w-5' /> }];



export const PRIORITY_STATUSES: StatusType[] = [{ id: 1, value: 'no-priority', text: 'No priority', icon: <HiDotsHorizontal className="h-5 w-5" /> },
{ id: 2, value: 'urgent', text: 'urgent', icon: <BsExclamationSquareFill className=' h-5 w-5' /> },
{ id: 3, value: 'high', text: 'high', icon: <BiSignal3 className=' h-5 w-5' /> }, 
{ id: 4, value: 'medium', text: 'medium', icon: <BiSignal2 className=' h-5 w-5' /> },
{ id: 4, value: 'low', text: 'low', icon: <BiSignal1 className=' h-5 w-5' /> }];


export const PROJECT_STATUS: StatusType[] = [{ id: 1, value: 'no-project', text: 'No project', icon: <TbCircleDotted className="h-5 w-5" /> },
{ id: 2, value: 'dummy-one', text: 'Dummy 1', icon: <TbCircleDotted className=' h-5 w-5' /> },
{ id: 3, value: 'dummy-two', text: 'Dummy 2', icon: <TbCircleDotted className=' h-5 w-5' /> }, 
{ id: 4, value: 'dummy-three', text: 'Dummy 3', icon: <TbCircleDotted className=' h-5 w-5' /> }];


export const TASK_LABELS: StatusType[] = [{ id: 1, value: 'feature', text: 'Feature', icon: <div className="h-3 w-3 rounded-full bg-purple-500" /> },
{ id: 2, value: 'improvement', text: 'Improvement', icon: <div className=' h-3 w-3 rounded-full bg-indigo-600' /> },
{ id: 3, value: 'bug', text: 'Bug', icon: <div className=' h-3 w-3 rounded-full bg-rose-600' /> }]; 


export const ASSIGNEES: StatusType[] = [{ id: 1, value: 'no-assignee', text: 'No assignee', icon: <PiUserCircleDashedFill className="h-5 w-5" /> },
{ id: 2, value: 'munawar', text: 'Munawar', icon: <PiUserCircleDashedFill className=' h-5 w-5' /> }];