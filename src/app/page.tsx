"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  GraduationCap, 
  Award,
  Calendar,
  ExternalLink,
  Github
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/navigation";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Yiannis Grigoriou
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Engineer
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Specializing in Embedded Software Development using the NVIDIA Jetson platform, 
              Risk Assessment for UAS, and Requirements gathering. Currently working at KIOS 
              Research and Innovation Center of Excellence.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nicosia, Cyprus</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:yiannisgrigoriou15@gmail.com" className="hover:text-primary transition-colors">
                  yiannisgrigoriou15@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button asChild>
                <a href="https://linkedin.com/in/yiannis-grigoriou" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:yiannisgrigoriou15@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">About</h2>
            <p className="text-muted-foreground">Education and Certifications</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">University of Cyprus</h3>
                    <p className="text-muted-foreground">BSc in Computer Engineering</p>
                    <p className="text-sm text-muted-foreground">Sep 2019 – May 2023</p>
                    <p className="text-sm text-muted-foreground">GPA: 8.12 / 10.00</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-foreground">Georgia Institute of Technology</h3>
                    <p className="text-muted-foreground">MSc in Computer Science</p>
                    <p className="text-sm text-muted-foreground">Aug 2025 – Present</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Remote Pilot Certificate – Standard Scenarios (EASA)</h3>
                    <p className="text-sm text-muted-foreground">Jan 2024 – Jan 2029</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-semibold text-foreground">A1/A3 Certificate – Open Category (EASA)</h3>
                    <p className="text-sm text-muted-foreground">Jan 2024 – Jan 2029</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Skills</h2>
            <p className="text-muted-foreground">Technical Expertise & Technologies</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Python", "JavaScript", "Java", "SQL", "Assembly", "Bash"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Embedded Systems & UAV</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["NVIDIA Jetson", "DJI OSDK", "DJI PSDK", "ROS", "TensorRT", "ONNX", "OpenCV"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Machine Learning & AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["TensorFlow", "Reservoir Computing", "Transformer Models", "Multi-task Learning", "Computer Vision", "State Estimation"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Development Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "CMake", "Qt5", "Qt Designer", "VSCode", "Linux", "Docker"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Web Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", ".NET", "HTTP", "WebSockets", "REST APIs"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Specialized Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["EASA Regulations", "Risk Assessment", "UAS Operations", "Computer Architecture", "Cache Systems", "MIPS32"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-muted-foreground">Professional Journey</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Engineer</CardTitle>
                      <CardDescription>KIOS Research and Innovation Center of Excellence</CardDescription>
                    </div>
                    <Badge variant="secondary">Sep 2023 – Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Member of the KIOS Drones Team, contributing to drone operations and technology development</li>
                    <li>• Liaison Officer with Cyprus Police</li>
                    <li>• Developed tools using C++, DJI-OSDK, Python for optimized drone operations</li>
                    <li>• Deployed machine learning algorithms on Jetson platforms</li>
                    <li>• Documented and configured Jetson setups</li>
                    <li>• Performed risk assessments and developed SOPs under EASA regulations</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Assistant Developer Intern</CardTitle>
                      <CardDescription>Deloitte</CardDescription>
                    </div>
                    <Badge variant="secondary">Jun 2022 – Aug 2022</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Built survey tool frontend (JavaScript/HTML/CSS)</li>
                    <li>• Developed middleware with HTTP/.NET/SQL</li>
                    <li>• Worked in an Agile environment</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Data Specialist</CardTitle>
                      <CardDescription>Iron Mountain</CardDescription>
                    </div>
                    <Badge variant="secondary">Jul 2021 – Sep 2021</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sanitized, classified, and digitized documents</li>
                    <li>• Trained by the Central Bank of Cyprus on document sensitivity</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Projects</h2>
            <p className="text-muted-foreground">Major Projects and Achievements</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Onboard UAV State Estimation and Trajectory Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed a real-time UAV system using a Transformer + Reservoir Computing multi-task framework. 
                    Created a multi-modal sensor dataset for GPS-free localization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C++", "DJI OSDK", "ROS", "TensorFlow", "ONNX", "Git", "OpenCV"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Auxiliary Control System for Drone Resilience under Jamming Attacks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a backup LTE-based control system for GNSS-denied environments. 
                    Integrated with DJI PSDK and WebSockets.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "DJI PSDK", "WebSockets", "CMake", "Git"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Autonomous Onboard Power Infrastructure Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Integrated pole detection on Jetson Xavier NX for ICARUS project. 
                    Conducted field deployments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Bash", "DJI OSDK", "ONNX", "TensorRT", "Git"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Cache Simulator Enhancements (Ripes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Implemented replacement policies, stats, L2 cache, and heatmap views.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["C++", "Qt5", "Qt Designer", "CMake", "Git"].map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>MIPS32 Simulator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built a cycle-accurate MIPS32 architecture simulator.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">C++</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Publications</h2>
            <p className="text-muted-foreground">Research and Academic Work</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                title: "Enhancing the Safety of Multi-UAS Urban Operations with SORA",
                doi: "10.1109/ICUAS60882.2024.10557071",
                url: "https://doi.org/10.1109/ICUAS60882.2024.10557071"
              },
              {
                title: "An Onboard UAV Multi-task System for Trajectory Prediction and State Estimation",
                doi: "10.1145/3725893",
                url: "https://dl.acm.org/doi/10.1145/3725893"
              },
              {
                title: "Onboard UAV State Estimation and Trajectory Prediction Using Multi-Task Reservoir Computing",
                doi: "10.1109/ICUAS65942.2025.11007856",
                url: "https://doi.org/10.1109/ICUAS65942.2025.11007856"
              },
              {
                title: "Drone Onboard Multi-modal Sensor Dataset for Complex Outdoor Scenarios",
                doi: "10.5281/zenodo.13682870",
                url: "https://doi.org/10.5281/zenodo.13682870"
              },
              {
                title: "Drone Onboard Multi-modal Sensor and Feature-Based Visual Odometry Dataset",
                doi: "10.5281/zenodo.15089283",
                url: "https://doi.org/10.5281/zenodo.15089283"
              }
            ].map((publication, index) => (
              <motion.div key={publication.doi} variants={fadeInUp}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">{publication.title}</h3>
                        <p className="text-sm text-muted-foreground">DOI: {publication.doi}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={publication.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Removed as per user request */}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Yiannis Grigoriou. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
