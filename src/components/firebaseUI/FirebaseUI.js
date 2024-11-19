import React, { useEffect } from 'react';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

import { useAuth } from '../../context/auth.context';
import { auth } from '../../config/firebase.config';
import firebase from 'firebase/compat/app';
import style from './FirebaseUI.module.css';

const FirebaseUI = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      // Initialize FirebaseUI
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

      ui.start('#firebaseui-auth-container', {
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      });
    }
  }, [user]);

  return (
    <div className={style.authContainer}>
      {user ? (
        <h3>Welcome, {user.displayName || user.email}</h3>
      ) : (
        <>
          <div id="firebaseui-auth-container"></div>
        </>
      )}
    </div>
  );
};

export default FirebaseUI;
