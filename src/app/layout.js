import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'], // Certifique-se de incluir o subset necessário.
  weight: ['100', '400', '500', '700'], // Adicione os pesos que você usará. 
});

export const metadata = {
  title: "Sistema Pizzaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
        {children}
        </main>
      </body>
    </html>
  );
}
