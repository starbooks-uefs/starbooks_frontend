import Sidebar from "@/components/SideBar";

const Author = ({ children }: any) => {
    return (
        <div className="h-screen flex flex-row justify-start">
            <Sidebar />
            <div className="bg-primary flex-1 p-4 ">
                {children}
            </div>
        </div>
    );
};

export default Author;
