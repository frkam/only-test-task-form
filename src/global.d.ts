export {};

declare global {
  interface Window {
    PasswordCredential: any;
    FederatedCredential: any;
  }
  const PasswordCredential: any;
}
