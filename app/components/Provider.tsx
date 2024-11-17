"use client"; // Ensure it's treated as a Client Component

import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store/store";

interface ProviderProps {
    children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
