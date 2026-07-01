import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Footer() {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/books', label: 'Books' },
    { to: '/members', label: 'Members' },
    { to: '/report', label: 'Reports' },
    { to: '/about', label: 'About Us' },
  ];

  return (
    <footer className="bg-slate-800 text-slate-300 border-t border-slate-700 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Library System</h3>
          <p className="text-sm leading-6 text-slate-400">
            A modern digital library experience for managing books, members, and reports with ease.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://www.facebook.com/harun.mohamud.ahmed.81/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-700 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebookF />
            </a>
       
            <a href="https://wa.me/252612249281" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-700 text-slate-300 hover:bg-green-600 hover:text-white transition-colors" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/harun-mohamoud-ahmed-eng-daacad-3b8555330?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-700 text-slate-300 hover:bg-blue-700 hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="http://tiktok.com/@haaruun_daacad" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-700 text-slate-300 hover:bg-black hover:text-white transition-colors" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-indigo-400" /> Yaqshid-Mugadishu-Somalia</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-indigo-400" /> +252 612249281</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-indigo-400" /> support@librarysys.com</li>
            <li className="flex items-center gap-2"><FaClock className="text-indigo-400" /> sat - wed: 7:00 AM to 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="max-w-5xl mx-auto px-4 py-4 text-center text-sm text-slate-400">
          © 2026 Digital Library Management System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
