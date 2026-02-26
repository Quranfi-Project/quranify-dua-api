'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaBook, FaCode, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: FaHome },
    { href: '/docs', label: 'Documentation', icon: FaBook },
    { href: '/examples', label: 'Examples', icon: FaCode },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-white">
              Quranfi Dua API
            </span>
          </Link>

          <div className="flex items-center space-x-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    pathname === link.href
                      ? 'bg-blue-900 text-blue-300'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <Icon />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <a
              href="https://github.com/Quranfi-Project/quranify-dua-api"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
