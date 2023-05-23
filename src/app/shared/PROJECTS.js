import blogImage from '../assets/img/blog-image.jpg';
import projectsImage from '../assets/img/projects-image.jpg';
import tutorialsImage from '../assets/img/tutorials-image.jpg';
import aboutMeImage from '../assets/img/about-me-image.jpg';

export const PROJECTS = [
    {
        id: 0,
        name: 'My Blog',
        image: blogImage,
        featured: false,
        description:
            'My blog about things I think about.'
    },
    {
        id: 1,
        name: 'My Projects',
        image: projectsImage,
        featured: false,
        description:
            'Projects that I have worked on, including links to my repositories and resources.'
    },
    {
        id: 2,
        name: 'Free Tutorials',
        image: tutorialsImage,
        featured: false,
        description:
            'Guides and DIYs for fun and increasing your skillset.'
    },
    {
        id: 3,
        name: 'About Me',
        image: aboutMeImage,
        featured: false,
        description:
            "My background and skillset."
    }
];
