# Full-stack Sign-in template

A flexible, full-stack Sign-in component that works seamlessly with modern authentication providers including Better Auth, Supabase, Clerk, and Firebase. The component dynamically displays configured OAuth providers and supports email/password authentication.

## Features

- **Multi-provider support**: Works with Better Auth, Supabase, Clerk, and Firebase
- **Dynamic OAuth providers**: Automatically displays configured OAuth providers (Google, GitHub, Facebook, etc.)
- **Flexible configuration**: Customize which authentication methods to show
- **Email/password authentication**: Built-in form validation and error handling
- **Forgot password**: Integrated password reset functionality
- **Customizable**: Easy to integrate with your existing authentication setup

## Installation

1. Copy the `sign-in-fullstack` folder into your project, or one of the [example projects](https://github.com/mui/material-ui/tree/master/examples).

2. Install dependencies (if not already installed):
   ```bash
   npm install @mui/material @mui/icons-material
   ```

3. Import and use the `FullStackSignIn` component.

## Usage

### Basic Usage

```tsx
import FullStackSignIn from './sign-in-fullstack/FullStackSignIn';

function App() {
  return <FullStackSignIn />;
}
```

### With Better Auth

```tsx
import FullStackSignIn from './sign-in-fullstack/FullStackSignIn';
import { betterAuth } from 'better-auth/react';

function App() {
  const handleOAuth = async (provider: string) => {
    await betterAuth.signIn.social({
      provider: provider as 'google' | 'github',
      callbackURL: '/dashboard',
    });
  };

  const handleSubmit = async (email: string, password: string) => {
    await betterAuth.signIn.email({
      email,
      password,
    });
  };

  return (
    <FullStackSignIn
      authProvider="better-auth"
      onSubmit={handleSubmit}
      oauthProviders={[
        {
          id: 'google',
          name: 'Google',
          onClick: () => handleOAuth('google'),
        },
        {
          id: 'github',
          name: 'GitHub',
          onClick: () => handleOAuth('github'),
        },
      ]}
    />
  );
}
```

### With Supabase

```tsx
import FullStackSignIn from './sign-in-fullstack/FullStackSignIn';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function App() {
  const handleOAuth = async (provider: string) => {
    await supabase.auth.signInWithOAuth({
      provider: provider as 'google' | 'github',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  const handleSubmit = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <FullStackSignIn
      authProvider="supabase"
      onSubmit={handleSubmit}
      oauthProviders={[
        {
          id: 'google',
          name: 'Google',
          onClick: () => handleOAuth('google'),
        },
      ]}
    />
  );
}
```

### With Clerk

```tsx
import FullStackSignIn from './sign-in-fullstack/FullStackSignIn';
import { useSignIn } from '@clerk/nextjs';

function App() {
  const { signIn } = useSignIn();

  const handleOAuth = async (provider: string) => {
    await signIn?.authenticateWithRedirect({
      strategy: `oauth_${provider}`,
      redirectUrl: '/dashboard',
      redirectUrlComplete: '/dashboard',
    });
  };

  const handleSubmit = async (email: string, password: string) => {
    await signIn?.create({
      identifier: email,
      password,
    });
  };

  return (
    <FullStackSignIn
      authProvider="clerk"
      onSubmit={handleSubmit}
      oauthProviders={[
        {
          id: 'google',
          name: 'Google',
          onClick: () => handleOAuth('google'),
        },
      ]}
    />
  );
}
```

### With Firebase

```tsx
import FullStackSignIn from './sign-in-fullstack/FullStackSignIn';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const handleOAuth = async (provider: string) => {
    if (provider === 'google') {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    }
  };

  const handleSubmit = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <FullStackSignIn
      authProvider="firebase"
      onSubmit={handleSubmit}
      oauthProviders={[
        {
          id: 'google',
          name: 'Google',
          onClick: () => handleOAuth('google'),
        },
      ]}
    />
  );
}
```

### Custom OAuth Providers

You can also provide custom OAuth providers:

```tsx
<FullStackSignIn
  oauthProviders={[
    {
      id: 'custom-provider',
      name: 'Custom Provider',
      icon: <CustomIcon />,
      color: '#FF5733',
      onClick: async () => {
        // Your custom OAuth logic
      },
    },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `authProvider` | `'better-auth' \| 'supabase' \| 'clerk' \| 'firebase'` | - | The authentication provider being used |
| `oauthProviders` | `OAuthProvider[]` | - | List of OAuth providers to display |
| `onSubmit` | `(email: string, password: string) => void \| Promise<void>` | - | Callback when email/password form is submitted |
| `onForgotPassword` | `() => void` | - | Callback when forgot password is clicked |
| `showEmailPassword` | `boolean` | `true` | Whether to show the email/password form |
| `showOAuthProviders` | `boolean` | `true` | Whether to show the OAuth providers section |
| `disableCustomTheme` | `boolean` | - | Custom theme configuration |
| `signUpUrl` | `string` | `'/material-ui/getting-started/templates/sign-up/'` | Sign up link URL |
| `showRememberMe` | `boolean` | `true` | Whether to show remember me checkbox |

## OAuth Provider Interface

```tsx
interface OAuthProvider {
  id: string;
  name: string;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void | Promise<void>;
}
```

## Examples

View the demo at https://mui.com/material-ui/getting-started/templates/sign-in-fullstack/.

## Related

- [Sign-in template](./sign-in/) - Basic sign-in template
- [Sign-in side template](./sign-in-side/) - Two-column sign-in template
- [Sign-up template](./sign-up/) - Sign-up template

