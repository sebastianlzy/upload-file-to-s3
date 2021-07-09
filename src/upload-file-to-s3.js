const fetch = require('node-fetch')
const {createReadStream, statSync} = require('fs')

const uploadFileToS3 = async url => {
  // const url = process.env.URL //"https://my-private-bucket-sebastian-ecommerce.s3.us-east-1.amazonaws.com/mirxes-dataset.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIASUSTQ3VMFILZT2K7%2F20210707%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210707T100048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLWVhc3QtMSJGMEQCIE3vdgJGz9z5tfPwUl8rX0ynwnEhxCepMqZhYLvH33qZAiAirGA0M9mSIoo7TQTmS4l9NSl5EzW0Tlp3fEBcMMB3sCqfAghbEAAaDDE4MTYzNzUzNzExMiIM5MGmq6hNJ%2FbhbL98KvwBo2C2VG9%2BUIRKZGITmPJRhlEApKm%2BCxHoB0AKO5FhLY%2FkhMV57UMiqK2JbCJsiLWqY%2BLQGZGWVu73ZGUGmUqBu4p7mvOJ9Z7HZvnU6JtngG9i57OsqVba60yYmymUBnubxoQvxQJpuXhMc1MDh6ZisCwYT9S6ZKfZWvxF%2FeKwO10rfGPvCslCFYvhAHc%2FJ%2BvxGkSz2w%2FA9HJ7GDYskevwJ%2F4lAQCp%2FJy2rW5hjSlitmXU4iYx6MKbWXJvYwOgPNCWNDtTmrqjdYH2xXSOwT2Xs5MuC5p7GBD2TIHpN2EEuXO5V5UAuJVdSizu8XVuVglllOfLLOrnhjztTnZDMLj1lYcGOp4BK2pinD78C0JUDUf9KRn3BJ3X7CSDjUrq1ad2kEbJWVwNjR7nQ8VWF4gxRsB8et295CXlbnuAf240Iym%2FcvUXbHV%2BnOu7sCH7aRZYLygAD1xz3xHI%2Fgdhxn48wPgpvFM5uq9dlbuVSGFTCu6MdBXapyZLGwynp5kmdSS1NznC1BlENBEM5terjMHEiVpsxFfZo%2BKFTrYpCfabxeLbQY4%3D&X-Amz-Signature=00e1379494ad44d736021cef6cf369b3d183342792dd9c345ad34319e45ca944&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.18.0&x-id=PutObject"
  console.log(url)

  const filePath = process.env.FILE_PATH
  const payload = createReadStream(filePath)
  const response = await fetch(url, {
    method: 'PUT',
    body: payload,
    headers: {
      'Content-Length': statSync(filePath).size,
    },
  })

  console.log(response)
}

module.exports = uploadFileToS3
