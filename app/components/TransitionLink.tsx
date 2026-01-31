'use client'

import { usePathname, useRouter } from "next/navigation";
import { animateOUT } from "./animations";

interface Props {
    href: string;
    label: string;
    children: React.ReactNode;
    className: string;
}

const TransitionLink = ({ href, label, children, className: classstyles }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href)
            animateOUT(href, router);
    }

    <div className={`${classstyles}`}>
        {children}
    </div>


}


// https://youtu.be/VnRC8PyzBT8?t=407