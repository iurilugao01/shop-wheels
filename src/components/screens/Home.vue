<template>
  <div class="bg-black text-white font-sans">
    <header class="w-full h-16 flex items-center px-6">
      <!-- Logo do site -->
      <div class="flex items-center">
        <img
            src="https://i.pinimg.com/originals/61/93/7b/61937be77c0bb5f7aac7c63fccf744a4.png"
            alt="Logo do Site"
            class="h-12"
        />
        <!-- Botões ao lado do logo -->
        <nav class="flex items-center space-x-8 ml-6">
          <button class="text-white hover:text-gray-400">Comprar</button>
          <button class="text-white hover:text-gray-400">Descubra</button>
        </nav>
      </div>

      <!-- Espaço flexível para empurrar o botão "conta" para o lado direito -->
      <div class="flex-grow"></div>

      <!-- Botão Conta com ícone -->
      <div class="flex items-center">
        <button class="text-white hover:text-gray-400 flex items-center">
          Conta
          <img
              src="https://i.pinimg.com/originals/4b/3e/02/4b3e0279e016cc145240de10c8a06fb6.png"
              alt="Ícone de Conta"
              class="h-8 ml-2"
          />
        </button>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
