/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { AuthContextType } from "../../types/AuthContextType";
import { ChildrenType } from "../../types/ChildrenType";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('Provedor para useAuth não encontrado!');
    }
    return context;
}

export const AuthProvider: React.FC<ChildrenType> = ({children}) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const login = () => {
        setIsLogged(true);
    };

    const logout = () => {
        setIsLogged(false);
    };

    const contextValue: AuthContextType = {
        isLogged,
        login,
        logout,

    }
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}