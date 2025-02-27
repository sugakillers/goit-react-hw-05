import { RotatingTriangles } from "react-loader-spinner";
import css from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={css.loader}>
<RotatingTriangles
  visible={true}
  height="64"
  width="64"
  color="#4fa94d"
  ariaLabel="rotating-triangles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />    
      </div>
  )
}
export default Loader; 