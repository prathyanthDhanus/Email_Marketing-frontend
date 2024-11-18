import React,{useState} from 'react';
import { Handle } from '@xyflow/react';
import { FaPlus } from 'react-icons/fa';
import ReusableModal from './Modal';
import { addBlockData,BlockListOptions } from '../assets/hardcodedData/landingPageData';
import SearchInput from './Inputbox/SearchInput';
import { AiFillPlusCircle } from "react-icons/ai";

const PlusIconNode = ({ data }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState(false);
  const [filteredBlocks, setFilteredBlocks] = useState([]);
  
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleLeadsClick = (leadsId) => {
    const filtered = addBlockData.filter((item) => item.id === leadsId);
    setFilteredBlocks(filtered);
    setSelectedBlocks(true);
    setIsModalOpen(false);
    setIsSecondModalOpen(true); // Open second modal when a lead is clicked
  };
  return (
    <>
    <div className="p-4 border rounded shadow-md bg-white" onClick={handleOpenModal}>
      <div className="flex items-center justify-between">
        <span>{data.label}</span>
        <FaPlus className="text-xl text-blue-500" />
      </div>
      <Handle type="source" position="bottom" id="b" style={{ background: '#555' }} />
    </div>

    <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add Block"
      >
        <span className="poppins-semibold">Outreach</span>
        <p className="text-base leading-relaxed poppins-light">
         Click on a Block and configure and add it in sequence
        </p>
        <div className="grid grid-cols-2 gap-4">
          {addBlockData.map((item) => (
            <div
              key={item.id}
              className="flex poppins-light gap-4 border p-3 rounded-md cursor-pointer"
              onClick={() => handleLeadsClick(item.id)}
            >
              <div className="bg-[#c4b5fd] w-[4rem] flex justify-center items-center rounded-md text-[#6d28d9]">
                {item.icon}
              </div>
              <div>
                <span className="poppins-semibold">{item.title}</span>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ReusableModal>

      {selectedBlocks && (
        <ReusableModal
          isOpen={isSecondModalOpen}
          onClose={() => setIsSecondModalOpen(false)}
          title="Configure Leads"
        >
          {filteredBlocks.map((item) => (
            <div key={item.id}>
              <span className="poppins-semibold">{item.title}</span>
              <p className="text-base leading-relaxed poppins-light">
                {item.description}
              </p>
            </div>
          ))}

          <div className="mt-10 flex  justify-between items-center">
          <span className=" poppins-semibold text-sm">Select your List(s)</span>
          <button className="flex justify-center items-center text-blue-500  border-2 border-blue-500 rounded-md poppins-light p-2 gap-2">New List <AiFillPlusCircle className="mt-1"/></button>
          </div>
          <SearchInput data={BlockListOptions} placeholder="Search..." />
         <div className="flex justify-end">
         <button className="w-[6rem] text-blue-500 poppins-light border-2 border-blue-500 rounded-md p-1 hover:shadow-xl ">Insert</button>
         </div>
        </ReusableModal>
      )}
    </>
  );
};

export default PlusIconNode;
