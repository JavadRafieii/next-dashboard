import Image from "next/image";

import ToggleLanguage from "./toggle-language";

import Logo from "@/public/images/logo.png";

export default function AuthHeader() {
    return (
        <header className="absolute w-full h-[60px] bg-boxes border-b border-boxes-line">
            <section className="container h-full">
                <div className="h-full grid grid-cols-2">
                    <div className="flex items-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={30}
                            height={30}
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-end">
                        <ToggleLanguage />
                    </div>
                </div>
            </section>
        </header>
    );
}