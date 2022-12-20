FROM node:12-alpine
# 일반 알파인은 경량화로 인한 npm install 불가능
RUN apk add --no-cache python3 g++ make
# RUN: 도커 이미지가 생성되기 전에 수행할 쉘 명령어
WORKDIR /app
COPY . .
# /app 디렉토리에서 작업 COPY (source) (dist)
RUN yarn install --production
CMD ["node", "src/index.js"]
#컨테이너 내에서 실행, 도커 파일 내에서 한번만 사용 가능