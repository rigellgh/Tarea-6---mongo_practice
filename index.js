const connectDB = require('./config/db');
const User = require('./models/User');

// Conectar a la DB
connectDB();

// Operaciones
(async () => {
  try {
    // Crear usuario
    const newUser = await User.create({
      nombre: 'Rigel Ladrón de Guevara',
      email: 'rigelwebwangzhan@gmail.com',
      edad: 37
    });
    console.log('✅ Usuario creado:', newUser);

    // Obtener todos los usuarios
    const users = await User.find();
    console.log('📋 Lista de usuarios:', users);
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    mongoose.connection.close();
  }
})();