export const useTheme = () => {
  document.documentElement.classList.toggle('dark');

  return { useTheme };
};
