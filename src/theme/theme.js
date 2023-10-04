import React, { useContext, createContext } from "react";
export const Themecontext = createContext({
    themevalue: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})
export const Themeprovider = Themecontext.Provider;

export default function useTheme() {
    return useContext(Themecontext)
}
