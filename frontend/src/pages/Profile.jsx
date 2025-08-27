import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    fullName: "",
    gender: "",
    country: "",
    language: "",
    profilePic: "",
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(true); // initially editing

  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setUser(JSON.parse(savedProfile));
      setIsEditing(false); // show profile instead of form if saved
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedUser = { ...user, profilePic: reader.result };
        setUser(updatedUser);
        localStorage.setItem("profile", JSON.stringify(updatedUser));
        setMessage("Profile updated successfully!");
        setIsEditing(false); // hide form
      };
      reader.readAsDataURL(file);
    } else {
      localStorage.setItem("profile", JSON.stringify(user));
      setMessage("Profile updated successfully!");
      setIsEditing(false); // hide form
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {isEditing ? (
          <>
            <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={user.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <input
                  type="text"
                  name="language"
                  value={user.language}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="mt-1 block w-full text-sm text-gray-500"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </>
        ) : (
          // Display profile details only
          <div className="flex flex-col items-center gap-4">
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-green-400"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-2 border-green-400 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <h2 className="text-2xl font-bold">{user.fullName}</h2>
            <p>Gender: {user.gender}</p>
            <p>Country: {user.country}</p>
            <p>Language: {user.language}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 mt-4"
            >
              Edit Profile
            </button>
          </div>
        )}

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
