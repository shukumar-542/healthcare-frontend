import FooterPage from "@/components/shared/Footer/page";
import Navbar from "@/components/shared/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">{children}</div>
            <FooterPage />
        </>
    );
};

export default layout;