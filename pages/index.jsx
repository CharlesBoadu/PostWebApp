import React from "react";
import SearchBar from "../components/SearchBar";
import AllPosts from "../components/AllPosts";
import CreatePost from "../components/CreatePost";

export default function Home() {
    return (
        <div className="h-screen bg-[#CED0FA]">
            <div>
                <SearchBar />
            </div>
            <div className="flex flex-row justify-between p-5">
                <AllPosts />
                <CreatePost />
            </div>
        </div>
    )
}