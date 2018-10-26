import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <ul className="navbar-menu ml-auto">
      <li className="navbar-item">
        <Link to ="/"><i className="fas fa-home pr-1"></i>Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/about"><i className="fas fa-info pr-1"></i>About</Link>
      </li>
      <li className="navbar-item">
        <Link to ="/gallary"><i className="fas fa-palette pr-1"></i>Gallary</Link>
      </li>
      <li className="navbar-item">
        <Link to ="/contact"><i className="fas fa-envelope pr-1"></i>Contact Me</Link>
      </li>
    </ul>
  </div>
);

const Logo = () => (
  <div className="mr-auto">
    <h1 className="logo-type col-4 ml-3">Osamah Alkhamees</h1>
  </div>
);

const quotes = [
  "❝Success is not final; failure is not fatal: It is the courage to continue that counts.❞",
  "❝It is better to fail in originality than to succeed in imitation.❞",
  "❝Opportunities don't happen. You create them.❞",
  "❝I find that the harder I work, the more luck I seem to have.❞",
  "❝All progress takes place outside the comfort zone❞",
  "❝Fall seven times and stand up eight.❞",
  "«Insert great quote here»"
];

const randomquote = quotes[Math.floor(Math.random() * quotes.length)];

const Quote = () => (
  <div className="text-centered">
    <p className="p-type">{randomquote}</p>
  </div>
)

const Home = () => (
  <div>
    <Logo/>
    <Quote/>
  </div>
);

const About = () => (
  <div className=" text-center ">
    <h2 className="section-title">“About„</h2>
    <p className="p-type">A Front-End Dev and Graphic Designer, searching for more places to make <span className="sp-type">beauty</span>.</p>
    <p className="p-type">If you would like to know me better, check my <span className="sp-type"><a href="http://mrosamah.com/blog/" target="_blank" rel="noopener noreferrer">blog</a></span>, you need to understand Arabic to proceed.</p>
  </div>
);

const Gallary = () => (
  <div className=" text-center ">
    <h2 className="section-title">“Gallary„</h2>
    <p className="p-type">This page is under heavy maintenance <i className="fas fa-wrench"></i></p>
    <p className="p-type">In the maen time, check my <a href="https://www.behance.net/mrosamah" target="_blank" rel="noopener noreferrer"><i className="fab fa-behance"></i>hance</a> profile.</p>
    <p className="p-type">And also check my <a href="https://github.com/MrOsamah" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> Github</a></p>
  </div>
);

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "Be nice please."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="mx-auto form-div">
        <form action="https://formspree.io/mrosamah@outlook.sa"
          method="POST">
          <div className="form-group">
          <label for="formControlInput1">Email Address:</label>
          <input type="text" name="_replyto" className="form-control" id="exampleFormControlInput1" placeholder="eample@gmail.com"></input>
          </div>
          <div className="form-group">
          <label for="formControlInput2">Subject:</label>
          <input type="text" name="_subject" className="form-control" id="exampleFormControlInput1" placeholder="About..."></input>
          </div>
          <div className="form-group">
          <label for="formControlInput3">Your Message:</label>
          <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Don't be shy :)"></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
          <input type="hidden" name="_next" value="/thanks" />
        </form>
        <p className="my-2">And I am avilable on Whatsapp <a href="https://wa.me/+966559814494"><i className="fab fa-whatsapp"></i> +966559814494</a>.</p>
      </div>
    );
  }
}

const Thanks = () => (
  <div className="text-centered">
  <p className="p-type">Thank you for the message, I will reply as soon as possible.</p>
  </div>
);

const NoMatch = () => (
  <div>
    <h2>What are you looking for?</h2>
  </div>
)

function Website() {
  return (
    <Router>
      <Route render={({location}) => (
      <div>
        <NavBar/>
          <TransitionGroup className="transition-group">
              <CSSTransition
              key={location.key}
              timeout={{
                enter:300,
                exit:300
              }}
              classNames="fade"
              >
                <section className="route-section">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/gallary" component={Gallary} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/thanks" component={Thanks}/>
                    <Route component={NoMatch}/>
                  </Switch>
                </section>
                
              </CSSTransition>
            </TransitionGroup>
        </div>
      )} />

    </Router>
  );
} 

export default Website;
