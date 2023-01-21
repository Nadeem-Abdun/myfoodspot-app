import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import { createTheme, Stack, ThemeProvider } from "@mui/material"
import Add from "./Components/Add";
import { useState } from "react";
import { Box } from "@mui/system";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar mode={mode} setMode={setMode} />
          <Stack direction='row' spacing={1}>
            <Sidebar mode={mode} setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
