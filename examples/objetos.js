const tv = {
  marca: "LG",
  modelo: "Thinqai",
  polegadas: 42,
  smart: true,
  preco: 2099.99,
  aplicativos: ["YouTube", "Netflix", "Prime Vídeo", "Crunchyroll", "Max", "TV"],

  ligar: () => console.log("A TV ligou!"),
  desligar: () => console.log("A TV desligou!"),
  mudarCanal: (num) => console.log(`Você está no canal ${num}`),

  verAplicativos: function() {
    this.aplicativos.forEach((app, index) => {
      console.log(`${index + 1}. ${app}`);
    });
  },

  mudarAplicativo: function(aplicativo) {
    if (this.aplicativos.includes(aplicativo)) {
      console.log(`Mudando para o aplicativo: ${aplicativo}`);
    } else {
      console.log(`O aplicativo "${aplicativo}" não está disponível.`);
    }
  }
};

tv.mudarAplicativo('Netflix');

    const celular = {
      marca: "samsung",
      modelo: "samsung galaxy s23",
      preco: 4.999,00,
      cor:"Preto",
      aplicaticos: ["Youtube", "Netflix", "prime vídeo", "tik tok"],
      
      ligar: () => console.log("O celular ligou"),
      desligar: () => console.log("O celular desligou"),
      mudarAplicativo: (num) => console.log('mudar para outro aplicativo'),
      
      verAplicativos: function() {
    }
    
  
