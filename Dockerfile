FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY . .

RUN chmod +x entrypoint.sh

RUN npm install -g reg-suit

RUN npm install
