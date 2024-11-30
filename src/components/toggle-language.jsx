'use client'

import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from "../i18n/routing";
import { useState } from "react";
import Iran from "@/public/images/iran-flag.png";
import Amrica from "@/public/images/amrica-flag.png";

export default function ToggleLanguage({ path }) {
    const locale = useLocale();
    const t = useTranslations('ToggleLanguages');
    const [isOpenToggleLanguages, setIsOpenToggleLanguages] = useState(false);

    const LANGUAGES = [
        { id: "Amrica", icon: Amrica, text: t('unitedStatesLanguage'), href: path, locale: "en" },
        { id: "Iran", icon: Iran, text: t('IranLanguage'), href: path, locale: "fa" },
    ];

    function handleToggleLanguages() {
        setIsOpenToggleLanguages(prveState => !prveState);
    }

    return (
        <div className="relative">
            <div onClick={handleToggleLanguages} className="relative w-6 h-6 rounded-full cursor-pointer">
                <Image src={locale === "en" ? Amrica : Iran} alt="Flag" fill sizes='24px' />
            </div>
            {isOpenToggleLanguages && (
                <ul className={`${locale === "en" ? 'right-0' : 'left-0'} absolute top-12 w-fit py-3 bg-dark-boxes rounded-lg`}>
                    {LANGUAGES.map(language => (
                        <li key={language.id} className={`${locale === language.locale ? 'bg-dark-boxes-hover' : null} px-3 py-1 cursor-pointer hover:bg-dark-boxes-hover`}>
                            <Link href={language.href} locale={language.locale}>
                                <div className="flex items-center gap-x-2">
                                    <div className="relative w-6 h-6 rounded-full cursor-pointer">
                                        <Image src={language.icon} alt="Flag" fill sizes='24px' />
                                    </div>
                                    <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-sm`}>{language.text}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}