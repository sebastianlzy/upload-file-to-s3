const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('upload-file-to-s3', () => {
  test
  .stdout()
  .do(() => cmd.run(['-p', '-n=test.png', '-b=my-test-bucket']))
  .it('generate presigned url', ctx => {
    expect(ctx.stdout).to.contain('this-is-a-test-pre-signed-url')
  })

  test
  .stdout()
  .do(() => cmd.run(['-u=test-pre-signed/url.com', '-f=/usr/home/test.png']))
  .it('upload file to s3', ctx => (
    expect(ctx.stdout).to.be.empty
  ))
})
