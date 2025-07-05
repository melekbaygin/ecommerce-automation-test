FROM openjdk:22-jdk-slim

# Maven'ı indirme ve PATH'e ekleme
ENV MAVEN_VERSION 3.9.6
ENV MAVEN_HOME /opt/maven
ENV PATH $MAVEN_HOME/bin:$PATH

# Temel sistem bağımlılıklarını kur
RUN apt-get update && apt-get install -y --no-install-recommends \
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
    gnupg \
    bzip2 \
    curl \
    fonts-liberation \
    xdg-utils && \
    rm -rf /var/lib/apt/lists/*

# Maven'ı yükle
RUN wget https://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz -P /tmp/ \
    && tar -xvf /tmp/apache-maven-$MAVEN_VERSION-bin.tar.gz -C /opt/ \
    && mv /opt/apache-maven-$MAVEN_VERSION $MAVEN_HOME \
    && rm /tmp/apache-maven-$MAVEN_VERSION-bin.tar.gz

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
# COPY drivers ./drivers

# Chrome yükleme
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

# Firefox ESR yükleme
RUN install -d -m 0755 /etc/apt/keyrings && \
    wget -q https://packages.mozilla.org/apt/repo-signing-key.gpg -O- | tee /etc/apt/keyrings/packages.mozilla.org.asc > /dev/null && \
    echo "deb [signed-by=/etc/apt/keyrings/packages.mozilla.org.asc] https://packages.mozilla.org/apt mozilla main" | tee -a /etc/apt/sources.list.d/mozilla.list > /dev/null && \
    echo 'Package: *' | tee /etc/apt/preferences.d/mozilla-firefox && \
    echo 'Pin: origin packages.mozilla.org' | tee -a /etc/apt/preferences.d/mozilla-firefox && \
    echo 'Pin-Priority: 1000' | tee -a /etc/apt/preferences.d/mozilla-firefox && \
    apt-get update && \
    apt-get install -y firefox-esr && \
    rm -rf /var/lib/apt/lists/*

# Allure Commandline'ı yüklemek için
ENV ALLURE_VERSION 2.27.0
RUN wget -qO /tmp/allure-commandline.zip https://repo.maven.apache.org/maven2/io/qameta/allure/allure-commandline/$ALLURE_VERSION/allure-commandline-$ALLURE_VERSION.zip \
    && unzip /tmp/allure-commandline.zip -d /opt/ \
    && rm /tmp/allure-commandline.zip \
    && ln -s /opt/allure-$ALLURE_VERSION/bin/allure /usr/local/bin/allure
