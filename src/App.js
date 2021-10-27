import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { NoMatch } from "./components/noMatch";
import { Layout } from "./components/layout";
import { NavBar } from "./components/navBar";
import { Projects } from "./components/projects";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import Particles from "./components/Particles";
import "./components/index.css";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    width: "100%",
    background: "#14453d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div style={styles.root}>
            <Particles />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <NavBar />

              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/projects" component={Projects} />
                  <Route component={NoMatch} />
                </Switch>
              </Layout>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;

// {
//   /* function App() {
//   return (
//     <div className="App">
//       <About />
//       <Navigation />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//       </Switch>
//     </div>
//   );
// }

// export default App; */
// }
