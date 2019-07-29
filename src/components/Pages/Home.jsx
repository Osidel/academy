import React, {useEffect} from 'react'
import Banner from '../Organims/Banner';
import { connect } from 'react-redux'
import store from '../../redux/store';
import Publication from '../Organims/Publication'
import { getAllPosts } from '../../redux/acionCreators'

const Home = ({posts}) => {

  useEffect(() => {
    store.dispatch(getAllPosts())
  },[])

  return (
    <>
      <Banner 
      color="dark-color"
      image=""
      title="Bienvenido a la expeciencia mas increible en educacion online. Comienza hoy mismo a aprender"
      subtitle="Nuestro equipo a desarrollado esta plataforma pensando en ti. Sabemos que estas buscando contenido de calidad. Aqui lo encontraras"
      home    
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
            <div>
            {
              posts.map(p => <Publication 
              title={p.title}
              author={p.author}
              fecha={p.fecha}
              content={p.content}
              key={p.id}
              />)
            }
          </div> :
          <p>No existen publicaciones en la BD</p>
          }
        </div>
        <div>
          <h3>Listado de categorias</h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>

          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
})

export default connect(mapStateToProps,{})(Home)
