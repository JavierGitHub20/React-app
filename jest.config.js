module.exports = {
  collectCoverage: true, // Habilita la recolección de cobertura
  collectCoverageFrom: [
    "src/**/*.{js,ts,tsx}",  // Incluir todos los archivos de src para la cobertura
    "!src/**/*.test.{js,ts,tsx}"  // Excluir los archivos de prueba
  ],
  coverageDirectory: "./coverage", // Carpeta donde se guardará el reporte
  coverageReporters: ["text", "lcov", "html"], // Tipos de reportes generados
  testEnvironment: "jsdom",  // Usa el entorno adecuado para React
  coveragePathIgnorePatterns: [
    "/node_modules/",        // Excluir todo lo que esté en node_modules
    "/jest.config.js"        // Excluir el archivo de configuración de Jest
  ],
  testMatch: [
    "**/src/__tests__/**/*.test.{js,ts,tsx}", // Asegúrate de que Jest encuentre tus pruebas
  ],
  silent: true, // Evita los logs de consola
};

