FROM node:18 


WORKDIR /app/backend COPY backend/package*.json ./ 


RUN npm install 


COPY backend . 


ENV PORT=1000 


EXPOSE 1000 




CMD ["node", "index.js"]
