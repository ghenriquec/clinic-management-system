 #!/bin/bash

# Navegar para o diretório do projeto
cd "$(dirname "$0")"

# Criar as pastas necessárias, se não existirem
mkdir -p src/pages/login
mkdir -p src/pages/register
mkdir -p src/pages/forgot-password
mkdir -p src/pages/reset-password
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/styles

# Mover arquivos de página específica para suas respectivas pastas em 'pages'
mv src/app/login/page.tsx src/pages/login/index.tsx
mv src/app/register/page.tsx src/pages/register/index.tsx
mv src/app/forgot-password/page.tsx src/pages/forgot-password/index.tsx
mv src/app/reset-password/page.tsx src/pages/reset-password/index.tsx

# Mover CSS global, se necessário
mv src/app/globals.css src/styles/globals.css

# Remover diretórios antigos vazios
find src/app -type d -empty -delete

# Mensagem de conclusão
echo "Reestruturação completada com sucesso!"

# Fim do script
