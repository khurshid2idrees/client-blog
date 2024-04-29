import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getposts")
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (postId) => {
    const updatedposts = posts.filter((data) => data._id !== postId);

    console.log(updatedposts);
  };

  useEffect(() => {
    handleDelete();
  }, [posts]);
  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
        <h1 className="text-center font-bold text-2xl text-black">Blogs </h1>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          {/* Card 1 */}

          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden"
            >
              <img
                className="h-56 lg:h-60 w-full object-cover"
                src={`http://localhost:3001/Images/${post.file}`}
                alt=""
              />
              <div className="p-3">
                <span className="text-sm text-primary">{}</span>
                <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {post.title}
                </h3>
                <p className="paragraph-normal text-gray-600">
                  {post.description}
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={(e) => handleDelete(post._id)}
                    className="md:px-44 px-24 bg-red-600 mt-4 text-gray-200  p-2 rounded   hover:text-gray-100 "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
