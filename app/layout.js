import './globals.css'
import './styles.css'
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({children}) {

    return (
        <html lang="ru">
        <body suppressHydrationWarning={true}>
        <Header>{children}</Header>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
