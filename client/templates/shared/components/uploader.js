let tpl = Template.uploader;

// Reactivividad significa actualizacion en tiempo real
// Un diccionario reactivo es basicamente una variable que se
// Esta actualizando en tiempo real conforme recibe datos del servidor
let state = new ReactiveDict();
let data;

// Inicializa datos compartidos con los miembros de este
// Procedimiento (variables locales)
tpl.onCreated ( function () {
  this.state = state;
  data = this.data;
} );

function onThenCallback ( err, res ) {
  // Recibe el ID de la nueva imagen en la base de datos
  // Redirecciona a la ruta correspondiente, pasando el ID
  // Del nuevo documento creado (documentos en Mongo === filas en SQL)
  Router.go( 'auth.image.edit', { id: res } );
}

function onSuccess ( res ) {
  state.set( 'error', false );
  state.set( 'uploading', false );

  // Llamamos el metodo de Meteor con el nombre que le pasamos mediante
  // El template
  Meteor.call( data.then, res, onThenCallback );
}

function onError ( err ) {
  state.set( 'error', { reason: err.error.message } );
  state.set( 'uploading', false );
}

function onUpload ( err, res ) {
  state.set( 'error', undefined );
  if ( err ) return onError( err );

  return onSuccess( res );
}

function upload ( files ) {
  state.set( 'uploading', true );
  Cloudinary.upload( files, onUpload );
}

// Asigna eventos al template
tpl.events ( {
  'change .e-file' ( event, instance ) {
    // Obtenemos una referencia al archivo seleccionado
    let files = event.target.files;
    if ( files && files.length ) upload( event.target.files );
  }
} );
