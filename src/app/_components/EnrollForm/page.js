"use client"

import { useRef, useState } from "react";
import { db } from "@/lib/firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

const EnrollForm = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const [qualification, setQualification] = useState("");
    const experienceRef = useRef(null);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newEnquiry = { firstName: firstNameRef.current.value, lastName: lastNameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value, qualification: qualification, phone: phoneRef.current.value, experience: experienceRef.current.value, time: Timestamp.now() };
        try {
            let colRef = collection(db, "enrollments_aws");
            await addDoc(colRef, newEnquiry);
            await fetch("/api/send-invitation", { method: "POST", body: JSON.stringify(newEnquiry), headers: { 'Content-Type': "application/json" } })
            router.push("thank-you");
            console.log("Doc created and Invitation sent")
        } catch (err) {
            console.log(err)
        }

    }

    const degrees = [
        "B.A",       // Bachelor of Arts
        "B.Sc",      // Bachelor of Science
        "B.Com",     // Bachelor of Commerce
        "B.E",       // Bachelor of Engineering
        "B.Tech",    // Bachelor of Technology
        "BBA",       // Bachelor of Business Administration
        "BCA",       // Bachelor of Computer Applications
        "LLB",       // Bachelor of Laws
        "MBBS",      // Bachelor of Medicine, Bachelor of Surgery
        "BDS",       // Bachelor of Dental Surgery
        "B.Pharm",   // Bachelor of Pharmacy
        "B.Arch",    // Bachelor of Architecture
        "B.Ed",      // Bachelor of Education
        "M.A",       // Master of Arts
        "M.Sc",      // Master of Science
        "M.Com",     // Master of Commerce
        "M.E",       // Master of Engineering
        "M.Tech",    // Master of Technology
        "MBA",       // Master of Business Administration
        "MCA",       // Master of Computer Applications
        "LLM",       // Master of Laws
        "M.Pharm",   // Master of Pharmacy
        "M.Arch",    // Master of Architecture
        "Ph.D"       // Doctor of Philosophy
    ];
    return <>
        <form onSubmit={handleSubmit}
            id="enroll_form"
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
            <div className="row">
                <div className="col input_container">
                    <label>First Name</label>
                    <input ref={firstNameRef} id="firstName" required="" type="text" />
                </div>
                <div className="col input_container">
                    <label>Last Name</label>
                    <input ref={lastNameRef} id="lastName" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col input_container">
                    <label>Email</label>
                    <input ref={emailRef} id="email" required="" type="email" />
                </div>
                <div className="col input_container">
                    <label>Phone</label>
                    <input ref={phoneRef} id="phone" required="" type="tel" />
                </div>
            </div>
            <div className="row">
                <div className="col input_container">
                    <label>Qualification</label>
                    <select onChange={(e) => setQualification(e.target.value)} id="degree_select">
                        <option value="">Select an option</option>
                        {degrees.map(a => {
                            return <option value={a} >{a}</option>
                        })}
                    </select>
                </div>
                <div className="col input_container">
                    <label>Experience (If Employeed)</label>
                    <input ref={experienceRef} id="experience" type="number" />
                </div>
            </div>
            <div className="row">
                <div className="col action_container">
                    <button type="submit" className="btn btn-success">
                        Enroll Now
                    </button>
                </div>
            </div>
        </form>
    </>
}

export default EnrollForm;