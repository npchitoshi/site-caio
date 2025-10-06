# Imagem base com Node LTS
FROM node:24-alpine3.21

# Definir diretório de trabalho
WORKDIR /app

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat

# Copiar apenas package.json e lockfile p/ cache de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o projeto
COPY . .

# Expor a porta do Next.js
EXPOSE 3000

# Comando default -> modo dev (hot reload)
CMD ["npm", "run", "dev"]