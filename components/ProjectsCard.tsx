

import { ProjectType } from '../types/sections';

// const ProjectsCard = ({ name, desc, github, link, companyLogo }: ProjectType) => {
//   return (
//     <Col lg="6">
//       <Fade bottom duration={2000}>
//         <Card className="shadow-lg--hover shadow mt-4">
//           <CardBody>
//           <img
//               src={companyLogo}
//               style={{
//                 objectFit: 'cover',
//                 left: 0,
//                 right: 0,
//                 top: '7rem',
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//                 width: '8rem',
//                 height: '8rem',
//                 borderRadius: '50%',
//               }}
//               className="shadow mb-3"
//               alt={companyLogo}
//             />
//             <div className="d-flex px-3">
//               <div className="pl-4">
//                 <h3>{name}</h3>
//                 <p className="description mt-3">{desc}</p>
//                 {github ? (
//                   <Button
//                     className="btn-icon"
//                     color="github"
//                     href={github}
//                     target="_blank"
//                     rel="noopener"
//                     aria-label="Github"
//                   >
//                     <span className="btn-inner--icon">
//                       <i className="fa fa-github" />
//                     </span>
//                   </Button>
//                 ) : null}
//                 {link ? (
//                   <Button
//                     className="btn-icon"
//                     color="success"
//                     href={link}
//                     target="_blank"
//                     rel="noopener"
//                     aria-label="Twitter"
//                   >
//                     <span className="btn-inner--icon">
//                       <i className="fa fa-arrow-right mr-2" />
//                     </span>
//                     <span className="nav-link-inner--text ml-1">Demo</span>
//                   </Button>
//                 ) : null}
//               </div>
//             </div>
//           </CardBody>
//         </Card>
//       </Fade>
//     </Col>
//   );
// };

// export default ProjectsCard;




import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Button
} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ExperienceType } from '../types/sections';

const ProjectsCard =  ({ name, desc, github, link, companyLogo }: ProjectType) => {

  const getLogoStyles = (company: string) => {
    if (company === 'EliteCare - Health Assistant' || company === 'SmartHomes - Online Retailer Platform') {
      return {
        objectFit: 'cover' as 'cover',
        left: 0,
        right: 0,
        top: '7rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '8rem',
        height: '8rem',
        borderRadius: '50%',
      };
    }
    return {
      objectFit: 'cover' as 'cover',
      left: 0,
      right: 0,
      top: '7rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '8rem',
      height: '8rem',
      borderRadius: '50%',
      padding: '1rem',
    };
  };

  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={companyLogo}
              style={getLogoStyles(name)}
              className="shadow mb-3"
              alt={companyLogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {name}
            </CardTitle>
            <CardText tag="div" className="description my-3 text-left">
              {desc}
              <p className="description mt-3"></p>
              {github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;

