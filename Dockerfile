# Stage 1 - Build Frontend (Next.js)
FROM node:20 AS builder

WORKDIR /app

# Salin file frontend
COPY package*.json ./
COPY . .

# Install deps dan build Next.js
RUN npm install
RUN npm run build

# Stage 2 - Production image
FROM node:20

# Install tools tambahan
RUN apt-get update && apt-get install -y ffmpeg git unzip && apt-get clean

# Set workdir
WORKDIR /app

# Copy hasil build dari stage sebelumnya
COPY --from=builder /app ./

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Kembali ke direktori root
WORKDIR /app

# Ekspos port Next.js (3000) dan backend (kalau perlu)
EXPOSE 3000

# Jalankan server frontend
CMD ["npm", "start"]
