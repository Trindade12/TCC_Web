import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const Usuario = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
           <Header 
                    goto={'/home'}
                    title={'Usuário'}
                    logo={logo}
                    />
               <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/usuarionovo'}
                            style={{backgroundColor: 'var(--preto)', color: 'var(--fontpri)'}} 
                            className="btn btn-lg">
                            Novo Técnico
                        </Link>
                        <Link to={'/usuarioslista'} 
                            style={{backgroundColor: 'var(--preto)', color: 'var(--fontpri)'}}
                            className="btn btn-lg">
                            Lista de Técnicos
                        </Link>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default Usuario