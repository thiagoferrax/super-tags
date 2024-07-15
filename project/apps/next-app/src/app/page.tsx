'use client'
import React from 'react'
import Content from "../components/content";
import Header from "../components/header";
import Nav from "../components/nav";
import { withPrivateRoute } from '../contexts/authorization/with-private-router';

function Home() {
    return (
        <div className="h-screen flex flex-col overflow-hidden">
            <Header />
            <div className="flex grow bg-black overflow-auto">
                <Nav />
                <Content>Home Page</Content>
            </div>
        </div>
    )
}

export default withPrivateRoute(Home)