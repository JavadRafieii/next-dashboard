import AuthHeader from "@/src/components/headers/auth-header";

export default function RootLayout({ children }) {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
