import React, { Component } from "react";
import Me from "../components/Me"

class About extends Component {
  render() {
    return (
      <div className="abground">

        <p className="abpa">Aaron's Github Page</p>
        <p class="contain">
          Here you can see Ayron's project through Github his page! those projects are not so great, normal looking projects so don't expect some crazy magicall stuff xD
          <br />The button below will guid you to my Github page.
        </p>

        <div className="abpa">
          <a className="nav-link tm-nav-link" href="https://github.com/dnsghd49">
            <button type="submit" className="githubBtn" href="https://github.com/dnsghd49">GitHub</button>
          </a>
          <Me />
        </div>
      </div>
    );
  }
}





export default About;
