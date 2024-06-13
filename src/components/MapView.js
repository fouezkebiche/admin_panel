import React from 'react';

const MapView = () => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
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
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Filtre</button>
        </div>
        <div className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13232.26435003532!2d-86.84389364805453!3d33.52066086650788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891a6d4167b33b%3A0x5b0a7358a88b49b7!2sBirmingham%2C%20AL%2C%20USA!5e0!3m2!1sen!2s!4v1592938593282!5m2!1sen!2s"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapView;
