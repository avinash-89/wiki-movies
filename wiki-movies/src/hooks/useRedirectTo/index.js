import { useNavigate } from 'react-router-dom'

const useRedirectTo = () => {
    const navigate = useNavigate()
    const redirectTo = (url) => {
        navigate(url);
    }

    return {redirectTo};
}

export default useRedirectTo