const { createApp } = Vue;

createApp({
  data() {
    return {
      vidaEnemigo: 100,
      arrayDañosEnemigo: [],
      arrayDañosUsuario: [],
      vidaUsuario: 100,
      victoria: false,
      derrota: false,
      empate: false,
      dañoAtaqueEnemigo: 0,
      dañoAtaqueUsuario: 0,
      contadorAtaqueEspecial: 0,
      errorAtaqueEspecial: '',
    };
  },
  methods: {
    ataqueNormal() {
      this.dañoAtaqueEnemigo = Math.floor(Math.random() * (12 - 5 + 1) + 5);
      this.dañoAtaqueUsuario = Math.floor(Math.random() * (15 - 8 + 1) + 8);
      this.arrayDañosEnemigo.push(this.dañoAtaqueEnemigo);
      this.arrayDañosUsuario.push(this.dañoAtaqueUsuario);
      this.vidaEnemigo -= this.dañoAtaqueUsuario;
      this.vidaUsuario -= this.dañoAtaqueEnemigo;

      this.contadorAtaqueEspecial++;
      this.errorAtaqueEspecial = '';
    },
    ataqueEspecial() {
      if (this.contadorAtaqueEspecial === 3) {
        this.dañoAtaqueEnemigo = Math.floor(Math.random() * (12 - 5 + 1) + 5);
        this.dañoAtaqueUsuario = Math.floor(Math.random() * (25 - 15 + 1) + 15);
        this.arrayDañosEnemigo.push(this.dañoAtaqueEnemigo);
        this.arrayDañosUsuario.push(this.dañoAtaqueUsuario);
        this.vidaEnemigo -= this.dañoAtaqueUsuario;
        this.vidaUsuario -= this.dañoAtaqueEnemigo;
        this.contadorAtaqueEspecial = 0;
      } else {
        this.errorAtaqueEspecial =
          'NO SE PUEDE USAR EL ATAQUE ESPECIAL POR AHORA';
      }
    },
  },
  computed: {
    comprobarVida() {
      return (
        this.vidaEnemigo <= 100 &&
        this.vidaEnemigo > 0 &&
        this.vidaUsuario <= 100 &&
        this.vidaUsuario > 0
      );
    },
  },
}).mount('#game');
