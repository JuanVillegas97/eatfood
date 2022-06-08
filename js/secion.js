var app = Vue.createApp({
    data() {
        return {
            userName: '',
            userType: ''
        }
    },
    methods:{
        setSessionData(){
            const sessionData = sessionStorage.getItem('sessionData');
            if(sessionData == null){
                window.location.href = 'login.html';
            }
            else{
                const objSessionData = JSON.parse(sessionData);
                this.userName = objSessionData.userName;
                this.userType = objSessionData.profile;
                LOG_IN(this.user,this.password);
            }
        }
    },
    mounted(){
        this.setSessionData();
    }
})

