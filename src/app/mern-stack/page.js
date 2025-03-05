import EnrollForm from "../_components/EnrollForm/page";
import "./style.css";

export const generateMetadata = () => {
    return {
        title: "Master MERN Stack Bootcamp - 08th March 2025 | Codercrafter",
        description: "Join our MERN Stack Bootcamp on 08th March 2025 and become a full-stack developer. Learn MongoDB, Express.js, React.js, and Node.js with hands-on projects and expert guidance. Register now!",
        openGraph: {
            title: "Master MERN Stack Bootcamp - 08th March 2025 | Codercrafter",
            description: "Join our MERN Stack Bootcamp on 08th March 2025 and become a full-stack developer. Learn MongoDB, Express.js, React.js, and Node.js with hands-on projects and expert guidance. Register now!",
            images: ["/assetes/images/mern_stack.png"],
            url: "https://bootcamp.codercrafter.in/mern-stack",
            sitename: "CoderCrafter"
        },
        twitter: {
            card: "summary_large_image",
            title: "Master MERN Stack Bootcamp - 08th March 2025 | Codercrafter",
            description: "Learn MERN Stack from experts! Join our Bootcamp on 08th March 2025 and master full-stack development with MongoDB, Express.js, React.js, and Node.js.",
            images: ["/assets/images/mern_stack.png"]
        }
    }
}

