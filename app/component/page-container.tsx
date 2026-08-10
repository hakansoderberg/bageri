export default function PageContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-screen-lg mx-auto px-4 md:px-0 pt-8 pb-8 md:pb-16">
            {children}
        </div>
    );
}