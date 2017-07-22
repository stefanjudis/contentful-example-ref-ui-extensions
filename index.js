const cli = require( 'contentful-extension-cli' );
const inquirer = require( 'inquirer' );
const { readFileSync } = require( 'fs' );
const { version, config } = require( './package.json' );

async function init() {
  try {
    // const options = await inquirer.prompt( config.questions );
    const client = cli.createClient ( {
      spaceId     : '',
      accessToken : ''
    } );

    const savedExtension = await client.save( {
      id: config.id,
      name: config.name,
      fieldTypes: config.fieldTypes,
      srcdoc: readFileSync( './index.html', { encoding: 'utf8' } ),
      version: 11
    } )

    console.dir( savedExtension, 6 );
  } catch( error ) {
    console.error( error );
    process.exit( 1 );
  }
}

init();


