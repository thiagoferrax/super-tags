# Use a more recent version of Node.js
FROM node:22-alpine

# Install global dependencies
RUN npm install -g turbo

# Set the working directory
WORKDIR /project

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Default command
CMD ["npm", "run", "dev"]