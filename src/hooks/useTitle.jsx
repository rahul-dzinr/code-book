import { useEffect } from "react"

const useTitle = ({title}) => {
  return (
    useEffect(()=>{
        document.title = `${title} - Books`
    },[title])
  )
}

export default useTitle