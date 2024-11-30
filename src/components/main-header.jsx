import { useLocale } from "next-intl";

import Avatar from "./avatar";
import ToggleLanguage from "./toggle-language";

export default function MainHeader() {
    const locale = useLocale();

    return (
        <header className="w-full h-[60px] bg-boxes border-b border-boxes-line">
            <div className="px-5 h-full flex">
                <div className="w-[calc(100%-480px)]"></div>
                <div className={`${locale === "en" ? 'border-l' : 'border-r'} w-60 flex items-center justify-end border-boxes-line px-5`}>
                    <ToggleLanguage path="/"/>
                </div>
                <div className="w-60">
                    <Avatar />
                </div>
            </div>
        </header>
    );
}