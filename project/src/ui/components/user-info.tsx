import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ProfileIcon, SettingsIcon } from '@/ui/components/icon';


interface Props {
    name: string;
    email: string;
    photo: StaticImageData;
}

export default function UserInfo ({name, email, photo}: Props) {
    return (
        <div className="flex flex-col flex-wrap max-h-12">
            <div className="text-white">{name}</div>
            <div className="text-neutral-600 text-[.938rem]">{email}</div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar">
                    <div className="w-10 ml-3.5 rounded-full">
                        <Image src={photo} alt={name} />
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-0 shadow border border-neutral-600 rounded-md">
                    <li className="menu-title border-b border-neutral-600">Minha Conta</li>
                    <li>
                        <Link href="/profile" className="rounded-none">
                            <ProfileIcon />
                            Meu Perfil
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" className="rounded-none">
                            <SettingsIcon />
                            Configurações
                        </Link>
                    </li>
                    <li className="text-orange-700 border-t border-neutral-600">
                        <Link href="/signin?logout=true" className="rounded-t-none rounded-b-md">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlnsXlink="http://www.w3.org/2000/svg">
                                <path d="M10.2054 5.83104V4.37328C10.2054 3.98666 10.0518 3.61588 9.77841 3.34249C9.50502 3.06911 9.13424 2.91553 8.74762 2.91553H3.64547C3.25885 2.91553 2.88806 3.06911 2.61468 3.34249C2.3413 3.61588 2.18771 3.98666 2.18771 4.37328V13.1198C2.18771 13.5064 2.3413 13.8772 2.61468 14.1506C2.88806 14.424 3.25885 14.5776 3.64547 14.5776H8.74762C9.13424 14.5776 9.50502 14.424 9.77841 14.1506C10.0518 13.8772 10.2054 13.5064 10.2054 13.1198V11.6621" stroke="#BB4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.55969 8.74645H15.3062L13.1196 6.55981" stroke="#BB4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.1191 10.9337L15.3058 8.74707" stroke="#BB4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Sair da Aplicação
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
