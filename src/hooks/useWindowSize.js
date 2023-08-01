import {useState, useEffect} from 'react'

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })
    useEffect(() => {
        
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        // to run at load time
        handleResize()

        window.addEventListener("resize", handleResize)
        // runs if dependencies change

        // to prevent memory leak
        const cleanUp = () => {
            console.log('runs if a useEffect dependency changes')
            window.removeEventListener("resize", handleResize)

        }

        return cleanUp

    },[])

    return windowSize
}   

export default useWindowSize