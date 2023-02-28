console.log("bonjour bonjour");
console.log("coucou");
console.log("coucou sammou");
console.log("test");
console.log("teste2");
console.log("test3");
console.log("test4");
console.log(process.env.NODE_ENV);
console.log(process.env.TZ);
console.log(process.env.HOST);
console.log(process.env.PORT);

import fastify from "fastify";
const app = fastify();
app.listen({ port: process.env.PORT as any, host: process.env.HOST }, () => {
  console.log(
    `Le serveur http est prêt sur l'address : http://${process.env.HOST}:${process.env.PORT}`
  );
});

//Ajouter 2 routes
app.get("/", () => {
  return "Bienvenue sur mon serveur";
});
app.get("/hello", () => {
  return "Bonjour tout le monde";
});
