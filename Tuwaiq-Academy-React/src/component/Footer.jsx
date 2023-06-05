import S6r from "../../public/s6r.png"
import Stc from "../../public/stc.png"
import SFFCPD from "../../public/SFFCPD.png"

function Footer() {
  return (
    <div>
      <footer>
                <div className="logos">
                    <div className="logo"><img src={SFFCPD} alt="logo" width="150px"/></div>
                    <div className="logo"><img src={Stc} alt="logo" width="150px"/></div>
                    <div className="logo"><img src={S6r} alt="logo" width="150px"/></div>
                </div>
                <div className="terms">
                    <a href="https://tuwaiq.edu.sa/contact">contact us</a>
                    <a>|</a>
                    <a href="https://sites.satr.codes/terms-and-condition">Terms & Conditions</a>
                    <a>|</a>
                    <a href="https://sites.satr.codes/privacy-policy">privacy policy</a>

                </div>
                <div className="copyright">Copyright © 2021 saudi federation for cybersecurity programming and drones </div>
        </footer>        
    </div>
  )
}

export default Footer