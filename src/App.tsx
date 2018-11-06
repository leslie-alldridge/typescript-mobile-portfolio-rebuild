import * as React from "react";

import Header from "./Components/Header";
// import NavbarTop from "./Components/Navbar";
// import Portfolio from "./Components/Portfolio/Portfolio";
// import BlogHeading from "./Components/Blog/BlogHeader";
// import BlogContent from "./Components/Blog/BlogContent";
// import ContactHeader from "./Components/Contact/ContactHeader";
// import AboutHeader from "./Components/About/AboutHeader";
// import About from "./Components/About/AboutContent";
// import Contact from "./Components/Contact/Contact";

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        {/* <NavbarTop /> */}
        <Header />
        {/* <Portfolio />
        <BlogHeading />
        <BlogContent />
        <ContactHeader />
        <Contact />
        <AboutHeader />
        <About /> */}
      </div>
    );
  }
}

export default App;
