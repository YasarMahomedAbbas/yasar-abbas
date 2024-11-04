"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, ChevronDown, ChevronUp, Globe, Book, Coffee, Gamepad, Briefcase, GraduationCap, BadgeCheck   } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export function EnhancedPersonalWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply custom color scheme
    document.documentElement.style.setProperty('--background', darkMode ? '220 20% 15%' : '210 50% 98%')
    document.documentElement.style.setProperty('--foreground', darkMode ? '220 13% 91%' : '220 20% 23%')
    document.documentElement.style.setProperty('--muted', darkMode ? '220 16% 22%' : '210 40% 96%')
    document.documentElement.style.setProperty('--muted-foreground', darkMode ? '220 14% 63%' : '220 15% 35%')
    document.documentElement.style.setProperty('--popover', darkMode ? '220 24% 23%' : '0 0% 100%')
    document.documentElement.style.setProperty('--popover-foreground', darkMode ? '220 13% 91%' : '220 20% 23%')
    document.documentElement.style.setProperty('--card', darkMode ? '220 24% 23%' : '0 0% 100%')
    document.documentElement.style.setProperty('--card-foreground', darkMode ? '220 13% 91%' : '220 20% 23%')
    document.documentElement.style.setProperty('--border', darkMode ? '220 24% 32%' : '220 13% 91%')
    document.documentElement.style.setProperty('--input', darkMode ? '220 24% 32%' : '210 40% 96%')
    document.documentElement.style.setProperty('--primary', darkMode ? '217 91% 67%' : '200 85% 45%')
    document.documentElement.style.setProperty('--primary-foreground', darkMode ? '220 16% 14%' : '0 0% 100%')
    document.documentElement.style.setProperty('--secondary', darkMode ? '220 24% 23%' : '210 40% 96%')
    document.documentElement.style.setProperty('--secondary-foreground', darkMode ? '220 13% 91%' : '220 20% 23%')
    document.documentElement.style.setProperty('--accent', darkMode ? '220 15% 35%' : '210 40% 96%')
    document.documentElement.style.setProperty('--accent-foreground', darkMode ? '220 13% 91%' : '220 20% 23%')
    document.documentElement.style.setProperty('--destructive', '0 84% 57%')
    document.documentElement.style.setProperty('--destructive-foreground', '0 0% 98%')
    document.documentElement.style.setProperty('--ring', darkMode ? '217 91% 67%' : '200 85% 45%')

    // Apply theme to body
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
    // Save theme preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const personalInfo = {
    name: "Yasar Abbas",
    title: "Software Developer",
    languages: ["English (Native)", "German (Basic)", "Dutch (Learning)"],
    hobbies: ["Gaming", "Hiking", "Home Automation"],
  }

  const timelineData = [
    {
      title: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      items: [
        {
          name: "Master of Science, Computer Science",
          project: "The Design and Implementation of an Intelligent Agent to Play Kriegspiel Chess, an Imperfect Information Game",
          description: "Using a deep counter factual regret minimization algorithm to train ai agent to play Kriegspiel chess",
          tools: ["TensorFlow", "Reinforcement Learning", "High Performance Computing"],
          roles: []
        },
        {
          name: "Bachelor of Science (Honours), Computer Science",
          project: "Kriegspiel Chess Game for Information Superiority Demonstration",
          description: "Built an engine that allowed users to create their own varients of chess. Users were able to define new pieces, with unique movements and varying levels of vision. ",
          tools: ["Artifical Intelligence", "Cryptography", "BioInformatics"],
          roles: []
        },
        {
          name: "Bachelor's Degree",
          description: "",
          tools: ["Java", "Python", "C++", "NLP"],
          rolls: []
        },
      ],
    },
    {
      title: "Work Experience",
      icon: <Briefcase className="h-6 w-6" />,
      items: [
        {
          name: "Maas Software Engineering",
          roles: [
            {
              title: "Full Stack Developer",
              period: "2024 - Present",
              description: `
                • .NET developer working on the Marine Facilities Planning
                • Implemented communications from a research vessel to enable real time reporting and tracking
                • Implemented a comprehensive carbon emission analysis tool for end to end journeys
                • Part of the infosec team that ensures all software is secure and compliant
              `,
              tools: ["DotNet", "JavaScript", "Micrsoft Azure", "MSSQL", "MVC", "Web API", "Security"],
            }
          ],
        },
        {
          name: "ThoroughTec Simulations",
          roles: [
            {
              title: "Lead Unity Developer",
              period: "2022 - 2024",
              description: `
                • Developing mining vehicle simulations using Unity3D
                • Managing 7 developers (3 senior, 1 intermediate, 3 juniors) and 2 testers
                • Conducting standups, sprint planning overall team organization e.g. leave, performance appraisals
                • Interdepartmental communication
                • Progress report to management and exco
                • On site data/requirement gathering
              `,
              tools: ["Unity3D", "DotNet", "Leadership", "Project Management", "Sprint Planning", "Team Building"],
            },
            {
              title: "Junior Lead Unity Developer",
              period: "2021 - 2022",
              description: `
                • Developing mining vehicle simulations using Unity3D
                • Working with Software Manager to manage a team of 3 developers and 1 tester
                • Conducting standups, sprint planning, retrospectives
                • Team building and communication exercises
                • Progress reports to management
              `,
              tools: ["Unity3D", "DotNet", "Leadership", "Sprint Planning"],
            },
            {
              title: "Unity Developer",
              period: "2019 - 2021",
              description: `
                • Developing mining vehicle simulations using Unity3D
                • Implemented an automated drive train testing environment, reporting data such as vehicle speed
                • Implemented a plug and play simulation of a vehicle avoidance and intervention system (VIS/CAS System)
              `,
              tools: ["Unity3D", "Unity DevOps", "DotNet", "Angular"],
            },
          ],
        },
        {
          name: "University Of KwaZulu-Natal",
          roles: [
            {
              title: "Computer Science Tutor",
              period: "2017 - 2019",
              description: "Tutoring and guiding undergraduate students of computer science",
              tools: ["Python", "Java"],
            },
          ],
        },
      ],
    },
  ]

  const skills = [
    {
      category: "AI Algorithms",
      items: ["Reinforcement Learning", "Regret Minimization", "Neural Networks", "Genetic Algorithms", "Natural Language Processing"],
    },
    {
      category: "AI Tools",
      items: ["Ollama", "Stable Diffusion", "Flux", "TensorFlow", "PyTorch"],
    },
    {
      category: "Programming Languages",
      items: ["C#","JavaScript", "TypeScript", "Dart", "Python", "Java", "C++"],
    },
    {
      category: "Development Tools",
      items: ["Git", "Docker", "Jenkins", "Jira", "Confluence"],
    },
    {
      category: "Libraries & Frameworks",
      items: ["ASP.Net Core", ".Net Framework", "React", "Next.js", "Node.js", "Django"],
    },
    {
      category: "Testing Frameworks",
      items: ["NUnit","MSTest", "Moq", "pytest", "flutter_test"],
    },
    {
      category: "Game Development Tools",
      items: ["Unity3D", "Plastic SCM"],
    },
    {
      category: "Mobile Development Tools",
      items: ["Flutter", "Android Studio"],
    },
    {
      category: "Design Tools",
      items: ["Figma"],
    }
  ]

  return (
    <div className={`min-h-screen bg-background text-foreground ${darkMode ? "dark" : ""} font-sans ${roboto.className}`}>
      <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-background to-secondary">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-primary">{personalInfo.name}</h1>
            <p className="text-xl font-normal text-muted-foreground">{personalInfo.title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 text-yellow-400'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-primary" /> Languages
                  </h3>
                  <ul className="list-disc list-inside">
                    {personalInfo.languages.map((lang, index) => (
                      <li key={index} className="text-muted-foreground">{lang}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Coffee className="mr-2 h-5 w-5 text-primary" /> Hobbies
                  </h3>
                  <ul className="list-disc list-inside">
                    {personalInfo.hobbies.map((hobby, index) => (
                      <li key={index} className="text-muted-foreground">{hobby}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <main>
          {timelineData.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
            >
              <Card className="mb-6 overflow-hidden">
                <CardHeader className="bg-muted text-foreground flex flex-row items-center">
                  {section.icon}
                  <CardTitle className="ml-2 text-2xl font-bold">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="pl-4 border-l-2 border-primary">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        className="mb-4 relative"
                      >
                        <div className="absolute -left-6 top-2 w-4 h-4 bg-primary rounded-full" />
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                          {section.title === "Work Experience" && (
                            <div>
                              {item.roles?.map((role: { title: string; period: string; description: string; tools: string[] }, roleIndex: number) => (
                                <div key={roleIndex} className="mt-2">
                                  <div className="flex justify-between items-center">
                                    <p className="text-sm font-medium text-secondary-foreground">
                                      {role.title} | {role.period}
                                    </p>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => toggleSection(`${section.title}-${itemIndex}-${roleIndex}`)}
                                      aria-label={expandedSections[`${section.title}-${itemIndex}-${roleIndex}`] ? "Collapse role details" : "Expand role details"}
                                    >
                                      {expandedSections[`${section.title}-${itemIndex}-${roleIndex}`] ? (
                                        <ChevronUp className="h-4 w-4" />
                                      ) : (
                                        <ChevronDown className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </div>
                                  <AnimatePresence>
                                    {expandedSections[`${section.title}-${itemIndex}-${roleIndex}`] && (
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <div className="mt-2">
                                          {role.description.split('\n').map((line, index) => (
                                            <p key={index} className="text-sm text-muted-foreground mt-1">
                                              {line}
                                            </p>
                                          ))}
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                          {role.tools.map((tool: string, toolIndex: number) => (
                                            <Badge key={toolIndex} variant="outline" className="text-xs">
                                              {tool}
                                            </Badge>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              ))}
                            </div>
                          )}
                          {section.title === "Education" && (
                            <>
                              <div className="flex justify-between items-center">
                                {'project' in item ? (
                                  <p className="text-sm font-medium text-secondary-foreground">
                                    Project: {(item as { project: string }).project}
                                  </p>
                                ) : (
                                  <p className="text-sm font-medium text-secondary-foreground">
                                    {item.name}
                                  </p>
                                )}
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleSection(`${section.title}-${itemIndex}`)}
                                  aria-label={expandedSections[`${section.title}-${itemIndex}`] ? "Collapse education details" : "Expand education details"}
                                >
                                  {expandedSections[`${section.title}-${itemIndex}`] ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                              <AnimatePresence>
                                {expandedSections[`${section.title}-${itemIndex}`] && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {'description' in item ? item.description : ''}
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                      {'tools' in item && Array.isArray(item.tools) && item.tools.map((tool, toolIndex) => (
                                        <Badge key={toolIndex} variant="outline" className="text-xs">
                                          <GraduationCap className="mr-1 h-3 w-3" />
                                          {tool}
                                        </Badge>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card>
              <CardHeader className="bg-muted text-foreground flex flex-row items-center">
                <BadgeCheck className="h-6 w-6" />
                  <CardTitle className="ml-2 text-2xl font-bold">Skills</CardTitle>
                </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-secondary rounded-lg p-4 shadow-md" // Added rounded-lg here
                    >
                      <h3 className="text-lg font-bold mb-3 text-primary flex items-center">
                        {category.category === "AI Algorithms" ? (
                          <Book className="mr-2 h-5 w-5" />
                        ) : category.category === "AI Tools" ? (
                          <GraduationCap className="mr-2 h-5 w-5" />
                        ) : category.category === "Game Development Tools" ? (
                          <Gamepad className="mr-2 h-5 w-5" />
                        ) : (
                          <Book className="mr-2 h-5 w-5" />
                        )}
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-sm bg-primary text-primary-foreground rounded-full px-3 py-1 cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}