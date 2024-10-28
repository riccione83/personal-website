/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: "Togather",
    position: "Technical Lead",
    url: "https://www.togather.com",
    startDate: "2024-05-01",
    summary: `Togather provides a cutting-edge platform that revolutionizes the way people connect and collaborate for events. Combining advanced technology with user-friendly design, Togather streamlines the planning process, enabling users to easily organize and promote events while fostering meaningful connections. The platform enhances community engagement and supports a diverse range of gatherings, from intimate meetups to large conferences, making event planning accessible and efficient for all.`,
    highlights: [
      "As a Tech Lead, spearheaded the development and optimization of the Togather platform, collaborating with cross-functional teams to ensure a seamless user experience.",
      "Drove team growth and development, fostering a culture of innovation and collaboration while expanding the engineering team to meet the demands of a rapidly growing user base.",
      "Played a pivotal role in the recruitment and onboarding process, selecting top talent to enhance the technical capabilities and strategic direction of the team.",
      "Engaged in product development, providing technical insights that shaped the design and implementation of features tailored to user needs.",
      "Committed to mentoring and supporting team members, encouraging continuous learning and professional development to advance their skills and careers.",
      "Maintained a hands-on leadership approach, actively participating in software development and technical decision-making to uphold high standards within the team.",
      "This updated description showcases your leadership role at Togather, presenting a compelling narrative that highlights your impact in the tech industry.",
      "Led the implementation of new features that drive user engagement and streamline event management processes, leveraging the latest technologies to foster innovation.",
    ],
  },
  {
    name: "MachineMax Ltd",
    position: "Engineering Manager",
    url: "https://www.machinemax.com",
    startDate: "2018-09-01",
    endDate: "2024-30-04",
    summary: `MachineMax offers a unique and innovative solution that helps businesses manage their heavy equipment more efficiently. The solution combines IoT sensors, machine learning algorithms, and a cloud-based platform to provide real-time insights into machine utilisation, maintenance, and performance. With MachineMax, businesses can reduce downtime, optimise fuel consumption, and minimise the risk of breakdowns.`,
    highlights: [
      "Drove innovation and growth as a key contributor to the React web application, overseeing codebase maintenance and implementing numerous feature enhancements utilizing the latest React framework advancements.",
      "As an Engineering Manager, led team expansion efforts from a core group of 4 to a dynamic team of 18, supplemented by offshore contractors, ensuring the efficient scaling of the development team.",
      "Played a pivotal role in the recruitment process, contributing to the selection and onboarding of a new Chief Technology Officer (CTO) to further strengthen the company's technical leadership.",
      "Actively participated in product development, injecting engineering insights into design and wireframe testing phases, ensuring a seamless alignment of engineering principles with product objectives.",
      "Dedicatedly engaged in mentorship and professional development initiatives, fostering a culture of continuous learning and growth within the team.",
      "Maintained a hands-on approach to leadership, setting a high standard by actively participating in software development across the entire spectrum of responsibilities.",
      "This revised description provides a clearer and more structured account of your contributions and leadership at MachineMax, making it more appealing to potential employers, especially at top tech companies like Google.",
      "Spearheaded the development of the primary iOS application for both iPhone and iPad, leveraging expertise in Swift and iOS development to deliver a robust and user-friendly product.",
    ],
  },
  {
    name: "iOS Developer and Book Author",
    position: "Freelance",
    url: "http://www.riccardorizzo.eu",
    startDate: "2014-03-01",
    endDate: "2018-08-01",
    summary: `iOS Developer in Swift and Book Author.`,
    highlights: [
      "Demonstrated versatility and expertise by developing a multitude of applications for iOS and Windows platforms, showcasing proficiency in Swift, Objective-C, and Windows development technologies.",
      "Currently, actively engaged in the development of two web applications utilizing Ruby on Rails, emphasizing adaptability and the ability to work with diverse technology stacks.",
      "Authored two published books available on platforms such as Amazon and other major retailers. The first book delves into Artificial Intelligence, while the second one focuses on Computer Security, with a special emphasis on Mobile Security and algorithmic principles.",
      "Contributed to the tech community by writing articles on Swift Development, sharing knowledge and insights on various websites, and further establishing expertise and thought leadership in the field.",
      "Demonstrated a commitment to open-source development by maintaining an active GitHub account, housing numerous personal projects and resources that showcase technical prowess and commitment to the developer community.",
    ],
  },
  {
    name: "Roostit",
    position: "iOS Developer",
    url: "https://www.roostit.com",
    startDate: "2015-10-01",
    endDate: "2016-12-01",
    summary: `Led the management and oversight of the "Roostit Home Manager" iOS application`,
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
    summary: `2858 Security is a private company that deal with security at 360 degrees.`,
    highlights: [
      "Demonstrated expertise in software development for iOS devices and Windows using C#, contributing to the creation of numerous applications with a strong focus on user experience and functionality.",
      "Actively engaged in IT infrastructure management, effectively orchestrating the migration of virtual machines within Hyper-V and AWS environments, ensuring optimal performance and resource allocation.",
      "As a team leader, successfully managed a group of 4 engineers in a collaborative project with The University of Catania. The project's goal was to develop a solution capable of distinguishing emotional language from an audio stream captured by a Smartwatch, highlighting your technical leadership and collaboration skills.",
    ],
  },
  {
    name: "HT Srl",
    position: "Co-Founder and Lead developer",
    url: "https://www.htsrl.com",
    startDate: "2007-04-01",
    endDate: "2008-12-01",
    summary: `Co-founder of HR srl, startup for research & development in robotic field.`,
    highlights: [
      "Pioneered the establishment of a Robotics R&D startup, playing a pivotal role in its inception and growth.",
      "Led the development efforts with a strong focus on user interface design, leveraging the FLEX 3 framework to create intuitive and user-friendly interfaces.",
      "Demonstrated technical prowess by engineering the backend infrastructure using C#, ensuring robust data processing and system functionality.",
      "Achieved a significant milestone by successfully designing and developing a crawler robot equipped with Wi-Fi and GPRS connectivity, enabling remote monitoring capabilities and expanding the startup's product portfolio.",
    ],
  },
  {
    name: "Tecnowork",
    position: "Software developer, Electronic engineer",
    url: "https://www.tecnowork.it",
    startDate: "2001-09-01",
    endDate: "2007-04-01",
    summary: `Tecnowork was a custom electronic company which mission was to build custom electronic appliances.`,
    highlights: [
      "Joined as the inaugural employee of the organization, assuming a pivotal role in its establishment and growth.",
      "Proficiently contributed to software development using C/C++, firmware development, and electronic design using CAD tools, showcasing technical versatility and adaptability.",
      "Demonstrated exceptional growth within the company, ultimately overseeing a team of 9 professionals, with diverse projects spanning from consumer devices to specialized equipment designed for the Italian army.",
    ],
  },
];

export default work;
