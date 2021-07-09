upload-file-to-s3
=================

upload file to s3

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/upload-file-to-s3.svg)](https://npmjs.org/package/upload-file-to-s3)
[![Downloads/week](https://img.shields.io/npm/dw/upload-file-to-s3.svg)](https://npmjs.org/package/upload-file-to-s3)
[![License](https://img.shields.io/npm/l/upload-file-to-s3.svg)](https://github.com/sebastianlzy/upload-file-to-s3/blob/master/package.json)

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
```

## Upload file to S3 using a pre-signed URL
 ```
 > upload-file-to-s3 -u="<pre-signed URL>" -f="<file path>"
 ```
