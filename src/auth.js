import { auth } from './base';

export const createUserEmailPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const signInEmailPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut();

export const passwordReset = (email) => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);