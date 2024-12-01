import { useTranslations, useLocale } from 'next-intl';
import { IoMdArrowDropup } from "react-icons/io";

export default function WidgetType1() {
    const t = useTranslations('WidgetType1');
    const locale = useLocale();

    return (
        <div>
            <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-base`}>{t('title')}</h4>
            <p className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>${t('price')}</p>
            <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center`}><IoMdArrowDropup className='text-lg' /> 14% {t('description')}</p>
        </div>
    );
}