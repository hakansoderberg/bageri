interface Props {
    children: React.ReactNode;
}

const HighlightBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" inline-block border-orange-500 bg-orange-100 p-4 rounded-sm shadow-md">
            <div className="border-2 border-gray-900 p-4 rounded-sm">
                {children}
            </div>
        </div>
    );
};
export default HighlightBox;
