

// Components/LoginComponent.tsx
"use client";

import React, { useCallback } from "react";
import { toast } from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
const LoginComponent: React.FC = () => {
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google token not found`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success("Verified Success");
      console.log(verifyGoogleToken);

      if (verifyGoogleToken)
        window.localStorage.setItem("__twitter_token", verifyGoogleToken);
    },
    []
  );
   
 

  return <GoogleLogin onSuccess={handleLoginWithGoogle} />;
};

export default LoginComponent;
// import { useQueryClient } from "@tanstack/react-query";
// import { useCurrentUser } from "@/hooks/user";
//import {QueryClientProvider,QueryClient, useQueries} from '@tanstack/react-query'
// const {user}=useCurrentUser()
   // const queryClient=useQueryClient()
    // console.log(user)
    // await queryClient.invalidateQueries()