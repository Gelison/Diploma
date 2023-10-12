import { useState } from 'react';

type Switch = {
  toggled?: boolean;
  onClick: (toggled: boolean) => void;
};

export const Switch = ({ toggled = false, onClick }: Switch) => {
  const [isToggled, setIsToggled] = useState(toggled);

  const handleClick = () => {
    setIsToggled(!isToggled);
    if (onClick) {
      onClick(!isToggled);
    }
  };

  return (
    <div
      className=' flex w-20 h-10 bg-gray-600 m-10 rounded-full'
      onClick={handleClick}
    >
      <span className=' h-10 w-10 bg-white rounded-full' />
    </div>
  );
};
