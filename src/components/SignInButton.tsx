'use client';

import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';
import { Button } from './ui/Button';
import { toast } from './ui/toast';

interface SignInButtonProps {
  className?: string;
   disabled ?: boolean;
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () =>  {
    setIsLoading(true);
    try {
        await signIn('google')
    } catch(error) {
         toast({
            title: 'Error signing in',
            message: 'Please try again later',
            type: 'error'
            
         })
    }
  }
  return <Button onClick={signInWithGoogle} isLoading={isLoading}>
   Coming soon
  </Button>
};

export default SignInButton;