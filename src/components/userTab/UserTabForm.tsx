import UserTabInput from "./UserTabInput";
import { UserDataTypes, useUserContext } from "../../utils/siteData";
import { useState } from "react";

const UserTabForm = () => {
  const { user, updateUser } = useUserContext();

  const [userData, setUserData] = useState<UserDataTypes>(user);

  const { firstName, lastName, username, email } = user;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateUser(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
      <h1 className="text-4xl sm:text-6xl font-semibold text-white">
        My profile
      </h1>
      <div className="flex flex-wrap gap-4 text-white font-medium min-[800px]:grid min-[800px]:grid-cols-2">
        <UserTabInput
          label="First name"
          objLabel="firstName"
          defaultValue={firstName}
          setData={setUserData}
        />
        <UserTabInput
          label="Username"
          objLabel="username"
          defaultValue={username}
          setData={setUserData}
        />
        <UserTabInput
          label="Last name"
          objLabel="lastName"
          defaultValue={lastName}
          setData={setUserData}
        />
        <UserTabInput
          label="Email"
          objLabel="email"
          defaultValue={email}
          setData={setUserData}
        />
      </div>

      <button
        type="submit"
        className="bg-sky-950 text-white px-4 py-2 outline-none rounded-sm self-start font-medium"
      >
        Save changes
      </button>
    </form>
  );
};

export default UserTabForm;
