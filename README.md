upload-file-to-s3
=================

upload file to s3

[![Version](https://img.shields.io/npm/v/upload-file-to-s3.svg)](https://npmjs.org/package/upload-file-to-s3)
[![Downloads/week](https://img.shields.io/npm/dw/upload-file-to-s3)](https://npmjs.org/package/upload-file-to-s3)
[![License](https://img.shields.io/npm/l/upload-file-to-s3)](https://github.com/sebastianlzy/upload-file-to-s3/blob/main/package.json)
[![Build](https://api.travis-ci.com/sebastianlzy/upload-file-to-s3.svg?branch=main&status=passed)](https://api.travis-ci.com/sebastianlzy/upload-file-to-s3.svg?branch=main&status=passed)
# Installation

```
npm install -g upload-file-to-s3
```

# Usage
1. As an AWS account owner, I will want to generate a pre-signed URL that I can pass to my team members to upload file to my S3 bucket
2. As a user, I will want to use the generated pre-signed URL to upload my data into the S3 bucket

# Commands

## Generate a pre-signed url to upload file to S3
```
  > upload-file-to-s3 -p -n=<file name> -b=<s3 bucket name>
  
  Generating pre-signed url for uploading image.png to S3... generated
  https://my-ecommerce.s3.ap-southeast-1.amazonaws.com/image.png?X-Amz-Algorithm=A.....
```

## Upload file to S3 using a pre-signed URL
 ```
 > upload-file-to-s3 -u="<pre-signed URL>" -f="<file path>"
 
 Uploading /usr/home/image.png to S3... uploaded
 ```
