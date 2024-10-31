FROM node:22.9.0-alpine3.19 AS constructor
USER node
WORKDIR /home/node/nest
COPY src /home/node/nest/src
COPY package.json /home/node/nest/package.json
COPY yarn.lock /home/node/nest/yarn.lock
COPY tsconfig.json /home/node/nest/tsconfig.json
COPY tsconfig.build.json /home/node/nest/tsconfig.build.json
RUN yarn install && yarn build && rm -rf node_modules && yarn install --production

FROM node:22.9.0-alpine3.19
USER node
WORKDIR /home/node/nest
COPY --from=constructor /home/node/nest/dist /home/node/nest/dist
COPY --from=constructor /home/node/nest/node_modules /home/node/nest/node_modules
COPY package.json /home/node/nest/package.json
COPY yarn.lock /home/node/nest/yarn.lock
CMD [ "yarn", "start:prod" ]