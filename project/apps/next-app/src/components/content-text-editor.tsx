'use client'
import React, { useCallback } from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon, CodeBracketIcon, LinkIcon, LinkSlashIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ContentTextEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Placeholder.configure({
                placeholder: 'Type "/" to see commands or "#/" to see internal links',
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
            }),
            Link.extend({
                inclusive: false,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        editorProps: {
            attributes: {
                class: 'focus:outline-none',
            },
        }
    })

    // Link
    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    if (!editor) {
        return null
    }

    return (
        <>
            {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <div className="bubble-menu flex bg-zinc-900 rounded border border-white">
                    <div className="flex border-r border-zinc-800">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-sm btn-link no-animation px-2 py-1 border-0 rounded-none rounded-l text-white font-normal no-underline hover:no-underline hover:bg-zinc-800">
                                {/* <button className="dropdown flex items-center px-2 py-1 rounded-l hover:bg-zinc-800"> */}
                                Text
                                <ChevronDownIcon className="size-3 text-white" />
                                {/* </button> */}
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu top-7 bg-zinc-900 rounded border border-white">
                                <li>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('left').run()}
                                        className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
                                    >
                                        Left
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('center').run()}
                                        className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
                                    >
                                        Center
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('right').run()}
                                        className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
                                    >
                                        Right
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                                        className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}
                                    >
                                        Justify
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => editor.chain().focus().unsetTextAlign().run()}
                                        className="px-2 py-1 hover:bg-zinc-800"
                                    >
                                        Unset
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex border-r border-zinc-800">
                        <button onClick={setLink} className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive('link') ? 'is-active' : ''}`}>
                            <LinkIcon className="size-5 text-white" />
                        </button>
                        <button
                            className="px-2 py-1 hover:bg-zinc-800"
                            onClick={() => editor.chain().focus().unsetLink().run()}
                            disabled={!editor.isActive('link')}
                        >
                            <LinkSlashIcon className="size-5 text-white" />
                        </button>
                    </div>
                    <div className="flex">
                        <button
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive('bold') ? 'is-active' : ''}`}
                        >
                            <BoldIcon className="size-5 text-white" />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive('italic') ? 'is-active' : ''}`}
                        >
                            <ItalicIcon className="size-5 text-white" />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive('underline') ? 'is-active' : ''}`}
                        >
                            <UnderlineIcon className="size-5 text-white" />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            className={`px-2 py-1 hover:bg-zinc-800 ${editor.isActive('strike') ? 'is-active' : ''}`}
                        >
                            <StrikethroughIcon className="size-5 text-white" />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleCode().run()}
                            className={`px-2 py-1 rounded-r hover:bg-zinc-800 ${editor.isActive('code') ? 'is-active' : ''}`}
                        >
                            <CodeBracketIcon className="size-5 text-white" />
                        </button>
                    </div>
                </div>
            </BubbleMenu >}
            <EditorContent editor={editor} className="mt-8 p-3 min-h-[50px] border border-neutral-600 rounded" />
        </>
    )
}