const MERNStackPage = () => {
    return <>
        <section id="page-container">
            <main id="main_section">
                <div className="title-container">
                    <div className="product_logo">
                        <img
                            style={{ height: "18vh", width: "auto" }}
                            src="/assets/images/mern_stack.png"
                        />
                    </div>
                    <div className="title">
                        <h1>MERN STACK FREE BOOTCAMP</h1>
                    </div>
                    <div>
                        <h3 style={{ textDecoration: "underline" }}>On: 8th Match 2025</h3>
                    </div>
                    <div className="description">
                        <h2>
                            Join the ultimate free Mern Stack bootcamp to know about the trending
                            MERN Jobs and roadmap to get your dream job.
                        </h2>
                        <span style={{ fontWeight: 700 }}>
                            <a>Know More</a>
                        </span>{" "}
                        <span style={{ fontWeight: 700 }}>
                            <a href="#enroll">Enroll Now</a>
                        </span>
                    </div>
                </div>
            </main>
        </section>
        <section id="enroll_form">
            <div className="content_container">
                <div className="form_container">
                    <h2 style={{ fontWeight: 700 }}>Enroll in Free MERN Bootcamp</h2>
                    <EnrollForm coursename="mern" />
                </div>
            </div>
        </section>
        <section id="aws-info">
            <div className="infor_container">
                <>
                    <h2>Introduction</h2>
                    <p>
                        With the rise of modern web applications, full-stack development has gained
                        massive traction. One of the most sought-after full-stack technologies is
                        the <strong>MERN Stack</strong>. It is widely used for building dynamic web
                        applications with a seamless user experience. But what exactly is MERN
                        Stack, and why is it so popular? Let’s dive in and explore the growing
                        demand for MERN developers and which top companies are hiring them.
                    </p>
                    <hr />
                    <h2>What is MERN Stack?</h2>
                    <p>
                        MERN stands for <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
                        It is a JavaScript-based technology stack used to develop end-to-end
                        applications. Here’s how each component works:
                    </p>
                    <ul>
                        <li>
                            <strong>MongoDB</strong>: A NoSQL database that stores data in flexible,
                            JSON-like documents, making it easy to work with.
                        </li>
                        <li>
                            <strong>Express.js</strong>: A backend framework for Node.js that
                            simplifies API creation and server-side logic.
                        </li>
                        <li>
                            <strong>React.js</strong>: A powerful front-end library used to build
                            dynamic and interactive user interfaces.
                        </li>
                        <li>
                            <strong>Node.js</strong>: A runtime environment that allows JavaScript to
                            run on the server-side, enabling full-stack JavaScript development.
                        </li>
                    </ul>
                    <hr />
                    <h2>Why is MERN Stack Gaining Popularity?</h2>
                    <p>
                        MERN Stack is becoming the go-to choice for startups and enterprises alike.
                        Here are some key reasons behind its popularity:
                    </p>
                    <ol>
                        <li>
                            <strong>Full-Stack JavaScript Development</strong> - With JavaScript being
                            used across the entire stack, developers can seamlessly transition between
                            frontend and backend, improving productivity.
                        </li>
                        <li>
                            <strong>High Performance &amp; Scalability</strong> - Node.js ensures
                            efficient handling of multiple requests, making MERN ideal for scalable
                            applications.
                        </li>
                        <li>
                            <strong>Fast Development &amp; Reusability</strong> - React.js enables
                            component-based architecture, allowing code reusability and faster
                            development cycles.
                        </li>
                        <li>
                            <strong>Cost-Effective</strong> - Since developers only need to know
                            JavaScript, hiring costs and training efforts are reduced.
                        </li>
                        <li>
                            <strong>Strong Community Support</strong> - Being an open-source stack,
                            MERN benefits from a vast developer community, regular updates, and a
                            wealth of resources.
                        </li>
                        <li>
                            <strong>Flexibility &amp; Security</strong> - MongoDB’s flexible schema
                            and Express.js’s security features make the stack reliable and adaptable
                            for various applications.
                        </li>
                    </ol>
                    <hr />
                    <h2>Top Companies Hiring MERN Stack Developers</h2>
                    <p>
                        Due to its efficiency and scalability, many companies are actively looking
                        for MERN stack developers. Some of the top companies hiring MERN developers
                        include:
                    </p>
                    <ul>
                        <li>
                            <strong>Facebook</strong> – Since React.js is a core part of MERN,
                            Facebook looks for developers skilled in the stack for its web-based
                            projects.
                        </li>
                        <li>
                            <strong>Netflix</strong> – Uses Node.js and React.js extensively for
                            building high-performance applications.
                        </li>
                        <li>
                            <strong>Uber</strong> – Relies on Node.js for handling large-scale
                            real-time data processing.
                        </li>
                        <li>
                            <strong>Airbnb</strong> – Uses React.js to create interactive user
                            experiences.
                        </li>
                        <li>
                            <strong>Amazon</strong> – Implements Node.js in various microservices and
                            backend operations.
                        </li>
                        <li>
                            <strong>PayPal</strong> – Uses JavaScript frameworks, including React.js
                            and Node.js, for its payment processing applications.
                        </li>
                        <li>
                            <strong>TCS, Infosys, and Wipro</strong> – These IT giants often seek MERN
                            stack developers for enterprise-level web applications.
                        </li>
                        <li>
                            <strong>Startups &amp; SaaS Companies</strong> – Many startups prefer MERN
                            due to its cost-effectiveness and scalability.
                        </li>
                    </ul>
                    <hr />
                    <h2>Conclusion</h2>
                    <p>
                        The <strong>MERN Stack</strong> is revolutionizing full-stack development by
                        providing a seamless JavaScript-based solution for building high-performance
                        web applications. Its growing adoption by top tech companies and startups
                        showcases its importance in the software industry. If you’re an aspiring
                        developer, learning MERN Stack can open doors to exciting career
                        opportunities in top organizations worldwide.
                    </p>
                    <p>
                        So, are you ready to master MERN Stack and land your dream job? Start
                        learning today and take advantage of the booming demand for full-stack
                        developers!
                    </p>
                    <hr />
                    <p>
                        <strong>
                            Stay connected with Codercrafter for more tech blogs and coding tutorials.
                        </strong>
                    </p>
                    <p>
                        For more insights on web development, check out our blog at{" "}
                        <a href="https://codercrafter.in/blogs">Codercrafter</a>.
                    </p>
                </>

            </div>
        </section>
    </>
}

export default MERNStackPage;