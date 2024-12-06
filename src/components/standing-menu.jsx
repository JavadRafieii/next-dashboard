'use client'

import { Link } from "../i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { BsFillBasket3Fill } from "react-icons/bs";
import { MdWidgets } from "react-icons/md";
import { VscTools } from "react-icons/vsc";

export default function StandingMenu() {
    const locale = useLocale();
    const t = useTranslations('StandingMenu');
    const pathname = usePathname();

    return (
        <ul className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base p-3`}>
            <li>
                <Link
                    href={"/"}
                    className={`flex items-center gap-x-2 w-full px-5 py-2 hover:bg-standing-menu-hover`}
                >
                    <BsFillBasket3Fill className="text-lg" /> {t('firstPage')}
                </Link>
            </li>
            <li>
                <Link
                    href={"/widgets"}
                    className={`flex items-center gap-x-2 w-full px-5 py-2 hover:bg-standing-menu-hover`}
                >
                    <MdWidgets className="text-lg" /> {t('secondPage')}
                </Link>
            </li>
            {/* {Array.from({ length: 10 }).map((_, index) => (
                <li key={index} className="flex items-center gap-x-2 w-full px-5 py-2 hover:bg-standing-menu-hover cursor-pointer">
                    <VscTools className="text-lg"/> {t('comingSoon')}
                </li>
            ))} */}
        </ul>
    );
}
