{
  description = "A very basic flake";

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [nodejs_20 yarn];

      shellHook = ''
        echo "node `${pkgs.nodejs_20}/bin/node --version`"
      '';
    };
  };
}
