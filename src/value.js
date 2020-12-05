    const Auth = {
  
    authenticate() {
        localStorage.setItem('auth','1');
   
    },
    signout() {
        localStorage.setItem('auth','0');
    },
    getAuth() {
    return localStorage.getItem('auth');
    }
    };
    export default Auth;