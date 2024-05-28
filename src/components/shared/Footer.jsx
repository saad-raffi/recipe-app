export default function Footer() {
  return (
    <footer className="footer p-10 bg-[#4ade80] text-base-content pt-4">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Chinise</a>
        <a className="link link-hover">Italian</a>
        <a className="link link-hover">Thai</a>
        <a className="link link-hover">Japanese</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Branches</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}
