import sql from "mssql";

const dbSettings = {
  user: "sa",
  password: "SanBartolo2022",
  server: "38.43.154.178", // Agregar el nombre de la instancia después de la dirección IP
  database: "SistemaIntegralMunicipal",
  options: {
    encrypt: false, // Cambia a true si necesitas cifrado SSL
    trustServerCertificate: true, // Cambia a false si no confías en el certificado del servidor
  }
};




export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    console.log('DB Online');
    return pool;
    
  } catch (error) {
    console.error(error);
  }
};

