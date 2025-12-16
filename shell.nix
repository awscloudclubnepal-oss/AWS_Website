{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # The packages you want in your environment
  packages = [
    pkgs.nodejs_20  # Node.js 20 is the current Active LTS (Iron)
    pkgs.pnpm       # This installs pnpm specifically
  ];

  # Optional: Run this command when you enter the shell
  shellHook = ''
    echo "Welcome to your Node.js $(node --version) dev environment!"
  '';
}
