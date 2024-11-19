import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth.context';
import FirebaseUI from '../../../components/firebaseUI/FirebaseUI';

function Auth() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to home if logged in
    }
  }, [isLoggedIn, navigate]);

  return <FirebaseUI />;
}

export default Auth;
