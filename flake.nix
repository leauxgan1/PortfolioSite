{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
		flake-utils.lib.eachDefaultSystem (system:
			let
				pkgs = nixpkgs.legacyPackages.${system};
			in
			{
				devShells.default = pkgs.mkShell {
					packages = with pkgs; [
						nodejs_20
						bun
						yarn
						git
						jq
						astro-language-server
						
						# Add specific Node packages from nixpkgs
						# nodePackages.typescript
						# nodePackages.typescript-language-server
						# nodePackages.prettier
						# nodePackages.nodemon
					];
					shellHook = ''
            echo "🚀 Next.js Development Environment"
            echo "Bun: $(bun --version)"
            echo "Yarn: $(yarn --version)"
            
            if [ ! -d "node_modules" ]; then
              echo "⚠️  No node_modules found. Run 'yarn install' to set up dependencies."
            fi
          '';
				};

			}
		);
}
