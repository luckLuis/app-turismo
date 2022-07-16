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

