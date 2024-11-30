import DashboardLayout from "@/src/layouts/dashboard-layout";

export default function RootLayout({ children }) {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    );
}