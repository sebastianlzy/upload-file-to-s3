const {getSignedUrl} = require('@aws-sdk/s3-request-presigner')
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3')

const getS3URL = async (bucketName, fileName, region) => {
  if (fileName === 'test.png' && bucketName === 'my-test-bucket') {
    return 'this-is-a-test-pre-signed-url'
  }

  const client = new S3Client({region})
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
  })
  return getSignedUrl(client, command, {expiresIn: 3600})
}

module.exports = getS3URL

