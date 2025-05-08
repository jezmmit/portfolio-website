import React from 'react';
// @ts-ignore
import saga from '../../assets/videos/Smart.mp4';
// @ts-ignore
import computer from '../../assets/videos/FSL.mp4';
// @ts-ignore
import scroll from '../../assets/videos/scroll.mp4';
import VideoAsset from '../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <br />
            <p>
                Below are some of the projects I have worked on
                over the last few years.
            </p>
            <br />
            <br />
            <div className="text-block">
                <h2>FSL Interactive Tutoring Device</h2>
                <br />
                <p>
                    FSL Interactive tutoring device is a thesis project I co-developed during my 
                    final year at Mapúa University. It’s a real-time interactive device designed to help users learn and 
                    practice Filipino Sign Language (FSL) through tutorials, gesture recognition, and instant feedback. 
                    The idea came from a shared passion for combining technology and accessibility, and 
                    I was involved in both the machine learning development and system design. 
                    Building this project challenged me technically and creatively, 
                    and I’m proud of how it turned out.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> FSL Interactive Tutoring Device Video Demo
                        </sub>
                    </p>
                </div>
                <p>
                    The device uses a camera to capture a user's hand gestures in real time. These gestures are processed using
                    machine learning models specifically a combination of Convolutional Neural Networks (CNN) and
                    Support Vector Machines (SVM) to recognize and classify Filipino Sign Language (FSL) signs. The system
                    then provides instant feedback through a graphical user interface (GUI), which includes: Alphabet Tutorial,
                    Gesture Tutorial, and a Quiz Mode.
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href=""
                    >
                    </a>{' '}
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/jezmmit/Interactive-FSL"
                        >
                            <p>
                                <b>[GitHub]</b> - Interactive FSL Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Smart Attendance System</h2>
                <br />
                <p>
                    The "ESP8266-based Smart Attendance System with Google Sheets and Email Integration" is a capstone
                    project designed to modernize and streamline attendance tracking at Mapúa University. This system
                    leverages an ESP8266 NodeMCU microcontroller and RFID technology to automate the logging of student
                    attendance in real-time. When a student scans their RFID-tagged ID card, their information is processed and
                    immediately recorded in Google Sheets, where administrators can view attendance logs and a dynamically
                    updating seating chart. 
                    
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> ESP8266 based Smart Attendance System with Google Sheets and Email Integration Video Demo
                        </sub>
                    </p>
                </div>
                <p>
                    The system features an LCD for student info and a buzzer for real-time feedback. After each session, it
                    automatically emails a summary with a downloadable attendance report. Tested for reliability, it offers a
                    scalable and efficient solution for schools looking to modernize attendance tracking.

                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/jezmmit/Smart-Attendance"
                        >
                            <p>
                                <b>[GitHub]</b> - Smart Attendance System Repository
                            </p>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
