# obraz 
FROM node:18

# Create app directory
# WORKDIR /folderek

# kopiowanie tego jsona co z <$ npm init> powstał
COPY package*.json ./

# wykonanie lokalnej instalacji wszystkiego co w .json
RUN npm install

# skopiowanie wszystkiego w directory
# COPY . .
COPY app.js ./

# changed from 3000
EXPOSE 8080
CMD ["node", "app.js"]


# żeby utorzyć obraz
# docker build -t pierwszy_obraz .

# żeby uruchomić obraz
# docker run -p 3000:3000 -t drugi_obraz
# docker run -p 3000:3000 -t drugi_obraz
# docker run -p 3000:3000 -t trzeci_obraz-230310

# 230310-1410_huh