import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";
import axios from "axios";

export default function NavBar() {
  const user = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data === "Success") navigate(0);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <>
        <nav
          id="header"
          className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 "
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <label
              htmlFor="menu-toggle"
              className="cursor-pointer md:hidden block"
            >
              <svg
                className="fill-current text-black-600"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
              id="menu"
            >
              <nav>
                <ul className="md:flex items-center justify-between text-base text-black-600 pt-4 md:pt-0">
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      to={`/`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    {user.username ? (
                      <Link
                        className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                        to={`/create`}
                      >
                        Create
                      </Link>
                    ) : (
                      <></>
                    )}
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                      href="#"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
              id="nav-content"
            >
              {user.username ? (
                <div>
                  <input
                    type="button"
                    onClick={handleLogout}
                    className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100 "
                    value="Logout"
                  />
                </div>
              ) : (
                <div className="auth flex items-center w-full md:w-full">
                  <Link to={`/login`}>
                    <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
                      Log in
                    </button>
                  </Link>
                  <Link to={`/register`}>
                    <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </>
    </>
  );
}
