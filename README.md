# ghost-automated-tests
Este repositorio tendrá almacenados los artefactos generados de las pruebas automatizadas de la aplicación Ghost

### Autores del trabajo
* Marisela Del Valle: m.delvallem@uniandes.edu.co
* Pilar Guataquira: j.guataquira@uniandes.edu.co

### Funcionalidades seleccionadas y casos de prueba
* F01: Inicio de sesión para usuario registrado en la aplicación
* F02: Cierre de sesión del usuario que se encuentra loggeado en la aplicación
* F03: Hacer ajustes en el diseño del Blog
* F04: Creación de posts para mostrar en el sitio
* F05: Eliminación de posts

### Escenarios de prueba
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

### Ejecución de pruebas con kraken
1. Ingresar al directorio pruebas-kraken
2. Modificar el archivo Gemfile, y en la cuarta línea modificar el path para que tenga la ruta correspondiente al proyecto KrakenMobile
3. Para ejecutar todas las pruebas de manera exitosa, se deben modificar los archivos feature/*.feature colocando: las credenciales (correo y contraseña) de un usuario existente en la base de datos de la aplicación Ghost, y la url correspondiente a la aplicación Ghost
4. La aplicación Ghost debe estar ejecutándose
5. Para ejecutar f03-change_blog_design de manera exitosa debe existir al menos una opción de navegación primaria existente
6. Para ejecutar f05-delete_post de manera exitosa debe existir al menos un post publicado y al menos un post en modo borrador (draft)
7. Ejecutar kraken-mobile run para correr las pruebas

### Ejecución de pruebas con Cypress
1. Abra Cypres y para iniciar el proceso elija la carpeta pruebas-cypress
2. Cypres le cargará los archivos y tendrá acceso a la carpeta integration\examples
3. Dentro de esta carpeta identifique los archivos denominados ghost_F0X_testing.js. Cada uno de estos archivos contiene las pruebas de los dos escenarios para cada una de las funcionalidades, por ejemplo, el archivo denominado ghost_F01_testing.js contiene las pruebas para los dos escenarios de la Funcionalidad 01 (Inicio de sesión para usuario registrado en la aplicación).
4. Antes de correr cada prueba, deberá modificar cada uno de los archivos de las pruebas colocando las credenciales de acceso a Ghost (e-mail y password), deberá tener la aplicación corriendo y validar el puerto localhost en el que corre su aplicación (de ser necesario, ajústelo también antes de correr cada prueba)
5. Para iniciar la ejecución de las pruebas, dé clic en cada uno de los archivos mencionados en el punto 3. Tenga en cuenta que solo puede correr un test a la vez, el que haya seleccionado
6. La prueba comenzará a correr y le mostrará el resultado
7. Si muestra error, pause la prueba y vuelva a correrla
NOTA: Para ejecutar ghost_F05_testing.js de manera exitosa debe existir al menos un post publicado (Published) y al menos un post en modo borrador (Draft)
