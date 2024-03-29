import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";
import authenticationContext from "../../context/authenticationContext";

const InputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  handlechange,
  name,
  required,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className=" block text-sm font-medium text-gray-500">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-primary outline-none mt-2 mb-4`}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handlechange}
        readOnly={type === "email" ? true : false}
      />
    </div>
  );
};

function MyAccount() {
  const { initial } = React.useContext(authenticationContext);
  const isAuthenticated = initial.isAuthenticated;
  const [user, setUser] = React.useState({
    name: initial.user.name,
    email: initial.user.email,
    image: initial.user.image,
    profession: initial.user.profession,
    bio: initial.user.bio,
    isAuthenticated: isAuthenticated,
  });

  function handlechange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  React.useEffect(() => {}, [user]);

  function onSubmit(e) {
    console.log(user);
    e.preventDefault();
  }

  return (
    <Layout>
      <div className="flex w-full flex-col gap-3 bg-white px-3 text-[#161931] md:flex-row">
        <main className=" h-full w-full py-1  xl:w-4/5 ">
          <div className="w-full  sm:max-w-xl sm:rounded-lg">
            <Text className="text-2xl font-bold sm:text-xl text-primary">
              Public Profile
            </Text>

            <form className="mx-auto mt-5 grid max-w-2xl" onSubmit={onSubmit}>
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="h-40 w-40 rounded-full object-cover p-1"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Bordered avatar"
                />
              </div>

              <div className=" items-center text-[#202142] sm:mt-10">
                <div className=" flex w-full flex-col items-center space-x-0 space-y-2  sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* Input fields using the InputField component */}

                  <InputField
                    id="last_name"
                    label="Your full name"
                    type="text"
                    placeholder="Your full name"
                    name="name"
                    value={user.isAuthenticated ? user.name : ""}
                    handlechange={handlechange}
                    required
                  />
                </div>

                <InputField
                  id="email"
                  label="Your email"
                  type="email"
                  placeholder="your.email@mail.com"
                  name="email"
                  value={user.isAuthenticated ? user.email : ""}
                  required
                />
                <InputField
                  id="profession"
                  label="Profession"
                  type="text"
                  placeholder="your profession"
                  name="profession"
                  handlechange={handlechange}
                  required
                />

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-500"
                  >
                    Bio
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-primary outline-none $`}
                    placeholder="Write your bio here..."
                    value={user.bio}
                    name="bio"
                    onChange={handlechange}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <OutlineButton
                    borderColor="border-primary"
                    hoverBorderColor="hover:border-primary"
                    textColor="text-white"
                    hoverTextColor="hover:text-primary"
                    buttonText="Save"
                    hoverBackgroundColor="hover:bg-transparent"
                    backgroundColor="bg-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MyAccount;
