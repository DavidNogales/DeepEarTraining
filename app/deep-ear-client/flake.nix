{
  description = "AstroJS dev environment flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    nixvim = {
      url = "github:nix-community/nixvim";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, nixvim }:
  let 
    pkgs = nixpkgs.legacyPackages."x86_64-linux";
    nvim = nixvim.legacyPackages.x86_64-linux.makeNixvim {
      plugins.lsp.enable = true;
      plugins.lsp.servers.astro.enable = true; 
    };   
  in
  {
    devShells."x86_64-linux".default = pkgs.mkShell {
      packages = [pkgs.bun pkgs.astro-language-server pkgs.nodejs_23];
      buildInputs = [nvim];
    };
  };
}
