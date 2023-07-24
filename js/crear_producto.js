// Obtener referencia al formulario
const formulario = document.querySelector('.formulario-login_form');

// Escuchar el evento submit del formulario
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

  // Obtener los valores ingresados por el usuario
  const nombre = formulario.querySelector('[data-form-producto-nombre]').value;
  const precio = formulario.querySelector('[data-form-producto-precio]').value;
  const categoria = formulario.querySelector('[data-form-producto-categoria]').value;
  const descripcion = formulario.querySelector('[data-form-producto-descripcion]').value;

  // Aquí puedes realizar una llamada a una API o guardar los datos en una base de datos
  // Por simplicidad, simularemos que el producto se creó exitosamente
  const nuevoProducto = {
    nombre,
    precio,
    categoria,
    descripcion
  };

  // Mostrar un mensaje de éxito usando SweetAlert2
  Swal.fire({
    icon: 'success',
    title: 'Producto creado exitosamente',
    text: `El producto "${nombre}" ha sido agregado.`,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    // Aquí podrías redireccionar al usuario a otra página o realizar otras acciones
    // Por simplicidad, simplemente refrescaremos la página para mostrar el producto agregado
    location.reload();
  });
});