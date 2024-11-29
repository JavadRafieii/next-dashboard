import AuthHeader from '@/src/components/auth-header';

export default function RootLayout({ children }) {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
