import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav className="w-80 pl-5 pt-8 opacity-100 border-r border-neutral-600 overflow-auto">
            <input type="checkbox" className="absolute top-9 z-[2] left-5 w-5 h-4 opacity-0" />
            <ul className="menu menu-xs rounded-lg w-[17.5rem] max-w-xs p-0 bg-transparent">
                <li className="mb-3">
                    <Link href="/profile" className="rounded-none text-base">
                        <svg className="mx-0.5" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.54962 4.4C2.54962 5.30174 2.90783 6.16654 3.54546 6.80416C4.18308 7.44179 5.04789 7.8 5.94962 7.8C6.85136 7.8 7.71616 7.44179 8.35378 6.80416C8.99141 6.16654 9.34962 5.30174 9.34962 4.4C9.34962 3.49826 8.99141 2.63346 8.35378 1.99584C7.71616 1.35821 6.85136 1 5.94962 1C5.04789 1 4.18308 1.35821 3.54546 1.99584C2.90783 2.63346 2.54962 3.49826 2.54962 4.4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M0.849609 16.3002V14.6002C0.849609 13.6985 1.20782 12.8337 1.84545 12.196C2.48307 11.5584 3.34787 11.2002 4.24961 11.2002H7.64961C8.55135 11.2002 9.41615 11.5584 10.0538 12.196C10.6914 12.8337 11.0496 13.6985 11.0496 14.6002V16.3002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Meu Perfil
                    </Link>
                </li>
                <li className="mb-3">
                    <Link href="/settings" className="rounded-none text-base">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 7.6999C5.25 8.3762 5.51866 9.02481 5.99688 9.50302C6.4751 9.98124 7.1237 10.2499 7.8 10.2499C8.4763 10.2499 9.1249 9.98124 9.60312 9.50302C10.0813 9.02481 10.35 8.3762 10.35 7.6999C10.35 7.0236 10.0813 6.375 9.60312 5.89678C9.1249 5.41856 8.4763 5.1499 7.8 5.1499C7.1237 5.1499 6.4751 5.41856 5.99688 5.89678C5.51866 6.375 5.25 7.0236 5.25 7.6999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.7002 3.6001C2.7002 3.04781 3.14791 2.6001 3.7002 2.6001H5.26098C5.5262 2.6001 5.78055 2.49474 5.96809 2.3072L7.09309 1.1822C7.48361 0.79168 8.11678 0.79168 8.5073 1.1822L9.6323 2.3072C9.81984 2.49474 10.0742 2.6001 10.3394 2.6001H11.9002C12.4525 2.6001 12.9002 3.04781 12.9002 3.6001V5.16088C12.9002 5.4261 13.0056 5.68045 13.1931 5.86799L14.3181 6.99299C14.7086 7.38351 14.7086 8.01668 14.3181 8.4072L13.1931 9.5322C13.0056 9.71974 12.9002 9.97409 12.9002 10.2393V11.8001C12.9002 12.3524 12.4525 12.8001 11.9002 12.8001H10.3394C10.0742 12.8001 9.81984 12.9055 9.6323 13.093L8.5073 14.218C8.11678 14.6085 7.48361 14.6085 7.09309 14.218L5.96809 13.093C5.78055 12.9055 5.5262 12.8001 5.26098 12.8001H3.7002C3.14791 12.8001 2.7002 12.3524 2.7002 11.8001V10.2393C2.7002 9.97409 2.59484 9.71974 2.4073 9.5322L1.2823 8.4072C0.891778 8.01668 0.891778 7.38351 1.2823 6.99299L2.4073 5.86799C2.59484 5.68045 2.7002 5.4261 2.7002 5.16088V3.6001Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Configurações
                    </Link>
                </li>
                <li>
                    <a className="text-base">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                        </svg>
                        resume.pdf
                    </a>
                </li>
                <li>
                    <details open>
                        <summary className="text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                />
                            </svg>
                            My Files
                        </summary>
                        <ul>
                            <li>
                                <a className="text-base">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                        />
                                    </svg>
                                    Project-final.psd
                                </a>
                            </li>
                            <li>
                                <a className="text-base">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" 
                                        />
                                    </svg>
                                    Project-final-2.psd
                                </a>
                            </li>
                            <li>
                                <details open>
                                    <summary className="text-base">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                            />
                                        </svg>
                                        Images
                                    </summary>
                                    <ul>
                                        <li>
                                            <a className="text-base">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                    />
                                                </svg>
                                                Screenshot1.png
                                            </a>
                                        </li>
                                    <li>
                                        <a className="text-base">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-4 w-4">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                />
                                            </svg>
                                            Screenshot2.png
                                        </a>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className="text-base">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                                                    />
                                                </svg>
                                                Others
                                            </summary>
                                            <ul>
                                                <li>
                                                    <a className="text-base">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            className="h-4 w-4">
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                            />
                                                        </svg>
                                                        Screenshot3.png
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <a className="text-base">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                        </svg>
                        reports-final-2.pdf
                    </a>
                </li>
            </ul>
        </nav>
    )
}