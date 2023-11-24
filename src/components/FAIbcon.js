import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons used for habits
const FAIbcon = ({iconName, className}) => {

    library.add(
        // social
        faFacebook, faInstagram, faGoogle
    );

    return(
        <FontAwesomeIcon icon={`fab fa-${iconName ?? faFacebook}`} className={className} />
    );
};

export default FAIbcon;