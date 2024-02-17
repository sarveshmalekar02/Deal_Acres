import React from 'react';
import { text } from 'stream/consumers';

// Define Props Interface
interface ProgressBarProps {
  status1: boolean;
  status2: boolean;
  status3: boolean;
  status4: boolean;
  status5: boolean;
}

// ProgressLine Component
const ProgressLine: React.FC<{ completed: boolean }> = ({ completed }) => {
  const progressLineClass = completed ? 'border-blue-500' : 'border-black';
  return <hr className={`w-20 flex-grow border-1 invisible lg:visible opacity-100 ${progressLineClass}`} />;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  status1,
  status2,
  status3,
  status4,
  status5,
}) => {
  const getStatusClass = (completed: boolean) =>
    completed ? 'ttext-blue-500 font-semibold' : 'text-black';

  return (
    <div className="flex flex-col mx-24 lg:flex-row  bg-blue-100 p-2  pb-3 lg:p-2 mt-14 mb-7 rounded-xl items-center justify-center">
    
      <div className="relative flex items-center -ml-8">
      
        <p className={`ml-12 mr-1 ${status1 ? 'text-blue-500 font-bold text-[20px]' : 'text-black text-[18px]'}`}>
          {status1 ? 'Basic Details' : 'Basic Details'}
        </p>
      </div>
      {/* Progress Line */}
      <ProgressLine completed={status1} />
      
      <div className="relative flex items-center">
      
        <p className={`ml-1 mr-1 ${status2 ? 'text-blue-500 font-bold text-[20px]' : 'text-black text-[18px]'}`}>
          {status2 ? 'Location Details' : 'Location Details'}
        </p>
      </div>
      {/* Progress Line */}
      <ProgressLine completed={status2} />
     
      <div className="relative flex items-center">
       
        <p className={`ml-2 mr-1 ${status3 ? 'text-blue-500 font-bold text-[20px]' : 'text-black text-[18px]'}`}>
          {status3 ? 'Property Profile' : 'Property Profile'}
        </p>
      </div>
      {/* Progress Line */}
      <ProgressLine completed={status3} />
     
      <div className="relative flex items-center">
     
        <p className={`ml-2 mr-1 ${status4 ? 'text-blue-500 font-bold text-[20px]' : 'text-black text-[18px]'}`}>
          {status4 ? 'Photos' : 'Photos'}
        </p>
      </div>
      {/* Progress Line */}
      <ProgressLine completed={status4} />
      
      <div className="relative flex items-center mr-3">
      
        <p className={`ml-1 ${status5 ? 'text-blue-500 font-bold text-[20px]' : 'text-black text-[18px]'}`}>
          {status5 ? 'Pricing & Others' : 'Pricing & Others'}
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
