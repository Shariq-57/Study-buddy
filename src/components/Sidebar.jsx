
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiHome, HiDocument, HiVideoCamera, HiBookOpen, HiArrowLeft, HiInbox, HiTable, HiViewBoards } from "react-icons/hi";

function New_Component() {
    return (
        <Sidebar className="sm:block hidden bg-zinc-50 fixed top-[73px] left-0 h-[100vh] w-[250px]" aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup className=" mt-2 border-0">
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiHome}>
                        Home
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiDocument}>
                        My docs
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg mb-5" href="#" icon={HiInbox}>
                        Ask Ai
                    </Sidebar.Item>

                    <h1 className="ms-3 mb-6 text-xl font-bold">My Library</h1>

                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiVideoCamera}>
                        Courses
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiBookOpen}>
                        Books
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg mb-5" href="#" icon={HiTable}>
                        Studylists
                    </Sidebar.Item>

                    <h1 className="ms-3 mb-6 text-xl font-bold">Login & Sign Up</h1>

                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiArrowSmRight}>
                        Login
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiViewBoards}>
                        Sign Up
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiArrowLeft}>
                        Log out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default New_Component;