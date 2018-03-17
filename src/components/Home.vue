<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <input v-model="userName" @keyup.enter="userSearch" placeholder="Digite o usuário do GitHub" type="text" class="form-control" autofocus />
    <button @click="userSearch" class="btn btn-primary btn-block space" type="button" :disabled="userName.length < 1">Buscar</button>
    <Spinner message="Buscando..." v-if="loading"></Spinner>
    <div class="col-md-12 mg-top">
      <div class="row">
        <div class="col-md-3 text-left">
          <div v-if="user">
            <img :src="user.avatar_url" class="img-user" />
            <p class="user"><b><br>{{ user.login }}</b></p>
            <p><b>Criado em:</b> {{ user.created_at | moment("DD/MM/YYYY") }}</p>
            <template v-if="user.location">
              <p><b>Localização:</b> {{ user.location }}</p>
            </template>
            <p><b>Repositórios públicos:</b> {{ user.public_repos }}</p>
            <p><b>Seguidores:</b> {{ user.followers }}</p>
            <p><b>Seguindo:</b> {{ user.following }}</p>
            <a :href="user.html_url" target="_blank" class="btn btn-secondary">Ver no GitHub</a>
          </div>
          <div v-if="notes">
            <hr/>
            <p class="space"><b>Anotações</b></p>
            <p>{{notes}}</p>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12">
              <paginate name="repos" :list="repos" :per="3">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4" v-for="repo in paginated('repos')">
                  <div class="box-repo">
                    <p><b>Nome:</b> {{ repo.name }}</p>
                    <p><b>Criado em:</b> {{ repo.created_at | moment("DD/MM/YYYY") }}</p>
                    <p><b>Link:</b> <a :href="repo.html_url" target="_blank">ver no GitHub</a></p>
                    <template v-if="repo.description">
                      <p><b>Descrição:</b> {{ repo.description }}</p>
                    </template>
                  </div>
                </div>
              </paginate>
            </div>
            <div class="col-md-12">
              <paginate-links class="teste" for="repos" v-if="repos.length > 0" :simple="{next: 'Próximo', prev: 'Anterior'}" :async="true"></paginate-links>
            </div>
          </div>
          <div class="form-group" v-if="repos.length > 0">
            <textarea v-model="userNotes" :placeholder="'Anotações sobre ' + user.login " rows="4" class="form-control"></textarea>
            <button @click="noteSave(user.login)" class="btn btn-primary btn-block space" type="button" :disabled="userNotes.length < 1">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from 'vue-simple-spinner'

const apiUrl = 'https://api.github.com'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Buscar usuário no GitHub',
      userName: '',
      userNotes: '',
      erro: '',
      user: null,
      repos: [],
      loading: false,
      paginate: ['repos'],
      notes: ''
    }
  },
  components: {
    Spinner
  },
  methods: {
    userSearch: function () {

      var name
      name = this.userName.trim()

      this.loading = true
      this.userNotes = ''

      axios.get(apiUrl + '/users/' + name)
        .then(response => {
          if (response.data.total_count === 0) {
            this.erro = '404'
            this.user = ''
            this.loading = false
          } else {
            this.user = response.data
            this.loading = false
          }
        })
        .catch(e => {
          this.erro = 'Erro ao buscar usuário'
          this.loading = false
        })

        this.repo(name)
        this.getNotes(name)

    },
    repo: function (name) {

      axios.get(apiUrl + '/users/' + name +'/repos')
        .then(response_repo => {
          this.repos = response_repo.data
          this.loading = false
        })
        .catch(e => {
          this.loading = false
        })

    },
    noteSave: function (name) {

      var note
      note = this.userNotes.trim()

      this.$localStorage.set(name, note)
      this.getNotes(name)

    },
    getNotes: function (name) {

      this.notes = this.$localStorage.get(name)

    }
  }
}
</script>

<style scoped>
.mg-top{
  margin-top: 30px;
}
.space{
  margin: 15px 0px;
}
.img-user{
  width: 100%;
  border-radius: 5px;
}

.box-repo{
  margin: 15px;
}

.user{
    font-size: 18px;
}

a {
  color: #42b983;
}

</style>
