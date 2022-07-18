# Aplicación de turismo realizada con Ionic-Angular y Firebase

# Integrantes
- Roberth Pincha
- Luis Jacome
- Jose Luis Colcha
- Wendy Palomo
- Carlos Quel

## Link del sitio web

https://app-turismo-69e7a.web.app/login

## Link del video funcional

https://youtu.be/31M0vj59Cho

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

Para la elaboracion de este proyecto se contaron con la colaboracion de recursos de terceros los cuales nos ofrecieron servicios de almacenamiento y host para la produccion de la aplicacion movil. Firebase es el elemento base de nuestro proyecto y en el cual usamos su servicio de almacenamiento para gestionar los registros que la aplicacion genera en tiempo real.

![image](https://user-images.githubusercontent.com/58041699/179436858-c34d506c-683b-444d-bec4-46fbb5251b02.png)

![image](https://user-images.githubusercontent.com/58041699/179436047-b38c9b35-a462-4a7d-82b2-87cb2bc773c4.png)

# Roles

- Admin

La aplicacion maneja 3 tipos de usuarios, los cuales desenpeñan ciertas acciones para administrar la app. El usario con rol Administrador es el usuario base de esta aplicacion puesto que este usuario maneja la creacion de los Sitios turisticos en base a las categorias y por cada sitio creado por el administrador, puede asignar algun usuario encargado para gestionar la informacion de ese sitio.

![image](https://user-images.githubusercontent.com/58041699/179439042-185d8864-0c30-4e67-9731-575a25254e89.png)

El usuario administrador contara con tres opciones para tratar la informacion de su perfil, el de otros usuarios y de los lugares que el genere.
![image](https://user-images.githubusercontent.com/58041699/179439079-3b878766-c6b4-4cba-b478-87be8c8cafb6.png)

El administrador puede generar los sitios y designar a un usuario encargado a gestionar la informacion de este sitio web.
![image](https://user-images.githubusercontent.com/58041699/179439172-b7b168bc-7479-4f14-8529-17e9049f5d30.png)

Otra funcionalidad importante que el usuario administrador puede hacer es gestionar a los usuarios y donde la tarea que destaca de esta accion es el de poder cambiar el rol de cada usuario, de esta forma un administrador puede controlar el acceso a ciertos usuarios.
![image](https://user-images.githubusercontent.com/58041699/179439351-783d2a5e-344d-42ca-959b-9a3a03f887b4.png)



- Encargado 
El usuario encargadi es un usuario que gestiona la informacion de los lugares que se le ha designado administrar. Por ello, solamente el puede cambiar los datos importante de un post. Este usuario puede ser un encargado del lugar o un propietario.

![image](https://user-images.githubusercontent.com/58041699/179439665-6ca6b078-dc55-4ec3-b741-1f14b392d2f0.png)


-Turista
Un usuario turista es un usuario fundamental que puede consultar en esta aplicacion sobre los lugares que esten registrados y  a su vez poder añadir a su lista de favoritos.

![image](https://user-images.githubusercontent.com/58041699/179440006-dc706b0a-5ca7-47f7-8e6c-777e37fc2d4e.png)

![image](https://user-images.githubusercontent.com/58041699/179440051-cd3a19ad-df6f-480f-9e2f-2e1f3c03428d.png)

![image](https://user-images.githubusercontent.com/58041699/179440076-8bb9bbc2-8b62-4b1e-9336-f506e3c1eab8.png)

#Generar la aplicacion en entornos de celulares

![image](https://user-images.githubusercontent.com/58041699/179435746-851d97a7-0906-4885-999d-939ca93c4920.png)

![image](https://user-images.githubusercontent.com/58041699/179435779-1b9f633f-b4c0-4252-8ad9-7e0752f9f8a8.png)

# Probando la app en los dispositivos moviles

# Pruebas en dispositivo Samsung Galaxy J6

Fotos como administrador:

![admin3](https://user-images.githubusercontent.com/58127103/179441449-d031bcaa-eb90-4677-90f9-56bc26a66dec.png)

![admin4](https://user-images.githubusercontent.com/58127103/179441523-ccef84db-a960-46ba-9f3d-0ca5146fc69b.png)

![admin5](https://user-images.githubusercontent.com/58127103/179441540-c1ef560e-775d-493b-8ce3-bcd3bae2bf28.png)

![admin](https://user-images.githubusercontent.com/58127103/179441397-89f79151-e63e-4381-849b-7f6f06b66d38.png)

![admin2](https://user-images.githubusercontent.com/58127103/179441419-5f8b6113-045b-49f7-a317-343fc0e5f814.png)

# Pruebas en dispositivo Samsung Galaxy J3

Fotos como turista:

![WhatsApp Image 2022-07-17 at 10 23 33 PM](https://user-images.githubusercontent.com/58041699/179441793-0cdfaccf-0e5d-4603-a8f2-8e49a43b827d.jpeg)

![WhatsApp Image 2022-07-17 at 10 24 24 PM](https://user-images.githubusercontent.com/58041699/179441813-8fc9ced1-2003-4f63-a828-d937d3e62743.jpeg)

![image](https://user-images.githubusercontent.com/58041699/179441831-ee3f85a9-617f-4ba8-9784-a9cebd3b6924.png)

![image](https://user-images.githubusercontent.com/58041699/179441841-845624d5-6f6f-47ee-ba72-ab52b6ddf498.png)

![image](https://user-images.githubusercontent.com/58041699/179441852-7cc0f407-e9b6-4bfc-aaac-95ec915c1cb0.png)

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
