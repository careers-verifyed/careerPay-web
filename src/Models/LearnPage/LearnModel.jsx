import React from 'react';
import "./learnModel.scss";
import { Svg1 } from '../../assets';
import { Buttons } from '../../utils';

const LearnModel = ({headingTitle, paragraphTitle}) => {
  return (
    <div>
        <div className="LearnModel">
            <div className="LearnModel_container">
                <div className="LearnModel_container_left">
                    <div>
                        <img src={Svg1} alt="" />
                    </div>
                </div>
                <div className="LearnModel_container_right">
                    <h2>{headingTitle}</h2>
                    <p>{paragraphTitle}</p>
                    <Buttons textSite= "Learn More" /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearnModel