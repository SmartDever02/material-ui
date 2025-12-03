import * as React from 'react';
import { GoogleIcon, FacebookIcon, GitHubIcon } from './CustomIcons';

/**
 * Helper functions for different authentication providers
 */

/**
 * Get OAuth providers for Better Auth
 */
export function getBetterAuthProviders(providers, onProviderClick) {
  const providerMap = {
    google: {
      id: 'google',
      name: 'Google',
      icon: <GoogleIcon />,
      color: '#4285F4',
      onClick: () => onProviderClick('google'),
    },
    facebook: {
      id: 'facebook',
      name: 'Facebook',
      icon: <FacebookIcon />,
      color: '#1877F2',
      onClick: () => onProviderClick('facebook'),
    },
    github: {
      id: 'github',
      name: 'GitHub',
      icon: <GitHubIcon />,
      color: '#24292e',
      onClick: () => onProviderClick('github'),
    },
  };

  return providers
    .map((provider) => providerMap[provider.toLowerCase()])
    .filter((provider) => provider !== undefined);
}

/**
 * Get OAuth providers for Supabase
 */
export function getSupabaseProviders(providers, onProviderClick) {
  // Supabase uses similar provider structure
  return getBetterAuthProviders(providers, onProviderClick);
}

/**
 * Get OAuth providers for Clerk
 */
export function getClerkProviders(providers, onProviderClick) {
  // Clerk uses similar provider structure
  return getBetterAuthProviders(providers, onProviderClick);
}

/**
 * Get OAuth providers for Firebase
 */
export function getFirebaseProviders(providers, onProviderClick) {
  // Firebase uses similar provider structure
  return getBetterAuthProviders(providers, onProviderClick);
}

/**
 * Get OAuth providers based on auth provider type
 */
export function getOAuthProviders(authProvider, configuredProviders, onProviderClick) {
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

