import Mail from "../assets/Mail.svg";
function Contact() {
  return (
    <>
      <div className="contact-container">
        <h4 style={{ color: "#147efb" }}>CONTACT</h4>
        <div className="contact-me">
          <div className="mail-box">
            <div className="icon">
              <img src={Mail} alt="mail" width={30} />
            </div>
            <div className="mail">
              <h3>Mail</h3>
              <a className="mail-to" href="mailto:fkili.youssri@gmail.com">
                fkili.youssri@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
