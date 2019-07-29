import React, {useEffect} from 'react'
import Banner from '../Organims/Banner'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/acionCreators'
import { connect } from 'react-redux'
import Card from '../Organims/Card';

const Specialities = ({specialities}) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  },[])

  return (
    <>
    <Banner
    color="dark-color"
    image={{
    src: "",
    alt: "Banner de especialidades"
    }}
    title= "Especialidades"
    subtitle= "Domina una tecnologia con las rutas que te ofrecemos"
  />
  {
    specialities &&
    <main className="ed-grid m-grid-3">
      {
        specialities.map(s => (
          <Card 
          path="especialidades"
          picture={s.picture} 
          name={s.name} 
          key={s.id} 
          card={s.id} />
        ))
      }

    </main>
  }
  </>
 )
}
const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})
export default connect(mapStateToProps, {})(Specialities)
