import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD7Zj504AzAb4GM7V4F1togTlQOC3TYPAQ',
  authDomain: 'choosenbuild-0.firebaseapp.com',
  projectId: 'choosenbuild-0',  storageBucket: "choosenbuild-0.firebasestorage.app",
  messagingSenderId: "551556403422",
  appId: "1:551556403422:web:d605035ecfd40e1568324f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);