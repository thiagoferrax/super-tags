**Nome da equipa:** AppHunters

## Elementos:

**DEVs**
- Micael Costa
- Alessandro
- Thiago Ferraz
- Filipe Torres

**Ouvintes**
- Marlisson Silva

## 1. Projeto 
### Requisitos
- Node v20.*
- Visual studio code
- Browser (recomendado Chrome)
- Docker

### Como iniciar o projeto
- Intalar o node
- instalar docker
- Abrir linha de comandos na pasta project
- Executar "npm i" na linha de comandos de forma a instalar todas as dependencias do projeto
- Executar "npm run dev" para iniciar o projeto
- Abrir browser com o endereço "http://localhost:3000"

## 2. Utils
### VS Code
#### Extensions
1. Draw.io Integration
2. VS Code ES7+ React/Redux/React-Native/JS snippets
3. ESLint
4. Tailwind CSS IntelliSense
5. MDX (para visualizar ficheiros *.md)

### Node
- Instalar nvm para gerir várias versões do node


## Iniciar projeto

Configurar base de dados
podemos utilizar neste momento 3 tipos de armazenamento de dados
- em memória
- SQLite
- Postgres

para configurar o validar que tipo de repositório está a ser usado é necessário:
1- ir à pasta project/src/core/main/infra/db
2- abrir ficheiro make-user-repository 
3- validar que implementação está a ser usada

para utilizar postgres 
- deve-se utilizar o método MakeUserRepositoryPostgres nas funções exportadas
- abrir linha de comandos na pasta inicial do repositório e executar "docker-compose up -d"
- abrir nova linha de comandos na pasta project e executar "npm run postgres:migration"

para utilizar sqllite 
- deve-se utilizar o método MakeUserRepositorySQLite nas funções exportadas
- abrir nova linha de comandos na pasta project e executar "npm run sqlite:migration"

para utilizar inMemory 
- deve-se utilizar o método MakeUserRepositoryInMemory nas funções exportadas



para abrir o projeto basta abrir uma linha de comando na pasta project e executar npm run dev