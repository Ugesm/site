'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image
              src="/images/logo.png"
              alt="UGESM Logo"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="text-gray-600 mt-4">
              Union Générale des Étudiants Et Stagiaires Sénégalais au Maroc
            </p>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block text-gray-800">
              Contact
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-600"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Av. des Forces Armées Royales, Rabat</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div className="text-gray-600">
                  <p>(+212) 700 634 882</p>
                  <p>(+212) 690 035 988</p>
                  <p>(+212) 765 536 008</p>
                </div>
              </div>
            </div>
          </div>

          {/* Perma Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block text-gray-800">
              Perma Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-600"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/toutes-nos-sections" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                  Nos Sections
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                  Développeurs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Suivez Nous */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block text-gray-800">
              Suivez Nous
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-green-600"></div>
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} UGESM. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}