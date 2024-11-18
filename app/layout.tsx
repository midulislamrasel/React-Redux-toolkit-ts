import { ReactNode } from "react";
import Provider from "./components/Provider";
import "./globals.css";
export const metadata = {
    title: "My Next.js App",
    description: "A great application built with Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="layout">
                        <main>{children}</main>
                    </div>
                </Provider>
            </body>
        </html>
    );
}
