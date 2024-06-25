import Content from "@/ui/components/content";
import Header from "@/ui/components/header";
import Nav from "@/ui/components/nav";

export default function Settings() {
    return (
        <div className="h-screen grid grid-cols-12 grid-rows-[auto_1fr]">
			<Header />
			<Nav />
			<Content>Settings</Content>
		</div>
    )
}