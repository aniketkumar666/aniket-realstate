import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.471385784463!2d83.10412041012181!3d25.28836192791039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3aea264ac34d%3A0x8964fbd246a11082!2sTechPath%20Research%20and%20Development%20Private%20Limited!5e0!3m2!1sen!2sin!4v1690546986696!5m2!1sen!2sin" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map


