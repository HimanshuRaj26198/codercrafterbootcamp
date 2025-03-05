import nodemailer from "nodemailer";
export async function POST(req) {
    let body = await req.json();
    let { email, firstName, lastName, course } = body;

    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service provider
        auth: {
            user: "himanshu.codebugger@gmail.com", // Your email
            pass: "claz thbv daof zeec", // Your email password or app-specific password
        },
    });

    if (firstName && email) {
        let mernRequestResponse = `<p>Dear <strong>${firstName} ${lastName || ""},</p>

<p>Congratulations! 🎉 You’ve successfully booked your slot for the <strong>MERN Stack Bootcamp</strong> starting on <strong>08th March 2025</strong>. We're excited to have you on board and can’t wait to help you master <strong>MongoDB, Express.js, React.js, and Node.js</strong> with hands-on learning.</p>

<h3>🛠 What’s Next?</h3>
<ul>
    <li><strong>Bootcamp Date:</strong> 08th March 2025</li>
    <li><strong>Bootcamp Time:</strong> 01:00 PM to 02:00 PM</li>
    <li><strong>Mode:</strong> Online & Interactive</li>
    <li><strong>Access Details:</stron<a href="https://calendar.app.google/yXsGM5HjCz6FbPrVA" >https://calendar.app.google/yXsGM5HjCz6FbPrVA</a></li>
</ul>

<h3>🚀 How to Prepare?</h3>
<ul>
    <li>Make sure your <strong>laptop is ready</strong> with Node.js and MongoDB installed</li>
    <li>Join our <strong>pre-bootcamp session</strong> (details coming soon!)</li>
    <li>Be ready to <strong>learn, build, and grow</strong> as a full-stack developer!</li>
</ul>

<p>If you have any questions, feel free to reach out to us at <strong>support@codercrafter.in</strong>. Stay tuned for further updates!</p>

<p><strong>📅 Save the Date:</strong> 08th March 2025</p>
<p><strong>📩 Watch your inbox for upcoming details</strong></p>

<p>Looking forward to seeing you in the bootcamp! 🚀</p>

<p><strong>Best Regards,</strong><br>
<strong>Codercrafter Team</strong><br>
📧 <a href="mailto:support@codercrafter.in">support@codercrafter.in</a><br>
🌐 <a href="https://codercrafter.in">https://codercrafter.in</a></p>`

        const awsRequestResponse = `<p>Hi ${firstName} ${lastName},</p> <p>Thank you for enrolling in our **free AWS DevOps Bootcamp**! We are thrilled to have you onboard and can't wait to see you at the session. 🚀</p> <h3>📅 Meeting Details</h3> <p>**Date:** 8th March<br> **Time:** 3:00 PM to 4:00 PM<br> **Meeting Link:** https://calendar.app.google/TXKarTNtMezUcutz7 *(Click to join)*</p> <h3>Why You Should Be Excited 🎉</h3> <p>This bootcamp is designed to introduce you to the fundamentals of AWS and the DevOps field. Here’s what you can expect to gain:</p> <ul> <li>A solid understanding of AWS services and how they integrate with DevOps workflows.</li> <li>Insights into automating deployment, scaling, and monitoring of applications.</li> <li>Practical tips and real-world examples to kickstart your DevOps journey.</li> </ul> <p>Whether you're new to this field or looking to upskill, this session will provide a strong foundation to excel in AWS DevOps.</p> <h3>About CodeCrafter</h3> <p>At **CodeCrafter**, we believe in empowering learners like you with the best resources and guidance. Our bootcamps and courses are led by **professional trainers** with hands-on industry experience to help you succeed in your career.</p> <p>If you have any questions, feel free to reach out to us at support@codecrafter.com.</p> <p>Best regards,<br> **CoderCrafter Team**</p>`
        let emailContent = course == "mern" ? mernRequestResponse : awsRequestResponse;
        const mailOptions = {
            from: "support@codercrafter.in", // Sender address
            to: email, // Recipient address
            subject: 'Thank You for Enrolling in Our Bootcamp',
            html: emailContent,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${email}`);
            return new Response(JSON.stringify({ message: "Invitation sent successfuly!" }), { status: 200 });
        } catch (error) {
            console.error('Error sending email:', error);
            return new Response(JSON.stringify({ message: "Error in sending invitation!" }), { status: 500 });
        }
    } else {
        console.log(email, firstName + " " + lastName, "Details")
        console.log("No Email or phone found");
        return new Response(JSON.stringify({ message: "Email or Phone not found" }), { status: 400 })
    }

}