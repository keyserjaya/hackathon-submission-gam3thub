import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomBar from "../components/BottomBar";
import { Inter } from "next/font/google";
import ProviderWrapper from "@/components/dynamic-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Gam3THub - an open-source game launcher with quest and airdrop solution',
  description: 'Web3 Gaming Hub | ETH Global Bangkok',
};

export default function RootLayout({ children }: React.PropsWithChildren ) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ProviderWrapper>
        <Header />
        {children}
        <Footer /> {/* Add Footer Here */}
        <BottomBar /> {/* Include BottomBar Here */}
        </ProviderWrapper>
      </body>
    </html>
  );
}
