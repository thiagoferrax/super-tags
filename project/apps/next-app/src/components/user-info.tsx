import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ProfileIcon, SettingsIcon, SignoutIcon } from "./icon";

interface Props {
    name: string,
    email: string,
    photo: StaticImageData,
};

export default function UserInfo({ name, email, photo }: Props) {
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
                            <ProfileIcon width={12} className="mx-0.5" />
                            Meu Perfil
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" className="rounded-none">
                            <SettingsIcon width={16} />
                            Configurações
                        </Link>
                    </li>
                    <li className="text-orange-700 border-t border-neutral-600">
                        <Link href="/signin?logout=true" className="rounded-t-none rounded-b-md">
                            <SignoutIcon width={16} />
                            Sair da Aplicação
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
