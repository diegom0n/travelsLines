const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configurar el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'noreply.travelslines@gmail.com',
    pass: 'travelslines1234',
  },
});

// Ruta para enviar el correo electrónico
app.post('/api/send-email', (req, res) => {
  const {
    nombre,
    apellido,
    fechaNacimiento,
    correoElectronico,
    telefono,
    aceptarCondiciones,
    sistemaOperativo,
    disponibilidadHoraria,
    direccion,
    region,
    comuna,
    genero,
    tipoVehiculo,
    estudiandoActualmente,
  } = req.body;

  // Configurar el correo electrónico
  const mailOptions = {
    from: 'noreply.travelslines@gmail.com',
    to: 'diegofuentesol14@gmail.com',
    subject: 'Nueva solicitud de trabajo',
    text: `
      Nombre: ${nombre}
      Apellido: ${apellido}
      Fecha de Nacimiento: ${fechaNacimiento}
      Correo Electrónico: ${correoElectronico}
      Teléfono: ${telefono}
      Aceptar Condiciones: ${aceptarCondiciones}
      Sistema Operativo: ${sistemaOperativo}
      Disponibilidad Horaria: ${disponibilidadHoraria}
      Dirección: ${direccion}
      Región: ${region}
      Comuna: ${comuna}
      Género: ${genero}
      Tipo de Vehículo: ${tipoVehiculo}
      Estudiando Actualmente: ${estudiandoActualmente}
    `,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Ocurrió un error al enviar la solicitud.');
    } else {
      console.log('Correo enviado correctamente');
      res.status(200).send('Solicitud enviada correctamente.');
    }
  });
});

// Iniciar el servidor
const port = 3001; // Puerto en el que se ejecutará el servidor
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
