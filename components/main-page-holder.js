import React from 'react';

const MainPageHolder = () => {
  return (
    <div className="min-h-screen lg:flex text-lg">
      {/* left side */}
      <div className="lg:w-1/3 relative z-10 flex flex-col justify-center px-10 lg:px-20 py-20 lg:py-0 text-left left-content">

        <div className="mb-5">
          <img src="/logo.png" alt="Logo image"></img>
        </div>

        <h2 className="inter text-4xl mb-3 font-bold text-gray-800" style={{ lineHeight: 1.2 }}>
          Welcome home, dear traveler!
        </h2>

        <p className="text-gray-700 mb-6">
          A large and beautiful site is currently under construction ...
        </p>
      </div>

      {/* right side */}
      <div className="lg:w-2/3 relative">
        <svg
          className="hidden lg:block text-white fill-current absolute h-full transform -translate-x-1/2 w-48 z-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>

        <img
          src="/background3.jpg"
          alt="Ocean Image"
          className="lg:absolute object-cover lg:inset-y-0 lg:right-0 lg:h-full lg:w-full"
        />
      </div>
    </div>
  )
}

export default MainPageHolder