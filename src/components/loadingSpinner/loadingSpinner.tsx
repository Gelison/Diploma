export const LoadingSpinner = () => {
  return (
    <div className=' fixed top-1/2 left-1/2'>
      <div
        className=' inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      >
        <span className=' !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'></span>
      </div>
    </div>
  );
};
