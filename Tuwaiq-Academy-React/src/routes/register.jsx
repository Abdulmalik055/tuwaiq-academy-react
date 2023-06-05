import {Link} from 'react-router-dom'

import Header from '../component/Header'
import Home from '../component/Home'
import Footer from '../component/Footer'
import Courses from '../component/Courses'

import Alibaba from "../../public/ali_baba.jpeg"
import Js from '../../public/js.png'
import Pla from '../../public/pla.png'
import '../App.css'



function Register() {

  return (
    <>
      <Header></Header>
      {/* <hr></hr> */}
      {/* <Home></Home> */}
      <div  className='coursesApp'>
      <Courses
      image={Alibaba}
      name="course 1"
      detailse="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque quos optio nobis dignissimos incidunt ad nostrum in adipisci libero pariatur, quod autem quibusdam sed illo fugiat corrupti dolorem! Commodi."
      date = "09/08/2023"
      available="available"
      ></Courses>

      <Courses
          image={Js}
          name="course 2"
          detailse="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque quos optio nobis dignissimos incidunt ad nostrum in adipisci libero pariatur, quod autem quibusdam sed illo fugiat corrupti dolorem! Commodi."
          date = "07/07/2023"
          available="available"
      ></Courses>

    <Courses
        image={Pla}
        name="course 1"
        detailse="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque quos optio nobis dignissimos incidunt ad nostrum in adipisci libero pariatur, quod autem quibusdam sed illo fugiat corrupti dolorem! Commodi."
        date = "01/01/2023"
        available="available"

    >
    </Courses>
      
      </div>
      <div className='back'><Link className="start" to ={`/`}>Back</Link></div>

      <Footer></Footer>
    </>
  )
}

export default Register
