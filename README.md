# ghost-automated-tests
Este repositorio tendrá almacenados los artefactos generados de las pruebas automatizadas de la aplicación Ghost

### Autores del trabajo
* Marisela Del Valle: m.delvallem@uniandes.edu.co
* Pilar Guataquira: j.guataquira@uniandes.edu.co

### Funcionalidades seleccionadas - Entrega pruebas E2E
* F01: Inicio de sesión para usuario registrado en la aplicación
* F02: Cierre de sesión del usuario que se encuentra loggeado en la aplicación
* F03: Hacer ajustes en el diseño del Blog
* F04: Creación de posts para mostrar en el sitio
* F05: Eliminación de posts

### Escenarios de prueba - Entrega pruebas E2E
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

### Ejecución de pruebas con kraken - Entrega pruebas E2E
1. Ingresar al directorio pruebas-kraken
2. Modificar el archivo Gemfile, y en la cuarta línea modificar el path para que tenga la ruta correspondiente al proyecto KrakenMobile
3. Para ejecutar todas las pruebas de manera exitosa, se deben modificar los archivos feature/*.feature colocando: las credenciales (correo y contraseña) de un usuario existente en la base de datos de la aplicación Ghost, y la url correspondiente a la aplicación Ghost
4. La aplicación Ghost debe estar ejecutándose
5. Para ejecutar f03-change_blog_design de manera exitosa debe existir al menos una opción de navegación primaria existente
6. Para ejecutar f05-delete_post de manera exitosa debe existir al menos un post publicado y al menos un post en modo borrador (draft)
7. Ejecutar kraken-mobile run para correr las pruebas

### Ejecución de pruebas con Cypress - Entrega pruebas E2E
1. Abra Cypres y para iniciar el proceso elija la carpeta pruebas-cypress
2. Cypres le cargará los archivos y tendrá acceso a la carpeta integration\examples
3. Dentro de esta carpeta identifique los archivos denominados ghost_F0X_testing.js. Cada uno de estos archivos contiene las pruebas de los dos escenarios para cada una de las funcionalidades, por ejemplo, el archivo denominado ghost_F01_testing.js contiene las pruebas para los dos escenarios de la Funcionalidad 01 (Inicio de sesión para usuario registrado en la aplicación).
4. Antes de correr cada prueba, deberá modificar cada uno de los archivos de las pruebas colocando las credenciales de acceso a Ghost (e-mail y password), deberá tener la aplicación corriendo y validar el puerto localhost en el que corre su aplicación (de ser necesario, ajústelo también antes de correr cada prueba)
5. Para iniciar la ejecución de las pruebas, dé clic en cada uno de los archivos mencionados en el punto 3. Tenga en cuenta que solo puede correr un test a la vez, el que haya seleccionado
6. La prueba comenzará a correr y le mostrará el resultado
7. Si muestra error, pause la prueba y vuelva a correrla
NOTA: Para ejecutar ghost_F05_testing.js de manera exitosa debe existir al menos un post publicado (Published) y al menos un post en modo borrador (Draft)


### Funcionalidades seleccionadas - Entrega pruebas VRT
* F06: Edición de correo del usuario loggeado en la aplicación
* F07: Edición de contraseña del usuario loggeado en la aplicación
* F08: Creación de tags para posts del sitio
* F09: Edición de tags para posts del sitio
* F10: Invitación de usuarios para que colaboren en la gestión del sitio

### Escenarios de prueba - Entrega pruebas VRT
* Escenario 1 para F06: Ingresar un correo con formato inválido (sin @) - no permite modificar
* Escenario 2 para F06: Ingresar un correo con formato inválido (sin xx.xx despues del @)  - no permite modificar
* Escenario 3 para F06: Ingresar un correo con formato válido - debe permitir modificar
* Escenario 4 para F06: Ingresar un correo con formato válido - al cerrar sesión debe poder ingresar con el nuevo correo 
* Escenario 1 para F07: Ingresar contraseña actual equivocada - no permite modificar
* Escenario 2 para F07: Ingresar verificación de contraseña equivocada - no permite modificar
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

### Ejecución de todas las pruebas con Cypress - Entrega pruebas VRT
* Ambas aplicaciones de ghost deben estar corriendo para ejecutar las pruebas
* Se recomienda tener al menos 3 posts creados publicados y 3 posts creados en draft para asegurar el correcto funcionamiento de las pruebas
* Para la ejecución de todas las pruebas se debe hacer a través de la interfaz de cypress
* Debe modificar el archivo cypress.json con sus credenciales para ingresar a la aplicación ghost y la url de la versión que desea probar (ejemplo: http://localhost:2370)
* Las pruebas se deben ejecutar en orden consecutivo (de la 1 a la 10)

### Ejecución de VRT Cypress y generación de reporte de comparación de imágenes con resembleJS - Entrega pruebas VRT
* Debe tener instalado cypress en la consola. Si no lo tiene instalado, posiciónese en el directorio pruebas-cypress y ejecute el siguiente comando: npm install cypress --save-dev
* Una vez se posicione en el directorio pruebas-cypress, verá un archivo run-tests.sh. Éste es un bash script que se encarga de ejecutar las pruebas. Dentro de él debe modificar las urls de ghost (ejemplo: http://localhost:2370), la primera línea para la versión antigua de la aplicación y la segunda línea para la version 3.3. También debe modificar las variables con su usuario y contraseña para ingresar a la aplicación. Finalmente, asegúrese que cypress se ejecuta en el directorio correcto. Si acaba de instalar cypress en el directorio del proyecto, no debe modificar nada. De lo contrario, debe modificar esta parte "node_modules/cypress/bin/cypress" por la ruta en donde usted tenga instalado cypress.
* Ambas aplicaciones de ghost deben estar corriendo para ejecutar las pruebas
* Para correr las pruebas, debe ejecutar: bash run-tests.sh
* Se recomienda tener al menos 3 posts creados publicados y 3 posts creados en draft para asegurar el correcto funcionamiento de las pruebas
* Si falla(n) algun(os) de los escenarios para F06, asegúrese que puede ingresar con su correo. De lo contrario, debe restaurar su correo al que ha manejado siempre intentando hacer login con alguno de los siguientes correos, usando su contraseña habitual:
    * correovalido1@correo.com
    * correovalido2@correo.com
    * Finalmente, ejecute las pruebas nuevamente.
* Si falla(n) algun(os) de los escenarios para F07, asegúrese que puede ingresar con su contraseña. De lo contrario, debe restaurar su contraseña ingresando con la contraseña " Mari1234** ". Ejecute las pruebas nuevamente
* Asegúrese de tener disponible el puerto 3000 ya que será utilizado para levantar el server que genera el reporte

### Pros y Contras de ResembleJS
* Pros
    * Es una herramienta sencilla que permite comparar imágenes que correspondan a capturas de pantalla de dos versiones de una aplicación de forma automatizada
    * Permite realizar de manera más eficiente y rápida la comparación entre las imágenes, en comparación a como podría hacerlo un ser humano
* Contras
    * La comparación se hace pixel por pixel, por lo que podría encontrar diferencias que corresponda a mejoras en UI o a texto que pueda ser dinámico dependiendo de la persona que se encuentre interactuando con la aplicación
    * Necesita de intervención humana para determinar si hay diferencias entre las imágenes que no necesariamente puedan corresponder a errores


## Pruebas con generación de datos
* Adicional a los pasos ya mencionados previamente, se debe ejecutar `npm install` de manera que se instale la librería faker

### Estrategia utilizadas para la generación de datos
* A-priori: para esto se aprovechan los fixtures de Cypress. Se crea un archivo `passwordDataApriori` que contiene data de distintos tipos para el ingreso de contraseña. En la prueba `ghost_F07_testing.spec` se generan 10 escenarios con datos de este archivo.
* Data-pool: se definen sets de datos en for loops generados de forma aleatoria con la librería Faker. Se ejecutan escenarios para cada uno de estos sets generados. Se distribuyen de la siguiente forma:
    * F01: se generan 5 escenarios
    * F03: se generan 5 escenarios
    * F04: se generan 20 escenarios
* Escenarios aleatorios: se definen for loops para los escenarios en los que se desea generar datos antes de ser utilizados con la librería Faker. Se distribuyen de la siguiente forma:
    * F01: se generan 10 escenarios
    * F06: se generan 15 escenarios


## Issues reportados para la aplicación Ghost
Los issues reportados se encuentran en este mismo repositorio, en la sección Issues (https://github.com/maridelvalle15/ghost-automated-tests/issues)
