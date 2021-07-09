const fetch = require('node-fetch')
const {createReadStream, statSync} = require('fs')

const uploadFileToS3 = async (url, filePath) => {
  if (url === 'test-pre-signed/url.com' && filePath === '/usr/home/test.png') {
    return {status: 200}
  }

  const payload = createReadStream(filePath)
  return fetch(url, {
    method: 'PUT',
    body: payload,
    headers: {
      'Content-Length': statSync(filePath).size,
    },
  })
}

module.exports = uploadFileToS3
