# Usar uma imagem leve do Node.js
FROM node:23
# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app
# Copiar os arquivos de dependências para o contêiner
COPY package.json ./
# Instalar as dependências
RUN npm install
# Copiar todos os arquivos do projeto para o contêiner
COPY . .
# Construir a versão otimizada da aplicação
# RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "dev"]