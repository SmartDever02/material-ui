import * as React from 'react';
import { AuthProvider, OAuthProvider } from '../types';
import { GoogleIcon, FacebookIcon, GitHubIcon } from './CustomIcons';

/**
 * Helper functions for different authentication providers
 */

/**
 * Get OAuth providers for Better Auth
 */
export function getBetterAuthProviders(
  providers: string[],
  onProviderClick: (provider: string) => void | Promise<void>,
): OAuthProvider[] {
  const providerMap: Record<string, OAuthProvider> = {
    google: {
      id: 'google',
      name: 'Google',
      icon: React.createElement(GoogleIcon),
      color: '#4285F4',
      onClick: () => onProviderClick('google'),
    },
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      icon: React.createElement(FacebookIcon),
      color: '#1877F2',
      onClick: () => onProviderClick('facebook'),
    },
    github: {
      id: 'github',
      name: 'GitHub',
      icon: React.createElement(GitHubIcon),
      color: '#24292e',
      onClick: () => onProviderClick('github'),
    },
  };

  return providers
    .map((provider) => providerMap[provider.toLowerCase()])
    .filter((provider): provider is OAuthProvider => provider !== undefined);
}

/**
 * Get OAuth providers for Supabase
 */
export function getSupabaseProviders(
  providers: string[],
  onProviderClick: (provider: string) => void | Promise<void>,
): OAuthProvider[] {
  // Supabase uses similar provider structure
  return getBetterAuthProviders(providers, onProviderClick);
}

/**
 * Get OAuth providers for Clerk
 */
export function getClerkProviders(
  providers: string[],
  onProviderClick: (provider: string) => void | Promise<void>,
): OAuthProvider[] {
  // Clerk uses similar provider structure
  return getBetterAuthProviders(providers, onProviderClick);
}

/**
 * Get OAuth providers for Firebase
 */
export function getFirebaseProviders(
  providers: string[],
  onProviderClick: (provider: string) => void | Promise<void>,
): OAuthProvider[] {
  // Firebase uses similar provider structure
  return getBetterAuthProviders(providers, onProviderClick);
}

/**
 * Get OAuth providers based on auth provider type
 */
export function getOAuthProviders(
  authProvider: AuthProvider,
  configuredProviders: string[],
  onProviderClick: (provider: string) => void | Promise<void>,
): OAuthProvider[] {
  switch (authProvider) {
    case 'better-auth':
      return getBetterAuthProviders(configuredProviders, onProviderClick);
    case 'supabase':
      return getSupabaseProviders(configuredProviders, onProviderClick);
    case 'clerk':
      return getClerkProviders(configuredProviders, onProviderClick);
    case 'firebase':
      return getFirebaseProviders(configuredProviders, onProviderClick);
    default:
      return [];
  }
}

