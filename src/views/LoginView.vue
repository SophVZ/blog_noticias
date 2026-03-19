<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="card shadow-sm p-4">
            <h2 class="text-center mb-4">{{ esLogin ? 'Iniciar Sesión' : 'Registro' }}</h2>
            
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" placeholder="nombre@ejemplo.com">
            </div>
            
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" placeholder="******">
            </div>

            <div class="d-grid gap-2">
                <button @click="ejecutarAccion" class="btn btn-primary">
                {{ esLogin ? 'Entrar' : 'Crear Cuenta' }}
                </button>
                <button @click="esLogin = !esLogin" class="btn btn-link btn-sm">
                {{ esLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Ingresa' }}
                </button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import { auth } from '../firebase';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

    export default {
        name: 'AuthView',
        data() {
            return {
            email: '',
            password: '',
            esLogin: true 
            }
        },
        methods: {
            async ejecutarAccion() {
            try {
                if (this.esLogin) {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                alert("¡Bienvenido!");
                } else {
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                alert("Usuario creado con éxito");
                }
                this.$router.push('/'); 
            } catch (error) {
                alert("Error: " + error.message);
            }
            }
        }
    }
</script>