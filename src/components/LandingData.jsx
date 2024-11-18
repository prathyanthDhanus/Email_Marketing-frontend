import React, { useCallback, useState } from "react";
import ReusableModal from "../components/Modal";
import { GoPlus } from "react-icons/go";
import { FaUserPlus } from "react-icons/fa";
import { leadSources ,listOptions} from "../assets/hardcodedData/landingPageData";
import { AiFillPlusCircle } from "react-icons/ai";
import SearchInput from "./Inputbox/SearchInput";





const LandingData = () => {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState(false);
  const [filteredLeads, setFilteredLeads] = useState([]);
  


  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleLeadsClick = (leadsId) => {
    const filtered = leadSources.filter((item) => item.id === leadsId);
    setFilteredLeads(filtered);
    setSelectedLeads(true);
    setIsModalOpen(false);
    setIsSecondModalOpen(true); // Open second modal when a lead is clicked
  };

 

  return (
    <>
    
      <div className="m-10">
        <div
          className="bg-[#FFF6E9]  grid justify-items-center p-5 text-center border rounded-md hover:shadow-xl hover:cursor-pointer poppins-light"
          onClick={handleOpenModal}
        >
          <div>
            <GoPlus className="text-2xl" />
          </div>
          <div>
            <span>Add Lead Source</span>
            <p>Click to add leads from list or CRM</p>
          </div>
        </div>
      </div>

      <ReusableModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Add Lead Source"
      >
        <span className="poppins-semibold">Add a source block</span>
        <p className="text-base leading-relaxed poppins-light">
          Pick a block and configure any new leads that match rules will be
          added to sequence automatically.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {leadSources?.map((item) => (
            <div
              key={item.id}
              className="flex poppins-light gap-4 border p-3 rounded-md cursor-pointer"
              onClick={() => handleLeadsClick(item.id)}
            >
              <div className="bg-red-100 w-[4rem] flex justify-center items-center rounded-md">
                <FaUserPlus className="text-[#fe97b7] text-6xl p-2" />
              </div>
              <div>
                <span className="poppins-semibold">{item.title}</span>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ReusableModal>

      {selectedLeads && (
        <ReusableModal
          isOpen={isSecondModalOpen}
          onClose={() => setIsSecondModalOpen(false)}
          title="Configure Leads"
        >
          {filteredLeads.map((item) => (
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
          <SearchInput data={listOptions} placeholder="Search..." />
         <div className="flex justify-end">
         <button className="w-[6rem] text-blue-500 poppins-light border-2 border-blue-500 rounded-md p-1 hover:shadow-xl ">Insert</button>
         </div>
        </ReusableModal>
      )}
    </>
  );
};

export default LandingData;
