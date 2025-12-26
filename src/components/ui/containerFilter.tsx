import { IoFilter } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import IconButton from "./IconButton";

export default function ContainerFilter() { 

    return(
        <div className='py-3 px-7 h-12 w-full border-b-2 border-gray-600 flex justify-between items-center gap-2'>
            <IconButton
              label="Filter"
              icon={<IoFilter />}
              onClick={() => console.log("Settings clicked")}
            />
            <IconButton
              label="Display"
              icon={<VscSettings />}
              onClick={() => console.log("Settings clicked")}
            />
          </div>
    )
}