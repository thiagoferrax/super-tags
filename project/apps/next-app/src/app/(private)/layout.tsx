"use client"
import React from "react";
import Header from "../../components/header";
import Nav from "../../components/nav";
import { withPrivateRoute } from '../../contexts/authorization/with-private-router';

function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex grow bg-black overflow-auto">
                <Nav />
                {children}
            </div>
        </div>
	);
}

export default withPrivateRoute(Layout)
