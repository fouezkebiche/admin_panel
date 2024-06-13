import React from 'react';

const Header = () => (
  <header className="flex items-center justify-between">
    <h1 className="text-2xl font-bold">Bonjour, Admin 👋</h1>
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Chercher"
        className="px-4 py-2 border rounded-lg"
      />
      <img
        src="path/to/profile/image.jpg"
        alt="Profile"
        className="ml-4 w-10 h-10 rounded-full"
      />
    </div>
  </header>
);

export default Header;
