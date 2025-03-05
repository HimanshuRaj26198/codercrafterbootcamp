"use client"

import { useParams } from "next/navigation";
import { useEffect } from "react";

const ThankYou = () => {
    let { coursename } = useParams();
    coursename = coursename == "mern" ? "MERN" : "AWS";
    useEffect(() => {
        if (typeof window !== "undefined") {
            setTimeout(() => {
                window.location.href = "https://codercrafter.in";
            }, 2000)
        }
    }, [])

    return <>
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
                        <h1>{coursename} FREE BOOTCAMP</h1>
                    </div>
                    <div>
                        <h3 style={{ textDecoration: "underline" }}>On: 08 March 2025</h3>
                    </div>
                    <div className="description">
                        <h2>
                            Hurray! You are enrolled to free AWS Bootcamp.
                        </h2>
                        <span style={{ fontWeight: 700, color: "red" }}>
                            Check you inbox for the bootcamp invitation!
                        </span>{" "}
                        <br />
                        <br />
                        <span style={{ fontWeight: 700, color: "white", textShadow: "1px 0px 4px rgba(0, 0, 0, 0.7)" }}>
                            Redirecting to CoderCrafter...
                        </span>
                    </div>
                </div>
            </main>
        </section>
    </>
}

export default ThankYou;