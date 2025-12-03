/**
 * Supported authentication providers
 */
export type AuthProvider = 'better-auth' | 'supabase' | 'clerk' | 'firebase';

/**
 * OAuth provider configuration
 */
export interface OAuthProvider {
  id: string;
  name: string;
  icon?: React.ReactNode;
  color?: string;
  onClick?: () => void | Promise<void>;
}

/**
 * Full-stack Sign-in component props
 */
export interface FullStackSignInProps {
  /**
   * The authentication provider being used
   */
  authProvider?: AuthProvider;
  /**
   * List of OAuth providers to display
   */
  oauthProviders?: OAuthProvider[];
  /**
   * Callback when email/password form is submitted
   */
  onSubmit?: (email: string, password: string) => void | Promise<void>;
  /**
   * Callback when forgot password is clicked
   */
  onForgotPassword?: () => void;
  /**
   * Whether to show the email/password form
   * @default true
   */
  showEmailPassword?: boolean;
  /**
   * Whether to show the OAuth providers section
   * @default true
   */
  showOAuthProviders?: boolean;
  /**
   * Custom theme configuration
   */
  disableCustomTheme?: boolean;
  /**
   * Sign up link URL
   */
  signUpUrl?: string;
  /**
   * Whether to show remember me checkbox
   * @default true
   */
  showRememberMe?: boolean;
}

