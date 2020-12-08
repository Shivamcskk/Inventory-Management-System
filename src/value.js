    const Auth = {
  
    
    signout() {
        sessionStorage.clear();
    },
    getAuth() {
    return sessionStorage.length;
    }
    };
    export default Auth;