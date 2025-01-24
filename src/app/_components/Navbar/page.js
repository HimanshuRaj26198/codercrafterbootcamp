const Navbar = () => {
    return <>
        <header>
            <nav style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", padding: 2 }} >
                <a href="https://codercrafter.in" >
                    <img
                        style={{ width: "22vh", height: "auto", cursor: "pointer" }}
                        src="/assets/images/codecrafter_logo.png"
                    />
                </a>
                <span>
                    <strong>Enquiry:</strong> <a href="tel:8920319125" >
                        <strong>8920319125</strong>
                    </a>
                </span>
            </nav>
        </header>

    </>
}

export default Navbar;