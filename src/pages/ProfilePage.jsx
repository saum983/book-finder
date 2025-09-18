import React from "react";

export default function ProfilePage() {
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    joined: "Jan 2025",
  };

  return (
    <div className="max-w-4xl px-6 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Profile</h1>

      <div className="p-6 bg-white shadow-md dark:bg-gray-800 rounded-xl">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        <p className="text-sm text-gray-500">Joined: {user.joined}</p>

        <div className="flex gap-4 mt-6">
          <button className="px-4 py-2 text-white transition bg-indigo-500 rounded-lg hover:bg-indigo-600">
            Edit Profile
          </button>
          <button className="px-4 py-2 text-white transition bg-red-500 rounded-lg hover:bg-red-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
