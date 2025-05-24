# Gunakan image node
FROM node:20

# Set direktori kerja ke dalam container
WORKDIR /app

# Salin hanya folder backend ke dalam container
COPY backend/ ./

# Install dependensi
RUN npm install

# Jalankan aplikasi
CMD ["npm", "start"]
