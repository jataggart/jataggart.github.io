export interface Data {
    meta: Meta;
    education: Education[];
    experience: Experience[];
}

export interface Meta {
    name: string;
    title: string;
    contact: {
        phone: string;
        email: string;
    }
}

export interface Education {
    school: string;
    enrolled: number;
    graduated: number;
    degree: string;
    major: string;
}

export interface Experience {
    title: string;
    company: string;
    start: number;
    end: number;
    projects?: Project[]
}

export interface Project {
    name: string;
    duration: string;
    technologies: { [category: string]: Technology[] };
    responsibilities: string[];
    impacts: string[];
}

export interface Technology {
    name: string;
    usage: string;
}

export const data: Data = {
    meta: {
        name: 'Jay Taggart',
        title: 'Lead Software Engineer',
        contact: {
            phone: 'By request',
            email: 'jataggart+resume@gmail.com'
        }
    },
    education: [
        {
            school: 'Illinois Institute of Technology',
            enrolled: 2006,
            graduated: 2010,
            degree: 'Bachelor of Science',
            major: 'Computer Science'
        }
    ],
    experience: [
        {
            title: 'Lead Software Engineer',
            company: 'Publicis Media',
            start: 2016,
            end: null,
            projects: [
                {
                    name: 'ppc.publicismedia.com',
                    duration: '2 months',
                    technologies: {
                        'Core': [
                            {name: 'Ruby', usage: 'Language'},
                            {name: 'Rails', usage: 'Web framework'},
                            {name: 'MongoDB', usage: 'Database'},
                            {name: 'Angular 4.1', usage: 'UI'}
                        ]
                    },
                    responsibilities: [
                        'Led team of three engineers',
                        'Transformed static/hardcoded prototype module into a CMS-driven module to reduce engineering efforts',
                        'Designed/implemented request/response API contracts',
                        'Designed/implemented UI components'
                    ],
                    impacts: [
                        'Freed expensive engineering resources to work on the final platform rather than the prototype',
                        'Showcased test-driven practice and benefits, covered 97% of lines in affected files and zero known defects'
                    ]
                },
                {
                    name: 'core.publicismedia.com',
                    duration: '1 year 3 months',
                    technologies: {
                        'Server': [
                            {name: 'Java8', usage: 'Language'},
                            {name: 'Spark Java', usage: 'Web framework'},
                            {name: 'MongoDB', usage: 'Database'}
                        ],
                        'UI': [
                            {name: 'React', usage: 'Framework'},
                            {name: 'Redux', usage: 'State management'},
                            {name: 'Typescript', usage: 'Language'},
                            {name: 'CSS', usage: 'Language'},
                            {name: 'Webpack', usage: 'Builder'}
                        ],
                        'AWS Infrastructure': [
                            {name: 'Opsworks', usage: 'Server setup'},
                            {name: 'Elastic Container Service', usage: 'Docker clustering'},
                            {name: 'Elastic Compute Cloud', usage: 'Load balancing'},
                            {name: 'Route53', usage: 'Routing'}
                        ],
                        'Continuous Integration / Deployment': [
                            {name: 'Teamcity', usage: 'Integration/deployment runner'},
                            {name: 'Docker', usage: 'Containerization'}
                        ]
                    },
                    responsibilities: [
                        'Led team of 3 engineers',
                        'Designed architecture of microservices and RESTful APIs',
                        'Implemented core functionality of authentication/authorization revolving around JWT tokens for stateless requests',
                        'Implemented core functionality of integration with Google DCM APIs for augmenting placement information',
                        'Designed application state model for Redux',
                        'Implemented Typescript integration',
                        'Implemented Webpack integration',
                        'Designed, implemented, and trained source code versioning process',
                        'Designed, implemented, and trained continuous integration and deployment process'
                    ],
                    impacts: [
                        'Administration modules reduced business reliance on developers to manage the platform',
                        'Redux state design reduced development time and decreased number of defects due to developer error',
                        'Continuous integration/deployment process sped up release cycles from days to minutes'
                    ]
                }
            ]
        },
        {
            title: 'Senior Software Engineer',
            company: 'VivaKi',
            start: 2012,
            end: 2016,
            projects: [
                {
                    name: 'vos.vivaki.com',
                    duration: '1 year',
                    technologies: {
                        'Server': [
                            {name: 'Java8', usage: 'Language'},
                            {name: 'Spring Boot', usage: 'Framework'},
                            {name: 'Microsoft SQL Server', usage: 'Database'},
                        ],
                        'UI': [
                            {name: 'HTML', usage: 'Page structure'},
                            {name: 'CSS', usage: 'Page styling'},
                            {name: 'jQuery', usage: 'Page interaction'}
                        ],
                        'Quality Index': [
                            {name: 'Google BigQuery', usage: 'Database'}
                        ],
                        'Solutions Suite': [
                            {name: 'Contentful', usage: 'CMS'}
                        ],
                        'Verified': [
                            {name: 'Contentful', usage: 'CMS'}
                        ]
                    },
                    responsibilities: [
                        'Designed, implemented, and trained source code versioning process',
                        'Designed, implemented, and trained continuous integration and deployment process',
                        'Led the development of individual modules within the VOS platform',
                        'Implemented core functionality of authentication/authorization via custom tokens for stateless requests'
                    ],
                    impacts: [
                        'The three modules implemented where the three most used modules in the system out of 21',
                        'New source code versioning process reduced lost code'
                    ]
                },
                {
                    name: 'Benchtools',
                    duration: '6 months',
                    technologies: {
                        'Core': [
                            {name: 'PHP', usage: 'Language'},
                            {name: 'Laravel', usage: 'Web Framework'},
                            {name: 'PostgreSQL', usage: 'Database'},
                        ]
                    },
                    responsibilities: [
                        'Review existing data ingestion process for efficiency and correctness',
                        'Design and implement next-generation data ingestion process'
                    ],
                    impacts: [
                        'Implemented v2 of data ingestion, speeding up loading and increasing reliability and monitoring',
                        'Implemented administration/monitoring tools surrounding data ingestion, allowing transparency into the process'
                    ]
                },
                {
                    name: 'SkySkraper',
                    duration: '1 year',
                    technologies: {
                        'Core': [
                            {name: 'Java 7', usage: 'Language'},
                            {name: 'NodeJS', usage: 'Language'},
                            {name: 'Microsoft SQL Server', usage: 'Database'}
                        ]
                    },
                    responsibilities: [
                        'Review existing data ingestion processes for effidiency and correctness',
                        'Implement new data ingestion processes based on requirements',
                        'Reproduce and fix defects identified by QA/end users'
                    ],
                    impacts: [
                        'Designed and implemented new process for Facebook social data ingestion that was successfully sold to clients'
                    ]
                },
                {
                    name: 'Campaigns on Demand',
                    duration: '4 years',
                    technologies: {
                        'Core': [
                            {name: 'Java 6', usage: 'Language'},
                            {name: 'Spring', usage: 'Web Framework'},
                            {name: 'Flash', usage: 'Language'},
                            {name: 'Flex', usage: 'UI Framework'},
                        ]
                    },
                    responsibilities: [
                        'Implement new functionality based on requirements'
                    ],
                    impacts: [
                        'Implemented new UI, leading to increased user adoption and usage',
                        'Implemented prototype natural language algorithm builder which allowed users to express their own data analysis algorithms in a native way',
                        'Implemented metric builder functionality that gave users the ability to create their own metrics for their data',
                        'Implemented BlazeDS transport protocol between API and UI, increasing throughput and reducing transfer times'
                    ]
                }
            ]
        },
        {
            title: 'Software Engineer',
            company: 'VivaKi',
            start: 2011,
            end: 2012
        },
        {
            title: 'Junior Software Engineer',
            company: 'VivaKi',
            start: 2010,
            end: 2011
        },
        {
            title: 'Java Web Developer',
            company: 'Illinois Institute of Technology',
            start: 2009,
            end: 2010
        }
    ]
};