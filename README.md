# app-turismo

# Integrantes
- Roberth Pincha
- Luis Jacome
- Jose Luis Colcha
- Wendy Palomo
- Carlos Quel

## Link del sitio web

https://app-turismo-69e7a.web.app/login

## Respaldo de datos

Base de datos de la aplicacion: https://docs.google.com/spreadsheets/d/1iQDjReTgCaiq6roTmAqBUdID6ZTh0AMVZ_Jy0SiuLfc/edit?usp=sharing

1. Se procede a respaldar la información ingresada en una hoja de cálculo de Google mediante el plugin Data Browser que provee Googlesheets.
[![Captura-de-pantalla-2022-07-17-184717.png](https://i.postimg.cc/yN0zgW55/Captura-de-pantalla-2022-07-17-184717.png)](https://postimg.cc/8FkYxkTB)

2. Luego se inicia la extensión.

[![Captura-de-pantalla-2022-07-17-185611.png](https://i.postimg.cc/BQy62LYQ/Captura-de-pantalla-2022-07-17-185611.png)](https://postimg.cc/WhGTv3cQ)

3. Paso siguiente se genera una conección en firestore con nuestras credenciales.

[![Captura-de-pantalla-2022-07-17-191932.png](https://i.postimg.cc/N0024q8Q/Captura-de-pantalla-2022-07-17-191932.png)](https://postimg.cc/3kPw8qbq)

4. Paso siguiente se un query colocando la id del proyecto realizado en firebase y seleccionando los campos y documentos deseados.

[![Captura-de-pantalla-2022-07-17-192452.png](https://i.postimg.cc/qMvvCXp3/Captura-de-pantalla-2022-07-17-192452.png)](https://postimg.cc/qgWTPKhJ)

5. Se verifica los usuarios creados.

[![Captura-de-pantalla-2022-07-17-192904.png](https://i.postimg.cc/WbdtH6xP/Captura-de-pantalla-2022-07-17-192904.png)](https://postimg.cc/qzdktnkm)

### Documento de Bibliotecas
De igual forma se realiza con cada una de las categorías como las Bibliotecas, hoteles,etc.

[![Captura-de-pantalla-2022-07-17-193634.png](https://i.postimg.cc/268CBhW6/Captura-de-pantalla-2022-07-17-193634.png)](https://postimg.cc/KKV66KJS)

### Documento de Hoteles

[![Captura-de-pantalla-2022-07-17-193938.png](https://i.postimg.cc/6Q1bn69d/Captura-de-pantalla-2022-07-17-193938.png)](https://postimg.cc/GBGj1CT2)


# Manual de instalación de Ionic

Esto es un manual para instalar el ambiente de desarrallo de ionic, ionic está sobre la plataforma NodeJS por lo tanto es necesaria instalar dicha herramienta, esta cuenta con la ventaja de ser multiplataforma (Windows, linux, iOs).

Para descargar los instaladores aquí está el link.

http://nodejs.org/



La herramienta que se utiliza para el desarrollo es ionic framework, para la instalación del mismo aqui esta la documentación:

http://ionicframework.com/docs/guide/installation.html

para poder agregarle la plataforma es necesario instalar cordova, para ello corremos el comando:

    sudo npm install -g cordova
    o en windows
    npm install -g cordova

Es necesario  tener instalado el SDK de android, aqui un buen tuturial para hacerlo: http://www.androidcentral.com/installing-android-sdk-windows-mac-and-linux-tutorial

ionic pide la como mínimo SDK platform API 21, instalar el SDK de la version de android que sea igual a la del dispositivo. osea que hay que instalarla corriendo el comando android en consola y seleccionando el paquete para instalarlo.

    si no se puede ejecutar el comando javac -version es necesario instalarlo, para ello correr el siguiente comando : sudo apt-get install default-jdk, también instalar ant con el sig. comando: sudo apt-get -u install ant

despues de instalar el android correr el siguiente comando dentro de la carpeta raiz del proyecto

    ionic platform android

    cuando crean un proyecto tiene que agregarle la plataforma y los plugins

para agregar los plugins correr lo siguiente línea por línea.

    ionic plugin add org.apache.cordova.console
    ionic plugin add org.apache.cordova.device
    cordova plugin add org.apache.cordova.splashscreen

Para poder correr el proyecto en el dispositivo tienen quen tener instalado el ADB de android para que les pueda compilar el apk.

si quieren leer las instrucciónes que uds mandan a consola correr el siguiente comando: 
* adb logcat Cordova DroidGap:D CordovaLog:D *:S

# Funcionalidad

Una empresa desea implementar una aplicación para fomentar el turismo en Quito, la empresa al levantar los requerimientos se percata que necesita cumplir los siguientes requerimientos:

- La aplicación debe ser realizada en ionic para poder generar una versión de iOS, android y web.
- La aplicación debe registrar sitios turísiticos, de comida, parques, iglesias, restaurantes, etc.
basada en geolocalización.
- La aplicación debe permitir el ingreso de detalles y características de dichos sitios.
- La aplicación debe permitir el acceso de 3 perfiles, uno de usuario turista, un usuario propietario
o encargado del sitio turístico y un usuario administrador general.

![image](https://user-images.githubusercontent.com/58041699/179435926-b771337c-e117-4ba8-830b-8b4ef2d61d13.png)

* Almacenamiento:

![image](https://user-images.githubusercontent.com/58041699/179436858-c34d506c-683b-444d-bec4-46fbb5251b02.png)



# Roles

- Admin

La aplicacion maneja 3 tipos de usuarios, los cuales desenpeñan ciertas acciones para administrar la app. El usario con rol Administrador es el usuario base de esta aplicacion puesto que este usuario maneja la creacion de los Sitios turisticos en base a las categorias y por cada sitio creado por el administrador, puede asignar algun usuario encargado para gestionar la informacion de ese sitio.



-Encargado 
informacion
-Turista
informacion

![image](https://user-images.githubusercontent.com/58041699/179436047-b38c9b35-a462-4a7d-82b2-87cb2bc773c4.png)


#Generar la aplicacion en entornos de celulares

![image](https://user-images.githubusercontent.com/58041699/179435746-851d97a7-0906-4885-999d-939ca93c4920.png)

![image](https://user-images.githubusercontent.com/58041699/179435779-1b9f633f-b4c0-4252-8ad9-7e0752f9f8a8.png)

# Probando la app en los dispositivos moviles

