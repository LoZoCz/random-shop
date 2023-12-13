import { useState } from "react";
import Header from "../components/header/Header";
import { mockLogedUserData, mockUserOrders } from "../utils/siteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserTab = () => {
  const [userData, setUserData] = useState(mockLogedUserData);

  const { username, firstName, lastName, email, image } = userData;

  return (
    <>
      <Header />
      <main
        className="flex justify-center items-center py-20"
        style={{ height: "calc(100vh - 7rem)" }}
      >
        <section className="bg-sky-400 rounded-lg flex flex-col gap-10 p-2">
          <div className="flex gap-6">
            <img
              src={image}
              alt="my profiles image"
              className="w-[6rem] h-[6rem] rounded-full bg-white"
            />
            <div className="flex flex-col gap-6">
              <h1 className="text-6xl font-semibold text-white">My profile</h1>
              <div className="grid grid-cols-2 gap-4 text-white font-medium">
                <div>
                  <p>Username</p>
                  <input
                    type="text"
                    value={username}
                    className="bg-transparent border-transparent border-b-white border-solid border-4 rounded-md outline-none"
                  />
                </div>
                <div>
                  <p>First name</p>
                  <input
                    type="text"
                    value={firstName}
                    className="bg-transparent border-transparent border-b-white border-solid border-4 rounded-md outline-none"
                  />
                </div>
                <div>
                  <p>Last name</p>
                  <input
                    type="text"
                    value={lastName}
                    className="bg-transparent border-transparent border-b-white border-solid border-4 rounded-md outline-none"
                  />
                </div>
                <div>
                  <p>E-mail</p>
                  <input
                    type="text"
                    value={email}
                    className="bg-transparent border-transparent border-b-white border-solid border-4 rounded-md outline-none"
                  />
                </div>
              </div>
              <button className="bg-sky-950 text-white px-4 py-2 outline-none rounded-sm self-start font-medium">
                Save changes
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-4xl text-white font-medium mb-2">My orders</h2>
            <div className="grid grid-cols-3 gap-4">
              {mockUserOrders
                .filter((_, i) => i < 2)
                .map((item) => {
                  return (
                    <div
                      className="bg-white rounded-md p-4 flex flex-col gap-2 justify-center items-center"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} image`}
                        className="w-24 aspect-square object-cover"
                      />
                      <p className="font-medium text-slate-900">{item.title}</p>
                    </div>
                  );
                })}
              <Link
                to={"/cart"}
                className="bg-white rounded-md p-4 flex flex-col gap-2 justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-6xl text-slate-900"
                />
                <p className="font-medium text-slate-900">
                  {mockUserOrders.length - 2} orders more
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserTab;
