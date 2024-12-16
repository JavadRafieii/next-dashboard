import Image from "next/image";
import Avatar from "@/public/images/avatar-2.png";
import { MdEmail } from "react-icons/md";
import { MdSettingsVoice } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";
import { useTranslations, useLocale } from "next-intl";

export default function NewCustomersWidget() {
    const t = useTranslations('NewCustomersWidget');
    const locale = useLocale();

    return (
        <div className="bg-boxes p-5 rounded-lg h-full">
            <div className="border-b border-line mb-5">
                <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-2xl mb-3`}>{t('title')}</h4>
            </div>
            <ul className="divide-y divide-line">
                {Array.from({ length: 7 }).map((_, index) => (
                    <li key={index} className="flex items-center justify-between p-2 cursor-pointer hover:rounded-lg transition-all hover:bg-light-boxes hover:-translate-y-1">
                        <div className="flex items-center gap-x-3">
                            <div className="size-12 rounded-full relative overflow-hidden">
                                <Image
                                    src={Avatar}
                                    alt="Avatar"
                                    fill
                                    sizes="100px"
                                />
                            </div>
                            <div>
                                <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base`}>{t('user')}</h4>
                                <span className="font-Roboto-Medium text-sm text-text block">info@javadrafiei.ir</span>
                            </div>
                        </div>
                        <div>
                            <ul className="flex items-center gap-x-2">
                                <li className="size-9 rounded-full border border-line bg-light-boxes cursor-pointer flex items-center justify-center">
                                    <MdEmail className="text-white text-lg" />
                                </li>
                                <li className="size-9 rounded-full border border-line bg-light-boxes cursor-pointer flex items-center justify-center">
                                    <MdSettingsVoice className="text-white text-lg" />
                                </li>
                                <li className="size-9 rounded-full border border-line bg-light-boxes cursor-pointer flex items-center justify-center">
                                    <RiMenu5Line className="text-white text-lg" />
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}