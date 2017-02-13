Meteor.methods({
  parseUpload( data ) {
    check( data, Array );

    for ( let i = 0; i < data.length; i++ ) {
      let item   = data[ i ],
          exists = Sales.findOne( { file: item.file } );

      if ( !exists ) {
        Sales.insert( data[ i ] );
      } else {
        console.warn( 'Rejected. This item already exists.' );
      }
    }
  }
});
