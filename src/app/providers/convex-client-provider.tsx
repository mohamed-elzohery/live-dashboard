"use client";
import React, { PropsWithChildren } from "react";
import {
  ClerkProvider,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
  ConvexReactClient,
  AuthLoading,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import Loader from "@/components/ui/loader/Loader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const ConvexClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loader />
        </AuthLoading>
        <Unauthenticated>
          <h1>This is for unauthintacted Users</h1>
          <SignInButton />
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
