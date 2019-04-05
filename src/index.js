import React from 'react';
import ReactDOM from 'react-dom';
import img1 from './img/1.jpg'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import img7 from './img/7.png'
import img8 from './img/8.png'

const toys = [
    {
        toyName: 'Toy One',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img1}
    },
    {
        toyName: 'Toy Two',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img2}
    },
    {
        toyName: 'Toy Three',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img3}
    },
    {
        toyName: 'Toy Four',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img4}
    },
    {
        toyName: 'Toy Five',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img5}
    },
    {
        toyName: 'Toy Six',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img6}
    },
    {
        toyName: 'Toy Seven',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img7}
    },
    {
        toyName: 'Toy Eight',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
        the industry's standard dummy text ever since the 1500s.`,
        imageNumber: {img8}
    },
];

const Application = () =>{
    return(<div>
        <Nav />
        <Jumbotron />
        <hr/>
        <Toys />
        <Footer />
    </div>
);
};

const Nav = () => <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
             id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link"
               href="#home">Home
              <span className="sr-only">(current)</span>
            </a>
          </div>
        </div>
      </div>
</nav>;

const Jumbotron =() => <div className="jumbotron jumbotron-fluid bg-info text-white">
    <div className="container text-sm-center pt-5">
        <h1 className="display-2">Vumbula Toys</h1>
        <p className="lead">Your one stop toys shop</p>
        <div className="btn-group mt-4" role="group" aria-label="Callout Buttons">
            <button type="button" className="btn btn-primary btn-lg">Order Now</button>
        </div>
    </div>
</div>;

const Toys = (props) =>
<div className="container pt-4">
    <h1 id="toys" className="display-4 my-4 text-center text-muted">Toys</h1>
    <div className="row">
        {props.toys.map((toy, index) => <Card key={index} toy={toy}/>)}
    </div>
</div>;

const Footer =() => <div className="row py-3">
    <div className="col-md-7">
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
            </li>
        </ul>
    </div>
    <div className="col-md text-md-right">
        <small>&copy; Vumbula Kids Shop</small>
    </div>
</div>;

const Card = (props) =>
<div className="col-md-6 col-lg-3">
    <div className="card mb-3">
        <img className="card-img-top" src={props.toys.imageNumber} alt="2"/>
        <div className="card-body">
            <h4 className="card-title text-center">{props.toys.toyName}</h4>
            <p className="card-text">
              {props.toys.description}
            </p>
        </div>
    </div>
</div>;
ReactDOM.render(<Application toys={toys} />,document.getElementById('root'));
