const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
require('dotenv').config()


const getS3URL = async (bucketName, fileName) => {
  const client = new S3Client({ region: "us-east-1" });
  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName
  });
  try {
    const url = await getSignedUrl(client, command, { expiresIn: 3600 });
    console.log(url)
    return url
  } catch (e) {
    console.error(e)
  }

}

module.exports = getS3URL


