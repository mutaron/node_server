const bycrypt = require( 'bcrypt' );

bycrypt.genSalt( 10, (err,salt) => {
  if ( err ) return next( err );
  bycrypt.hash( '123456', salt, ( err, hash ) => {
    if ( err ) return next( err );
    console.log(hash)    
  } );
})