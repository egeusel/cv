(function () {
    "use strict";

    const resume = {
        name: "Ethan Ege Usel",
        shortName: "Ege Usel",
        eyebrow: "Software engineer &middot; UC Berkeley",
        email: "egeusel@berkeley.edu",
        linkedin: "https://www.linkedin.com/in/ege-usel-a2aa50191",
        photo: "profilePhoto.png",
        bio: "I am a software engineer with a strong foundation in Java development, Python, data pipelines, and full-stack web development. Currently, I build software solutions at Amgen Inc., utilizing technologies such as React, Plotly Dash, and distributed computing for backend data processing with Spark. I hold a degree in Computer Science and Bioengineering from UC Berkeley.",
        skills: [
            {
                name: "Programming Languages",
                items: ["Python", "Java", "C", "C++", "Go", "JavaScript", "HTML", "CSS", "SQL", "MATLAB", "Assembly", "X86", "Scheme", ".NET (#C)"]
            },
            {
                name: "Technologies",
                items: ["Java Spring Framework", "React", "Plotly Dash", "Spark", "Databricks", "UNIX", "MySQL", "Databricks", "Node.js", "Bootstrap", "jQuery", "Pandas", "Numpy", "PyTorch", "Scikit-learn", "Seaborn", "Matplotlib", "BioPython", "Collibra"]
            },
            {
                name: "Familiar With",
                items: ["Operating Systems", "Database Systems", "Deep Neural Networks and Machine Learning", "Data Science Workflow", "Data Governance"]
            },
            {
                name: "Languages",
                items: ["English", "French", "Turkish"]
            }
        ],
        experience: [
            {
                company: "Microsoft",
                title: "Software Engineer-II",
                date: "January 2026 &ndash; present",
                bullets: [
                    "Working on Microsoft Graph Unified Gateway Team"
                ]
            },
            {
                company: "Amgen Inc.",
                title: "Software Engineer (Data Sciences & Tools)",
                date: "May 2024 &ndash; January 2026",
                bullets: [
                    "Built a scalable <strong>Python</strong>-based &ldquo;Data Dictionary&rdquo; web app to streamline metadata exploration across Amgen&rsquo;s data lake; built a <strong>Spark/Databricks/AWS</strong> pipeline supporting search, filtering, caching, and SQL snippet generation via a Dash frontend.",
                    "Built a portal for the Digital team using <strong>FastAPI</strong> and Amgen&rsquo;s React toolkit; integrated the Smartsheet API, added search functionality, and developed a <strong>RAG</strong>-powered chatbot to guide business users with app selection and context-aware answers.",
                    "Engineered a <strong>GenAI</strong> tool integrated with Veeva CDOCS to extract data from PDFs using <strong>LLM</strong>-based methods; automated downstream document generation, saving hundreds of hours annually for Amgen&rsquo;s manufacturing teams.",
                    "Developed features for the CCT platform using React <strong>micro-frontends</strong> orchestrated via <strong>single-spa</strong>, <strong>TypeScript</strong>, and a <strong>Java</strong> backend; enabled real-time supply planning, exception handling, and notifications&mdash;improving operational efficiency globally.",
                    "Built a full-stack supply chain tool using <strong>React, Python, Flask</strong>, SVGs, and <strong>graph algorithms</strong> to map product dependencies across global pipelines; enabled dynamic exploration of alternate BOMs during shortages, boosting manufacturing reliability.",
                    "Optimized Genealogy ETL with <strong>Spark</strong>, achieving over 50% faster runtime through parallelization and algorithm tuning."
                ]
            },
            {
                company: "909 Technologies",
                title: "Full-Stack Software Engineer",
                date: "July 2023 &ndash; April 2024",
                bullets: [
                    "Played a key role in <strong>Java</strong> development of new features as well as maintenance in the company&rsquo;s enterprise application using <strong>Jmix</strong> and <strong>Spring Frameworks</strong>; focused on both <strong>frontend and backend</strong> development, including creating user interfaces with <strong>Vaadin Web Framework</strong> and backend services for business logic.",
                    "Managed complex databases, employing <strong>Liquibase</strong> for database version control, ER diagrams for clear design visualization, <strong>ORM</strong> for efficient data interaction, formulated advanced <strong>JPQL</strong> queries, and optimized <strong>PostgreSQL</strong> usage in service layer.",
                    "Enhanced application performance by implementing strategies, such as lazy loading, which reduced page load times up to 66% in some webpages.",
                    "Integrated <strong>AWS S3</strong> for cloud-based file storage within the application, and performed occasional file updates using AWS CLI.",
                    "Employed <strong>Agile</strong> practices and Jira for streamlined development cycles and task management, fostering continuous code integration and development, while regularly contributing to application feature enhancements and occasional RESTful mobile updates."
                ]
            },
            {
                company: "Sentromer DNA Technologies Inc.",
                title: "R&D Engineer Intern",
                date: "April &ndash; May 2021",
                bullets: [
                    "Collaborated with the R&D team during the development and optimization of COVID-19 test kits.",
                    "Undertook an independent project developing <strong>Java-based software tools for lab automation</strong>; developed a codon optimization algorithm to find the best synthetic sequence for maximizing gene expression (based on prior experimental data), involving the use of sliding window analysis and Monte Carlo simulations; built an inventory management system with custom parsers and serializers for efficient data processing and inventory tracking.",
                    "Participated in Solid-Phase Oligonucleotide Synthesis procedures, facilitating the progress of molecular experiments.",
                    "Presented research findings on the applications of LPS derivatives in vaccine technology and allergen immunotherapy to the R&D teams.",
                    "Demonstrated strong communication and collaboration skills, working alongside a diverse <strong>team of engineers and scientists</strong>."
                ]
            }
        ],
        projects: [
            {
                name: "NUMC",
                tags: ["C", "OpenMP", "SIMD"],
                bullets: [
                    "Wrote Numpy in C which can perform matrix and vector operations, using <strong>C memory management</strong>, double pointers, and structs to architect the solution.",
                    "Used <strong>SIMD instructions</strong> implemented through <strong>Intel Intrinsic, thread-level parallelism</strong> using <strong>OpenMP API, loop unrolling and algorithmic optimization</strong> techniques to improve the performance of array operations which significantly increased program speed."
                ]
            },
            {
                name: "Secure Data Storage System",
                tags: ["Go", "Cryptography", "Security"],
                bullets: [
                    "Designed and implemented an <strong>end-to-end encrypted</strong> file sharing system in Go. Incorporated industry-standard cryptographic measures, including password hashing for enhanced user account security, symmetric key cryptography to ensure data confidentiality, and HMACs to provide robust data integrity.",
                    "Developed a sophisticated file management system with capabilities such as user authentication, efficient file storage/retrieval, and <strong>secure file sharing/revocation</strong> through digitally signed invitations.",
                    "Ensured robust data management and tracking by <strong>utilizing UUIDs</strong> for unique identification of various data structures in a multi-user environment."
                ]
            },
            {
                name: "CRM",
                tags: ["Spring", "GPT-4", "AWS"],
                bullets: [
                    "Developed a Customer Relationship Management <strong>web application</strong> utilizing Spring Framework (including Boot, <strong>MVC</strong>, Data JPA, Security), Thymeleaf, HTML5, CSS, JavaScript, and MySQL; containerized MySQL using Docker for portability and consistent environment configurations.",
                    "Integrated OpenAI&rsquo;s GPT-4 model to provide <strong>real-time sales data analytics</strong>, transforming raw data into actionable insights in real-time.",
                    "Implemented <strong>RESTful API endpoints</strong> for customer data management, enabling expansion like a mobile application version.",
                    "Designed a Thymeleaf and Bootstrap web interface for customer and sales management, including filter-based search and sales data visualization.",
                    "Hosted database in cloud via <strong>AWS RDS</strong>; built and managed dependencies with <strong>Maven</strong>; project was version-controlled on <strong>GitHub</strong>."
                ]
            },
            {
                name: "Internet Protocol Implementation",
                tags: ["Python", "Networking", "TCP"],
                bullets: [
                    "Implemented <strong>Distance Vector Protocol</strong> in Python for intradomain routing which computes efficient paths across the network; for this, a distributed algorithm running at each router was used; split horizon, poison reverse, and route poisoning were utilized to ensure time efficiency and to avoid congestion.",
                    "Implemented <strong>Socket API</strong> which provides a logical pipe that connects a sender and a receiver; it uses Transmission Control Protocol to provide reliability; lost packets are retransmitted based on the nonfixed Retransmission Timeout value, which is constantly updated based on Round Trip Time, to avoid sending duplicate packets."
                ]
            },
            {
                name: "Gitlet",
                tags: ["Java", "VCS", "CLI"],
                bullets: [
                    "Coded Gitlet project, a <strong>command line program</strong> and a <strong>version control</strong> system using Java; the project architecture is inspired by the Git workflow, and has commands such as <code>init</code>, <code>branch</code>, <code>checkout</code>, and <code>log</code>, analogous to the original Git versions.",
                    "When the <code>init</code> command is used, a hidden .gitlet repo is created in the current working directory; it keeps track of the files that are staged to be added, staged to be removed as well as those that are deleted, edited, or newly created (untracked) since the last commit.",
                    "Previous versions of files in the directory are saved using the SHA-1 code, the unique identifier of a file, and ensures <strong>memory efficiency of VCS</strong>; file operations are handled using the java.nio and java.io packages and the last state of the program is preserved using the <strong>Java Serialization API</strong>."
                ]
            },
            {
                name: "Document QA Chatbot with LangChain",
                tags: ["LangChain", "OpenAI", "RAG"],
                bullets: [
                    "Built a PDF-based question-answering <strong>chatbot</strong> using LangChain and OpenAI, enabling semantic search and natural language querying over document content.",
                    "Implemented retrieval-augmented generation <strong>(RAG) pipeline</strong> with document chunking, embeddings, and vectorstore search to deliver accurate, context-aware answers."
                ]
            },
            {
                name: "FestivAI",
                tags: ["UX", "Web App", "Research"],
                bullets: [
                    "Developed FestivAI, a personalized festival companion <strong>web application</strong> that helps users schedule their festival activities.",
                    "Applied <strong>user-centered design principles</strong> by conducting contextual inquiry, task analysis and iteratively improving the product based on user needs. Interviewed festival attendees and observed their scheduling processes without our app to pinpoint the key functionalities we should add in the app.",
                    "Represented the FestivAI project in a web app fair as a team, creating a poster to communicate our design process, features, and benefits to attendees."
                ]
            },
            {
                name: "Predicting Cell Types Using Machine Learning & Deep Learning",
                tags: ["PyTorch", "ML", "RNA-seq"],
                bullets: [
                    "Developed a <strong>machine learning model</strong> to predict cell type labels from transcriptional profiles using various classifiers including <strong>Decision Tree</strong>, <strong>Random Forest</strong>, <strong>K-Nearest Neighbors</strong>, <strong>Support Vector Machine</strong>, <strong>XGBoost</strong>, and Ensemble methods such as <strong>Gradient Boosting</strong>, <strong>AdaBoost</strong>, <strong>Extra Trees</strong>, <strong>Bagging</strong>, <strong>Stacking</strong>, and <strong>Voting classifiers</strong>.",
                    "Designed and implemented a <strong>Neural Network</strong> using <strong>PyTorch</strong>, exploring the potential of deep learning methodologies in transcriptional profile classification.",
                    "Utilized dimensionality reduction techniques, including <strong>PCA</strong>, <strong>t-SNE</strong>, and <strong>Autoencoders</strong>, to manage the high-dimensional RNA-seq data, significantly improving the computational efficiency of the project.",
                    "Implemented an efficient process for <strong>hyperparameter tuning</strong> and model selection, manually exploring a wide range of parameter values for each classifier.",
                    "Achieved the highest model performance using a <strong>Voting classifier</strong> with a soft voting strategy, yielding a training accuracy of 100% and testing accuracy of 87.14%."
                ]
            },
            {
                name: "Uber Post-Lockdown Traffic Data",
                tags: ["Data Science", "GeoPandas", "ML"],
                bullets: [
                    "Applied typical <strong>data science workflow</strong> (data cleaning, visualization, EDA, feature selection and modeling) on dataset which combined Uber Movement, Open Street Maps (OSM), census tracts of SF, and elevation datasets (for spatial partitioning purposes) to predict the effect of COVID on traffic speeds.",
                    "Analyzed traffic speeds mapped by GPS coordinate using GeoDataFrame which mapped speed data to each GeoPandas point.",
                    "In order to evaluate our hypothesis, as a team, developed various models including <strong>supervised regression model, k-nearest neighbors regression, decision tree regression, and linear regression</strong>; using the new data, drew conclusions from post-lockdown models to fix pre-lockdown ones, so that the traffic models-based estimates get used for pricing strategies."
                ]
            },
            {
                name: "Enigma",
                tags: ["Java", "OOP", "Algorithms"],
                bullets: [
                    "Built a simulator in Java for a generalized version of the Enigma cypher machine.",
                    "Project uses the <strong>Object-Oriented Programming Paradigm</strong> with appropriate data structures to implement reciprocal enigma algorithms.",
                    "Program receives the following input: a configuration file containing the relevant information about the machine, the rotors and reflectors being used and their corresponding inner wirings, an input file containing the current machine settings in which the message will either be encoded or decoded, and an output file where the resulting encrypted/decrypted message is written."
                ]
            }
        ],
        education: [
            {
                name: "Computer Science",
                image: "computerscience.jpeg",
                courses: [
                    ["CS 61A", "Structure and Interpretation of Computer Programs"],
                    ["CS 61B", "Data Structures"],
                    ["CS 61C", "Computer Architecture"],
                    ["CS 70", "Discrete Mathematics and Probability Theory"],
                    ["CS 160", "User Interface Design and Development"],
                    ["CS 161", "Computer Security"],
                    ["CS 168", "Introduction to the Internet: Architecture and Protocols"],
                    ["CS 170", "Efficient Algorithms and Intractable Problems"],
                    ["Data 8", "Foundations of Data Science"],
                    ["Data 100/200", "Principles & Techniques of Data Science"],
                    ["BIOENG 131/231", "Introduction to Computational Biology"],
                    ["BIOENG 145/245", "Machine Learning for Computational Biology"],
                    ["BIOENG 134", "Genetic Design Automation"],
                    ["EECS 16A", "Designing Information Devices and System-I"]
                ]
            },
            {
                name: "Bioengineering & Science",
                image: "bioengineering.jpeg",
                courses: [
                    ["ENGIN 7", "Computer Programming for Scientists and Engineers (MATLAB, numerical analysis)"],
                    ["Math 1A", "Calculus-I"],
                    ["Math 1B", "Calculus-II"],
                    ["Math 53", "Multivariable Calculus"],
                    ["Math 54", "Linear Algebra and Differential Equations"],
                    ["Physics 7A", "Physics for Scientists and Engineers-I"],
                    ["Physics 7B", "Physics for Scientists and Engineers-II"],
                    ["CHEM 1A", "General Chemistry"],
                    ["CHEM 1AL", "General Chemistry Laboratory"],
                    ["CHEM 3A", "Chemical Structure and Reactivity (OCHEM-I)"],
                    ["CHEM 3AL", "Organic Chemistry Laboratory"],
                    ["CHEM 3B", "Chemical Structure and Reactivity (OCHEM-II)"],
                    ["BIOENG 10", "Introduction to Biomedicine for Engineers"],
                    ["BIOENG 11", "Engineering Molecules-I"],
                    ["BIOENG 103", "Engineering Molecules-II"],
                    ["BIOENG 104", "Biological Mass Transport Phenomena"],
                    ["BIOENG 110", "Biomedical Physiology for Engineers"]
                ]
            }
        ],
        additionalCourses: [
            {
                name: "Professional Courses",
                courses: ["UGBA 10: Principles of Business", "UGBA 103: Introduction to Finance"]
            },
            {
                name: "Nontechnical Courses",
                courses: ["FRENCH 3: Intermediate French", "FRENCH 80: The Cultural History of Paris", "COLWRIT R1A: Accelerated Reading and Composition", "HISTORY R1B: Reading and Composition in History", "ETHSTD 173AC: Indigenous Peoples in Global Inequality", "BIOENG 100: Ethics in Science and Engineering", "CS 194: Social Justice in EECS"]
            },
            {
                name: "Seminar Courses",
                courses: ["BIOENG 26: Introduction to Bioengineering", "BIOENG 25: Careers in Biotechnology", "INDENG 195: A. Richard Newton Lecture Series"]
            }
        ],
        certificates: [
            {
                name: "Data Steward",
                issuer: "Collibra",
                href: "dataSteward.pdf"
            },
            {
                name: "Collibra Intro",
                issuer: "Collibra",
                href: "collibraIntro.pdf"
            },
            {
                name: "DALF C1 French Language Certificate",
                issuer: "Minist&egrave;re de l'&Eacute;ducation nationale et de la Jeunesse",
                href: "https://en.wikipedia.org/wiki/Dipl%C3%B4me_approfondi_de_langue_fran%C3%A7aise"
            }
        ]
    };

    const bulletList = (items) => `
        <ul class="bullet-list">
            ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
    `;

    const sectionHeading = (number, title, description) => `
        <div class="section-heading">
            <span class="section-number">${number}</span>
            <div>
                <h2>${title}</h2>
                ${description ? `<p>${description}</p>` : ""}
            </div>
        </div>
    `;

    const conceptLinks = (activeConcept) => {
        const names = ["Editorial", "Executive", "Technical", "Bento", "Minimal"];
        return names.map((name, index) => {
            const concept = index + 2;
            const current = concept === activeConcept ? ' aria-current="page"' : "";
            return `<a href="index${concept}.html"${current} aria-label="${name} design">${String(index + 1).padStart(2, "0")}</a>`;
        }).join("");
    };

    const render = () => {
        const root = document.getElementById("app");
        if (!root) {
            throw new Error("Resume root element was not found.");
        }

        const activeConcept = Number(document.body.dataset.concept || 2);
        const conceptName = document.body.dataset.conceptName || "Alternate";
        const profilePhoto = document.body.dataset.profilePhoto || resume.photo;

        root.innerHTML = `
            <a class="skip-link" href="#main-content">Skip to main content</a>
            <header class="site-header" id="top">
                <nav class="topbar shell" aria-label="Primary navigation">
                    <a class="monogram" href="#top" aria-label="${resume.shortName}, home">EU</a>
                    <div class="nav-links">
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#education">Education</a>
                    </div>
                    <a class="resume-link" href="egeResume.pdf" target="_blank" rel="noopener">Resume <span aria-hidden="true">&nearr;</span></a>
                </nav>
                <div class="hero shell">
                    <div class="hero-copy">
                        <p class="eyebrow">${resume.eyebrow}</p>
                        <h1>${resume.name}</h1>
                        <p class="hero-role">Building dependable software across full-stack, data, and AI systems.</p>
                        <p class="hero-bio">${resume.bio}</p>
                        <div class="hero-actions">
                            <a class="button button-primary" href="mailto:${resume.email}">Get in touch</a>
                            <a class="button button-secondary" href="${resume.linkedin}" target="_blank" rel="noopener">LinkedIn <span aria-hidden="true">&nearr;</span></a>
                        </div>
                        <dl class="quick-facts">
                            <div><dt>Now</dt><dd>Microsoft</dd></div>
                            <div><dt>Focus</dt><dd>Full-stack + Data</dd></div>
                            <div><dt>Education</dt><dd>UC Berkeley</dd></div>
                        </dl>
                    </div>
                    <figure class="portrait">
                        <div class="portrait-frame">
                            <img src="${profilePhoto}" alt="Portrait of ${resume.shortName}">
                        </div>
                        <figcaption>
                            <span>Software Engineer-II</span>
                            <strong>Microsoft</strong>
                        </figcaption>
                    </figure>
                </div>
                <div class="concept-note shell">
                    <span>${conceptName} concept</span>
                    <div class="concept-switcher" aria-label="Alternate designs">
                        <span>View</span>
                        ${conceptLinks(activeConcept)}
                    </div>
                </div>
            </header>

            <main id="main-content">
                <section class="section skills-section shell" id="skills">
                    ${sectionHeading("01", "Toolkit", "A cross-functional foundation for product engineering, distributed data, and applied machine learning.")}
                    <div class="skill-grid">
                        ${resume.skills.map((group) => `
                            <article class="skill-group">
                                <h3>${group.name}</h3>
                                <div class="tag-list">
                                    ${group.items.map((item) => `<span>${item}</span>`).join("")}
                                </div>
                            </article>
                        `).join("")}
                    </div>
                </section>

                <section class="section experience-section shell" id="experience">
                    ${sectionHeading("02", "Experience", "Product-minded engineering across enterprise platforms, life sciences, and developer infrastructure.")}
                    <div class="timeline">
                        ${resume.experience.map((role, index) => `
                            <article class="role">
                                <div class="role-index">${String(index + 1).padStart(2, "0")}</div>
                                <div class="role-meta">
                                    <p class="role-company">${role.company}</p>
                                    <p class="role-date">${role.date}</p>
                                </div>
                                <div class="role-content">
                                    <h3>${role.title}</h3>
                                    ${bulletList(role.bullets)}
                                </div>
                            </article>
                        `).join("")}
                    </div>
                </section>

                <section class="section projects-section shell" id="projects">
                    ${sectionHeading("03", "Selected Projects", "Systems, product experiments, and research work. Open any project for the full detail.")}
                    <div class="project-grid">
                        ${resume.projects.map((project, index) => `
                            <details class="project"${index === 0 ? " open" : ""}>
                                <summary>
                                    <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
                                    <span class="project-heading">
                                        <span class="project-name">${project.name}</span>
                                        <span class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</span>
                                    </span>
                                    <span class="expand-icon" aria-hidden="true"></span>
                                </summary>
                                <div class="project-body">
                                    ${bulletList(project.bullets)}
                                </div>
                            </details>
                        `).join("")}
                    </div>
                </section>

                <section class="section education-section shell" id="education">
                    ${sectionHeading("04", "Coursework", "Computer science depth with a parallel foundation in bioengineering and science.")}
                    <div class="education-grid">
                        ${resume.education.map((area) => `
                            <article class="education-card">
                                <div class="education-image">
                                    <img src="${area.image}" alt="">
                                </div>
                                <div class="education-content">
                                    <h3>${area.name}</h3>
                                    <ul class="course-list">
                                        ${area.courses.map((course) => `<li><strong>${course[0]}</strong><span>${course[1]}</span></li>`).join("")}
                                    </ul>
                                </div>
                            </article>
                        `).join("")}
                    </div>
                    <div class="additional-grid">
                        ${resume.additionalCourses.map((group) => `
                            <article>
                                <h3>${group.name}</h3>
                                <ul>${group.courses.map((course) => `<li>${course}</li>`).join("")}</ul>
                            </article>
                        `).join("")}
                    </div>
                </section>

                <section class="section credentials-section shell" id="credentials">
                    ${sectionHeading("05", "Credentials", "Technical certifications and language credentials.")}
                    <div class="credential-grid">
                        ${resume.certificates.map((certificate, index) => `
                            <a class="credential-card" href="${certificate.href}" target="_blank" rel="noopener">
                                <span class="credential-index">${String(index + 1).padStart(2, "0")}</span>
                                <span>
                                    <strong>${certificate.name}</strong>
                                    <small>Issued by ${certificate.issuer}</small>
                                </span>
                                <span aria-hidden="true">&nearr;</span>
                            </a>
                        `).join("")}
                    </div>
                </section>

                <section class="contact-section" id="contact">
                    <div class="shell contact-inner">
                        <p class="eyebrow">Open to a conversation</p>
                        <h2>Let&rsquo;s build something useful.</h2>
                        <a href="mailto:${resume.email}">${resume.email}</a>
                        <div class="contact-links">
                            <a href="${resume.linkedin}" target="_blank" rel="noopener">LinkedIn <span aria-hidden="true">&nearr;</span></a>
                            <a href="egeResume.pdf" target="_blank" rel="noopener">Download resume <span aria-hidden="true">&darr;</span></a>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="site-footer">
                <div class="shell">
                    <span>&copy; Ege Usel</span>
                    <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
                </div>
            </footer>
        `;

        if (activeConcept === 2) {
            const main = root.querySelector("main");
            const skillsSection = root.querySelector(".skills-section");
            const experienceSection = root.querySelector(".experience-section");
            const skillsNumber = skillsSection?.querySelector(".section-number");
            const experienceNumber = experienceSection?.querySelector(".section-number");

            if (!main || !skillsSection || !experienceSection || !skillsNumber || !experienceNumber) {
                throw new Error("Editorial section ordering could not be initialized.");
            }

            main.insertBefore(experienceSection, skillsSection);
            experienceNumber.textContent = "01";
            skillsNumber.textContent = "02";
        }
    };

    render();
}());
