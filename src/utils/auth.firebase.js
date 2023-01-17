import { toast } from 'react-toastify';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from 'firebase/auth';

import firebaseApp from '../config/firebase';

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(firebaseApp);

