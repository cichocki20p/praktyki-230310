# obraz 
FROM node:18

# Create app directory
WORKDIR /folderek

# kopiowanie tego jsona co z <$ npm init> powstał
COPY package*.json ./

RUN npm install

# skopiowanie wszystkiego w directory
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]


# żeby utorzyć obraz
# docker build -t pierwszy_obraz .

# żeby uruchomić obraz
# docker run -p 3000:3000 -t drugi_obraz
# docker run -p 3000:3000 -t drugi_obraz
# docker run -p 3000:3000 -t trzeci_obraz-230310