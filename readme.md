# Matheus Pereira da Cruz

## Tecnologias utilziadas

✔️ Node.js na contrução da API e conexão com o banco de dados.
  
✔️ React Native e Expo para a contrução do app e facilitar o desenvolvimento.
  
✔️ Styled Components para a estilização.

✔️ Sequelize para manipular o banco de dados.

## Instruções de como rodar a aplicação

- Entrar na pasta *api*.
  
  - Baixar as dependências: `yarn` ou `npm install`.
  
  - Rodar o comando para iniciar a API na porta 8000: `yarn start` ou `npm start`.
  
  - Abrir um outro terminal na mesma pasta e rodar: `npx ngrok http 8000`.
    - Caso o NGROK não esteja instalado na máquina, ele irá solicitar. 

  - Copiar o endereço fornecido pelo NGROK: `npx ngrok http 8000`.
  
    - O endereço é parecido com isso: `http://2e0c-2804-431-cfee-993e-80d7-28ba-2890-bd76.ngrok.io`.
    - Obs: Iremos precisar deste link para conectar o APP com a API ;)
  
- Entrar na pasta *app*.
  
  - Baixar as dependências: `yarn` ou `npm install`.

  - Caminhar até src/services/api.js.

  - Colar o link fornecido pelo NGROK no local indicado.

  - Buildar o APP com o EXPO: `expo start`.

  - Utilizar alguma das formas instruidas pelo EXPO para abrir a aplicação em um dispositivo físico ou emulador.
  
- Ser feliz 🎉

  
