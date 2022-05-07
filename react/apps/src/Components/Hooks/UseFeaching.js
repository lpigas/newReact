import { useState } from "react";


export const UseFeaching = (callback) =>{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    const fechPosts = async () => {
        try {
                setLoading(true);
                callback();

        } catch (e) {
            console.error(e.message)
            setError(e.message)
        } finally {
                setLoading(false)
                
        }
    }
      return [fechPosts, loading, error]
}