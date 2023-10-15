type Button = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
};

export const ShowMoreButton = ({ text, disabled, onClick }: Button) => {
  return (
    <button
      className=' w-40 h-10 text-ls rounded-3xl text-white
         bg-secondary '
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
