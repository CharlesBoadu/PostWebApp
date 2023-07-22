import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Configurations } from "./config";

function AllPosts() {
  const [fetchedPosts, setFetchedPosts] = useState([{}]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(`${Configurations.base_url}/posts`);
        const data = await response.json();
        setFetchedPosts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPosts();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(
        `${Configurations.base_url}/post/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg w-[90vh] h-full">
        {fetchedPosts.map((post) => {
          return (
            <div className="flex flex-row space-x-4 p-4">
              <>
                <div className="bg-[#CED0FA] rounded-lg w-full space-y-4 p-3">
                  <div className="text-sm shadow-sm">
                    <span className="font-bold pr-2">Title:</span>
                    {post?.title}
                  </div>
                  <div className="">
                    <span className="text-sm font-bold pr-2">Message:</span>
                    {post?.body}
                  </div>
                </div>
                <div className="flex flex-row space-x-3 w-[20%]">
                  <div
                    className="my-auto hover:cursor-pointer hover:text-red-600"
                    onClick={() => {
                      handleDeletePost(post?.id);
                    }}
                  >
                    <AiFillDelete />
                  </div>
                  <div className="my-auto hover:cursor-pointer hover:text-green-600">
                    <GrUpdate />
                  </div>
                </div>
              </>
            </div>
          );
        })}
        <div className="flex flex-row space-x-5 flex items-center justify-center">
          <div className="rounded-sm bg-[#ced0fa] w-fit px-2 py-2 hover:cursor-pointer hover:bg-[#4850ea]">
            <AiOutlineLeft />
          </div>
          <div className="rounded-sm bg-[#ced0fa] w-fit px-2 py-2 hover:cursor-pointer hover:bg-[#4850ea]">
            <AiOutlineRight />
          </div>
        </div>
        <div className="text-center text-sm p-4">
          Post {fetchedPosts?.length} out of {fetchedPosts?.length}
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
