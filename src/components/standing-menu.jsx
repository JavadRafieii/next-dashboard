'use client'

import { Link } from "../i18n/routing";
import { useLocale } from "next-intl";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import { BsBasket } from "react-icons/bs";

export default function StandingMenu() {
    const locale = useLocale();
    const t = useTranslations('StandingMenu');
    const pathname = usePathname();

    const isActive = (path) => {
        const localizedPath = locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
        return pathname === localizedPath;
    };

    return (
        <ul className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base p-3`}>
            <li>
                <Link
                    href={"/"}
                    className={`flex items-center gap-x-2 w-full px-5 py-2 hover:bg-standing-menu-hover ${isActive("/") ? "bg-standing-menu-hover" : ""
                        }`}
                >
                    <BsBasket className="text-lg"/> {t('firstPage')}
                </Link>
            </li>
        </ul>
    );
}
