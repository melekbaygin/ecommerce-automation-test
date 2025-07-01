# Temel Maven ve JDK imajı
FROM maven:3.9.5-jdk-11-slim

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
COPY drivers ./drivers

RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    xvfb \
    libglib2.0-0 \
    libnss3 \
    libnspr4 \
    libfontconfig1 \
    libgconf-2-4 \
    libxss1 \
    libappindicator1 \
    libindicator7 \
    fonts-liberation \
    xdg-utils \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Chrome yükleme
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y google-chrome-stable

# Firefox yükleme (Opsiyonel)
RUN wget -O /tmp/firefox.tar.bz2 "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US" \
    && tar -jxvf /tmp/firefox.tar.bz2 -C /opt/ \
    && ln -s /opt/firefox/firefox /usr/local/bin/firefox \
    && rm /tmp/firefox.tar.bz2

# Allure Commandline'ı yüklemek için
ENV ALLURE_VERSION 2.27.0
RUN wget -qO /tmp/allure-commandline.zip https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/$ALLURE_VERSION/allure-commandline-$ALLURE_VERSION.zip \
    && unzip /tmp/allure-commandline.zip -d /opt/ \
    && rm /tmp/allure-commandline.zip \
    && ln -s /opt/allure-$ALLURE_VERSION/bin/allure /usr/local/bin/allure

CMD ["mvn", "test"]
