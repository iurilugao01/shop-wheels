<template>
  <div class="bg-black text-white p-0 m-0 font-sans">
    <header class="bg-gray-800 w-full h-24 flex justify-between items-center p-5">
      <div class="flex items-center">
        <img
          src="https://i.pinimg.com/originals/61/93/7b/61937be77c0bb5f7aac7c63fccf744a4.png"
          alt="Logo do Site"
          class="h-16"
        />
        <h1 class="text-2xl ml-2">Shop Wheels</h1>
      </div>
      <nav>
        <router-link to="/" class="text-white px-4 hover:text-gray-400">Promoções</router-link>
        <router-link to="/novos" class="text-white px-4 hover:text-gray-400">Novos</router-link>
        <router-link to="/pistas" class="text-white px-4 hover:text-gray-400">Pistas</router-link>
        <router-link to="/desenvolvedores" class="text-white px-4 hover:text-gray-400">Desenvolvedores</router-link>
        <router-link to="/conta" class="text-white px-4 hover:text-gray-400">Conta</router-link>
        <img
          src="https://i.pinimg.com/originals/4b/3e/02/4b3e0279e016cc145240de10c8a06fb6.png"
          alt="Perfil do Usuário"
          class="h-16"
        />
      </nav>
    </header>

    <div class="p-5 max-w-5xl mx-auto text-justify">
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/541/162/original/toy-car-toy-playing-car-playing-toy-toy-car-transparent-background-free-png.png"
        class="float-left mr-5 mb-5 w-96"
        alt="Imagem de Carro de Brinquedo"
      />
      <p>
        Bem-vindo ao melhor site de carros de brinquedo do mundo! Nosso site é o destino final para todos os entusiastas de carros de brinquedo, e estamos aqui para te mostrar porque você deve comprar seus carros de brinquedo conosco. Primeiramente, nos orgulhamos de oferecer produtos de altíssima qualidade...
      </p>
    </div>

    <div class="bg-white w-full h-0.5 my-5"></div>

    <div class="p-5 max-w-5xl mx-auto">
      <h2 class="text-lg font-bold">Informações de Contato:</h2>
      <p>Email: iurilugao01@gmail.com</p>
      <p>Telefone: (27) 99775-4227</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* Estilos específicos, se necessário */
</style>
