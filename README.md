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
* Esenario 1 para F01: Acceso autorizado o permitido para usuario registrado en la aplicación
* Esenario 2 para F01: Acceso denegado para usuario no registrado en la aplicación
* Esenario 1 para F02: Cierre de sesión exitoso para un usuario que estaba logueado
* Esenario 2 para F02: No acceso a la administración de la app cuando se cierra sesión
* Esenario 1 para F03: Publicaición de nueva pestaña en el Blog
* Esenario 2 para F03: Eliminación de pestaña del blog
* Esenario 1 para F04: Creación de post con un título de 9 caracteres sin espacios
* Esenario 2 para F04: Creación de post con un título de 500 caracteres sin espacio
* Esenario 1 para F05: Eliminación de un post publicado
* Esenario 2 para F05: Eliminación de un post que no está publicado

### Ejecución de pruebas con kraken
1- Ingresar al directorio pruebas-kraken
2- Modificar el archivo Gemfile, y en la cuarta línea modificar el path para que tenga la ruta correspondiente al proyecto KrakenMobile
3- Ejecutar kraken-mobile run para correr las pruebas