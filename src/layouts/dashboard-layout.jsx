import { getTranslations, getLocale } from 'next-intl/server';
import MainHeader from "../components/headers/main-header";
import StandingMenu from "../components/standing-menu";
import Logo from "@/public/images/logo.png";
import Image from "next/image";

export default async function DashboardLayout({ children }) {
    const t = await getTranslations('StandingMenu');
    const locale = await getLocale();

    return (
        <section>
            <div className="flex">
                <div className="w-[250px]">
                    <div className={`${locale === "en" ? 'border-r' : 'border-l'} w-[250px] h-[100vh] bg-boxes border-boxes-line fixed top-0`}>
                        <div className="bg-light-boxes px-5 border border-boxes-line h-[60px] flex items-center gap-x-2">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                            <h1 className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>
                                {t('title')}
                            </h1>
                        </div>
                        <StandingMenu />
                    </div>
                </div>
                <div className="w-[calc(100%-250px)]">
                    <MainHeader />
                    {children}
                </div>
            </div>
        </section>
    );
}