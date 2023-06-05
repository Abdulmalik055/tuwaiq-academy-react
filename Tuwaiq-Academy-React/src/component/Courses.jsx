// import Alibaba from "../../public/ali_baba.jpeg"
// import Js from '../../public/js.png'
// import Pla from '../../public/pla.png'

function Courses(props) {
    const propsDate = new Date (props.date)
    const today = new Date ()
    let available 
    if (propsDate.getTime() > today.getTime() ) {
        available = "Available" 
    }else{
        available = "Closed"
    }
  return (

    <div className="course">
        <img src={props.image} width={"100px"} height={"100px"} />
        <h1>{props.name}</h1>
        <p>{props.detailse}</p>
        <p>{props.date}</p>
        <p>{available}</p>
        <button className="btn-details">Details </button>
    </div>
    
  )
}

export default Courses