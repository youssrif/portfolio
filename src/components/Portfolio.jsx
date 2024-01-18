import OP from "../assets/Open.svg";
function Portfolio() {
  const contracktime = ["React", "Node", "Express", "PostgreSQL", "AWS"];
  const Immoplus = ["React", "Node", "MongoDB", "Express"];
  const contracktimeADDin = ["React", "OfficeJS", "AWS"];
  const Medicimo = ["React", "Express", "supabase"];
  return (
    <>
      <div className="Portfolio-container">
        <h4 style={{ color: "#147efb" }}>PORTFOLIO</h4>
        <div className="Project-card">
          <div className="Project-tec">
            {/* here is project image */}
            {contracktime.map((el, index) => {
              return (
                <div key={index} className="tec-card">
                  {el}
                </div>
              );
            })}
          </div>
          <div className="Project-desc">
            {/* project description */}
            <h3> Contracktime </h3>
            <p className="yous-pres">
              ContraktTime, a Software as a Service (SaaS) contract management
              platform, enables comprehensive tracking of all modifications and
              additions throughout the course of a project.
            </p>
            <div className="Open-tab">
              <a href="https://contracktime.com" target="_blank">
                <img src={OP} width={40} alt="OP" />
              </a>
            </div>
          </div>
        </div>

        {/* contracktime addin  */}

        <div className="Project-card">
          <div className="Project-tec">
            {/* here is project image */}
            {contracktimeADDin.map((el, index) => {
              return (
                <div key={index} className="tec-card">
                  {el}
                </div>
              );
            })}
          </div>
          <div className="Project-desc">
            {/* project description */}
            <h3> Contracktime Outlook Add-on </h3>
            <p className="yous-pres">
              ContrackTime Add-in is an add-on that can access personal
              information in the active message (body, subject, sender,
              recipients, and attachments) and modify them. It may transmit this
              data to a third-party service. Other items in your mailbox cannot
              be read or modified.
            </p>
          </div>
        </div>

        {/* Mediciomo */}
        <div className="Project-card">
          <div className="Project-tec">
            {/* here is project image */}
            {Medicimo.map((el, index) => {
              return (
                <div key={index} className="tec-card">
                  {el}
                </div>
              );
            })}
          </div>
          <div className="Project-desc">
            {/* project description */}
            <h3> Medicimmo </h3>
            <p className="yous-pres">
              Medicimmo is the only Belgian real estate agency exclusively
              dedicated to serving medical, healthcare, and wellness
              professionals.
            </p>
            <div className="Open-tab">
              <a href="https://www.medicimmo.be/fr/" target="_blank">
                <img src={OP} width={40} alt="OP" />
              </a>
            </div>
          </div>
        </div>

        {/* ImmoPlus */}

        {/* Mediciomo */}
        <div className="Project-card">
          <div className="Project-tec">
            {/* here is project image */}
            {Immoplus.map((el, index) => {
              return (
                <div key={index} className="tec-card">
                  {el}
                </div>
              );
            })}
          </div>
          <div className="Project-desc">
            {/* project description */}
            <h3> Immoplus </h3>
            <p className="yous-pres">
              Development of a Progressive Web Application (PWA) for managing
              rental properties in a collective housing setting.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
