# ghost-automated-tests
Este repositorio tendrá almacenados los artefactos generados de las pruebas automatizadas de la aplicación Ghost

### Autores del trabajo
* Marisela Del Valle: m.delvallem@uniandes.edu.co
* Pilar Guataquira: j.guataquira@uniandes.edu.co

### Funcionalidades seleccionadas - E2E
* F01: Inicio de sesión para usuario registrado en la aplicación
* F02: Cierre de sesión del usuario que se encuentra loggeado en la aplicación
* F03: Hacer ajustes en el diseño del Blog
* F04: Creación de posts para mostrar en el sitio
* F05: Eliminación de posts

### Escenarios de prueba - E2E
* Escenario 1 para F01: Acceso autorizado o permitido para usuario registrado en la aplicación
* Escenario 2 para F01: Acceso denegado para usuario no registrado en la aplicación
* Escenario 1 para F02: Cierre de sesión exitoso para un usuario que estaba logueado
* Escenario 2 para F02: No acceso a la administración de la app cuando se cierra sesión
* Escenario 1 para F03: Publicación de nueva pestaña en el Blog
* Escenario 2 para F03: Eliminación de pestaña del blog
* Escenario 1 para F04: Creación de post con un título de 9 caracteres sin espacios
* Escenario 2 para F04: Creación de post con un título de 500 caracteres
* Escenario 1 para F05: Eliminación de un post publicado
* Escenario 2 para F05: Eliminación de un post que no está publicado

### Ejecución de pruebas con kraken - E2E
1. Ingresar al directorio pruebas-kraken
2. Modificar el archivo Gemfile, y en la cuarta línea modificar el path para que tenga la ruta correspondiente al proyecto KrakenMobile
3. Para ejecutar todas las pruebas de manera exitosa, se deben modificar los archivos feature/*.feature colocando: las credenciales (correo y contraseña) de un usuario existente en la base de datos de la aplicación Ghost, y la url correspondiente a la aplicación Ghost
4. La aplicación Ghost debe estar ejecutándose
5. Para ejecutar f03-change_blog_design de manera exitosa debe existir al menos una opción de navegación primaria existente
6. Para ejecutar f05-delete_post de manera exitosa debe existir al menos un post publicado y al menos un post en modo borrador (draft)
7. Ejecutar kraken-mobile run para correr las pruebas

### Ejecución de pruebas con Cypress - E2E
1. Abra Cypres y para iniciar el proceso elija la carpeta pruebas-cypress
2. Cypres le cargará los archivos y tendrá acceso a la carpeta integration\examples
3. Dentro de esta carpeta identifique los archivos denominados ghost_F0X_testing.js. Cada uno de estos archivos contiene las pruebas de los dos escenarios para cada una de las funcionalidades, por ejemplo, el archivo denominado ghost_F01_testing.js contiene las pruebas para los dos escenarios de la Funcionalidad 01 (Inicio de sesión para usuario registrado en la aplicación).
4. Antes de correr cada prueba, deberá modificar cada uno de los archivos de las pruebas colocando las credenciales de acceso a Ghost (e-mail y password), deberá tener la aplicación corriendo y validar el puerto localhost en el que corre su aplicación (de ser necesario, ajústelo también antes de correr cada prueba)
5. Para iniciar la ejecución de las pruebas, dé clic en cada uno de los archivos mencionados en el punto 3. Tenga en cuenta que solo puede correr un test a la vez, el que haya seleccionado
6. La prueba comenzará a correr y le mostrará el resultado
7. Si muestra error, pause la prueba y vuelva a correrla
NOTA: Para ejecutar ghost_F05_testing.js de manera exitosa debe existir al menos un post publicado (Published) y al menos un post en modo borrador (Draft)


### Funcionalidades seleccionadas - VRT
* F06: Edición de correo del usuario loggeado en la aplicación
* F07: Edición de contraseña del usuario loggeado en la aplicación
* F08: Creación de tags para posts del sitio
* F09: Edición de tags para posts del sitio
* F10: Invitación de usuarios para que colaboren en la gestión del sitio

### Escenarios de prueba - VRT
* Escenario 1 para F06: Ingresar un correo con formato inválido (sin @) - no permite modificar
* Escenario 2 para F06: Ingresar un correo con formato inválido (sin xx.xx despues del @)  - no permite modificar
* Escenario 3 para F06: Ingresar un correo con formato válido - debe permitir modificar
* Escenario 4 para F06: Ingresar un correo con formato válido - al cerrar sesión debe poder ingresar con el nuevo correo 
* Escenario 1 para F07: Ingresar contraseña de 8 caracteres - permite modificar
* Escenario 2 para F07: Ingresar contraseña con caracteres especiales - permite modificar
* Escenario 3 para F07: Ingresar contraseña alfanumérica de 10 caracteres - permite modificar
* Escenario 4 para F07: Ingresar contraseña alfanumérica de 10 caracteres - permite modificar y al cerrar sesión debe poder ingresar con la nueva contraseña
* Escenario 1 para F08: Crear una tag pública
* Escenario 2 para F08: Crear una tag sin nombre - no permite crear
* Escenario 3 para F08: Crear una tag interna
* Escenario 4 para F08: Crear una tag interna con un mismo nombre ya existente
* Escenario 1 para F09: Editar nombre de un tag
* Escenario 2 para F09: Borrar nombre de un tag creado y guardar - no permite guardar
* Escenario 3 para F09: Editar slug de un tag
* Escenario 4 para F09: Editar descripción de un tag
* Escenario 1 para F10: Invitar persona sin ingresar un email - no permite enviar invitación
* Escenario 2 para F10: Invitar persona con email inválido - no permite enviar invitación
* Escenario 3 para F10: Invitar persona con email válido - permite enviar invitación
* Escenario 4 para F10: Invitar persona con un mismo e-mail ya invitado - no permite enviar invitación

### Ejecución de pruebas con Cypress - VRT
Adicional a las instrucciones mencionadas para las pruebas E2E, tomar en cuenta lo siguiente:
* Si falla(s) alguno(s) de los escenarios para F06, asegúrese que puede ingresar con su correo. De lo contrario, debe restaurar su correo al que ha manejado siempre intentando hacer login con alguno de los siguientes correos, usando su contraseña habitual:
    * correovalido1@correo.com
    * correovalido2@correo.com
    * Finalmente, ejecute las pruebas nuevamente.