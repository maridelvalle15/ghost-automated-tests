# ghost-automated-tests
Este repositorio tendrá almacenados los artefactos generados de las pruebas automatizadas de la aplicación Ghost

### Autores del trabajo
* Marisela Del Valle: m.delvallem@uniandes.edu.co
* Pilar Guataquira: j.guataquira@uniandes.edu.co

### Funcionalidades seleccionadas y casos de prueba
* F01: Inicio de sesión para usuario registrado en la aplicación
* F02: Cierre de sesión del usuario que se encuentra loggeado en la aplicación
* F03: Crear nuevas opciones de navegación del sitio
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
3. Para ejecutar todas las pruebas de manera exitosa, se deben modificar los archivos feature/*.feature colocando las credenciales (correo y contraseña) de un usuario existente en la base de datos de la aplicación Ghost
4. Para ejecutar f03-change_blog_design de manera exitosa debe existir al menos una opción de navegación primaria existente
5. Para ejecutar f05-delete_post de manera exitosa debe existir al menos un post publicado y al menos un post en modo borrador (draft)
3. Ejecutar kraken-mobile run para correr las pruebas
