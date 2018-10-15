### Testes Protractor com docker

- Criar imagem com ambiente para execução de testes protractor

```sh
docker build -t teste-protractor:1 .
```
- Executar container

```sh
docker run --name teste-protractor --rm -it -p 4444:4444 -v {workdir}/testes:/testes teste-protractor:1 /bin/bash
```

- Entrar no container

```sh
docker exec -it teste-protractor /bin/bash
```

- Executar testes

```sh
protractor conf.js
```
