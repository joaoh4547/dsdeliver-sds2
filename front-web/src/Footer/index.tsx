import './styles.css'
import {ReactComponent as YoutubeLogo} from './Youtube.svg'
import {ReactComponent as LinkedinLogo} from './Linkedin.svg'
import {ReactComponent as InstagramLogo} from './Instagram.svg'

function Footer(){
    return (
       <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_new">
                    <YoutubeLogo/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedinLogo/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                    <InstagramLogo/>
                </a>
            </div>
       </footer>
    )
}

export default Footer;