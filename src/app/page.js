import Image from "next/image";
import styles from "./page.module.css";
import EnrollForm from "./_components/EnrollForm/page";

export default function Home() {
  return (
    <>
      <section id="page-container">
        <main id="main_section">
          <div className="title-container">
            <div className="product_logo">
              <img
                style={{ height: "9vh", width: "auto" }}
                src="/assets/images/aws-logo.png"
              />
            </div>
            <div className="title">
              <h1>AWS FREE BOOTCAMP</h1>
            </div>
            <div>
              <h3 style={{ textDecoration: "underline" }}>On: 25th January 2025</h3>
            </div>
            <div className="description">
              <h2>
                Join the ultimate free AWS bootcamp to know about the trending
                DevOps Jobs and roadmap to get your dream job.
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
            <h2 style={{ fontWeight: 700 }}>Enroll in Free AWS Bootcamp</h2>
            <EnrollForm />
          </div>
        </div>
      </section>
      <section id="aws-info">
        <div className="infor_container">
          <section>
            <h2>What is DevOps?</h2>
            <p>
              DevOps is a combination of cultural philosophies, practices, and tools
              that enhances an organization's ability to deliver applications and
              services at high velocity. It integrates development (Dev) and
              operations (Ops) teams to work together seamlessly throughout the
              software development lifecycle. The main goals of DevOps include
              faster development cycles, increased deployment frequency, and
              reliable updates with minimal downtime.
            </p>
            <h2>Core Principles of DevOps:</h2>
            <ul>
              <li>
                <strong>Collaboration:</strong> Promoting communication and teamwork
                between developers and operations teams.
              </li>
              <li>
                <strong>Automation:</strong> Streamlining repetitive tasks such as
                code integration, testing, and deployment.
              </li>
              <li>
                <strong>
                  Continuous Integration/Continuous Deployment (CI/CD):
                </strong>{" "}
                Ensuring code changes are regularly merged and deployed with minimal
                effort.
              </li>
              <li>
                <strong>Monitoring:</strong> Using tools to continuously monitor and
                improve software performance.
              </li>
            </ul>
          </section>
          <header>
            <h1>AWS DevOps: A Trending Job Across the World</h1>
          </header>
          <section>
            <p>
              AWS DevOps refers to the implementation of DevOps practices using
              Amazon Web Services (AWS), a leading cloud service provider. AWS
              provides a suite of tools and services specifically designed to
              simplify DevOps practices. These tools help in automating CI/CD
              pipelines, monitoring applications, and managing infrastructure
              through code.
            </p>
            <h2>Why is AWS DevOps in Demand?</h2>
            <ul>
              <li>
                AWS is the market leader in cloud computing, with widespread
                adoption across industries.
              </li>
              <li>
                Organizations need AWS DevOps professionals to optimize their cloud
                environments and streamline deployments.
              </li>
              <li>
                The role combines technical skills with strategic thinking, making
                it highly rewarding.
              </li>
            </ul>
            <h2>Popular AWS DevOps Tools:</h2>
            <ul>
              <li>
                <strong>AWS CodePipeline:</strong> Automates the CI/CD process.
              </li>
              <li>
                <strong>AWS CloudFormation:</strong> Manages infrastructure as code.
              </li>
              <li>
                <strong>AWS CloudWatch:</strong> Monitors application performance
                and infrastructure.
              </li>
              <li>
                <strong>AWS Elastic Beanstalk:</strong> Simplifies application
                deployment and scaling.
              </li>
            </ul>
          </section>
          <header>
            <h1>Top Companies Hiring DevOps Engineers</h1>
          </header>
          <section>
            <p>
              DevOps engineers are highly sought-after across various industries.
              Here are some of the top companies actively hiring DevOps
              professionals:
            </p>
            <ul>
              <li>
                <strong>Amazon:</strong> As a leader in e-commerce and cloud
                computing, Amazon frequently hires AWS DevOps experts.
              </li>
              <li>
                <strong>Google:</strong> With its focus on cloud technologies and
                scalable services, DevOps is integral to Google’s operations.
              </li>
              <li>
                <strong>Microsoft:</strong> A leader in cloud computing through
                Azure, Microsoft employs DevOps professionals to manage its
                operations.
              </li>
              <li>
                <strong>Netflix:</strong> Known for its advanced CI/CD pipelines and
                streaming services, Netflix values skilled DevOps engineers.
              </li>
              <li>
                <strong>Facebook (Meta):</strong> With a vast ecosystem of
                applications, Meta relies on DevOps to ensure seamless performance.
              </li>
            </ul>
          </section>
          <header>
            <h1>How to Become a DevOps Engineer</h1>
          </header>
          <section>
            <p>
              Becoming a DevOps engineer requires a mix of technical skills,
              practical experience, and an understanding of DevOps principles.
              Here’s a step-by-step guide:
            </p>
            <h2>1. Learn the Basics of DevOps</h2>
            <p>
              Begin with understanding the core concepts, principles, and tools of
              DevOps. Familiarize yourself with CI/CD, automation, and cloud
              services.
            </p>
            <h2>2. Master AWS DevOps</h2>
            <p>
              Gain hands-on experience with AWS services tailored for DevOps. Learn
              tools like AWS CodePipeline, CloudFormation, and Elastic Beanstalk.
            </p>
            <h2>3. Join a Structured Program</h2>
            <p>
              Join our <strong>AWS DevOps Bootcamp</strong> to understand the basics
              and get started on your journey. Once you have the fundamentals down,
              enroll in our <strong>AWS DevOps course</strong> at
              <strong>CoderCrafter</strong>. This comprehensive 3-month program will
              turn you into an AWS DevOps expert, equipping you with the skills
              needed for real-world projects.
            </p>
            <h2>4. Build Projects and Gain Experience</h2>
            <p>
              Work on live projects to solidify your skills. Create CI/CD pipelines,
              automate tasks, and manage cloud infrastructure to gain confidence.
            </p>
            <h2>5. Get Certified</h2>
            <p>
              Obtain AWS certifications such as the{" "}
              <strong>AWS Certified DevOps Engineer – Professional</strong>
              to validate your expertise and boost your career prospects.
            </p>
            <h2>6. Apply for Jobs</h2>
            <p>
              With the skills and certifications in place, you can start applying
              for DevOps roles in top companies worldwide.
            </p>
          </section>
        </div>
      </section>
    </>

  );
}
