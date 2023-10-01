
// Funcion encargada de Enviar los Datos.

function EnviarDatos(){

    //Se obtienen los valores ingresados en cada campo.

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fecha = document.getElementById("fecha").value;

  //Se genera un objeto que contiene los datos a enviar.

  const datos = { Nombre: nombre, Apellido: apellido, FechaDeNacimiento: fecha};

  // Función fetch para enviar los datos.

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(datos),
})
    .then((response) => response.json())
    .then((data) => {
              
      console.log(JSON.stringify(data)); //Una vez enviados los datos, se genera un console.log para mostrar lo enviado en Consola.
      alert("Datos enviados con exito ! Verifique la consola para observar el resultado.");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
};



// Oyente de eventos que desencadena el envío de datos al hacer 'click' en el botón "Enviar".

document.getElementById("enviarBtn").addEventListener('click', function(){
    EnviarDatos();
})



