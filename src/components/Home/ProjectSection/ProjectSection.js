import React from 'react';
import hot from '../../../images/hot.png'

const ProjectSection = () => {
    const projectDetails = [
        {
            title: 'Creative Agency',
            description: 'A full stack Agency handling app using react,mongo and node',
            picture: hot
        },
        {
            title: 'Creative Agency',
            description: 'A full stack Agency handling app using react,mongo and node',
            picture: hot

        },
        {
            title: 'Creative Agency',
            description: 'A full stack Agency handling app using react,mongo and node',
            picture: hot
        },
        {
            title: 'Creative Agency',
            description: 'A full stack Agency handling app using react,mongo and node',
            picture: hot

        },
        {
            title: 'Creative Agency',
            description: 'A full stack Agency handling app using react,mongo and node',
            picture: hot

        },
        {
            title: 'Creative Agency',
            description: 'A full stack Agency handling app using react,mongo and node',
            picture: hot

        }
    ]
    return (
        <div className="row">
            {
                projectDetails.map(product => {
                    <div className="col-md-4">
                        <div className="card" style="width: 18rem;">
                            <img src={product.picture} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ProjectSection;