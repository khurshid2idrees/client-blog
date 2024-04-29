import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    axios
      .post("http://localhost:3001/create", formData)
      .then((res) => {
        if (res.data === "Success") {
          window.location.href = "/";
        }
      })
      .catch((err) => console.log(err));
  };


const handleDelete = (postId) => {
  axios
    .delete(`http://localhost:3001/deletepost/${postId}`)
    .then((res) => {
      // Remove the deleted post from the UI
      const updatedPosts = posts.filter((post) => post._id !== postId);
      setPosts(updatedPosts);
    })
    .catch((err) => {
      console.error("Error deleting post:", err);
      // Handle error, maybe show an error message to the user
    });
};

  return (
    <>
      <>
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
          Create Post
        </div>

        <form
          onSubmit={handleSubmit}
          className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
        >
          <input
            className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
          />
          <textarea
            className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe everything about this post here"
            defaultValue={""}
          />
          <input
            className="title bg-gray-100 border border-gray-300 p-2 my-4 outline-none"
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Title"
            type="file"
          />
          {/* icons */}
          <div className="icons flex text-gray-500 m-2"></div>
          {/* buttons */}
          <div className="buttons flex">
            {/* <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
              Cancel
            </div> */}
            <button
              type="submit"
              className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            >
              Post
            </button>
          </div>
        </form>
      </>
    </>
  );
}
