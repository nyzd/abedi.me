import { ThemeProvider } from "../components/theme-provider";
//import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import "./globals.css";
import Menu from "./menu";

export default function RootLayout({ children }: any) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body>
                    <ThemeProvider attribute="class" defaultTheme="dark">
                        <header className="flex flex-row px-40 p-3 items-center">
                            <div className="mr-auto flex flex-row items-center space-x-4 text-sm">
                                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                    Abedi.me
                                </h3>
                                <Separator orientation="vertical" />
                                <Menu />
                            </div>
                        </header>
                        <Separator />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    )
}

