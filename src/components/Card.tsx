'use client';

import { EvervaultCard, Icon } from "./ui/evervault-card";

export default function Card({ iconPath, name, url }: { iconPath: string; name: string; url: string }) {
    const handleClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div 
            onClick={handleClick}
            className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center w-full p-4 relative h-[18rem] cursor-pointer hover:scale-105 transition-transform duration-200"
        >
            <Icon className="absolute h-4 w-4 -top-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -left-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -top-2 -right-2 dark:text-white text-black" />
            <Icon className="absolute h-4 w-4 -bottom-2 -right-2 dark:text-white text-black" />

            <EvervaultCard iconPath={iconPath} />

            <h2 className="dark:text-white text-black mt-2 text-sm font-light text-center"></h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-auto text-black dark:text-white px-4 py-2 mx-auto mb-1">
                {name}
            </p>
        </div>
    );
}
