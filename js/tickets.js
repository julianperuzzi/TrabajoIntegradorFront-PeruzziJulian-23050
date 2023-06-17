
        // Obtener referencias a los elementos del formulario
        const nombreInput = document.getElementById('validationDefault01');
        const apellidoInput = document.getElementById('validationDefault02');
        const emailInput = document.getElementById('exampleFormControlInput1');
        const cantidadInput = document.getElementById('validationDefault03');
        const categoriaSelect = document.getElementById('specificSizeSelect');
        const resultadoOutput = document.getElementById('resultado');
      
        // Escuchar el evento click del botón "Resumen"
        const resumenButton = document.getElementById('resumen-button');
        resumenButton.addEventListener('click', mostrarResumen);
      
        // Función para mostrar el resumen en el elemento de salida y evitar la recarga de la página
        function mostrarResumen(event) {
          event.preventDefault(); // Evitar la recarga de la página
      
          const nombre = nombreInput.value;
          const apellido = apellidoInput.value;
          const email = emailInput.value;
          const cantidad = parseInt(cantidadInput.value);
          const categoria = categoriaSelect.value;
      
          let descuento = 0;
          if (categoria === '1') {
            descuento = 80;
          } else if (categoria === '2') {
            descuento = 50;
          } else if (categoria === '3') {
            descuento = 15;
          }
      
          const precioUnitario = 200;
          const total = (precioUnitario * cantidad * (100 - descuento)) / 100;
      
          resultadoOutput.textContent = total; // Mostrar el total en el elemento de salida
        }
  