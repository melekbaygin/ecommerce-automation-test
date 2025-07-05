# Use a Node.js base image for the client application
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install Node.js dependencies
RUN npm install
RUN apk add --no-cache curl

# Copy the rest of the application files
COPY . .

# Expose the port Vite typically runs on
EXPOSE 5173

# Command to start the development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
