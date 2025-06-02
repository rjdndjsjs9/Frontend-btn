FROM node:20

# Set working directory
WORKDIR /app

# Copy backend files dari app/backend ke dalam container
COPY app/backend/ ./

# Install dependencies
RUN npm install

# Jalankan aplikasi
CMD ["npm", "start"]
