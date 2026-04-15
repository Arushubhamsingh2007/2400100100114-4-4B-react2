import React from "react";
import { motion } from "framer-motion";
import {
FaUser,
FaCode,
FaProjectDiagram,
FaHeart,
FaEnvelope
} from "react-icons/fa";
import whatsappImg from "./WhatsApp Image 2026-04-11 at 22.34.23.jpeg";

function Portfolio(){

return(

<div className="portfolio">

<section className="hero">
  <div className="hero-top">
    <div className="hero-image-wrap">
      <div className="hero-graphic hero-graphic-left">
        <div className="ai-chip">
          <span>AI</span>
          <div className="chip-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="hero-code-block">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="hero-image-card">
        <img src={whatsappImg} alt="Portfolio preview" />
        <div className="hero-image-ring" />
      </div>

      <div className="hero-graphic hero-graphic-right">
        <div className="hero-code-block alt">
          <span />
          <span />
          <span />
        </div>
        <div className="ai-chip">
          <span>ML</span>
          <div className="chip-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
    <h1 className="name">ARU SHUBHAM SINGH</h1>
    </div>
</section>


<motion.section className="card" whileHover={{scale:1.05}}>

<h2><FaUser/> About Me</h2>

<p>
I am a 2nd year B.Tech student at United College of Engineering and Research
with a strong passion for Coding and also have interest in CyberSecurity . I am actively learning and applying
concepts related to secure systems, vulnerability analysis, and innovative
technology solutions.
</p>

<p>
My goal is to build a strong foundation in Development field along with coding and Problem Solving while continuously
upgrading my skills. I enjoy solving problems, learning new technologies,
and creating projects that make complex tasks easier.
</p>

<p>
<strong>Current Status:</strong> Pursuing B.Tech (2nd Year) | Expected Graduation: 2028
</p>

</motion.section>




<motion.section className="card" whileHover={{scale:1.05}}>

<h2><FaCode/> Skills</h2>

<div className="skills">

<span>C Programming</span>
<span>Python Programming</span>
<span>Java</span>
<span>Linux</span>
<span>Problem Solving</span>
<span>Communication Skills</span>

</div>

</motion.section>



<motion.section className="card" whileHover={{scale:1.05}}>

<h2><FaProjectDiagram/> Projects & Case Studies</h2>

<div className="projects">

<div className="project">

<h3>Cryptocurrency Transaction Analysis</h3>

<p>
Study of cryptocurrency transactions, vulnerabilities,
and cybersecurity risks in decentralized systems.
</p>

</div>

<div className="project">

<h3>AI-Based Healthcare Chatbot – Smart India Hackathon 2024</h3>

<p>
Worked as a team member (team of 6) from United College of Engineering
and Research. Developed the concept of an intelligent AI healthcare
assistant providing instant medical guidance.
</p>

</div>

</div>

</motion.section>



<motion.section className="card" whileHover={{scale:1.05}}>

<h2><FaHeart/> Interests</h2>

<p>
I am deeply interested in connecting and inventing combinations
of electromechanical and computer-related devices.
</p>

</motion.section>



<motion.section className="card contact" whileHover={{scale:1.05}}>

<h2><FaEnvelope/> Get In Touch</h2>

<p>Email: ashubham701080@gmail.com</p>
<p>Phone: +91 70679 24565</p>
<p>Location: Village-Newada Samogar, Allahabad, Uttar Pradesh - 211010</p>

<p className="open">
Open to Internships, freelance projects, and entry-level opportunities
in Cybersecurity, Web Development, and Software Engineering.
</p>

</motion.section>



<style>{`

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Poppins:wght@300;400;500;600&display=swap');

body,html,#root{
margin:0;
padding:0;
height:100%;
width:100%;
background:#020617;
font-family:'Poppins',sans-serif;
}

.portfolio{
min-height:100vh;
width:100%;
max-width:1500px;
margin:0 auto;
padding:60px 6%;
background:linear-gradient(135deg,#020617,#0f172a,#1e293b,#020617);
background-size:400% 400%;
animation:bgMove 15s ease infinite;
color:white;
box-sizing:border-box;
position:relative;
}

.portfolio::before{
content:"";
position:absolute;
inset:0;
border:1px solid rgba(255,255,255,0.12);
pointer-events:none;
}

.hero{
margin-bottom:40px;
}

.hero-top{
display:flex;
flex-direction:column;
align-items:center;
gap:24px;
text-align:center;
margin-bottom:30px;
}

.hero-image-wrap{
position:relative;
display:flex;
align-items:center;
justify-content:center;
gap:24px;
flex-wrap:wrap;
}

.hero-graphic{
display:flex;
flex-direction:column;
gap:20px;
align-items:center;
}

.hero-graphic-left,.hero-graphic-right{
min-width:120px;
}

.ai-chip{
width:120px;
padding:18px 16px;
border-radius:24px;
background:rgba(15,23,42,0.92);
border:1px solid rgba(56,189,248,0.18);
box-shadow:0 20px 50px rgba(56,189,248,0.1);
backdrop-filter:blur(12px);
position:relative;
display:flex;
flex-direction:column;
gap:12px;
align-items:center;
}

.ai-chip span:first-child{
font-size:1.1rem;
font-weight:800;
letter-spacing:0.18em;
color:#38bdf8;
}

.chip-lines{
display:flex;
gap:10px;
width:100%;
justify-content:space-between;
}

.chip-lines span{
width:18px;
height:4px;
background:linear-gradient(135deg, #38bdf8, #8b5cf6);
border-radius:999px;
}

.hero-code-block{
width:120px;
min-height:120px;
border-radius:24px;
background:rgba(255,255,255,0.04);
border:1px solid rgba(255,255,255,0.1);
box-shadow:inset 0 0 0 1px rgba(255,255,255,0.02);
position:relative;
overflow:hidden;
}

.hero-code-block span{
display:block;
width:60%;
height:8px;
margin:14px auto;
background:rgba(56,189,248,0.22);
border-radius:999px;
}

.hero-code-block.alt span{
background:rgba(236,72,153,0.22);
}

.hero-image-card{
width:320px;
height:360px;
border-radius:32px;
overflow:hidden;
position:relative;
background:
  radial-gradient(circle at 20% 20%, rgba(56,189,248,0.28), transparent 25%),
  radial-gradient(circle at 80% 80%, rgba(236,72,153,0.18), transparent 28%),
  linear-gradient(135deg, rgba(15,23,42,0.94), rgba(30,41,59,0.92));
border:1px solid rgba(255,255,255,0.16);
box-shadow:
  0 28px 80px rgba(15,23,42,0.35),
  inset 0 0 0 1px rgba(255,255,255,0.08);
}

.hero-image-card::before{
content:"";
position:absolute;
inset:0;
background:radial-gradient(circle at center, rgba(255,255,255,0.14), transparent 55%);
pointer-events:none;
mix-blend-mode:screen;
}

.hero-image-card::after{
content:"";
position:absolute;
left:12px;
top:12px;
width:48px;
height:48px;
border-radius:50%;
background:rgba(56,189,248,0.12);
box-shadow:0 0 40px rgba(56,189,248,0.2);
pointer-events:none;
}

.hero-image-ring{
position:absolute;
top:50%;
left:50%;
width:340px;
height:340px;
transform:translate(-50%, -50%);
border-radius:50%;
border:1px solid rgba(59,130,246,0.18);
box-shadow:0 0 80px rgba(59,130,246,0.15);
pointer-events:none;
}

.hero-image-card img{
width:100%;
height:100%;
object-fit:cover;
object-position:center top;
}

.name{
display:inline-block;
font-family:'Orbitron',sans-serif;
font-size:clamp(3.2rem,8vw,6.4rem);
font-weight:900;
letter-spacing:5px;
line-height:1;
background:linear-gradient(90deg,#38bdf8,#8b5cf6,#ff80b5,#f97316);
-webkit-background-clip:text;
color:transparent;
text-shadow:
0 0 10px rgba(56,189,248,0.45),
0 0 20px rgba(139,92,246,0.35),
0 20px 45px rgba(0,0,0,0.15);
transition:transform .3s ease;
}

.name:hover{
transform:scale(1.03);
}

.hero-grid{
display:grid;
grid-template-columns:1fr;
gap:16px;
align-items:start;
max-width:900px;
margin:0 auto;
}

.hero-meta{
display:flex;
flex-direction:column;
gap:10px;
font-size:clamp(0.95rem,1vw,1rem);
color:#cbd5e1;
margin-bottom:0;
}

.hero-side{
display:grid;
grid-template-columns:1fr;
gap:20px;
}

.name{

font-family:'Orbitron',sans-serif;

font-size:clamp(3rem,8vw,6rem);

font-weight:800;

letter-spacing:4px;

background:linear-gradient(90deg,#00f0ff,#8b5cf6,#ff008c);

-webkit-background-clip:text;

color:transparent;

text-shadow:
0 0 10px rgba(0,255,255,0.6),
0 0 20px rgba(139,92,246,0.5);

transition:all .4s ease;

}

.name:hover{

transform:scale(1.05);

text-shadow:
0 0 20px #00f0ff,
0 0 40px #8b5cf6;

}

.role{
font-size:clamp(1.5rem,3vw,2rem);
margin-top:10px;
}

.college{
opacity:.8;
margin-bottom:10px;
}

.tagline{
font-size:clamp(1rem,1.5vw,1.2rem);
margin:10px auto;
max-width:700px;
}

.intro{
max-width:800px;
margin:auto;
opacity:.9;
}

.card{
background:rgba(255,255,255,0.05);
border:1px solid rgba(255,255,255,0.1);
backdrop-filter:blur(12px);
padding:30px;
margin:30px 0;
border-radius:18px;
transition:.4s;
}

.card:hover{
box-shadow:0 0 35px rgba(0,255,255,.3);
transform:translateY(-5px);
}

.card h2{
font-size:clamp(1.5rem,2vw,2rem);
margin-bottom:15px;
display:flex;
align-items:center;
gap:10px;
color:#38bdf8;
}

p{
font-size:clamp(0.95rem,1.1vw,1.1rem);
line-height:1.7;
opacity:.9;
}

.skills{
display:flex;
flex-wrap:wrap;
gap:12px;
}

.skills span{
background:#111827;
padding:8px 16px;
border-radius:20px;
border:1px solid #374151;
}

.projects{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.project{
background:#111827;
padding:20px;
border-radius:12px;
}

.contact p{
margin:6px 0;
}

.open{
margin-top:12px;
color:#38bdf8;
}

@keyframes bgMove{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

@keyframes rotateRing{
0%{transform:rotate(0deg);}
100%{transform:rotate(360deg);}
}

@media(max-width:1024px){
.hero-grid{
grid-template-columns:1fr;
}

.hero-image{
margin:0 auto;
max-width:520px;
}
}

@media(max-width:768px){

.name{
font-size:40px;
}

.hero{
padding-top:0;
}

.projects{
grid-template-columns:1fr;
}

}

`}</style>

</div>

)

}

export default Portfolio;