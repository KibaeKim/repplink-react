import './styles/App.scss';
import Section from './components/Section';

function handleSubmit() {
  const email = document.getElementById('email').value;
  const url = document.getElementById('url').value;

  if (!email && !url) {
    alert('Please enter an email and your Shopify store url');
  } else if (!email) {
    alert('Please enter an email');
  } else if (!url) {
    alert('Please your shopify email');
  } else {
    document.getElementById('email').value = '';
    document.getElementById('url').value = '';
    alert(
      'Thanks for signing up. We will send you an email regarding your next actions!'
    );
  }
}

function App() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row-reverse vh-100 overflow-auto position-absolute">
        <div className="fixed-section align-items-start top-0 mx-0">
          <Section className="section-component" color="#700FF4">
            <div className="d-flex center-children">
              <div className="card signup-card">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <label for="email">Email</label>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="name@repplink.com"
                      id="email"
                    ></input>
                    <label className="mt-4" for="email">
                      Shopify Store URL
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="repplink.com"
                      id="url"
                    ></input>
                    <button className="btn btn-primary mt-4" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Section>
        </div>
        <div className="scrollable d-block">
          <Section className="section-component" color="#198754" opacity="78%">
            <div className="center-children d-flex flex-column">
              <h1 className="text-light">repplink</h1>
              <h2 className="text-light section-heading">
                Launch high impact marketing campaigns for your Shopify store
                today!
              </h2>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export default App;
