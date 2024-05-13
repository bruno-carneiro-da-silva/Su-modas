

Tech stack:
- React
- SaSS
- Prototype
- Zustand
- React query
- JavaScript
- axios


embre se de colocar a porta no arquivo `.env` caso queira mudar

# Introdução


### ![Captura de tela 2024-05-13 124401](https://github.com/bruno-carneiro-da-silva/Su-modas/assets/49591443/3f140396-efc1-4037-bda3-816b2f7b57c8)

- O projeto Su modas é um projeto para desenvolvimento de um dashboard para a empresa Su modas, no qual, faz gerenciamento de vendas de roupas jeans controle de estoque.<br><br>
![AmazonDynamoDB](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react) 

- [Sobre](#beginner-sobre)
- [Usage](#zap-uso)
  - [Instalação](#electric_plug-instalação)
  - [Comandos](#package-comandos)
- [Development](#wrench-development)
  - [Pre-Requisitos](#notebook-pre-requisitos)
  - [Estrutura dos arquivos](#file_folder-estrutura-dos-arquivos)
  - [Build](#hammer-build)
  - [Branches](#cactus-branches)

##  :beginner: Sobre
Painel de controle para empresa de roupas: Sua solução completa para gestão e insights sem interrupções. Obtenha visibilidade em tempo real sobre as tendências de vendas, níveis de estoque e preferências dos clientes com ferramentas intuitivas de visualização de dados. Otimize operações, gerencie estoques e mantenha-se à frente do mercado com insights acionáveis feitos sob medida para o mundo dinâmico da moda. Eleve sua estratégia de negócios e impulsione o sucesso com nosso aplicativo de painel de controle exclusivo, projetado para capacitar sua empresa de roupas em todos os aspectos.

###  :package: Comandos
- Comandos para inciar o projeto.

```
$ npm install
$ npm run start
```

### :notebook: Pre-Requisitos
List all the pre-requisites the system needs to develop this project.
- NodeJS ^16.20.2


###  :file_folder: Estrutura dos arquivos.

```
.
├── assets
│   ├── css
│   │   ├── index-ui.css
│   │   └── rate-ui.css
│   ├── images
│   │   ├── icons
│   │   │   ├── shrink-button.png
│   │   │   └── umbrella.png
│   │   ├── logo_144.png
│   │   └── Untitled-1.psd
│   └── javascript
│       ├── index.js
│       └── rate.js
├── components
├── constants
├── context
└── hooks
....

```

| No | Nome do arquivo | Detalhes
|----|------------|-------|
| 1  | index      | Ponto inicial

###  :hammer: Build

Para buildar a aplicação: 
```
$ npm run build

```

 ### :cactus: Branches

 Principais branches do projeto.

1. **`staging`** é a branch de desenvolvimento.

2. **`master`** é a branch de produção .

**Passo a passo para trabalhar com branches de funcionalidades**

1. Caso esteja desenvolvendo uma funcionalidade, crie uma branch com o prefixo `feat` e coloque o seguinte nome. (ie. `feat/FEATURE-NAME`)
2. Uma vez terminada as suas alterações, pode abrir o Pull Request.

**Passos para criar um pull request**

1. Faça um pull request para branch de `staging`.
2. Tente ao máximo colocar detalhes, de preferencia abra um issue descrevendo e.g. se puder colocar capturas de imagens e os efeitos visuais no pull request é ótimo.
3. Será criado uns testes de integração nos pull request pelo github action, então caso passe nos testes.

Depois disso, tudo será mergeado.
