import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container-fluid contact">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Let's Connect</h1>
                        <p>Have you got a project to work on?</p>
                    </div>
                    <div className="col-md-4">
                        <div><a href="mailto:kabiswad@gmail.com"><i class="fas fa-envelope"></i>Kabiswad@gmail.com</a></div>
                        <div><a href="tel:+256777222464"><i class="fas fa-phone"></i>+256777222464</a></div>
                        <div><a href="tel:+250788225986"><i class="fas fa-phone"></i>+250788225986</a></div>
                        <div><a href="https://www.linkedin.com/in/kabiswa-davis-a45421146/"><i class="fab fa-linkedin"></i>On LinkedIn</a></div>
                        <div><a href="https://www.instagram.com/dkabitswa/"><i class="fab fa-instagram"></i>On Instagram</a></div>
                    </div>
                </div>
            </div>
            <div className="text-center text-muted foot">
                <i><i class="far fa-copyright"></i>2020 KABISWA DAVIS. All rights reserved </i>
            </div>
        </>
    )
}

export default Contact;