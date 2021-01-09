
import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const mainPage = () => {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
                </h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src="https://user-images.githubusercontent.com/66528327/104079871-99d4f680-51ea-11eb-9aa2-9fd14489fbef.jpg" alt="profile pic" width="100%" height="auto%" />
                                </div>

                                <div className="col-md-8">

                                    <p>I am an Information Technology professional who works as a Desktop Support Tech at a local clinic. I have worked in the IT Industry for about 6 years now. I have many certifications such as CCNA, ITIL, and MCP. I am a very creative person. I have experience in programs like Adobe Photoshop, Illustrator, and InDesign. Becoming a Software Developer is my goal! I’ve always had a desire for coding, and I wanted to know how so many codes can make a beautiful website or app. Joining Vanderbilt University Boot Camp has been awesome thus far and I’m learning so much!</p>

                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default body