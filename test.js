
const axios = require('axios');

async function runTest() {
  try {
    const response = await axios.get('http://localhost:8080/status');
    if (response.status === 200 && response.data.status === 'ok') {
      console.log('Test passed!');
      process.exit(0);
    } else {
      console.error('Test failed: Unexpected response', response.data);
      process.exit(1);
    }
  } catch (error) {
    console.error('Test failed:', error.message);
    process.exit(1);
  }
}

runTest();
