Booking App Demo
🇪🇸 Descripción del Proyecto
Booking App Demo es una aplicación full-stack diseñada para la gestión eficiente de reservas de consultorios. Permite a los usuarios registrarse, visualizar disponibilidad y realizar reservas, mientras que los administradores cuentan con un panel dedicado para gestionar turnos, realizar reportes, backups y configurar precios de forma dinámica.

Arquitectura Técnica
La aplicación sigue un flujo de datos reactivo utilizando el ecosistema de Google Cloud:
Frontend: 
    Desarrollado en React con Vite y estilizado con Tailwind CSS.
    Autenticación: Gestión de usuarios mediante Firebase Auth (Google Provider).Base de Datos: 
    Firestore para persistencia de datos en tiempo real.Backend: 
    Firebase Cloud Functions (2nd Gen) para lógica compleja, automatización de correos, generación de reportes en Excel y backups.
    
🇺🇸 Project Description
Booking App Demo is a full-stack application designed for efficient clinic/office appointment management. It enables users to sign up, view availability, and make bookings, while administrators have a dedicated dashboard to manage appointments, generate reports, perform backups, and dynamically configure pricing.
Technical ArchitectureThe application follows a reactive data flow using the Google Cloud ecosystem:
    Frontend: Built with React and Vite, styled with Tailwind CSS.Authentication: 
    User management handled by Firebase Auth (Google Provider).Database: 
    Firestore for real-time data persistence.Backend: 
    Firebase Cloud Functions (2nd Gen) for complex backend logic, automated email notifications, Excel report generation, and automated backups.

🛠 Dependencias Principales / Main Dependencies
DependenciaUso / Purpose
firebaseSDK para Auth y Firestore en el cliente.
firebase-adminGestión de privilegios y operaciones de backend.
firebase-functionsEjecución de lógica de servidor (serveless).
nodemailerEnvío de correos electrónicos desde el backend.
exceljsGeneración de reportes dinámicos en formato Excel.
react-router-domEnrutamiento de la aplicación (HashRouter).
date-fnsManipulación y formateo de fechas.

🚀 Instalación y Despliegue / Setup & Deployment
Clonar el repositorio:

Bash
git clone https://github.com/DanielNoblero/booking-app-demo.git
Instalar dependencias:

Bash
npm install
cd functions && npm install
Configuración de Firebase:
Crea un archivo .env en la raíz con tus credenciales de Firebase.

Despliegue:

Bash
npm run deploy
💡 Flujo de Trabajo / Workflow
El usuario se autentica vía Firebase Auth.

Firestore dispara listeners en tiempo real para mostrar disponibilidad.

Al realizar una reserva, se invoca una Cloud Function que valida la lógica, actualiza la base de datos y dispara notificaciones.