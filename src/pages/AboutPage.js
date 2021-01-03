import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
          <p> Hello! I am an Information Technology professional who works as a Desktop Support Tech at a local clinic. I have worked in the IT Industry for about 6 years now. I have many certifications such as CCNA, ITIL, and MCP. I am a very creative person. I have experience in programs like Adobe Photoshop, Illustrator, and InDesign. Becoming a Software Developer is my goal! I’ve always had a desire for coding, and I wanted to know how so many codes can make a beautiful website or app. Joining Vanderbilt University Boot Camp has been awesome thus far and I’m learning so much!</p> 
            </Content>
        </div>
    );

}

export default AboutPage;