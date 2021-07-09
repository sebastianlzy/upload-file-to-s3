const {Command, flags} = require('@oclif/command')

class UploadFileToS3Command extends Command {
  async run() {
    const {flags} = this.parse(UploadFileToS3Command)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.js`)
  }
}

UploadFileToS3Command.description = `Describe the command here
...
Extra documentation goes here
`

UploadFileToS3Command.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = UploadFileToS3Command
