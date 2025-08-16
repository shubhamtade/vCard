import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
import "./App.css";

function App() {
  const skills = [
    "Graphics Design",
    "Video Editing",
    "Frontend Dev",
    "Backend Dev",
    "Mobile Apps",
    "Windows Apps",
  ];

  return (
    <div className="cinema-hero">
      {/* Starfield background */}
      <div className="stars"></div>
      
     

      {/* Glass Card with cinematic entry */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="name">
          <span className="shine">Shubham Tade</span>
        </h1>
        <p className="tagline">
          Graphics Designer • Video Editor • Fullstack Developer
        </p>

        <div className="contact">
          <p>
            <Phone size={18} /> 9822147873
          </p>
          <p>
            <Mail size={18} /> shubham.tade@gmail.com
          </p>
        </div>

        <div className="skills">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              className="skill"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2, duration: 0.6 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="socials">
          <a href="#">
            <Github size={22} />
          </a>
          <a href="#">
            <Linkedin size={22} />
          </a>
          <a href="#">
            <FileText size={22} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
