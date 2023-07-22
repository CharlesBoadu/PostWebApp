import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Configurations } from "./config";

function CreatePost() {
  const [createPostData, setCreatePostData] = useState({});
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCreatePost = async () => {
    const req = await fetch(`${Configurations.base_url}/post/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: createPostData?.title,
        body: createPostData?.body,
        created_at: new Date(),
        updated_at: new Date(),
      }),
    });
    if (req != 200) {
      setTimeout(() => {
        setToastMessage("Creating New post failed");
        setToast(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setToastMessage("Post created successfully");
        setToast(true);
      }, 1000);
    }
  };

  return (
    <div>
      {toast && (
        <div className="shadow-lg fixed top-5 right-5 rounded-sm">
          <div className="flex flex-row space-x-3">
            <div className="rounded-sm bg-white py-2 w-fit px-6">
              {toastMessage}
            </div>
            <div className="mt-[-5%] text-white"
            onClick={setToast(false)}
            >x</div>
          </div>
        </div>
      )}
      <div className="flex flex-row space-x-2">
        <div className="font-bold mb-2">CREATE A POST</div>
        <div>
          <BsFillPencilFill />
        </div>
      </div>
      <div className="bg-white rounded-sm w-[80vh] p-5">
        <div className="mb-1">TITLE</div>
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter title"
            className="bg-[#CED0FA] pl-2 py-1 w-full rounded-lg"
            value={createPostData?.title}
            onChange={(e) => {
              setCreatePostData({ ...createPostData, title: e.target.value });
            }}
          />
        </div>
        <div className="mt-1 mb-1">BODY</div>
        <div>
          <textarea
            name=""
            id=""
            placeholder="Enter post content"
            cols="58"
            rows="10"
            className="bg-[#CED0FA] pl-2 rounded-lg w-full"
            value={createPostData?.body}
            onChange={(e) => {
              setCreatePostData({ ...createPostData, body: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <div
            className="bg-[#CED0FA] px-4 py-2 text-center rounded-lg hover:cursor-pointer"
            onClick={handleCreatePost}
          >
            SEND
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
