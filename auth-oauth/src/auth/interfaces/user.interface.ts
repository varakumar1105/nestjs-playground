export interface User {
  email: string; // User's email address
  firstName?: string; // User's first name (optional, e.g., for Google)
  lastName?: string; // User's last name (optional, e.g., for Google)
  username?: string; // User's username (optional, e.g., for GitHub)
  picture?: string; // URL to the user's profile picture
  accessToken: string; // OAuth access token
  refreshToken?: string; // OAuth refresh token (optional)
}
