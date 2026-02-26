'use client';

import { useState } from 'react';

export default function Examples() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    {
      title: 'JavaScript (Fetch)',
      language: 'javascript',
      code: `fetch('https://quranfi-dua-api.vercel.app/api/duas/protection')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
    },
    {
      title: 'JavaScript (Async/Await)',
      language: 'javascript',
      code: `async function getDuas() {
  try {
    const response = await fetch('https://quranfi-dua-api.vercel.app/api/duas/protection/1');
    const dua = await response.json();
    console.log(dua);
  } catch (error) {
    console.error('Error:', error);
  }
}

getDuas();`,
    },
    {
      title: 'React Component',
      language: 'jsx',
      code: `import { useState, useEffect } from 'react';

function DuaDisplay() {
  const [duas, setDuas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://quranfi-dua-api.vercel.app/api/duas/protection')
      .then(res => res.json())
      .then(data => {
        setDuas(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {duas.map(dua => (
        <div key={dua.id} className="dua-card">
          <h3>{dua.reference}</h3>
          <p className="arabic">{dua.arabic}</p>
          <p className="transliteration">{dua.transliteration}</p>
          <p className="translation">{dua.translation}</p>
        </div>
      ))}
    </div>
  );
}`,
    },
    {
      title: 'Python',
      language: 'python',
      code: `import requests

# Get all duas
response = requests.get('https://quranfi-dua-api.vercel.app/api/duas/protection')
duas = response.json()

for dua in duas:
    print(f"{dua['reference']}: {dua['translation']}")

# Get specific dua
response = requests.get('https://quranfi-dua-api.vercel.app/api/uas/protection/1')
dua = response.json()
print(dua['arabic'])`,
    },
    {
      title: 'Node.js',
      language: 'javascript',
      code: `const axios = require('axios');

// Get all duas
axios.get('https://quranfi-dua-api.vercel.app/api/duas/forgive')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// With async/await
async function fetchDuas() {
  try {
    const { data } = await axios.get('https://quranfi-dua-api.vercel.app/api/duas/rabbanas');
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`,
    },
    {
      title: 'cURL',
      language: 'bash',
      code: `# Get all duas in a category
curl https://quranfi-dua-api.vercel.app/api/duas/protection

# Get specific dua by ID
curl https://quranfi-dua-api.vercel.app/api/duas/protection/1

# Pretty print with jq
curl https://quranfi-dua-api.vercel.app/api/duas/rabbanas | jq`,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Code Examples
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Ready-to-use code snippets in your favorite programming language
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 mb-12 border border-blue-200 dark:border-blue-800">
          <div>
            <h3 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-100">Quick Tip</h3>
            <p className="text-blue-800 dark:text-blue-200">
              Replace <code className="bg-white/50 dark:bg-black/30 px-2 py-1 rounded font-mono text-sm">your-api.vercel.app</code> with your actual Vercel deployment URL after deploying your API.
            </p>
          </div>
        </div>

        {/* Language Tabs */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-gray-700'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="ml-4 text-sm text-gray-500 font-mono">
                  {examples[activeTab].language}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(examples[activeTab].code, activeTab)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all font-medium"
              >
                {copiedIndex === activeTab ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{examples[activeTab].code}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Integrate duas into your Islamic mobile applications with React Native, Flutter, or native iOS/Android.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Web Applications</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build beautiful web apps with React, Vue, Angular, or any JavaScript framework of your choice.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Bots & Automation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create Telegram bots, Discord bots, or automated reminder systems using Python or Node.js.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Steps */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Integration in 3 Steps</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Choose Your Endpoint</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Select from <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">protection</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">forgive</code>, or <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600 dark:text-blue-400">rabbanas</code> categories.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Make the API Call</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use your preferred HTTP client (fetch, axios, requests, etc.) to call the API endpoint.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Display the Data</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Parse the JSON response and display the Arabic text, translation, and transliteration in your UI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need More Details?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check out the full API documentation for endpoint details and response schemas
            </p>
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
            >
              View Full Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
