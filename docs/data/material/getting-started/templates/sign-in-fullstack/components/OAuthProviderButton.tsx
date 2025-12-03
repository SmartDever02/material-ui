import * as React from 'react';
import Button from '@mui/material/Button';
import { OAuthProvider } from '../types';

interface OAuthProviderButtonProps {
  provider: OAuthProvider;
  fullWidth?: boolean;
}

export default function OAuthProviderButton({
  provider,
  fullWidth = true,
}: OAuthProviderButtonProps) {
  const handleClick = async () => {
    if (provider.onClick) {
      await provider.onClick();
    }
  };

  return (
    <Button
      fullWidth={fullWidth}
      variant="outlined"
      onClick={handleClick}
      startIcon={provider.icon}
      sx={{
        ...(provider.color && {
          borderColor: provider.color,
          color: provider.color,
          '&:hover': {
            borderColor: provider.color,
            backgroundColor: `${provider.color}08`,
          },
        }),
      }}
    >
      Sign in with {provider.name}
    </Button>
  );
}

