import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    name: string,
    email: string,
    photo: StaticImageData,
};

export default function UserInfo ({name, email, photo}: Props): React.JSX.Element {
    return (
        <div className="flex flex-col flex-wrap max-h-12">
            <div className="text-white">{name}</div>
            <div className="text-neutral-600 text-[.938rem]">{email}</div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 col-span-1 ml-3.5 btn-circle btn-ghost">
                    <Image
                        src={photo}
                        width={41}
                        height={41}
                        alt={name}
                        className="rounded-full"
                    />
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 z-[1] w-52 p-0 shadow border border-neutral-600 rounded-md">
                    <li className="menu-title border-b border-neutral-600">Minha Conta</li>
                    <li>
                        <Link href="/profile" className="rounded-none">
                            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.54962 4.4C2.54962 5.30174 2.90783 6.16654 3.54546 6.80416C4.18308 7.44179 5.04789 7.8 5.94962 7.8C6.85136 7.8 7.71616 7.44179 8.35378 6.80416C8.99141 6.16654 9.34962 5.30174 9.34962 4.4C9.34962 3.49826 8.99141 2.63346 8.35378 1.99584C7.71616 1.35821 6.85136 1 5.94962 1C5.04789 1 4.18308 1.35821 3.54546 1.99584C2.90783 2.63346 2.54962 3.49826 2.54962 4.4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M0.849609 16.3002V14.6002C0.849609 13.6985 1.20782 12.8337 1.84545 12.196C2.48307 11.5584 3.34787 11.2002 4.24961 11.2002H7.64961C8.55135 11.2002 9.41615 11.5584 10.0538 12.196C10.6914 12.8337 11.0496 13.6985 11.0496 14.6002V16.3002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Meu Perfil
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" className="rounded-none">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25 7.6999C5.25 8.3762 5.51866 9.02481 5.99688 9.50302C6.4751 9.98124 7.1237 10.2499 7.8 10.2499C8.4763 10.2499 9.1249 9.98124 9.60312 9.50302C10.0813 9.02481 10.35 8.3762 10.35 7.6999C10.35 7.0236 10.0813 6.375 9.60312 5.89678C9.1249 5.41856 8.4763 5.1499 7.8 5.1499C7.1237 5.1499 6.4751 5.41856 5.99688 5.89678C5.51866 6.375 5.25 7.0236 5.25 7.6999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2.7002 3.6001C2.7002 3.04781 3.14791 2.6001 3.7002 2.6001H5.26098C5.5262 2.6001 5.78055 2.49474 5.96809 2.3072L7.09309 1.1822C7.48361 0.79168 8.11678 0.79168 8.5073 1.1822L9.6323 2.3072C9.81984 2.49474 10.0742 2.6001 10.3394 2.6001H11.9002C12.4525 2.6001 12.9002 3.04781 12.9002 3.6001V5.16088C12.9002 5.4261 13.0056 5.68045 13.1931 5.86799L14.3181 6.99299C14.7086 7.38351 14.7086 8.01668 14.3181 8.4072L13.1931 9.5322C13.0056 9.71974 12.9002 9.97409 12.9002 10.2393V11.8001C12.9002 12.3524 12.4525 12.8001 11.9002 12.8001H10.3394C10.0742 12.8001 9.81984 12.9055 9.6323 13.093L8.5073 14.218C8.11678 14.6085 7.48361 14.6085 7.09309 14.218L5.96809 13.093C5.78055 12.9055 5.5262 12.8001 5.26098 12.8001H3.7002C3.14791 12.8001 2.7002 12.3524 2.7002 11.8001V10.2393C2.7002 9.97409 2.59484 9.71974 2.4073 9.5322L1.2823 8.4072C0.891778 8.01668 0.891778 7.38351 1.2823 6.99299L2.4073 5.86799C2.59484 5.68045 2.7002 5.4261 2.7002 5.16088V3.6001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Configurações
                        </Link>
                    </li>
                    <li className="text-orange-700 border-t border-neutral-600">
                        <Link href="/signin?logout=true" className="rounded-t-none rounded-b-md">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
