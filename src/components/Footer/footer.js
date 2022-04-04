import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {console.log("***** Inside of the Footer Component - ")}
      <p className="footer-content">© 2020 Robert's One Stop Shop</p>
      {/* <button
                type="button"
                class="btn btn-dark"
                onclick="topFunction()"
                id="scrollup"
                title="Go to top"
            >
                Back to top
            </button> */}
    </footer>
  );
};

export default Footer;
