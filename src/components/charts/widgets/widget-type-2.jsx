import { useTranslations, useLocale } from 'next-intl';
import { BsCalendarDate } from "react-icons/bs";

export default function WidgetType2() {
    const t = useTranslations('WidgetType2');
    const locale = useLocale();

    return (
        <div>
            <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-2xl`}>{t('title')}</h4>
            <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center gap-x-2`}><BsCalendarDate />{t('description')}</p>
        </div>
    );
}