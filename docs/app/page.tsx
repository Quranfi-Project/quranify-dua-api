'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const features = [
    {
      title: 'Comprehensive',
      description: 'Access duas from various categories including protection, forgiveness, and Rabbana duas from the Quran.',
    },
    {
      title: 'Free & Open Source',
      description: 'Completely free to use with no authentication required. Perfect for Islamic apps and websites.',
    },
    {
      title: 'Fast & Simple',
      description: 'RESTful API with JSON responses. Easy to integrate with any programming language or framework.',
    }
  ];

  const endpoints = [
    { url: '/api/duas/protection', desc: 'Get all protection duas' },
    { url: '/api/duas/forgive', desc: 'Get all forgiveness duas' },
    { url: '/api/duas/rabbanas', desc: 'Get Rabbana duas from Quran' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              100% Free & Open Source
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Quranfi Dua API
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Authentic Islamic duas (supplications) with Arabic text, translations, and transliterations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/examples"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
              >
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quick Start</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get up and running in seconds</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">JavaScript</span>
                <button
                  onClick={() => copyToClipboard(`fetch('https://your-api.vercel.app/api/duas/protection')
  .then(res => res.json())
  .then(data => console.log(data));`, 0)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  {copiedIndex === 0 ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`fetch('https://your-api.vercel.app/api/duas/protection')
  .then(res => res.json())
  .then(data => console.log(data));`}
                </pre>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Available Endpoints</h3>
              <div className="space-y-3">
                {endpoints.map((endpoint, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div>
                      <code className="text-blue-600 dark:text-blue-400 font-mono text-sm font-semibold">
                        {endpoint.url}
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{endpoint.desc}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(endpoint.url, index + 1)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {copiedIndex === index + 1 ? '✓' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto bg-blue-600 dark:bg-blue-700 rounded-lg p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-blue-100">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Authentic Duas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to integrate?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Check out our comprehensive documentation and start building today
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
          >
            Read Documentation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-4">Built with Express.js | Deployed on Vercel | Open Source</p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href="/docs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</Link>
            <Link href="/examples" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Examples</Link>
            <a href="https://github.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
