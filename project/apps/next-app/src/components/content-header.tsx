import React, { useState, ChangeEvent } from 'react'
import dynamic from 'next/dynamic';
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Emoji } from 'emoji-picker-react';

const EmojiPicker = dynamic(
    () => {
        return import('emoji-picker-react');
    },
    { ssr: false }
);

export default function ContentHeader() {
    // Title icon selection
    const [chosenEmoji, setChosenEmoji] = useState<{
        unified: string;
    }>({
        unified: "1f423"
    });

    const emojiClick = (emojiObject: any) => {
        setChosenEmoji(emojiObject);
    };

    const [title, setTitle] = useState('Sem título')

    return (
        <div className="flex">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-link no-animation pl-0">
                    <ChevronDownIcon className="size-3 text-white" />
                    <Emoji unified={chosenEmoji ? chosenEmoji.unified : "1f423"} size={50} />
                </div>
                <div tabIndex={0} className="dropdown-content menu menu-horizontal z-[1] left-0 top-14 p-2 rounded bg-base-200 shadow">
                    <EmojiPicker onEmojiClick={emojiClick} />
                </div>
            </div>
            <div className="inline-block">
                {/* <h1 className="font-black text-5xl text-white outline-none">{title}</h1> */}
                <input className="font-black text-5xl text-white outline-none bg-transparent" type="text" name="input" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

        </div>
    )
}