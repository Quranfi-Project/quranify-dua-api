// Simple test script to verify API endpoints work
// Run with: node test-api.js <API_URL>
// Example: node test-api.js https://your-api.vercel.app

const baseUrl = process.argv[2] || 'http://localhost:3000';

console.log('🧪 Testing Quranify Dua API...');
console.log(`📍 Base URL: ${baseUrl}\n`);

async function testEndpoint(endpoint, description) {
  try {
    console.log(`Testing: ${description}`);
    console.log(`GET ${baseUrl}${endpoint}`);

    const response = await fetch(`${baseUrl}${endpoint}`);
    const data = await response.json();

    if (response.ok) {
      console.log(`✅ Success (${response.status})`);
      console.log(`📊 Result: ${JSON.stringify(data).substring(0, 100)}...\n`);
    } else {
      console.log(`❌ Failed (${response.status})`);
      console.log(`📊 Error: ${JSON.stringify(data)}\n`);
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}\n`);
  }
}

async function runTests() {
  await testEndpoint('/api', 'API Root');
  await testEndpoint('/api/duas/protection', 'All Protection Duas');
  await testEndpoint('/api/duas/protection/1', 'Single Protection Dua (ID: 1)');
  await testEndpoint('/api/duas/forgive', 'All Forgiveness Duas');
  await testEndpoint('/api/duas/rabbanas', 'All Rabbana Duas');
  await testEndpoint('/api/duas/invalid', 'Invalid Category (should fail)');
  await testEndpoint('/api/duas/protection/999', 'Invalid ID (should fail)');

  console.log('✨ Testing complete!');
}

runTests();
