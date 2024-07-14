// Components/LoginButton.tsx
"use client";

import React from 'react';
import { GoogleLogin ,CredentialResponse } from '@react-oauth/google';

interface LoginButtonProps {
    onSuccess: (response: CredentialResponse) => void;
  }
  
  const LoginButton: React.FC<LoginButtonProps> = ({ onSuccess }) => {
    const handleLoginFailure = (error: any) => {
      console.log('Login Failure:', error);
    };

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            
        />
    );
};

export default LoginButton;
