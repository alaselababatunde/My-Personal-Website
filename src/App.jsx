import React, { useState, useEffect } from 'react';
import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Certificates from './components/Certificates';

function App() {
    const [data, setData] = useState({
        profile: null,
        projects: [],
        experience: null,
        services: [],
        certificates: []
    });

    useEffect(() => {
        const loadContent = async () => {
            try {
                const [profileRes, projectsRes, experienceRes, servicesRes, certificatesRes] = await Promise.all([
                    fetch('/data/profile.json'),
                    fetch('/data/projects.json'),
                    fetch('/data/experience.json'),
                    fetch('/data/services.json'),
                    fetch('/data/certificates.json')
                ]);

                setData({
                    profile: await profileRes.json(),
                    projects: await projectsRes.json(),
                    experience: await experienceRes.json(),
                    services: await servicesRes.json(),
                    certificates: await certificatesRes.json()
                });
            } catch (error) {
                console.error("Error loading content:", error);
            }
        };

        loadContent();
    }, []);

    if (!data.profile) return <div className="loading">Initializing AI environment...</div>;

    return (
        <div className="portfolio-app">
            <NavBar />
            <Hero profile={data.profile} />
            <About profile={data.profile} />
            <Projects projects={data.projects} />
            <Services services={data.services} payment={data.profile?.payment} />
            <Certificates certificates={data.certificates} />
            <Experience experience={data.experience} />
            <Contact profile={data.profile} />
        </div>
    );
}

export default App;
