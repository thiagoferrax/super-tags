import React from 'react'
import * as icon from './icon'
import dynamic from 'next/dynamic';
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const EmojiPicker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false }
);

export default function ContentHeader() {
    return (
        <div className="flex">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-link no-animation">
                    <ChevronDownIcon className="size-3 text-white" />
                    <icon.UserIcon width={50} />
                </div>
                <div tabIndex={0} className="dropdown-content menu menu-horizontal z-[1] left-0 top-14 p-2 rounded bg-base-200 shadow">
                    <EmojiPicker />
                    {/* <button className="btn btn-ghost">
                        <icon.Number1Icon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.Number2Icon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.Number3Icon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.AppleIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.CraneIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.EmojiIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.FolderIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.InvadersIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.PenguinIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.RobotIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.SnakeIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.UserIcon width={29} />
                    </button>
                    <button className="btn btn-ghost">
                        <icon.WindowIcon width={29} />
                    </button> */}
                </div>
            </div>
            <div className="inline-block">
                <h1 className="font-black text-5xl text-white outline-none">Fundamentos</h1>
            </div>

        </div>
    )
}