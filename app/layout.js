import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


export const metadata = {
  title: "Pablo Cunha - Portfolio",
  description: "",
  icons: {
    icon: '/globe.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased dark:bg-darkTheme
        dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
