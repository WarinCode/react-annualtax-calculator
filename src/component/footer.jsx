// import react
import React from "react";

// import style
import '../style/App.css'
import { fontfooter } from '../style/style'

function Footer(){
    return(
        <>
            <section style={{marginBottom: '60px'}}></section>
                {/* Credit: bootstrap5  (source: https://getbootstrap.com/docs/5.0/examples/) */}
                <footer id="footer" class="footer" style={fontfooter}>
                    <div class="container">
                        <footer class="py-3 my-4">
                            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                <li class="nav-item"><a href="mailto:warinsaipanya471@protonmail.com" class="nav-link px-2 text-muted"><i class="ri-mail-unread-fill"></i></a></li>
                                 <li className="nav-item"><a href="https://add-friend-instagram.netlify.app/" className="nav-link px-2 text-dark"><i className="ri-instagram-fill"></i></a></li>
                                <li className="nav-item"><a href="https://add-friend-line.netlify.app/"   className="nav-link px-2 text-dark"><i className="ri-line-fill"></i></a></li>
                                <li className="nav-item"><a href="https://add-friend-github.netlify.app/"  className="nav-link px-2 text-dark"><i className="ri-github-fill"></i></a></li>
                                <li className="nav-item"><a href="https://discord-invite-029wedw.netlify.app/"  className="nav-link px-2 text-dark"><i className="ri-discord-fill"></i></a></li>
                            </ul>
                            <p class="text-center text-dark">&copy; 2022 All Rights Reserved.</p>
                        </footer>
                    </div>
                </footer>
        </>     
    )
}

export default Footer;
