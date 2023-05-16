
export default function useAuth(){
    // const auth = useSelector(state => state.auth);
    const  auth  = JSON.parse(localStorage.getItem('auth'));

    if(auth?.token && auth?.user?.role === 'admin'){
        return true; 
    } else{
        return false;
    }
}