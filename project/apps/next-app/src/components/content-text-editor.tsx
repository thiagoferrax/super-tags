'use client'
import React, { useCallback } from 'react'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon, CodeBracketIcon, LinkIcon, LinkSlashIcon } from '@heroicons/react/24/outline'

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
        ],
        editorProps: {
            attributes: {
                class: 'focus:outline-none',
            },
        },
        content: '<p>https://www.google.com/</p>',
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
                        <button onClick={setLink} className={`px-2 py-1 rounded-l hover:bg-zinc-800 ${editor.isActive('link') ? 'is-active' : ''}`}>
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
