import * as React from 'react';
import {ThemeProvider} from '../components/Providers/ThemeProvider/ThemeProvider';
import {AdaptiveProvider} from "../components/Providers/AdaptiveProvider/AdaptiveProvider";
import {useEffect, useState} from "react";

const ThemeWrapper = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
    const [theme, setTheme] = useState<"light"|"dark">("light")

    useEffect(() => {
        const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        setTheme(currentTheme)

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', function (e) {
            const newTheme = e.matches ? "dark" : "light"
            setTheme(newTheme)
        });
    }, [])

    return <AdaptiveProvider>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </AdaptiveProvider>;
};

export default ThemeWrapper;