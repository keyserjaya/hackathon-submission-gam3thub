"use client";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <img
            src="/images/ethglobalbangkok.jpg"
            alt="Game3THub Logo"
          />
        </div>

        {/* Logo */}
        <div className="mb-4">
          <img
            src="/images/Gam3THub.png"
            alt="Game3THub Logo"
            className="h-10 mx-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 mb-4 text-sm">
          <a
            href="#home"
            className="hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="#faq"
            className="hover:text-white transition duration-300"
          >
            FAQ
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-4">
          
        </div>

        {/* Copyright */}
        <p className="text-xs">
          &copy; 2024 Gam3THub. All rights reserved.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

    </footer>
  );
};

export default Footer;
