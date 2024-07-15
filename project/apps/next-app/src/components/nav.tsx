import Link from 'next/link'
import React from 'react'
import * as icon from './icon'

export default function Nav() {
    return (
        <nav className="w-80 pl-5 py-10 opacity-100 border-r border-neutral-600 overflow-auto text-white">
            <input type="checkbox" name="menu-display" className="absolute top-9 z-2 left-5 w-5 h-4 opacity-0" />
            <ul className="menu menu-xs rounded-lg w-[17.5rem] max-w-xs p-0 mb-7 bg-transparent">
                <li className="mb-4">
                    <Link href="/profile" className="rounded-none text-2sm">
                        <icon.ProfileIcon width={12} className="mx-0.5" />
                        Meu Perfil
                    </Link>
                </li>
                <li className="mb-7">
                    <Link href="/settings" className="rounded-none text-2sm">
                        <icon.SettingsIcon width={18} />
                        Configurações
                    </Link>
                </li>
                <li className="text-2xs text-white">SUPER TAGS</li>
                <li>
                    <details open>
                        <summary className="text-base font-medium">
                            <icon.UserIcon width={29} />
                            <span className="truncate">Fundamentos</span>
                        </summary>
                        <ul>
                            <li>
                                <details open>
                                    <summary className="text-base font-medium">
                                        <icon.Number1Icon width={29} />
                                        <span className="truncate">1-trilha-inicial</span>
                                    </summary>
                                    <ul>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.PenguinIcon width={29} />
                                                <span className="truncate">aula-1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.CraneIcon width={29} />
                                                <span className="truncate">Aula 2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details open>
                                    <summary className="text-base font-medium">
                                        <icon.Number2Icon width={25} />
                                        <span className="truncate">2-trilha-web</span>
                                    </summary>
                                    <ul>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.EmojiIcon width={29} />
                                                <span className="truncate">aula-1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.InvadersIcon width={29} />
                                                <span className="truncate">Aula 2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details open>
                                    <summary className="text-base font-medium">
                                        <icon.Number3Icon width={25} />
                                        <span className="truncate">3-trilha-terminal</span>
                                    </summary>
                                    <ul>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.RobotIcon width={29} />
                                                <span className="truncate">aula-1</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.SnakeIcon width={29} />
                                                <span className="truncate">Aula 2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details open>
                        <summary className="text-base font-medium">
                            <icon.UserIcon width={25} />
                            <span className="truncate">2-inteligencia-artificial</span>
                        </summary>
                        <ul>
                            <li>
                                <details open>
                                    <summary className="text-base font-medium">
                                        <icon.WindowIcon width={29} />
                                        <span className="truncate">1-trilha-inicial</span>
                                    </summary>
                                    <ul>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.EmojiIcon width={29} />
                                                conceitos-basicos
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.AppleIcon width={29} />
                                                <span className="truncate">conceitos-basicos</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.PenguinIcon width={29} />
                                                <span className="truncate">o-que-e-python</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-base font-medium">
                                                <icon.CraneIcon width={29} />
                                                <span className="truncate">orientacao-objetos</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <a className="text-base font-medium">
                        <icon.InvadersIcon width={29} />
                        <span className="truncate">reports-final-2.pdf</span>
                    </a>
                </li>
            </ul>
            <button className="btn btn-wide h-10 min-h-10 font-normal text-2sm border-neutral-600 hover:border-neutral-400">
                <icon.AddPropIcon width={24} />
                Nova SuperTag
            </button>
        </nav>
    )
}