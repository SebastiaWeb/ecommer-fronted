import linkedin from "../assets/linkedin.png";

function Footer() {
    return (
        <footer className="container-footer">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <p>Terms & Conditions | Privacy Policy</p>
                </div>
                <div className="icono-linkedin">
                    <img src={linkedin} alt="" />
                </div>
                <div className="">
                    <p>&copy; 2023 E-commerce Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;