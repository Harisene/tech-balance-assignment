import { useContext } from "react";
import { ThemeContext } from "@providers/ThemeProvider";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
