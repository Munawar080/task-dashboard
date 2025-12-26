import { FaPlus } from "react-icons/fa";
import { FiColumns } from "react-icons/fi";
import IconButton from "./IconButton";
interface ContainerHeaderProps {
ontoggleSidebar?: () => void;
}
export default function ContainerHeader({ontoggleSidebar}: ContainerHeaderProps) {
  return (
    <div className='flex justify-between items-center py-3 px-7 h-12 w-full border-b-2 border-gray-600'>
      <div>
        Project
      </div>
      <div className='flex gap-2 justify-center items-center'>
        <IconButton
          label="Add project"
          icon={<FaPlus className='text-sm' />}
          onClick={() => console.log("Settings clicked")}
        />
        <hr />
        <IconButton
          icon={<FiColumns />}
          onClick={ontoggleSidebar}
        />
        <div>

        </div>

      </div>
    </div>
  )
}