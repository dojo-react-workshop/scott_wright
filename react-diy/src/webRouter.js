
const webRouter={
    path: ()=> window.location.pathname,
    navigateTo: (path)=> {
        window.history.pushState({},null,path)
    },
    subscribe: (callback)=>{
        window.addEventListener('popstate',callback)
    }
}

export default webRouter;


