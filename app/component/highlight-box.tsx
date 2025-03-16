const HighlightBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="inline-block bg-orange-200 p-4 rounded-sm shadow-md">
            <div className="border-2 border-gray-900 p-4 rounded-sm">
                {children}
            </div>
        </div>
    );
};
export default HighlightBox;
