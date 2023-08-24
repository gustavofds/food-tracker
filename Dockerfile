FROM node:18.17.0

WORKDIR /usr/src/food-tracker/api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
