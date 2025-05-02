import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from "../components/Header";

export default function App() {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light'); // Definindo o tipo explícito

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                },
            }),
        [mode],
    );

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} />
            {/* O resto do seu app */}
        </ThemeProvider>
    );
}
