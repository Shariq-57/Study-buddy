
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiHome, HiDocument, HiVideoCamera, HiBookOpen, HiArrowLeft, HiInbox, HiTable, HiViewBoards } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function New_Component() {
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    return (
        <Sidebar className="sm:block hidden border-t-2 bg-zinc-50 fixed top-[76px] left-0 h-[100vh] w-[250px]" aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup className=" mt-2 border-0">
                    {isLoggedIn && <> <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiHome}>
                        Home
                    </Sidebar.Item>
                        <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiDocument}>
                            My docs
                        </Sidebar.Item>
                        <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg mb-5" href="#" icon={HiInbox}>
                            Ask Ai
                        </Sidebar.Item>
                    </>
                    }

                    {isLoggedIn && <>
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
                    </>
                    }

                    {!isLoggedIn && <><h1 className="ms-3 mb-6 text-xl font-bold">Login & Sign Up</h1>

                        <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiArrowSmRight}>
                            Login
                        </Sidebar.Item>
                        <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiViewBoards}>
                            Sign Up
                        </Sidebar.Item>
                    </>
                    }
                    {isLoggedIn && <>
                        <h1 className="ms-3 mb-6 text-xl font-bold">Log out</h1>
                        <Sidebar.Item className="hover:bg-zinc-300 text-lg rounded-lg" href="#" icon={HiArrowLeft}>
                            Log out
                        </Sidebar.Item>
                    </>
                    }
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}

export default New_Component;