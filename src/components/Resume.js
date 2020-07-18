import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <ul>
                           <li>{item.Achievement1}</li>
                           <li>{item.Achievement2}</li>
                           <li>{item.Achievement3}</li>
                          </ul>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <ul>
                          <li>{item.Achievement1}</li>
                          <li>{item.Achievement2}</li>
                          <li>{item.Achievement3}</li>
                          <li>{item.Achievement4}</li>
                          <li>{item.Achievement5}</li>
                          <li>{item.Achievement6}</li>
                          </ul>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

   				<div>
              {
                resumeData.skills && resumeData.skills.map((item) => {
                  return(  
                    <ul>
                        <li><strong>•	Languages:</strong> {item.languages}</li>
                        <li><strong>•	Libraries/Frameworks:</strong> {item.librariesframeworks}</li>
                        <li><strong>•	Database:</strong> {item.database}</li>
                        <li><strong>•	Operating Systems:</strong> {item.operatingsystems}</li>
                        <li><strong>•	Version Control System:</strong> {item.versioncontrol}</li>
                        <li><strong>•	Software Applications:</strong> {item.softwares}</li>
                        <li><strong>•	APIs:</strong> {item.api}</li>
                        <li><strong>•	Strengths:</strong> {item.strengths}</li>
                        <li><strong>•	SDLC Models:</strong> {item.sdlc}</li>
                        <li><strong>•	Project Management Tool:</strong> {item.projectmanagement}</li>
                        </ul>
                  )
                })
              }

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}