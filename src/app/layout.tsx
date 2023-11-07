import { ThemeProvider } from "../components/theme-provider";
//import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import "./globals.css";
//import Menu from "./menu";

export default function RootLayout({ children }: any) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body>
                    <ThemeProvider attribute="class" defaultTheme="dark">
                        <header className="flex flex-row justify-center p-3 items-center">
                            <h3 className="text-2xl font-semibold tracking-tight">
                                Abedi.me
                            </h3>
                        </header>
                        <Separator />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}

