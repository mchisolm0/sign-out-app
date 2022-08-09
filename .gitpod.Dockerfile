FROM gitpod/workspace-node:latest

RUN npm install -g expo-cli
RUN npm install -g @expo/ngrok@^4.1.0