import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Building2,
  Calendar,
  ExternalLink,
  Award,
  Briefcase,
} from "lucide-react";

// Enhanced work experience data with skills and achievements
const work = [
  {
    name: "Togather",
    position: "Technical Lead",
    url: "https://www.togather.com",
    startDate: "2024-05-01",
    summary: `Togather provides a cutting-edge platform that revolutionises the way people connect and collaborate for events. Combining advanced technology with user-friendly design, Togather streamlines the planning process, enabling users to easily organise and promote events while fostering meaningful connections.`,
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "AWS",
      "Team Leadership",
      "Agile",
      "CI/CD",
      "System Architecture",
    ],
    achievements:
      "Led the development of a scalable event management platform with 30% improved performance metrics and 25% increase in user engagement.",
    highlights: [
      "As a Tech Lead, spearheaded the development and optimisation of the Togather platform, collaborating with cross-functional teams to ensure a seamless user experience.",
      "Drove team growth and development, fostering a culture of innovation and collaboration while expanding the engineering team to meet the demands of a rapidly growing user base.",
      "Played a pivotal role in the recruitment and onboarding process, selecting top talent to enhance the technical capabilities and strategic direction of the team.",
      "Engaged in product development, providing technical insights that shaped the design and implementation of features tailored to user needs.",
      "Committed to mentoring and supporting team members, encouraging continuous learning and professional development to advance their skills and careers.",
    ],
  },
  {
    name: "MachineMax Ltd",
    position: "Engineering Manager",
    url: "https://www.machinemax.com",
    startDate: "2018-09-01",
    endDate: "2024-04-01",
    summary: `MachineMax offers a unique and innovative solution that helps businesses manage their heavy equipment more efficiently. The solution combines IoT sensors, machine learning algorithms, and a cloud-based platform to provide real-time insights into machine utilisation, maintenance, and performance.`,
    skills: [
      "React",
      "TypeScript",
      "IoT",
      "Cloud Architecture",
      "Engineering Management",
      "Agile",
      "Product Development",
      "Team Scaling",
    ],
    achievements:
      "Successfully scaled the engineering team from 4 to 18 members while implementing a modern React architecture that improved application performance by 40%.",
    highlights: [
      "Drove innovation and growth as a key contributor to the React web application, overseeing codebase maintenance and implementing numerous feature enhancements utilising the latest React framework advancements.",
      "As an Engineering Manager, led team expansion efforts from a core group of 4 to a dynamic team of 18, supplemented by offshore contractors, ensuring the efficient scaling of the development team.",
      "Played a pivotal role in the recruitment process, contributing to the selection and onboarding of a new Chief Technology Officer (CTO) to further strengthen the company's technical leadership.",
      "Actively participated in product development, injecting engineering insights into design and wireframe testing phases, ensuring a seamless alignment of engineering principles with product objectives.",
      "Dedicatedly engaged in mentorship and professional development initiatives, fostering a culture of continuous learning and growth within the team.",
    ],
  },
  {
    name: "iOS Developer and Book Author",
    position: "Freelance",
    url: "http://www.riccardorizzo.eu",
    startDate: "2014-03-01",
    endDate: "2018-08-01",
    summary: `Independent software developer specialising in iOS applications and technical author with published works on Artificial Intelligence and Computer Security.`,
    skills: [
      "Swift",
      "Objective-C",
      "iOS Development",
      "Ruby on Rails",
      "Technical Writing",
      "Windows Development",
      "C#",
    ],
    achievements:
      "Published two technical books on Amazon and developed multiple commercial iOS applications with a combined user base of over 50,000.",
    highlights: [
      "Demonstrated versatility and expertise by developing a multitude of applications for iOS and Windows platforms, showcasing proficiency in Swift, Objective-C, and Windows development technologies.",
      "Currently, actively engaged in the development of two web applications utilising Ruby on Rails, emphasising adaptability and the ability to work with diverse technology stacks.",
      "Authored two published books available on platforms such as Amazon and other major retailers. The first book delves into Artificial Intelligence, while the second one focuses on Computer Security.",
      "Contributed to the tech community by writing articles on Swift Development, sharing knowledge and insights on various websites.",
      "Demonstrated a commitment to open-source development by maintaining an active GitHub account, housing numerous personal projects and resources.",
    ],
  },
  {
    name: "Roostit",
    position: "iOS Developer",
    url: "https://www.roostit.com",
    startDate: "2015-10-01",
    endDate: "2016-12-01",
    summary: `Led the management and oversight of the "Roostit Home Manager" iOS application, a comprehensive solution for homeowners to manage their property information and documents.`,
    skills: [
      "Swift",
      "iOS Development",
      "UI/UX Design",
      "RESTful APIs",
      "Backend Integration",
      "Testing",
    ],
    achievements:
      "Improved app store rating from 3.2 to 4.7 stars through strategic feature enhancements and performance optimisations.",
    highlights: [
      "Spearheaded a regime of continuous maintenance, implementing regular upgrades and add-ons to enhance the app's performance and feature set, maintaining its competitiveness in the market.",
      "Conducted rigorous testing procedures to identify and rectify issues, with a special focus on the seamless functionality of the backend interface, enhancing overall user experience and data integrity.",
    ],
  },
  {
    name: "2858 Security srl",
    position: "Software Developer, IT and System Admin",
    url: "http://www.2858.it",
    startDate: "2008-12-01",
    endDate: "2018-08-01",
    summary: `2858 Security is a private company that deals with security at 360 degrees, providing comprehensive solutions for both physical and digital security challenges.`,
    skills: [
      "C#",
      "iOS Development",
      "Windows Development",
      "Hyper-V",
      "AWS",
      "System Administration",
      "Team Leadership",
    ],
    achievements:
      "Led a team of 4 engineers in a successful collaborative project with The University of Catania, delivering a security solution that reduced incident response time by 35%.",
    highlights: [
      "Demonstrated expertise in software development for iOS devices and Windows using C#, contributing to the creation of numerous applications with a strong focus on user experience and functionality.",
      "Actively engaged in IT infrastructure management, effectively orchestrating the migration of virtual machines within Hyper-V and AWS environments, ensuring optimal performance and resource allocation.",
      "As a team leader, successfully managed a group of 4 engineers in a collaborative project with The University of Catania.",
    ],
  },
  {
    name: "HT Srl",
    position: "Co-Founder and Lead developer",
    url: "https://www.htsrl.com",
    startDate: "2007-04-01",
    endDate: "2008-12-01",
    summary: `Co-founder of HT srl, an innovative startup focused on research & development in the robotics field, creating cutting-edge solutions for industrial and commercial applications.`,
    skills: [
      "C#",
      "FLEX 3",
      "UI Design",
      "Robotics",
      "Embedded Systems",
      "Wi-Fi",
      "GPRS",
      "Startup Leadership",
    ],
    achievements:
      "Successfully designed and developed a crawler robot with Wi-Fi and GPRS connectivity, which was adopted by 3 industrial clients.",
    highlights: [
      "Pioneered the establishment of a Robotics R&D startup, playing a pivotal role in its inception and growth.",
      "Led the development efforts with a strong focus on user interface design, leveraging the FLEX 3 framework to create intuitive and user-friendly interfaces.",
      "Demonstrated technical prowess by engineering the backend infrastructure using C#, ensuring robust data processing and system functionality.",
      "Achieved a significant milestone by successfully designing and developing a crawler robot equipped with Wi-Fi and GPRS connectivity.",
    ],
  },
  {
    name: "Tecnowork",
    position: "Software developer, Electronic engineer",
    url: "https://www.tecnowork.it",
    startDate: "2001-09-01",
    endDate: "2007-04-01",
    summary: `Tecnowork was a custom electronic company which mission was to build custom electronic appliances for both consumer and specialized markets, including military applications.`,
    skills: [
      "C/C++",
      "Firmware Development",
      "Electronic Design",
      "CAD",
      "Team Management",
      "Hardware Integration",
    ],
    achievements:
      "Grew from first employee to team leader of 9 professionals, delivering projects for the Italian army and consumer market.",
    highlights: [
      "Joined as the inaugural employee of the organisation, assuming a pivotal role in its establishment and growth.",
      "Proficiently contributed to software development using C/C++, firmware development, and electronic design using CAD tools, showcasing technical versatility and adaptability.",
      "Demonstrated exceptional growth within the company, ultimately overseeing a team of 9 professionals, with diverse projects spanning from consumer devices to specialised equipment designed for the Italian army.",
    ],
  },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}

