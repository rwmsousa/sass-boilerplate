FROM node:18-alpine
RUN mkdir -p /home/sass-boilerplate
COPY . ./sass-boilerplate

WORKDIR /sass-boilerplate

RUN npm install
# EXPOSE 3000
CMD ["npm", "run", "dev"]