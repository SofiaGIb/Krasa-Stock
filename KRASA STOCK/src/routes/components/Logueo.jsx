import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { allProduct } from "../../Redux/actions/actionsFunction/actions"
function Logueo() {

const dispatch = useDispatch()
useEffect(()=>{
  dispatch(allProduct())
},[])
  return (
    <div>
      <h1>DEBERA  LOGUEARSE</h1>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ipsa harum earum eaque tempore modi error illo vel esse minus quis ex nihil impedit natus excepturi, eligendi dolorum a ratione?
    </div>
  )
}

export default Logueo
