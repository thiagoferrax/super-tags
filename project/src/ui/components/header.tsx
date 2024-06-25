import UserInfo from "./user-info";
import profilePic from './../../../public/filipe-torres.jpg'

export default function Header() {
    return (
        <header className="flex justify-between items-center col-span-12 h-[88px] px-5 bg-zinc-900 border-b border-neutral-600">
            <button aria-label="Menu">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H18.306C18.8583 0 19.306 0.447715 19.306 1C19.306 1.55228 18.8583 2 18.306 2H1C0.447715 2 0 1.55228 0 1ZM0 7.73047C0 7.17818 0.447715 6.73047 1 6.73047H18.306C18.8583 6.73047 19.306 7.17818 19.306 7.73047C19.306 8.28275 18.8583 8.73047 18.306 8.73047H1C0.447715 8.73047 0 8.28275 0 7.73047ZM1 13.4609C0.447715 13.4609 0 13.9087 0 14.4609C0 15.0132 0.447715 15.4609 1 15.4609H18.306C18.8583 15.4609 19.306 15.0132 19.306 14.4609C19.306 13.9087 18.8583 13.4609 18.306 13.4609H1Z" fill="white"/>
                </svg>
            </button>
            <UserInfo
                name={"Filipe Torres"}
                email={"filipe.virginio.torres@gmail.com"}
                photo={profilePic}
            />
        </header>
    )
}
