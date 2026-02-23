import { ChildProps } from "@/types";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Toaster } from "sonner";

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
