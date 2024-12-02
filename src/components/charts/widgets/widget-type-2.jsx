import { useTranslations, useLocale } from 'next-intl';
import { BsCalendar2DateFill } from "react-icons/bs";

export default function WidgetType2() {
    const t = useTranslations('WidgetType2');
    const locale = useLocale();

    return (
        <div>
            <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-2xl`}>{t('title')}</h4>
            <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center gap-x-1`}><BsCalendar2DateFill className='text-sm mb-1' />{t('description')}</p>
        </div>
    );
}