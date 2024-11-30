'use client'

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import AvatarImage from "@/public/images/avatar.jpeg";
import { TbLogout2 } from "react-icons/tb";
import logoutUser from "../actions/logout";

export default function Avatar() {
    const t = useTranslations('Header');
    const locale = useLocale();
    const [isOpenProfile, setIsOpenProfile] = useState(false);

    function handleToggleProfile() {
        setIsOpenProfile(prveState => !prveState);
    }

    return (
        <div onClick={handleToggleProfile} className="relative h-full">
            <div className="h-full flex items-center gap-x-5 cursor-pointer border-x border-boxes-line px-5">
                <div className="size-10 rounded-full relative overflow-hidden">
                    <Image
                        src={AvatarImage}
                        alt="Avatar"
                        fill
                        priority
                        sizes="40px"
                    />
                </div>
                <div>
                    <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-base text-white block`}>Javad Rafiei</span>
                    <span className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-sm text-text block`}>Front-end Developer</span>
                </div>
            </div>
            {isOpenProfile && (
                <ul className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} absolute left-0 top-[4.1rem] w-full py-3 bg-dark-boxes rounded-lg text-white text-sm`}>
                    <li className="px-3 py-1 cursor-pointer hover:bg-dark-boxes-hover">
                        <button onClick={logoutUser} className="flex items-center gap-2">
                            <TbLogout2 className="text-lg" /> {t('logout')}
                        </button>
                    </li>
                </ul>
            )
            }
        </div >
    );
}