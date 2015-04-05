

Arduino + Servo-moteur + node.js + Johnny-five 
========================================================

contrôle d'un servo-moteur via l'interface web:


## Installation 

```
git clone git@github.com:manuel-CQE/Servomoteur.git
cd Servomoteur
npm install
```

Modules utilsés

* johnny-five
* express
* socket.io
* serialport




Connexion de l'Arduino via USB, chargez via l'API d'Arduino **Example > Firmdata > StandandFirmData**

## Execution de l'application

```
node app.js
```
l'application établie un connexion avec l'Arduino
le Servo-moteur s'initialise


## utilisation via votre navigateur : 

```
localhost:3000
```
l'application vous envoie une page web avec un curseur et l'affichage de l'angle


# branchement du Servo-moteur sur l'Arduino:

L'alimentation du servo-moteur sur +5V et GND de l'arduino, et le fil pilote sur le pin 9 (PWM)
