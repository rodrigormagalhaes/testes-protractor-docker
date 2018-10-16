# cria a imagem a partir da imagem do java 8
FROM java:8

# instala nodejs 
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

# instala protactor
RUN npm install -g protractor

# instala selenium server
RUN webdriver-manager update

# porta do selenium. Informa ao docker que o container escuta nessa porta
EXPOSE 4444

# adiciona repositório do chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list

# instala chrome
RUN apt-get update && apt-get -y install google-chrome-stable

# define como default
WORKDIR /testes

# instala as dependências presentes no package.json e inicia selenium server quando o container rodar
ENTRYPOINT npm install && webdriver-manager start