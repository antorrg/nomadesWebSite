

const ThemeProvider = ({ children, theme }) => {
  return children({ theme }); // Pasa el tema como prop a los hijos
};

export default ThemeProvider;
