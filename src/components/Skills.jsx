import React from 'react';

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Technical Skills</h2>
      
      <div className="orbit-container">
        <div className="orbit-center">
          <span>Skills</span>
        </div>
        <div className="orbit-path">
          <div className="orbit-item item1">
            <span>HTML5</span>
          </div>
          <div className="orbit-item item2">
            <span>CSS3</span>
          </div>
          <div className="orbit-item item3">
            <span>JavaScript</span>
          </div>
          <div className="orbit-item item4">
            <span>Java</span>
          </div>
          <div className="orbit-item item5">
            <span>React</span>
          </div>
          <div className="orbit-item item6">
            <span>Node.js</span>
          </div>
          <div className="orbit-item item7">
            <span>Express</span>
          </div>
          <div className="orbit-item item8">
            <span>AWS</span>
          </div>
          <div className="orbit-item item9">
            <span>Git</span>
          </div>
        </div>
      </div>

      <div className="skills-container">
        {/* Your existing skills cards here */}
      </div>
    </section>
  );
}

export default Skills;


// const Skills = () => {
//     const skillCategories = [
//         {
//             title: "Frontend Development",
//             skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
//         },
//         {
//             title: "Backend Development",
//             skills: ["Java", "Spring Boot", "Node.js", "RESTful APIs", "SQL"]
//         },
//         {
//             title: "DevOps & Tools",
//             skills: ["Git", "Docker", "AWS", "GitHub Actions", "Agile/Scrum"]
//         },
//         {
//             title: "Professional Skills",
//             skills: ["Project Management", "Team Collaboration", "Problem Solving", "Communication"]
//         }
//     ];

//     return (
//         <section id="skills" className="skills-section">
//             <div className="skills-container">
//                 {skillCategories.map((category) => (
//                     <div key={category.title} className="skill-card">
//                         <h3>{category.title}</h3>
//                         <div className="skills-list">
//                             {category.skills.map((skill) => (
//                                 <span key={skill} className="skill-tag">
//                                     {skill}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };