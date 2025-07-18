// src/App.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // === PLACEHOLDERS: swap these out with your real data ===
  const skillsByCategory = {
    "Programming Languages": [
      "Python (Pandas, NumPy, PySpark, FastAPI)",
      "SQL",
      "JavaScript (React)",
      "HTML",
      "CSS",
    ],
    "Machine & Deep Learning": [
      "Scikit-Learn",
      "XGBoost",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "LangChain",
      "LangGraph",
      "Hugging Face",
      "Unsloth",
    ],
    "Data Engineering & MLOps": [
      "AWS",
      "Azure Databricks",
      "Git",
      "Bash",
      "MLflow",
      "Docker",
      "Power BI",
      "Looker",
      "Tableau",
    ],
  };

  // === EXPERIENCE ===
  const experiences = [
    {
      role: "Data Scientist",
      company: "Gore Mutual Insurance Company",
      period: "May 2024 – Aug 2024 | Toronto, ON",
      details: [
        "Analyzed a Random Forest classifier that predicts large losses in personal properties using SHAP values, reporting 5 critical risk factors to underwriters that commonly contribute to increased propensity",
        "Revamped the large-loss detection model by addressing dataset imbalance with SMOTE and leveraging MLflow to test and track multiple classifiers, boosting recall to 70% and improving the lift curve for early risk detection",
        "Developed a pipeline for a commercial auto loss cost project that trains an XGBoost Tweedie Regressor and generates custom partial dependence plots, enhancing model explainability and providing deeper insights into 20+ key features",
        "Enhanced the commercial auto data model for downstream predictive modeling by integrating data from multiple upstream tables via scheduled PySpark and SQL ETL pipelines into a production-grade table, ensuring reliability with reusable validation logic",
      ],
    },
    {
      role: "Data Scientist",
      company: "PepsiCo",
      period: "Sep 2023 – Dec 2023 | Mississauga, ON",
      details: [
        "Spearheaded a national store segmentation project for Quaker, employing PCA and K-Means Clustering on demographics data to cluster 3000+ Canadian stores, uncovering optimization opportunities in retail operations across 7 product categories",
        "Commercialized an ML project with senior data scientists by building 10+ interactive Power BI dashboards linked to model outputs in Delta Lake, providing real-time shopper insights to business stakeholders",
        "Analyzed over 1 billion rows of POS sales and demographics data using SQL, Pandas, and PySpark, driving strategic execution recommendations for the field team in preparation for a new Frito-Lay product launch",
        "Developed Ridge Regression models to forecast the sales performance of non-existing store-product combinations across 4 competitor product lines, identifying 1,000+ high-potential stores to target for competitive market entry",
      ],
    },
    {
      role: "Associate Producer",
      company: "Zynga",
      period: "Jan 2023 – Apr 2023 | Toronto, ON",
      details: [
        "Built interactive reports and dashboards in Looker to equip 10+ cross-functional agile teams with valuable insights for data-driven improvements to their sprint performances",
        "Analyzed project data using SQL by generating relevant statistics on resource availabilities and project durations to create project roadmaps, resulting in a 50% increase in project/OKR tracking efficiency for teams",
      ],
    },
    {
      role: "Junior Product Manager",
      company: "Front Rush",
      period: "May 2022 – Aug 2022 | Whitchurch-Stouffville, ON",
      details: [
        "Utilized Heap to analyze customer data across 3 products by defining KPIs and usage metrics that generated insights on over 10,000 daily users, ultimately guiding future product decisions and feature enhancements",
      ],
    },
  ];

  const projects = [
    {
      title: "Self Reflection Journalling App",
      link: "",
      media: "/videos/ai-chat-demo-silent.mp4",
      description:
        "Collaborating with a small, multidisciplinary team to develop a self-reflection journaling app powered by LLMs. This app is an intuitive platform designed to create a private space for users to explore thoughts and gain deeper self-understanding. In my role as the core machine learning engineer, I am leading the development of the backend infrastructure for the conversational LLM system, designing data storage and retrieval strategies to support personalization, crafting and refining advanced prompt frameworks, and building evaluation pipelines to continuously elevate the quality and relevance of LLM outputs. We are currently developing a demo to gather user feedback and inform ongoing prompt engineering initiatives.",
      isPublic: false,
    },
    {
      title: "3D Clothing Virtual Try-On and Sizing Recommendation",
      link: "",
      media: "/videos/3d_try_on_demo.mp4",
      description:
        "The goal of this project was to enable shoppers to perform 3D virtual try-ons using personalized avatars and to receive accurate sizing recommendations when shopping online. The platform also allows retailers to generate realistic 3D garment models from a single image of a clothing item. I led the development of our cloud-native mobile web app (React + Django REST on Fly.io) including an event-driven, end-to-end avatar-generation workflow on AWS (S3, Lambda, SQS, EC2, DynamoDB), which formed the core infrastructure for the project. The avatar generation achieved an average body dimension error of less than 4 cm, and the sizing recommendation reached an accuracy of 83%.",
      isPublic: false,
    },
    {
      title: "ARC-AGI Challenge 2024",
      link: "https://github.com/josephlim0921/ARC-AGI-Challenge-2024",
      media: "/images/arc-example-task.jpg",
      description:
        "This project involved experimenting with LLMs to address the ARC-AGI Challenge, introduced by François Chollet in 2019. It focused on developing specialized models by fine-tuning LLaMA language models on augmented clusters of similar puzzle tasks using Unsloth, resulting in notable performance improvements during early evaluations.",
      isPublic: true,
    },
    {
      title: "Auto Differentiation Package",
      link: "https://github.com/josephlim0921/Auto-Differentiation-Package",
      media: "/images/neural_network.png",
      description:
        "This project involved developing an autodifferentiation package from scratch using NumPy, supporting fully-connected multi-layer networks with different nonlinearities for both regression and binary classification tasks.",
      isPublic: true,
    },
    {
      title: "K-pop Song Recommender",
      link: "https://github.com/josephlim0921/Kpop-Song-Recommender",
      media: "/images/spotify.jpg",
      description:
        "This project was designed to delve into the intricacies of K-pop music by extracting song features from a range of K-pop artists to construct a Content-Based Recommendation System. Utilizing the Spotify API, a robust data pipeline was developed to gather the necessary information, forming a comprehensive dataset. The recommendation engine was then crafted, applying principles of linear algebra to generate and present top song suggestions to users based on their song preferences.",
      isPublic: true,
    },
    {
      title: "NBA Game Winner Predictor",
      link: "https://github.com/josephlim0921/NBA-Game-Winner-Predictor",
      media: "/images/NBA.png",
      description:
        "This project aimed to predict the outcomes of NBA games by analyzing the past 7 seasons and applying various machine learning models on the data. The project involved all stages of the machine learning process, including data collection, preprocessing, and model development. With a focus on optimizing predictive accuracy, the models achieved a test accuracy of 70%.",
      isPublic: true,
    },
    {
      title: "COVID-19 Global Vaccine Tracker",
      link: "https://public.tableau.com/app/profile/joseph.lim6455/viz/COVID-19GlobalVaccineTracker_16832247048940/Dashboard2",
      media: "/images/COVID-19 Global Vaccine Tracker.png",
      description:
        "An interactive Tableau dashboard that visualizes how the COVID-19 vaccination program is performing on a global scale.",
      isPublic: true,
    },
    // …add more
  ];
  // =========================================================

  // Separate the self-reflection project from the rest
  const [currentProject, ...pastProjects] = projects;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      {/* Header / Nav */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">
            Joseph Lim
          </a>
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li>
                <a href="#current-projects" className="hover:text-blue-500">
                  Current Projects
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-500">
                  Past Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-500">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-500">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Intro */}
      <section id="intro" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Joseph Lim</h1>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              University of Waterloo Engineering Graduate
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              BASc. Systems Design Engineering, AI Option
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Passionate about Machine Learning, Data Science, Cloud
              Technologies, and Big Data
            </p>
          </div>
          <div className="mt-10 w-56 h-56 md:w-80 md:h-80 rounded-full mx-auto overflow-hidden shadow-lg">
            <img
              src="/images/main_portrait.jpg"
              alt="Joseph Lim"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 5%" }}
            />
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section
        id="current-projects"
        className="container mx-auto px-6 py-16 flex-1"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Current Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="p-4">
              {/\.(mp4|webm)$/i.test(currentProject.media) ? (
                <video controls className="w-full h-48 md:h-56 rounded">
                  <source src={currentProject.media} type="video/mp4" />
                  Sorry, your browser doesn’t support embedded videos.
                </video>
              ) : (
                <img
                  src={currentProject.media}
                  alt={currentProject.title}
                  className="w-full max-h-40 md:max-h-48 object-contain"
                />
              )}
            </div>
            <div className="px-6 py-4 text-center">
              <h3 className="text-xl font-bold mb-2">{currentProject.title}</h3>
              <p className="text-gray-700 mb-4">{currentProject.description}</p>
              {currentProject.isPublic ? (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              ) : (
                <button
                  onClick={() => {
                    setModalMessage("Project is not open for the public");
                    setModalOpen(true);
                  }}
                  className="text-red-500 hover:underline"
                >
                  View Project
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section id="projects" className="container mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Past Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pastProjects.map((p) => (
            <div
              key={p.title}
              className="max-w-sm bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="p-4">
                {/\.(mp4|webm)$/i.test(p.media) ? (
                  <video controls className="w-full h-48 md:h-56 rounded">
                    <source src={p.media} type="video/mp4" />
                    Sorry, your browser doesn’t support embedded videos.
                  </video>
                ) : (
                  <img
                    src={p.media}
                    alt={p.title}
                    className="w-full max-h-40 md:max-h-48 object-contain"
                  />
                )}
              </div>
              <div className="px-6 py-4 text-center">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-700 mb-4">{p.description}</p>
                {p.isPublic ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setModalMessage("Project is not open for the public");
                      setModalOpen(true);
                    }}
                    className="text-red-500 hover:underline"
                  >
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Technical Skills
          </h2>

          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            {Object.entries(skillsByCategory).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-bold mb-2">{category}:</h3>
                <p className="leading-relaxed">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-6">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold">
                  {exp.role} @ {exp.company}
                </h3>
                <span className="text-gray-600 italic">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>
            <a href="mailto:josephlim0921@gmail.com" className="underline">
              josephlim0921@gmail.com
            </a>
          </p>

          {/* ← Icon Links */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.linkedin.com/in/jhlim0921/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/josephlim0921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>

          <p className="mt-6 text-sm">
            &copy; {new Date().getFullYear()} Joseph Lim. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4">
            <p className="mb-4">{modalMessage}</p>
            <button
              onClick={() => setModalOpen(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
