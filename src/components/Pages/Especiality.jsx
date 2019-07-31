import React, {useEffect} from 'react'
import store from '../../redux/store'
import {getSpeciality} from '../../redux/acionCreators'
import {connect} from 'react-redux'
import Banner from '../Organims/Banner'

const Especiality = ({speciality}) => {
      useEffect(() => {
        store.dispatch(getSpeciality(1))
      },[]) 

  return (
   <>
   {
     speciality &&
     <>
     <Banner 
    color="dark-color"
    title={speciality.name}
    subtitle={speciality.subtitle}
    image={{
      src: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/EspecialidadEdicionAudioVisual.png",
      alt: speciality.name
    }}
    courseBanner
    poster={speciality.picture}
    info={speciality.information}
    />
     <main className="ed-grid lg-grid-10">
      <div className="lg-cols-7">
        <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
          <div>
            <h3 className="t4">Que aprenderas?</h3>
            <ul>
              {
                speciality.data[0].abilities.map(a => (
                  <li key={a.id}>{a.description}</li>
                ))
              }
            </ul>
          </div>
          <div>
          <h3 className="t4">Conocimientos previos</h3>
          <ul>
              {speciality.data[0].knowledge.map(a => (
                <li key={a.id}>{a.description}</li>
              ))}
            </ul>
          </div>
          <div>
          <h3 className="t4">Nivel</h3>
          {speciality.level}
          </div>
        </div>
        <h2>Temario del curso</h2>
        
        <div className="s-border s-pxy-2 lg-pxy-4 s-ratius s-bg-white l-block l-section s-shadow-bottom">
            
            {
              speciality.data[0].abilities.map(cl => 
                <div className="course-class l-section" key={cl.id}>
                <div className="ed-grid m-grid-3">
                  <img src={cl.picture} alt={cl.name} />  
                <div className="m-cols-2">
                  <h3>{cl.description}</h3>
                  <p>{cl.information}</p>
                </div>
                </div>        
             </div>)
            }                          
            {/* {
            speciality.map(cl => (
              <div className="course-class l-section" key={cl.id}>
                <div className="ed-grid m-grid-3">
                  <img src={cl.picture} alt={cl.name} />  
                <div className="m-cols-2">
                 <h3>{cl.title}</h3>
                 <p>{cl.information}</p>
                </div>
                </div>              

              </div>
            ))
          } */}
        </div>
        </div>
      </main>
     </>
   }
   </>
)
}
const mapStateTProps = state => ({
  speciality: state.specialityReducer.speciality
})
export default connect(mapStateTProps,{})(Especiality)
