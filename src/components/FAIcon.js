import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaseball, faBasketball, faBed, faBicycle, faBook, faBookOpenReader, faBowlingBall, faBriefcase, faBullseye, faChalkboardUser, faCircle, faCloud, faCow, faDragon, faDumbbell, faFaceSmileBeam, faFeather, faFishFins, faFootball, faFutbol, faGlassWater, faGlasses, faGolfBallTee, faGraduationCap, faHandshakeSimple, faHeart, faKeyboard, faLanguage, faMap, faMoon, faMusic, faPalette, faPaw, faPersonRays, faPersonRunning, faPersonSkating, faPersonSwimming, faPersonWalking, faSun, faTicket, faTooth, faVolleyball, faWheelchairMove } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons used for habits
const FAIcon = ({iconName, className}) => {

    library.add(
        faMoon, faCircle, faSun,
        // defaults
        faBed, faCloud, faGlassWater, faTooth,
        faPersonRunning, faBicycle, faPersonSkating, faPersonWalking, faPersonSwimming,
        faBookOpenReader, faGraduationCap, faBook, faLanguage,
        // selections
        faFaceSmileBeam, faGlasses, faBriefcase, faMap,
        faDumbbell, faPersonWalking, faHandshakeSimple, faWheelchairMove,
        faMusic, faTicket, faPalette, faFeather,
        faKeyboard, faPersonRays, faChalkboardUser, faHeart,
        faPaw, faCow, faFishFins, faDragon,
        faFutbol, faBasketball, faVolleyball, faFootball,
        faBowlingBall, faGolfBallTee, faBaseball, faBullseye
    );

    return(
        <FontAwesomeIcon icon={`fa-solid fa-${iconName ?? faFaceSmileBeam}`} className={className} />
    );
};

export default FAIcon;