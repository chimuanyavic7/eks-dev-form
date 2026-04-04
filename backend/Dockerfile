# Stage 1: Install production dependencies
FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json ./

# Install only production dependencies
RUN npm install --omit=dev

# ========================

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy only node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy app source code
COPY . .

EXPOSE 3500

# Use your actual entry file (you used index.js earlier!)
CMD ["node", "index.js"]