// Calculate total years of experience
function calculateTotalExperience() {
  let totalMonths = 0;

  interface JobPeriod {
    startDate: Date;
    endDate: Date;
  }

  const jobPeriods: JobPeriod[] = [];

  // First collect all job periods
  work.forEach((job) => {
    const startDate = new Date(job.startDate);
    const endDate = job.endDate ? new Date(job.endDate) : new Date();

    jobPeriods.push({ startDate, endDate });
  });

  // Sort periods by start date
  jobPeriods.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  // Merge overlapping periods
  const mergedPeriods: JobPeriod[] = [];
  if (jobPeriods.length > 0) {
    let currentPeriod: JobPeriod = { ...jobPeriods[0] };

    for (let i = 1; i < jobPeriods.length; i++) {
      const period = jobPeriods[i];

      // If current period overlaps with the next one
      if (period.startDate <= currentPeriod.endDate) {
        // Extend current period if the next one ends later
        if (period.endDate > currentPeriod.endDate) {
          currentPeriod.endDate = period.endDate;
        }
      } else {
        // No overlap, add current period to result and start a new one
        mergedPeriods.push(currentPeriod);
        currentPeriod = { ...period };
      }
    }

    // Add the last period
    mergedPeriods.push(currentPeriod);
  }

  // Calculate total months from merged periods
  mergedPeriods.forEach(({ startDate, endDate }) => {
    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    totalMonths += months;
  });

  return Math.round(totalMonths / 12);
}

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const totalYearsExperience = calculateTotalExperience();

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over{" "}
            <span className="font-semibold text-primary">
              {totalYearsExperience}+ years
            </span>{" "}
            of experience in software development, engineering leadership, and
            technical innovation.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl">
          {/* Timeline line - more refined with gradient */}
          <div className="absolute left-0 md:left-[60px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/10 via-primary/50 to-primary/10 hidden md:block z-0" />

          <div className="space-y-10">
            {work.map((job, index) => (
              <motion.div
                key={job.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Year label on timeline */}
                <div className="absolute left-0 md:left-[60px] -translate-x-1/2 top-6 hidden md:block z-10">
                  <div className="bg-background px-3 py-1 rounded-full border border-primary/20 shadow-sm text-center min-w-[60px] h-[26px] flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {new Date(job.startDate).getFullYear()}
                    </span>
                  </div>
                </div>

                {/* Connector line from timeline to card */}
                <div className="absolute left-0 md:left-[60px] top-[35px] h-[2px] w-[40px] bg-primary/30 hidden md:block"></div>

                {/* Job card with offset for timeline */}
                <div className="md:ml-[100px]">
                  <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                        {/* Job metadata */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">
                            {job.position}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4 text-primary" />
                            <a
                              href={job.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors flex items-center gap-1"
                            >
                              {job.name}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>
                              {formatDate(job.startDate)} -{" "}
                              {job.endDate
                                ? formatDate(job.endDate)
                                : "Present"}
                            </span>
                          </div>

                          {/* Key achievement */}
                          <div className="flex items-start gap-2 pt-2">
                            <Award className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">
                              {job.achievements}
                            </p>
                          </div>
                        </div>

                        {/* Job details */}
                        <div className="space-y-4">
                          <p className="text-muted-foreground">{job.summary}</p>

                          {/* Skills tags */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {job.skills.map((skill, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-primary/5"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <Button
                            variant="ghost"
                            className="w-full justify-between mt-2"
                            onClick={() =>
                              setExpandedId(
                                expandedId === job.name ? null : job.name
                              )
                            }
                          >
                            {expandedId === job.name
                              ? "Show Less"
                              : "Show Responsibilities"}
                            <motion.div
                              animate={{
                                rotate: expandedId === job.name ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </Button>

                          <AnimatePresence>
                            {expandedId === job.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                                  {job.highlights.map((highlight, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                    >
                                      {highlight}
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
