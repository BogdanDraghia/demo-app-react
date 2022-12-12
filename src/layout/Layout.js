
import style from './layout.module.css'
const Layout =({children })=>{
    return(
        <div className={style.layoutWrap}>
            Header
            {children} 
        </div>
    )
}

export default Layout