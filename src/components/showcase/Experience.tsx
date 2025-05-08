import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
      
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FiveM</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://fivem.net/'}
                        >
                            <h4>FiveM</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Anti-Cheat Moderator</h3>
                        <b>
                            <p>Aug 2024 - Feb 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Targeted towards maintaining fair play and community trust in a high-traffic multiplayer gaming
                    environment, this role involved close monitoring of real-time player behavior and proactive incident
                    response to uphold server integrity.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Investigated cheating, exploiting, and other malicious activities across multiple
                            FiveM servers, helping maintain a secure and enjoyable
                            environment for over 500 active players.
                        </p>
                    </li>
                    <li>
                        <p>
                            Analyzed detailed server logs, client behavior, and anti-cheat system outputs to identify and trace
                            suspicious activity, developing a strong foundation in real-time threat detection and log analysis.
                            
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with server administrators and developers to enhance anti-cheat frameworks by
                            contributing insights that led to the refinement of detection rules and mitigation strategies.
                        </p>
                    </li>
                    <li>
                        <p>
                           Gained practical, hands-on experience in incident response workflows, real-time security operations,
                           and behavioral threat intelligence, often under pressure in fast-paced environments.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IECEP–MUSC</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.facebook.com/iecep.musc'}
                        >
                            <h4>IECEP-MUSC</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Board Auditor</h3>
                        <b>
                            <p>Aug 2024 - May 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Responsible for independently reviewing and validating the organization’s financial
                    records and procedures. This role emphasized compliance, accountability, and clear communication with
                    executive officers to ensure transparency and integrity in all financial matters.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Reviewed and audited financial records to ensure transparency, accuracy, and compliance with university and organizational financial policies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Worked closely with the executive board to advise on fundraising strategies and ensure responsible fund allocation for organizational initiatives.
                        </p>
                    </li>
                    <li>
                        <p>
                            Contributed to the oversight of budget reports and financial summaries used for strategic planning and documentation.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IECEP-MUSC</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://www.facebook.com/iecep.musc'}
                        >
                            <h4>IECEP-MUSC</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Treasurer</h3>
                        <b>
                            <p>Mar 2024 - Aug 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Oversaw the financial health of the organization, 
                    managing budgets, coordinating sponsorships, and ensuring all financial operations aligned with institutional policies. 
                    This role demanded accuracy, transparency, and collaboration to fund key student led events and initiatives.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Managed all financial operations, including budgeting, expense tracking, and financial reporting for a student body of over 100 members.
                        </p>
                    </li>
                    <li>
                        <p>
                            Handled coordination with corporate and academic sponsors to secure funding for events such as technical workshops, seminars, and intercollegiate competitions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Ensured timely submission of financial documents and compliance with university guidelines, maintaining strong financial standing throughout the term.
                        </p>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
