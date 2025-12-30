import { useState } from 'react';
import './App.css'
import Sidebar from './components/layout/sidebar/sidebar'
import ContainerHeader from './components/ui/MainContainerHeader';
import ContainerFilter from './components/ui/containerFilter';
import MainContainerRightSidebar from './components/layout/MainContainerRightSidebar';
import ColumnContainerHeader from './components/ui/columnHeaders';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { FaCircleHalfStroke, FaCircleXmark } from 'react-icons/fa6';
import IssuePopup from './components/ui/popup';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isContainerSidebarOpen, setContainerSidebarOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <div className="w-full flex gap-4 h-screen p-2">
        <div className={`${isSidebarOpen ? 'w-[15%]' : 'w-[7%]'} transition-all duration-300`}>
          <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)}></Sidebar>
        </div>
        <div className={` border border-gray-600 h-full rounded-md ${isSidebarOpen ? 'w-[85%]' : 'w-[93%]'} transition-all duration-300`}>
          <ContainerHeader ontoggleSidebar={() => setContainerSidebarOpen(!isContainerSidebarOpen)} />
          <ContainerFilter />
          <div className='w-full flex'>
            <div className='w-[80%]'>
              <div className="grid grid-cols-4">


                <div className="col-span-1">
                  <ColumnContainerHeader openPopup={() => setIsPopupOpen(true)} numberOfItems={6} label='Todo' icon={<FaRegCircle />} />
                </div>
                <div className="col-span-1"><ColumnContainerHeader openPopup={() => setIsPopupOpen(true)} numberOfItems={6} label='In Progress' icon={<FaCircleHalfStroke className='text-yellow-600' />} /></div>
                <div className="col-span-1"><ColumnContainerHeader openPopup={() => setIsPopupOpen(true)} numberOfItems={6} label='Done' icon={<FaCheckCircle className='text-sky-800' />} /></div>
                <div className="col-span-1"><ColumnContainerHeader openPopup={() => setIsPopupOpen(true)} numberOfItems={6} label='Canceled' icon={<FaCircleXmark className='text-red-600' />} /></div>
              </div>



              {/* 3. Conditionally render the Popup */}
              {isPopupOpen && (
                <div className="bg-stone-950/30 duration-300 transform fixed inset-0 flex items-center justify-center z-50">
                  <IssuePopup onClose={() => setIsPopupOpen(false)} />
                </div>
              )}
            </div>
            <div className="flex justify-end  w-[20%]">
              <div className={`
    transition-all duration-300 ease-in-out overflow-hidden
    border-gray-500 border-l h-[calc(100vh-114px)]
    ${isContainerSidebarOpen ? 'w-full' : 'w-[0%] border-none'}
  `}>
                <div className="min-w-[200px]"> {/* Prevents content from squishing during animation */}
                  <MainContainerRightSidebar />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App



