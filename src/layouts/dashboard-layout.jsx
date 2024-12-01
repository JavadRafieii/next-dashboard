import { useLocale } from "next-intl";

import MainHeader from "../components/main-header";
import StandingMenu from "../components/standing-menu";

export default function DashboardLayout({ children }) {
    const locale = useLocale();
    return (
        <section>
            <div className="flex">
                <div className={`${locale === "en" ? 'border-r' : 'border-l'} w-[250px] h-[100vh] bg-boxes border-boxes-line`}>
                    <StandingMenu />
                </div>
                <div className="w-[calc(100%-250px)] h-[100vh]">
                    <MainHeader />
                    {children}
                </div>
            </div>
        </section>
    );
}