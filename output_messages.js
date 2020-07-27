module.exports = output_messages = {

  presentation: `
  \x1b[34mwelcome to 
  json-server-data-generator\x1b[0m

  \x1b[1m\x1b[4mWhat you wanna do? (start, add, help)\x1b[0m
  Actual version 0.1
  
`,
  boilerplate_starterd: `
  \x1b[1m\x1b[32mBoilerplate started!\x1b[0m
  you can run add entity to insert your database entity
`,
  run_add: `
  \x1b[1mNow you can run \x1b[4madd\x1b[0m\x1b[1m to start inserting your entities\x1b[0m

`,
  override_warning: `
  \x1b[31mData Generator detect!\x1b[0m
  you can override the entities in this scope.
`,
  missing_generate: `
  \x1b[31mData Generator isn't started yet!\x1b[0m
  please run start to create the boilerplate code to start use data-generator

  missing generate.js file!
`,
  missing_entities: `
\x1b[31mData Generator isn't started yet!\x1b[0m
please run start to create the boilerplate code to start use data-generator

missing entities.js file!
`,
  unrecognized_command: `
  \x1b[31mUnrecognized\x1b[0m command
  type  \x1b[1m\x1b[4mhelp\x1b[0m, if you wanna see the list of the commands
`,
  add_missing_parameters: `
\x1b[31mMiss parameters\x1b[0m in command

\x1b[1mAdd entity command\x1b[0m: add entity \x1b[1m'entity name' 'desired quantity of rows'\x1b[0m
\x1b[32mExample:\x1b[0m \x1b[1madd entity Cars 32\x1b[0m
`,
  add_unrecognized_command: (res) => `
  \x1b[31mUnrecognized\x1b[0m command \x1b[1m\x1b[4madd ${res.split(' ')[1]}\x1b[0m
  Add commands:
  > add entity
  > add property
`,
  add_commands: `
\x1b[34m\x1b[1mAdd commands:\x1b[0m

> add \x1b[1mentity\x1b[0m
> add \x1b[1mproperty\x1b[0m
`,
  help_commands: (command) => `
  > ${command}`,
  help_command_string: (commandsString) => `
  \x1b[1mCommands list:\x1b[0m
`+ commandsString + `
`

}