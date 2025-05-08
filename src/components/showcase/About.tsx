import React from 'react';
import meNow from '../../assets/pictures/currentme.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (

        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Jesma Amit</h3>
            <div className="text-block">
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>About Me</h3>
                        <br />
                        <p>
                         Hi, I'm <strong>Jesma M. Amit</strong>, an Electronics Engineering student at <strong>Mapúa University</strong> with a strong passion  
                         for <strong>cybersecurity</strong> and <strong>cloud computing</strong>. I hold industry recognized certifications including <strong>CompTIA Security+</strong>
                         , <strong>Microsoft Azure Fundamentals</strong>, <strong>Google Cybersecurity Certificate</strong> and the <strong>Google Cloud Cybersecurity Certificate</strong>, which have equipped me with a
                         strong foundation in network security, threat analysis, and secure cloud practices.
                        </p>
                        <br />
                        <p>
                         Beyond academics, I’ve gained practical experience as an <strong>anti-cheat moderator</strong> in the <strong>FiveM gaming
                         community</strong>, where I developed real-world skills in monitoring systems, detecting suspicious behavior, and
                         maintaining secure environments. I also bring leadership and organizational experience from my roles 
                         as <strong>Board Auditor</strong> (Batch 77) and <strong>Treasurer</strong> (Batch 76) for <strong>IECEP-MUSC</strong>.
                        </p>
                        <br />
                        <p>
                         Currently seeking internship or entry-level opportunities to grow and contribute in the
                         cybersecurity field.
                        </p>
                        <br />
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Jesma Pogi
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <ResumeDownload />
                <br />
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:jezmmit@gmail.com">
                        jezmmit@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 29,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
