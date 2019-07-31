import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import store from "../../redux/store"
import {getCourse} from '../../redux/acionCreators'
import Banner from './../Organims/Banner'

const Course = ({course}) => {
  useEffect(() => {
    store.dispatch(getCourse(1))
  },[])
  return (
    <>
    {
      course &&
      <>
      <Banner 
    color="dark-color"
    title={course.title}
    subtitle={course.subtitle}
    image={{
      src: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/EspecialidadEdicionAudioVisual.png",
      alt: course.name
    }}
    courseBanner
    poster={course.picture}
    especialidad={course.title}
    info={course.information}
    />
    <main className="ed-grid lg-grid-10">
      <div className="lg-cols-7">
        <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
          <div>
            <h3 className="t4">Que aprenderas?</h3>
            <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
          </div>
          <div>
          <h3 className="t4">Conocimientos previos</h3>
            <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
          </div>
          <div>
          <h3 className="t4">Nivel</h3>
            <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
          </div>
        </div>
        <h2>Temario del curso</h2>
        <div className="s-border s-pxy-2 lg-pxy-4 s-ratius s-bg-white l-block l-section s-shadow-bottom">
          {
            course.data.classes.map(cl =>(
              <div className="course-class l-section" key={cl.id}>
                <h3>{cl.title}</h3>
                <p>{cl.subjet}</p>
                <ul>
                  {
                    cl.description.class.map(s => (
                      <li key={s.id}>{s}</li>
                    ))
                  }
                </ul>

              </div>
            ))
          }
        </div>
      </div>
      <div className="lg-cols-3">
        <h2 className="t3">Omar Siles </h2>
        <p>{course.subtitle }</p>
      </div>
    </main>
      </>
    }
    </>

  )
}
    

const mapStateToProps = state => ({
  course: state.courseReducer.course
})
export default connect(mapStateToProps, {})(Course)
