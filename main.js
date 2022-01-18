

var vm = new Vue({
    el : '#app',
    data : {
      filedType : 'password'
    }
  ,
  methods : {
    hideShow(){
      this.filedType = this.filedType === 'password' ? 'text' : 'password';
    }
  }
})