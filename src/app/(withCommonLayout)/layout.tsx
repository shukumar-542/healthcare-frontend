import Navbar from "@/components/shared/Navbar/Navbar";

const layout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
};

export default layout;