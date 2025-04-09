import linkedin from "../assets/linkedin.png";

function Footer() {
    return (
        <footer className="container-footer">
            <div className="container d-flex row align-items-center py-3">
                <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start align-items-center">
                    <p>Terms & Conditions | Privacy Policy</p>
                </div>
                <div className="mb-3 mb-md-0 icono-linkedin col-12 col-md-2 d-flex justify-content-center justify-content-md-center align-items-center">
                    <img src={linkedin} alt="" />
                </div>
                <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-center justify-content-lg-end align-items-center">
                    <p>&copy; 2023 E-commerce Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;