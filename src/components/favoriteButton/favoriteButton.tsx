type favoriteButton = {
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const FavoriteButton = ({ disabled, onClick }: favoriteButton) => {
  return (
    <button
      className=' h-14 w-32 bg-graphite rounded-l-lg'
      disabled={disabled}
      onClick={onClick}
    ></button>
  );
};
