const {Command, flags} = require('@oclif/command')
const getPutS3PresignedUrl = require('./get-put-s3-presigned-url')
const uploadFileToS3 = require('./upload-file-to-s3')
const {cli} = require('cli-ux')

class UploadFileToS3Command extends Command {
  async run() {
    const {flags} = this.parse(UploadFileToS3Command)
    if (flags['generate-put-url']) {
      cli.action.start(`Generating pre-signed url for uploading ${flags['file-name']} to S3`)
      await cli.wait(500)
      const url = await getPutS3PresignedUrl(
        flags['bucket-name'],
        flags['file-name'],
        flags.region,
      )
      cli.action.stop('generated')
      cli.annotation(url, `pre-signed url to upload file with name, ${flags['file-name']}`)
      return
    }

    cli.action.start(`Uploading ${flags['file-path']} to S3`)
    const resp = await uploadFileToS3(flags.url, flags['file-path'])
    await cli.wait(500)
    if (resp.status === 200) {
      cli.action.stop('uploaded')
      return
    }
    cli.action.stop('error')
  }
}

UploadFileToS3Command.description = `To upload file to S3

1. As an AWS account owner, I will want to generate a pre-signed URL
   so that I can pass to my team members to upload file to my S3 bucket

   i.e. upload-file-to-s3 -p -n=<file name> -b=<S3 bucket name>

2. As a user, I will want to use the generated pre-signed URL to upload
   my data into the S3 bucket

  i.e. upload-file-to-s3 -u=<pre-signed URL> -f=<file path>
`

UploadFileToS3Command.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  region: flags.string({
    char: 'r',
    default: 'ap-southeast-1',
    description: 'aws region i.e. ap-southeast-1',
  }),
  'bucket-name': flags.string({
    char: 'b',
    default: 'ap-southeast-1',
    description: 'aws s3 bucket name',
  }),
  'generate-put-url': flags.boolean({
    char: 'p',
    exclusive: ['url', 'file-path'],
    dependsOn: ['bucket-name', 'file-name'],
    description: 'generate pre-signed url to upload file',
  }),
  url: flags.string(
    {
      char: 'u',
      description: 'pre-signed url to upload file',
      dependsOn: ['file-path'],
    }
  ),
  'file-path': flags.string({char: 'f', description: 'location of the file to be uploaded, /usr/home/image.png'}),
  'file-name': flags.string({char: 'n', description: 'name of the file to be uploaded, image.png'}),
}

module.exports = UploadFileToS3Command
