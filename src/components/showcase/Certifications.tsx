import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Security from '../../assets/pictures/projects/Security.png';
import Azure from '../../assets/pictures/projects/Azure.png';
import GCCS from '../../assets/pictures/projects/GCCS.png';
import GCS from '../../assets/pictures/projects/GCS.png';
import NS from '../../assets/pictures/projects/NS.png';
import Ensa from '../../assets/pictures/projects/Ensa.png';

export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        window.open(`/certificates/${route}.pdf`, '_blank');
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Certifications</h1>
            <h3>& Badges</h3>
            <br />
            <p>
                A collection of certifications I've earned in cybersecurity, cloud, and networking demonstrating my commitment to continuous learning and staying up-to-date with industry standards.
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={Security}
                    iconStyle={styles.computerIcon}
                    title="CompTIA Security +"
                    subtitle=""
                    route="Security"
                />
                <ProjectBox
                    icon={Azure}
                    iconStyle={styles.musicIcon}
                    title="Microsoft Certified: Azure Fundamentals"
                    subtitle=""
                    route="Azure"
                />
                <ProjectBox
                    icon={GCCS}
                    iconStyle={styles.arrowIcon}
                    title="Google Cloud Cybersecurity"
                    subtitle=""
                    route="GCCS"
                />
                <ProjectBox
                    icon={GCS}
                    iconStyle={styles.arrowIcon}
                    title="Google Cybersecurity"
                    subtitle=""
                    route="GCS"
                />
                <ProjectBox
                    icon={NS}
                    iconStyle={styles.artIcon}
                    title="CCNA: Network Security"
                    subtitle=""
                    route="NS"
                />
                                <ProjectBox
                    icon={Ensa}
                    iconStyle={styles.artIcon}
                    title="CCNA: ENSA"
                    subtitle=""
                    route="Ensa"
                />
                
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 100,
        height: 100,
    },
    musicIcon: {
        width: 100,
        height: 100,
    },
    arrowIcon: {
        width: 100,
        height: 100,
    },
    artIcon: {
        width: 100,
        height: 100,
    },
};

export default Projects;
