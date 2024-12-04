import Chair from "@/public/images/chair.png";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import SplineAreaChart from "../../charts/ spline-area-chart/ spline-area-chart";

export default function TopProductCardWidget() {
    const t = useTranslations('TopProductCardWidget');
    const locale = useLocale();

    return (
        <li className="flex items-center gap-3 justify-between bg-light-boxes p-3 py-2 rounded-lg border border-line transition hover:-translate-y-1 hover:bg-buttons-hover">
            <div className="w-[60px] h-[60px] border border-line rounded-lg p-1">
                <div className="relative w-full h-full">
                    <Image
                        src={Chair}
                        alt="Product"
                        fill
                        sizes="100"
                    />
                </div>
            </div>
            <div>
                <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base`}>
                    {t('title')}
                </h4>
                <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-sm text-text block`}>
                    {t('price')}
                </span>
            </div>
            <div>
                <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base block`}>
                    {t('totalPrice')}
                </span>
                <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-sm text-text block`}>
                    {t('sales')}
                </span>
            </div>
            <div className="w-40">
                <SplineAreaChart />
            </div>
        </li>
    );
}