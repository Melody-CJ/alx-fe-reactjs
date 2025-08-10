
function UserProfile() {
  return (
    <div className="bg-green-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto transition-transform duration-500 ease-in-out hover:scale-110"
      />
      <h1 className="text-xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;

