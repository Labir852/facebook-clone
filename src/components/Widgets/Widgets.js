import React from 'react';
import "./Widgets.css";

const Widgets = () => {
    return (
        <div className="widgets">
            <iframe src="http://cse.primeasia.edu.bd/?fbclid=IwAR38l66_Oaqpf9NXM1_i-RmKBHKYXZqpBVFkmuALPGvcVJwtU6R8nOI9fIU"
             width="340"
             height="100%"
             style={{border:"none",overflow:"hidden"}}
             scrolling="no"
             allowTransparency="true"
             allow="encrypted-media"
             frameborder="0"></iframe>
        </div>
    );
};

export default Widgets;