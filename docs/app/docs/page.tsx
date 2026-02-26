'use client';

import { useState } from 'react';

export default function Docs() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const categories = [
    { name: 'protection', description: 'Duas for protection from evil and harm' },
    { name: 'forgive', description: "Duas asking for Allah's forgiveness" },
    { name: 'rabbanas', description: '"Rabbana" duas from the Quran' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Complete reference for the Quranfi Dua API</p>
        </div>

        {/* Base URL Section */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Base URL</h2>
          <div className="relative">
            <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg font-mono text-sm text-blue-400">
              https://quranfi-dua-api.vercel.app/api/
            </div>
            <button
              onClick={() => copyToClipboard('https://quranfi-dua-api.vercel.app/api/', 'base-url')}
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 transition-colors"
            >
              {copiedSection === 'base-url' ? '✓' : 'Copy'}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">
            {/* Replace <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">your-api.vercel.app</code> with your actual Vercel deployment URL. */}
          </p>
        </div>

        {/* Available Categories */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Available Categories</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="p-5 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="font-mono text-sm text-blue-600 dark:text-blue-400 font-bold mb-2">{cat.name}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Endpoints */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Endpoints</h2>

          {/* Endpoint 1 */}
          <div className="mb-10 pb-10 border-b border-gray-200 dark:border-gray-800 last:border-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold">GET</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Get All Duas by Category</h3>
            </div>

            <div className="relative mb-4">
              <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg">
                <code className="text-blue-400 font-mono text-sm">
                  GET /api/duas/<span className="text-yellow-400">:category</span>
                </code>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Returns an array of all duas in the specified category.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Example Request</p>
                <div className="relative">
                  <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg font-mono text-sm text-gray-300">
                    GET /api/duas/protection
                  </div>
                  <button
                    onClick={() => copyToClipboard('GET /api/duas/protection', 'req1')}
                    className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {copiedSection === 'req1' ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Example Response</p>
                <div className="relative">
                  <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg font-mono text-xs text-gray-300 overflow-x-auto">
                    <pre>{`[
  {
    "id": 1,
    "category": "protection",
    "arabic": "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ...",
    "translation": "Allah — there is no god...",
    "transliteration": "Allahu laa ilaaha...",
    "reference": "Ayatul Kursi – Surah Al-Baqarah 2:255"
  },
  ...
]`}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard('[{"id": 1, "category": "protection", ...}]', 'res1')}
                    className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {copiedSection === 'res1' ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Endpoint 2 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold">GET</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Get Specific Dua by ID</h3>
            </div>

            <div className="relative mb-4">
              <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg">
                <code className="text-blue-400 font-mono text-sm">
                  GET /api/duas/<span className="text-yellow-400">:category</span>/<span className="text-yellow-400">:id</span>
                </code>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Returns a single dua from the specified category with the given ID.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="mb-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Example Request</p>
                <div className="relative">
                  <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg font-mono text-sm text-gray-300">
                    GET /api/duas/protection/1
                  </div>
                  <button
                    onClick={() => copyToClipboard('GET /api/duas/protection/1', 'req2')}
                    className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {copiedSection === 'req2' ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Example Response</p>
                <div className="relative">
                  <div className="bg-gray-900 dark:bg-gray-950 p-4 rounded-lg font-mono text-xs text-gray-300 overflow-x-auto">
                    <pre>{`{
  "id": 1,
  "category": "protection",
  "arabic": "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ...",
  "translation": "Allah — there is no god...",
  "transliteration": "Allahu laa ilaaha illaa Huwal...",
  "reference": "Ayatul Kursi – Surah Al-Baqarah 2:255"
}`}</pre>
                  </div>
                  <button
                    onClick={() => copyToClipboard('{"id": 1, "category": "protection", ...}', 'res2')}
                    className="absolute top-3 right-3 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {copiedSection === 'res2' ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Responses */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Error Responses</h2>

          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold">404</span>
                <h3 className="font-semibold text-gray-900 dark:text-white">Category Not Found</h3>
              </div>
              <div className="bg-gray-900 dark:bg-gray-950 p-3 rounded-lg font-mono text-sm text-red-400">
                <pre>{`{ "error": "Category not found" }`}</pre>
              </div>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold">404</span>
                <h3 className="font-semibold text-gray-900 dark:text-white">Dua Not Found</h3>
              </div>
              <div className="bg-gray-900 dark:bg-gray-950 p-3 rounded-lg font-mono text-sm text-red-400">
                <pre>{`{ "error": "Dua not found" }`}</pre>
              </div>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-bold">500</span>
                <h3 className="font-semibold text-gray-900 dark:text-white">Server Error</h3>
              </div>
              <div className="bg-gray-900 dark:bg-gray-950 p-3 rounded-lg font-mono text-sm text-orange-400">
                <pre>{`{ "error": "Failed to load duas" }`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Response Fields */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Response Fields</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                  <th className="text-left py-4 px-4 font-bold text-gray-900 dark:text-white">Field</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900 dark:text-white">Type</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                {[
                  { field: 'id', type: 'number', desc: 'Unique identifier for the dua' },
                  { field: 'category', type: 'string', desc: 'Category of the dua' },
                  { field: 'arabic', type: 'string', desc: 'Original Arabic text' },
                  { field: 'translation', type: 'string', desc: 'English translation' },
                  { field: 'transliteration', type: 'string', desc: 'Romanized pronunciation' },
                  { field: 'reference', type: 'string', desc: 'Source reference (Quran/Hadith)' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="py-4 px-4">
                      <code className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded text-blue-600 dark:text-blue-400 font-semibold">{row.field}</code>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-purple-600 dark:text-purple-400 font-mono text-sm">{row.type}</span>
                    </td>
                    <td className="py-4 px-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Need help getting started?</p>
          <a
            href="/examples"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
          >
            View Code Examples
          </a>
        </div>
      </div>
    </div>
  );
}
