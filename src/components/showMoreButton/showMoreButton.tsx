type Button = {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  loading: boolean;
};

export const ShowMoreButton = ({
  text,
  disabled,
  onClick,
  loading,
}: Button) => {
  if (loading) {
    return (
      <div className=''>
        <div
          className=' inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='  !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'></span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <button
        className=' w-40 h-10 text-ls rounded-3xl text-white
         bg-secondary '
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};
