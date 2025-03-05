import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/page";
import Footer from "./_components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AWS Free Bootcamp | CoderCrafter",
  description: "Unlock your potential in AWS DevOps! Join Codercrafter's free bootcamp to learn hands-on AWS, CI/CD pipelines, cloud automation, and more. Perfect for beginners and professionals. Enroll today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Open Graph Meta Tags --> */}
        <meta property="og:title" content="AWS Free Bootcamp | Master DevOps with Codercrafter" />
        <meta property="og:description" content="Fast-track your career with Codercrafter's free AWS DevOps bootcamp. Gain real-world skills in AWS, CI/CD, and cloud automation. Enroll now!" />
        <meta property="og:image" content="/assets/images/aws_card.webp" />
        <meta property="og:url" content="https://bootcamp.codercrafter.in" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn AWS DevOps for Free | Codercrafter Bootcamp" />
        <meta name="twitter:description" content="Want to master AWS DevOps? Join our free bootcamp and learn AWS, CI/CD pipelines, and automation. Start your cloud journey today with Codercrafter!" />
        <meta name="twitter:image" content="/assets/images/aws_card.webp" />
        <meta name="twitter:url" content="https://bootcamp.codercrafter.in" />

        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
