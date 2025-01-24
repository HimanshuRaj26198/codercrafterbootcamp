import nodemailer from "nodemailer";
export async function POST(req) {
    let body = await req.json();
    let { email, firstName, lastName } = body;

    // Nodemailer Transporter Configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service provider
        auth: {
            user: "himanshu26198@gmail.com", // Your email
            pass: "xhwm dnbx tetr xawj", // Your email password or app-specific password
        },
    });

    if (firstName && email) {
        const mailOptions = {
            from: "himanshu26198@gmail.com", // Sender address
            to: email, // Recipient address
            subject: 'Thank You for Enrolling in Our Bootcamp',
            html: `<p>Hi ${firstName} ${lastName},</p> <p>Thank you for enrolling in our **free AWS DevOps Bootcamp**! We are thrilled to have you onboard and can't wait to see you at the session. 🚀</p> <h3>📅 Meeting Details</h3> <p>**Date:** 25th January<br> **Time:** 2:30 PM to 5:30 PM<br> **Meeting Link:** https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTZ0cThmaWZmb2RsM3MyYnVmdWZ2MGR0cHQgaGltYW5zaHUuY29kZWJ1Z2dlckBt&tmsrc=himanshu.codebugger%40gmail.com *(Click to join)*</p> <h3>Why You Should Be Excited 🎉</h3> <p>This bootcamp is designed to introduce you to the fundamentals of AWS and the DevOps field. Here’s what you can expect to gain:</p> <ul> <li>A solid understanding of AWS services and how they integrate with DevOps workflows.</li> <li>Insights into automating deployment, scaling, and monitoring of applications.</li> <li>Practical tips and real-world examples to kickstart your DevOps journey.</li> </ul> <p>Whether you're new to this field or looking to upskill, this session will provide a strong foundation to excel in AWS DevOps.</p> <h3>About CodeCrafter</h3> <p>At **CodeCrafter**, we believe in empowering learners like you with the best resources and guidance. Our bootcamps and courses are led by **professional trainers** with hands-on industry experience to help you succeed in your career.</p> <p>If you have any questions, feel free to reach out to us at [support@codecrafter.com].</p> <p>Best regards,<br> **CoderCrafter Team**</p>`,
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