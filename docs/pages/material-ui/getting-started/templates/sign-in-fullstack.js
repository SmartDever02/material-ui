import * as React from 'react';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import MarkdownElement from 'docs/src/components/MarkdownElement';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppFrame from 'docs/src/components/AppFrame';
import FullStackSignIn from 'docs/data/material/getting-started/templates/sign-in-fullstack/FullStackSignIn';

export default function SignInFullStack() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="Full-stack Sign-in template - Material-UI"
        description="A flexible, full-stack Sign-in component that works seamlessly with modern authentication providers including Better Auth, Supabase, Clerk, and Firebase."
      />
      <AppHeader />
      <AppFrame>
        <FullStackSignIn />
      </AppFrame>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}

