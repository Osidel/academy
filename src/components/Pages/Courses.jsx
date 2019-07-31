import React, { useEffect} from 'react'
import Banner from '../Organims/Banner'
import {connect} from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/acionCreators'
import Card from '../Organims/Card'

const Courses = ({courses}) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  },[])

  return (
    <>
    <Banner
    color="firts-color"
    image={{
    src: "",
    alt: "Banner de cursos"
    }}
    title= "Cursos"
    subtitle= "Domina una tecnologia con los cursos que te ofrecemos"
  />
  {
    courses &&
    <main className="ed-grid m-grid-5">
      {
        courses.map(c => (
       <Card
       path= "cursos"
       key={c.id}
       picture={c.picture}
       name={c.name}
       card={c.id}
       />
        ))
      }

    </main>
  }
  </>
  )
}
const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
