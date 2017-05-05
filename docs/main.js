webpackJsonp([1],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.data = {
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
                            { name: 'Ruby', usage: 'Language' },
                            { name: 'Rails', usage: 'Web framework' },
                            { name: 'MongoDB', usage: 'Database' },
                            { name: 'Angular 4.1', usage: 'UI' }
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
                            { name: 'Java8', usage: 'Language' },
                            { name: 'Spark Java', usage: 'Web framework' },
                            { name: 'MongoDB', usage: 'Database' }
                        ],
                        'UI': [
                            { name: 'React', usage: 'Framework' },
                            { name: 'Redux', usage: 'State management' },
                            { name: 'Typescript', usage: 'Language' },
                            { name: 'CSS', usage: 'Language' },
                            { name: 'Webpack', usage: 'Builder' }
                        ],
                        'AWS Infrastructure': [
                            { name: 'Opsworks', usage: 'Server setup' },
                            { name: 'Elastic Container Service', usage: 'Docker clustering' },
                            { name: 'Elastic Compute Cloud', usage: 'Load balancing' },
                            { name: 'Route53', usage: 'Routing' }
                        ],
                        'Continuous Integration / Deployment': [
                            { name: 'Teamcity', usage: 'Integration/deployment runner' },
                            { name: 'Docker', usage: 'Containerization' }
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
                            { name: 'Java8', usage: 'Language' },
                            { name: 'Spring Boot', usage: 'Framework' },
                            { name: 'Microsoft SQL Server', usage: 'Database' },
                        ],
                        'UI': [
                            { name: 'HTML', usage: 'Page structure' },
                            { name: 'CSS', usage: 'Page styling' },
                            { name: 'jQuery', usage: 'Page interaction' }
                        ],
                        'Quality Index': [
                            { name: 'Google BigQuery', usage: 'Database' }
                        ],
                        'Solutions Suite': [
                            { name: 'Contentful', usage: 'CMS' }
                        ],
                        'Verified': [
                            { name: 'Contentful', usage: 'CMS' }
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
                            { name: 'PHP', usage: 'Language' },
                            { name: 'Laravel', usage: 'Web Framework' },
                            { name: 'PostgreSQL', usage: 'Database' },
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
                            { name: 'Java 7', usage: 'Language' },
                            { name: 'NodeJS', usage: 'Language' },
                            { name: 'Microsoft SQL Server', usage: 'Database' }
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
                            { name: 'Java 6', usage: 'Language' },
                            { name: 'Spring', usage: 'Web Framework' },
                            { name: 'Flash', usage: 'Language' },
                            { name: 'Flex', usage: 'UI Framework' },
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


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(17);
var HeaderComponent_1 = __webpack_require__(86);
var ContentComponent_1 = __webpack_require__(84);
var FooterComponent_1 = __webpack_require__(85);
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainComponent.prototype.render = function () {
        return (React.createElement("section", { className: "section" },
            React.createElement(HeaderComponent_1.HeaderComponent, null),
            React.createElement(ContentComponent_1.ContentComponent, null),
            React.createElement(FooterComponent_1.FooterComponent, null)));
    };
    return MainComponent;
}(React.Component));
exports.MainComponent = MainComponent;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(17);
var data_1 = __webpack_require__(51);
var ProjectComponent_1 = __webpack_require__(87);
var ContentComponent = (function (_super) {
    __extends(ContentComponent, _super);
    function ContentComponent(props) {
        return _super.call(this, props) || this;
    }
    ContentComponent.prototype.render = function () {
        return (React.createElement("main", null,
            React.createElement("hr", null),
            React.createElement("div", { id: "experience" }, data_1.data.experience.map(function (exp, i) {
                return React.createElement("div", { key: exp.company + "_" + exp.title, style: { marginTop: (i != 0) ? '1.5rem' : '' } },
                    React.createElement("h4", { className: "title is-4" }, exp.title),
                    React.createElement("h6", { className: "subtitle is-6" },
                        exp.company,
                        ", ",
                        exp.start,
                        " - ",
                        exp.end || 'Present'),
                    exp.projects && exp.projects.map(function (project) { return React.createElement(ProjectComponent_1.ProjectComponent, { key: project.name, project: project }); }));
            })),
            React.createElement("hr", null),
            React.createElement("div", { id: "education", style: { margin: '1.5rem 0 1.5rem 0' } }, data_1.data.education.map(function (edu) { return React.createElement("div", { key: edu.school, className: "columns" },
                React.createElement("div", { className: "column is-three-quarters" },
                    React.createElement("h4", { className: "title is-4" },
                        edu.degree,
                        ", ",
                        edu.major),
                    React.createElement("h6", { className: "subtitle is-6" }, edu.school)),
                React.createElement("div", { className: "column" },
                    React.createElement("h6", { className: "title is-6" },
                        edu.enrolled,
                        " - ",
                        edu.graduated))); }))));
    };
    return ContentComponent;
}(React.Component));
exports.ContentComponent = ContentComponent;


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(17);
var FooterComponent = (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterComponent.prototype.render = function () {
        var now = new Date();
        var duration = now.getFullYear() == 2017 ? '2017' : '2017 - ' + now.getFullYear();
        return (React.createElement("footer", { className: "footer" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "content has-text-centered" },
                    React.createElement("p", null,
                        "Jay Taggart \u00A9 ",
                        duration),
                    React.createElement("p", null,
                        React.createElement("a", { className: "icon", href: "https://github.com/jataggart/jataggart.github.io" },
                            React.createElement("em", { className: "fa fa-github" })))))));
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(17);
var data_1 = __webpack_require__(51);
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("header", { className: "columns" },
            React.createElement("div", { className: "column" },
                React.createElement("h1", { className: "title is-1" }, data_1.data.meta.name)),
            React.createElement("div", { className: "narrow-column has-text-right" },
                React.createElement("div", { className: "box", style: { boxShadow: 'none' } }, data_1.data.meta.contact.email))));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(17);
