import './styles/App.scss';
import Section from './components/Section';

function App() {
  return (
    <>
      <div className="d-flex flex-column flex-md-row-reverse vh-100 overflow-auto position-absolute">
        <div className="fixed-section align-items-start top-0 mx-0">
          <Section className="section-component" color="#700FF4">
            <div className="d-flex center-children">
              <div className="card signup-card">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <form className="d-flex flex-column mb-4">
                    <label for="email">Email</label>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="name@repplink.com"
                    ></input>
                  </form>
                  <form className="d-flex flex-column">
                    <label for="email">Shopify Store URL</label>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="repplink.com"
                    ></input>
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
          <Section className="section-component" color="#DC3545" opacity="78%">
            Test2
          </Section>
          <Section className="section-component" color="#0D6EFD" opacity="78%">
            Test2
          </Section>
        </div>
      </div>
    </>
  );
}

export default App;
