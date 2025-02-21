# Usa una imagen de Apache ligera sin PHP
FROM httpd:2.4

# Copia los archivos de la web al directorio de Apache
COPY ./ /usr/local/apache2/htdocs/

# Exponer el puerto 80 (HTTP)
EXPOSE 8080

# No necesitas comandos adicionales, Apache ya ejecuta el servidor por defecto