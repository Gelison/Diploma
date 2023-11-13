import { string } from 'yup';

type Button = {
  type: string;
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({ text, disabled, onClick }: Button) => {
  return (
    <button
      className=' w-64 h-14 text-ls rounded-lg text-white
       bg-primary active:bg-primary2 disabled:bg-secondary '
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
