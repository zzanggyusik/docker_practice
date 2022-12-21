FROM node:10

ADD ./sources.list /etc/apt/source.list
ADD ./run.script /data/
ADD ./init.script /data/
COPY package*.json /data/

RUN apt update && apt install -y python \
    python-dev \
    python-pip \
    git

RUN chmod +x /data/run.script
RUN chmod +x /data/init.script

WORKDIR /data/

RUN npm install && npm 
RUN /data/init.script

CMD ["npm", "start"]

VOLUME [VOLUME ["/Users/qsiik/Desktop/docker_practice/Second_task", "/data/"]]