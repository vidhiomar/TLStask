import React, { useState } from 'react';
import NavItem from './NavItem';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'Tech Prep', href: '#techprep' },
  { name: 'Design Lab', href: '#designlab' },
  { name: 'Internship', href: '#summerintern' },
  { name: 'Mini Projects', href: '#miniprojects' },
  { name: 'Contact', href: '#contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#070054]">
      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo - always left aligned */}
          <div className="flex items-center flex-shrink-0">
            <div className="bg-white border border-white rounded-lg p-1">
              <img
                src="/TLSlogo.png"
                alt="TechLearn Logo"
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 text-white">
            {links.map(link => (
              <NavItem key={link.href} href={link.href}>
                {link.name}
              </NavItem>
            ))}
          </ul>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden bg-[#070054] text-white">
          <ul className="px-4 pt-2 pb-4 space-y-1">
            {links.map(link => (
              <NavItem key={link.href} href={link.href}>
                {link.name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
