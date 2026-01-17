# Stage 1: Build the Docusaurus site
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
# The package.json script "build" runs "docusaurus build && mv build dist", so the output will be in /app/dist
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the build output from the builder stage to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
