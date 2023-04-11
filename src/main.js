import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            movies: [
                {
                    id: 1,
                    title: 'Interstellar',
                    year: 2014,
                    language: "English",
                    director: {
                        name: 'Christopher Nolan',
                        nationality: 'English',
                        birthdate: '30/07/1970'
                    },
                    genre: 'Sci-Fi',
                    image: 'https://imgs.search.brave.com/bivgYNCRl8snv_QoRUc6B2Y3PRy5dyX1MPcc5sOxl7U/rs:fit:360:581:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y2L2I1/L2EwL2Y2YjVhMDdi/NzI1ZjAyZjIwNzNl/ODFhNzZmNjkzYmU1/LmpwZw'
                },
                {
                    id: 2,
                    title: 'Inception',
                    year: 2010,
                    language: "English",
                    director: {
                        name: 'Christopher Nolan',
                        nationality: 'English',
                        birthdate: '30/07/1970'
                    },
                    genre: 'Sci-Fi',
                    image: 'https://imgs.search.brave.com/9uMZXgU_zOmtGF3DbrlWGYeMOUN2jHNCvUSKCNt8Gyw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5zZW5zY3JpdGlx/dWUuY29tL21lZGlh/LzAwMDAxMjg3MjEy/My9zb3VyY2VfYmln/L0luY2VwdGlvbi5q/cGc'
                }
            ],
            directors: [
                {
                    id: 1,
                    name: 'Christopher Nolan',
                    nationality: 'English',
                    birthdate: '30/07/1970'
                },
                {
                    id: 2,
                    name: 'Micheal Bay',
                    nationality: 'English',
                    birthdate: '30/07/1970'
                }
            ],
            nextDirectorId: 3
        }
    },
    getters: {
        movies(state) {
            return state.movies;
        },
        nextDirectorId(state) {
            return state.nextDirectorId;
        }
    },
    mutations: {
        addMovie(state, payload) {
            state.movies.push(payload.movie);
        },
        addDirector(state, payload) {
            state.directors.push(payload.director);
        },
        deleteMovie(state, payload) {
            const index = state.movies.indexOf(payload.movie)
            state.movies.splice(index, 1);
        },
        incrementNextDirectorId(state) {
            state.nextDirectorId++;
        }
    },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
