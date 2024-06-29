import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(true);

    return (
        <NavbarContext.Provider value={{ showNav, setShowNav }}>
            {children}
        </NavbarContext.Provider>
    );
};
