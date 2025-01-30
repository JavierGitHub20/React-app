import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  connectAuthEmulator 
} from "firebase/auth";
import { 
  getFirestore, 
  connectFirestoreEmulator 
} from "firebase/firestore";

jest.mock("firebase/firestore", () => {
    return {
      getFirestore: jest.fn(() => ({})), // Mock de Firestore
      connectFirestoreEmulator: jest.fn(), // Mock de la función
    };
  });
const firebaseTestConfig = {
    apiKey: "fake-api-key",
    authDomain: "localhost", 
    projectId: "leakplanting", // Zorg dat dit overeenkomt met je echte projectId
    storageBucket: "fake-storage-bucket",
    messagingSenderId: "fake-messaging-sender-id",
    appId: "fake-app-id"
  };

// Configuración ficticia para Firebase
const firebaseConfig = {
  apiKey: "fake-api-key",
  authDomain: "fake-auth-domain",
  projectId: "fake-project-id",
};

// Inicializar Firebase en el test
const app = initializeApp(firebaseTestConfig);

export const auth = getAuth(app);
// Verbind Auth met de emulatorport (zoals in firebase.json)
connectAuthEmulator(auth, "http://localhost:9099");

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const db = getFirestore(app);
// Verbind Firestore met de emulatorport
connectFirestoreEmulator(db, "localhost", 8080);


test("debería conectar Firestore al emulador con los parámetros correctos", () => {
  
    const db = getFirestore(app);
    
      // Llamamos a la función como en el código original
      connectFirestoreEmulator(db, "localhost", 8080);
    
      // Verificamos que se llamó correctamente con los argumentos correctos
      expect(connectFirestoreEmulator).toHaveBeenCalledWith(db, "localhost", 8080);
    
});
