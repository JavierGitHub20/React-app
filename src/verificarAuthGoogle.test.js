// firebase.test.js
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

const firebaseTestConfig = {
  apiKey: "fake-api-key",
  authDomain: "localhost", 
  projectId: "leakplanting", 
  storageBucket: "fake-storage-bucket",
  messagingSenderId: "fake-messaging-sender-id",
  appId: "fake-app-id"
};

// Inicia la app y las conexiones
const app = initializeApp(firebaseTestConfig);

export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const db = getFirestore(app);
connectFirestoreEmulator(db, "localhost", 8080);

// Test
test("verificar que setCustomParameters se llama correctamente", () => {
  const spy = jest.spyOn(googleProvider, "setCustomParameters");

  // Llamamos a setCustomParameters
  googleProvider.setCustomParameters({ prompt: "select_account" });

  // Verificamos que se haya llamado correctamente
  expect(spy).toHaveBeenCalledWith({ prompt: "select_account" });

  spy.mockRestore();
});
