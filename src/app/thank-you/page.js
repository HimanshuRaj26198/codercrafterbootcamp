const ThankYou = () => {
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
                        <h1>AWS FREE BOOTCAMP</h1>
                    </div>
                    <div>
                        <h3 style={{ textDecoration: "underline" }}>On: 25th January 2025</h3>
                    </div>
                    <div className="description">
                        <h2>
                            Hurray! You are enrolled to free AWS Bootcamp.
                        </h2>
                        <span style={{ fontWeight: 700, color: "red" }}>
                            Check you inbox for the bootcamp invitation!
                        </span>{" "}

                    </div>
                </div>
            </main>
        </section>
    </>
}

export default ThankYou;