var ProjectComponent = (function (_super) {
    __extends(ProjectComponent, _super);
    function ProjectComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            open: props.open !== void (0) ? props.open : true
        };
        return _this;
    }
    ProjectComponent.prototype.render = function () {
        var _this = this;
        var project = this.props.project;
        var open = this.state.open;
        var categories = Object.keys(project.technologies);
        return (React.createElement("section", null,
            React.createElement("div", { className: "message", style: { marginBottom: '1.5rem' } },
                React.createElement("div", { className: "message-header", style: { cursor: 'pointer' }, onClick: function (_) { return _this.setState({ open: !_this.state.open }); } },
                    React.createElement("p", null,
                        open ? '-' : '+',
                        " ",
                        project.name),
                    React.createElement("p", { className: "is-pulled-right" }, project.duration)),
                React.createElement("div", { className: "message-body content", style: { display: (open ? 'block' : 'none') } },
                    React.createElement("em", null, "Impacts"),
                    React.createElement("ul", null, project.impacts.map(function (impact) { return React.createElement("li", { key: impact }, impact); })),
                    React.createElement("div", { className: "columns" },
                        React.createElement("div", { className: "column" },
                            React.createElement("em", null, "Responsibilities"),
                            React.createElement("ul", null, project.responsibilities.map(function (responsibility) { return React.createElement("li", { key: responsibility }, responsibility); }))),
                        React.createElement("div", { className: "column" },
                            React.createElement("div", { className: "message" },
                                React.createElement("div", { className: "message-header" }, "Technologies"),
                                React.createElement("div", { className: "message-body" }, categories.map(function (category, i) {
                                    var techs = project.technologies[category];
                                    var separatingStyle = (i == 0 ? {} : { marginTop: '.75rem' });
                                    return (React.createElement("div", { key: category, style: separatingStyle },
                                        React.createElement("strong", null, category),
                                        React.createElement("ul", { style: { marginTop: 0 } }, techs.map(function (tech) { return React.createElement("li", { key: tech.name },
                                            tech.name,
                                            " (",
                                            tech.usage,
                                            ")"); }))));
                                })))))))));
    };
    return ProjectComponent;
}(React.Component));
exports.ProjectComponent = ProjectComponent;


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(17);
var ReactDOM = __webpack_require__(83);
var MainComponent_1 = __webpack_require__(82);
ReactDOM.render(React.createElement(MainComponent_1.MainComponent, null), document.getElementById('react-app'));


/***/ })

},[88]);
//# sourceMappingURL=main.js.map