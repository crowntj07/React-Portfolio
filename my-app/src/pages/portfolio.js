import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://github.com/chadtarpey615/Super-Heroes">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Super Hero Project</p>
                                <p id="repo"><a href="https://github.com/chadtarpey615/Super-Heroes">https://github.com/chadtarpey615/Super-Heroes</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://github.com/crowntj07/The-Littlest-Pet-Shop">
                                    <img src="assets/img/petshop.PNG"
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">The Littlest Pet Shop</p>
                                <p id="repo"><a href="https://github.com/crowntj07/The-Littlest-Pet-Shop"
                                >https://github.com/crowntj07/The-Littlest-Pet-Shop</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </div>






        </div>

    )
}
export default portfolio                    