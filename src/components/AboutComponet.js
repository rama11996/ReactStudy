import React, {Component} from 'react';
import { Media } from 'reactstrap';

class About extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const abt = this.props.about.map((about) => {
            return(
                <div key={about.id} className="About-section"> 
                    <div className="ab-left">
                        <Media object src={about.image} alt={about.name} />
                    </div>
                    <div className="ab-right">
                        <p> {about.desc1}</p>
                        <p> {about.desc2}</p>
                    </div>
                </div>
            );
        });
        return (
            <div>
                <div className="row">  
                    {abt}  
                </div>
            </div>
            );
    }        
}

export default About;