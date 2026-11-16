# Usa a imagem leve do Nginx baseada em Alpine Linux
FROM nginx:alpine

# Copia os arquivos da aplicação para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80 para acesso web
EXPOSE 80

# Inicia o servidor Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]