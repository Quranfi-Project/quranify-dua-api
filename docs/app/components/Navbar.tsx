'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/docs', label: 'Documentation' },
    { href: '/examples', label: 'Examples' },
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
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  pathname === link.href
                    ? 'bg-blue-900 text-blue-300'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
