import { Program } from '../types/curriculum';

export const fullStackCurriculum: Program = {
  id: 'full-stack-developer',
  slug: 'full-stack-developer',
  title: 'Full Stack Developer',
  route: '/programs/full-stack-developer',
  badge: '6 Comprehensive Courses',
  shortDescription: 'Learn the complete verified course structure covering MERN Stack, React JS, DSA with Python, DevOps, Python Programming, and DBMS.',
  overview: 'The DevTech IT Solution Full Stack Developer internship program includes 6 industry-level courses: MERN Stack, React JS Advanced, Data Structures & Algorithms with Python, DevOps, Python Core & Frameworks, and Database Management Systems (DBMS).',
  isVerified: true,
  verificationNotice: 'Official DevTech IT Solution Internship Curriculum and Technical Roadmap.',
  keyTechnologies: [
    'MERN Stack (MongoDB, Express, React, Node)',
    'React.js Advanced & Redux',
    'JavaScript (ES6+) & DOM',
    'HTML5 & CSS3 Responsive Layouts',
    'Tailwind CSS & Bootstrap',
    'DSA with Python',
    'DevOps, Docker & Kubernetes',
    'AWS Cloud Services',
    'Python (Django, Flask, OpenCV)',
    'DBMS, SQL & Oracle'
  ],
  icon: 'Code2',
  courses: [
    {
      courseId: 'fs-course-mern',
      courseTitle: 'Course 1: MERN Stack Web Development',
      duration: 'Comprehensive Web Track (15 Modules)',
      courseDescription: 'End-to-end full stack web development from internet fundamentals and responsive web design to React, Node.js, Express, MongoDB, and production authentication.',
      modules: [
        {
          moduleId: 'mern-m1',
          moduleNumber: 1,
          moduleTitle: 'Intro to Web Development',
          lessonTitles: [
            'Introduction to the course',
            'How Internet Works',
            'What is Web Development'
          ],
          topics: ['Duration: 1h 8m', 'Client-server architecture', 'Web protocols and browser execution']
        },
        {
          moduleId: 'mern-m2',
          moduleNumber: 2,
          moduleTitle: 'Fundamentals of Web Technology',
          lessonTitles: [
            'Fundamentals of Web Technology',
            'Complete Git and GitHub Commands'
          ],
          topics: ['Duration: 45m', 'Version control essentials', 'Git initialization, staging, commits & remotes']
        },
        {
          moduleId: 'mern-m3',
          moduleNumber: 3,
          moduleTitle: 'HTML',
          lessonTitles: [
            'Fundamentals of Web Applications',
            'Intro to HTML & Head Tag in HTML',
            'Text Formatters, Images & Lists in HTML',
            'Tables in HTML & Web Resume',
            'Links in HTML & Forms in HTML (Part 1 & 2.2)',
            'Semantic Tags in HTML',
            'Hosting the application',
            'PROJECT - Putting it all together'
          ],
          topics: ['Duration: 5h 17m', 'Semantic HTML5 markup', 'Accessible forms and native validation', 'Static web hosting'],
          practicalProjects: ['Web Resume & Semantic HTML Web Application Project']
        },
        {
          moduleId: 'mern-m4',
          moduleNumber: 4,
          moduleTitle: 'CSS',
          lessonTitles: [
            'Intro to CSS & CSS Selectors',
            'Colors, Units & Box Model in CSS',
            'Texts, Fonts, Display & Positions in CSS',
            'Overflow, Float and Clear in CSS',
            'FlexBox in CSS',
            'Grid in CSS & Grid Portfolio in CSS',
            'Media Queries & Responsive Design',
            'CSS Variables, Transform & Transition in CSS',
            'Keyframe Animations'
          ],
          topics: ['Duration: 6h 25m', 'Flexbox & CSS Grid layouts', 'Mobile-first media queries', 'Keyframe animations & CSS variables'],
          practicalProjects: ['Grid Portfolio CSS Showcase']
        },
        {
          moduleId: 'mern-m5',
          moduleNumber: 5,
          moduleTitle: 'HTML CSS Project — Bella Vista',
          lessonTitles: [
            'Bella Vista - Project Demo',
            'Bella Vista - Header and Navigation',
            'Bella Vista - Hero Section',
            'Bella Vista - Menu Section',
            'Bella Vista - About Section',
            'Bella Vista - Contact Us Section',
            'Bella Vista - CSS Custom Property and Responsive Design',
            'Bella Vista - Footer Section'
          ],
          topics: ['Duration: 3h 1m', 'Complete responsive corporate web project', 'CSS custom properties and multi-section architecture'],
          practicalProjects: ['Bella Vista Responsive Restaurant Website']
        },
        {
          moduleId: 'mern-m6',
          moduleNumber: 6,
          moduleTitle: 'Javascript',
          lessonTitles: [
            'Intro to JS, Data Types & Operators',
            'If-Else Condition & Switch in JS',
            'Loops & Arrays in JS',
            'Functions & Advanced Functions in JS',
            'Callback Hell in JS & Promises in JS',
            'DOM Manipulations in JS & Events in JS'
          ],
          topics: ['Duration: 4h 54m', 'Core language fundamentals', 'Asynchronous JavaScript & Promises', 'Interactive DOM manipulation']
        },
        {
          moduleId: 'mern-m7',
          moduleNumber: 7,
          moduleTitle: 'The Killer Website (Frontend Project)',
          lessonTitles: [
            'Setting up the folder structure & responsive grid system',
            'Header section (Part 1, 2, 3)',
            'Feature section (Part 1 & 2)',
            'Favorite meal section (Part 1 & 2)',
            'How it works section (Part 1 & 2)',
            'City section & Customer testimonial section',
            'Sign up section & Contact form section',
            'Footer section & Making webpage responsive',
            'Including jQuery, scrolling effects and animations'
          ],
          topics: ['Duration: 9h 48m', 'Enterprise responsive landing page', 'Complex UI components, smooth scrolling & animations'],
          practicalProjects: ['The Killer Website — Enterprise Frontend Landing Page']
        },
        {
          moduleId: 'mern-m8',
          moduleNumber: 8,
          moduleTitle: 'Tailwind CSS',
          lessonTitles: [
            'Intro to TailwindCSS, CDN & CLI Setup',
            'Importance of Tailwind CSS & Colors',
            'Margin, Padding, Width, Height & Size Classes',
            'Positions, Container & Background Classes',
            'Filter Class & Interactivity with Tailwind CSS',
            'Media Query and Breakpoints in Tailwind CSS',
            'Column Classes, Flex Classes & Grid in Tailwind CSS',
            'Animations in Tailwind CSS'
          ],
          topics: ['Duration: 7h 10m', 'Utility-first CSS architecture', 'Responsive design breakpoints and transitions']
        },
        {
          moduleId: 'mern-m9',
          moduleNumber: 9,
          moduleTitle: 'ReactJs',
          lessonTitles: [
            'Intro to React & Road Map to React',
            'Creating a react project, Flow and File Structures',
            'Creating Custom React library and JSX',
            'Hooks in React & Props in React',
            'useState, useCallback, useEffect, useRef Implementation',
            'React-Router Single Page Navigation',
            'Context API (Part 1 & 2)',
            'To-Do Context with Local Storage',
            'Keeper App Project (Part 1, 2, 3)'
          ],
          topics: ['Duration: 6h 2m', 'Virtual DOM and component lifecycle', 'Centralized state with Context API & hooks'],
          practicalProjects: ['To-Do Context App with LocalStorage', 'Keeper App Notes Management Project']
        },
        {
          moduleId: 'mern-m10',
          moduleNumber: 10,
          moduleTitle: 'NodeJs',
          lessonTitles: [
            'Intro to Node and Creating a node server',
            'Req, Res, Http Status Codes and HTTP Methods',
            'Routing & Redirectional Requests',
            'Node To-Do-List Application'
          ],
          topics: ['Duration: 1h 30m', 'Asynchronous event loop runtime', 'Server HTTP transaction handling'],
          practicalProjects: ['Node.js Server To-Do-List Application']
        },
        {
          moduleId: 'mern-m11',
          moduleNumber: 11,
          moduleTitle: 'ExpressJs',
          lessonTitles: [
            'Intro to Express',
            'To Do List Application - ExpressJS',
            'Library Management System SetUp',
            'Library Management System API'
          ],
          topics: ['Duration: 1h 30m', 'Express application router and middleware pipeline'],
          practicalProjects: ['Library Management System Express API']
        },
        {
          moduleId: 'mern-m12',
          moduleNumber: 12,
          moduleTitle: 'MongoDB',
          lessonTitles: [
            'Intro to MongoDB & Compass',
            'Connection to MongoDB, Project Setup & dotenv',
            'Models (Collections Structure) in MongoDB',
            'Controllers (Book Controller) & DTO',
            'Controllers (User Controller)'
          ],
          topics: ['Duration: 1h 53m', 'NoSQL document database architecture', 'CRUD queries and Mongoose schemas']
        },
        {
          moduleId: 'mern-m13',
          moduleNumber: 13,
          moduleTitle: 'Bootstrap',
          lessonTitles: [
            'Introduction & Features in Bootstrap',
            'Colours, Typography, Buttons & Button Groups',
            'Utility Classes, Breakpoints & Containers',
            'Grid Layouts & Project Intro with Grid',
            'Navbar, Cards, Accordions & List Groups',
            'Bootstrap Icons & Forms',
            'Tooltips, Modals, Offcanvas, Dropdowns & Tabs'
          ],
          topics: ['Duration: 7h 10m', 'Component-driven grid system and interactive UI widgets']
        },
        {
          moduleId: 'mern-m14',
          moduleNumber: 14,
          moduleTitle: 'MERN Fullstack Project',
          lessonTitles: [
            'Intro MERN stack & MERN project setup',
            'Express App SetUp, Router and API Endpoints',
            'MongoDB Atlas and Mongoose Models & Schemas',
            'Controllers (Part 1 & 2)',
            'Creating a React app - Frontend integration',
            'Fetching data from backend to frontend',
            'New workout form creation',
            'Integrating React Context & useReducer Hooks',
            'Deleting card data & Error Response Handling',
            'MERN Finishing Touch'
          ],
          topics: ['Duration: 5h 17m', 'End-to-end full stack architecture', 'Connecting React frontend with Express/MongoDB backend'],
          practicalProjects: ['Full Stack MERN Workout Tracking Web Application']
        },
        {
          moduleId: 'mern-m15',
          moduleNumber: 15,
          moduleTitle: 'MERN Authentication & Security',
          lessonTitles: [
            'Intro and starter project',
            'User routes, controller and model',
            'Signing up a user and hashing their password (Bcrypt)',
            'Email and password validation',
            'JSON Web Tokens (JWT) Theory & Signing tokens',
            'Logging user in & Creating React auth context',
            'Login and signup forms',
            'Custom Hooks: useSignup, useLogout, useLogin',
            'Updating initial auth status',
            'Protecting API routes & Authorized requests',
            'Protecting React routes & Assigning workouts to Users'
          ],
          topics: ['Duration: 6h 25m', 'Stateless JWT authentication', 'Protected routes on client and server', 'Password hashing & security best practices'],
          practicalProjects: ['Production Secure MERN Authentication System with JWT']
        }
      ]
    },
    {
      courseId: 'fs-course-react',
      courseTitle: 'Course 2: React JS Advanced Specialization',
      duration: 'Enterprise React Engineering (17 Modules)',
      courseDescription: 'Advanced React development including custom hooks, Context API, Redux toolkit, form actions, performance optimization, and testing.',
      modules: [
        {
          moduleId: 'react-m1',
          moduleNumber: 1,
          moduleTitle: 'Getting Started',
          lessonTitles: ['Getting Started with React Ecosystem'],
          topics: ['Duration: 44m', 'Vite environment and modern tooling']
        },
        {
          moduleId: 'react-m2',
          moduleNumber: 2,
          moduleTitle: 'React Essentials',
          lessonTitles: [
            'React Fundamentals - Portfolio Card Project',
            'React Fundamentals - Portfolio Card CSS Styling',
            'Dynamic Content and Props',
            'React Interactivity and Event Handling',
            'React State Management',
            'Conditional Rendering and Dynamic Lists',
            'Movie Database Interface Project'
          ],
          topics: ['Duration: 5h 6m', 'Component hierarchy and state preservation'],
          practicalProjects: ['Portfolio Card Project', 'Movie Database Interactive Interface']
        },
        {
          moduleId: 'react-m3',
          moduleNumber: 3,
          moduleTitle: 'Styling React Components',
          lessonTitles: ['React Components Styling (CSS Modules & Styled Components)'],
          topics: ['Duration: 44m', 'Scoped styles and component modularity']
        },
        {
          moduleId: 'react-m4',
          moduleNumber: 4,
          moduleTitle: 'Working with Refs and Portals',
          lessonTitles: [
            'React Refs and Portals',
            'Creating Portal and Modal'
          ],
          topics: ['Duration: 1h 27m', 'Direct DOM access via useRef and Portals for overlay dialogs']
        },
        {
          moduleId: 'react-m5',
          moduleNumber: 5,
          moduleTitle: "React's Context API and useReducer - Advanced State Management",
          lessonTitles: [
            'Setting up Context API',
            'Introducing useReducer',
            'Building Components',
            'Putting It All Together',
            'Task Manager CSS Styling'
          ],
          topics: ['Duration: 3h 38m', 'Centralized global state without prop drilling', 'Complex state transitions with reducers'],
          practicalProjects: ['Advanced Task Manager with useReducer & Context']
        },
        {
          moduleId: 'react-m6',
          moduleNumber: 6,
          moduleTitle: 'Handling Side Effects and Working with useEffect() Hook',
          lessonTitles: [
            'Understanding useEffect and Project Setup',
            'Implementing Our First useEffect - Data Fetching',
            'Dependencies, cleanup and Advanced Patterns'
          ],
          topics: ['Duration: 2h 11m', 'Lifecycle synchronizations and HTTP fetch cycles']
        },
        {
          moduleId: 'react-m7',
          moduleNumber: 7,
          moduleTitle: 'Behind the Scenes of React and Optimization Techniques',
          lessonTitles: [
            'Virtual DOM and Reconciliation Algorithm',
            'Performance Optimization Techniques (useMemo, useCallback, React.memo)'
          ],
          topics: ['Duration: 1h 27m', 'Fiber tree diffing, render cycles, and memoization']
        },
        {
          moduleId: 'react-m8',
          moduleNumber: 8,
          moduleTitle: 'Class-Based Components',
          lessonTitles: [
            'Introduction and Project SetUp',
            'Interactivity and Lifecycle Methods',
            'Student Grade Tracker',
            'Mastering state management - display logic and event handlers',
            'Forms, Events and User Interactions'
          ],
          topics: ['Duration: 3h 38m', 'Legacy enterprise React architectures and lifecycle methods'],
          practicalProjects: ['Student Grade Tracker Application']
        },
        {
          moduleId: 'react-m9',
          moduleNumber: 9,
          moduleTitle: 'Sending Http Requests',
          lessonTitles: [
            'Connecting to JSONPlaceholder API and CRUD Operations',
            'Complete CRUD Operations Handling'
          ],
          topics: ['Duration: 1h 27m', 'REST API integration and asynchronous HTTP states']
        },
        {
          moduleId: 'react-m10',
          moduleNumber: 10,
          moduleTitle: 'Building Custom Hooks',
          lessonTitles: [
            'Understanding Custom Hooks and Project SetUp',
            'Personal Expense Tracker',
            'Creating First Custom Hook',
            'Data Persistence with LocalStorage Hook',
            'Adding Filtering and Advanced Features'
          ],
          topics: ['Duration: 3h 38m', 'Extracting reusable component logic into custom hooks'],
          practicalProjects: ['Personal Expense Tracker with LocalStorage Hook']
        },
        {
          moduleId: 'react-m11',
          moduleNumber: 11,
          moduleTitle: 'Working with Forms and User Input',
          lessonTitles: [
            'User Registration Form',
            'Mario_s Pizza Online Ordering System',
            'Adding state and Interactivity',
            'Business logic, validation and form submission'
          ],
          topics: ['Duration: 2h 55m', 'Controlled vs uncontrolled inputs, form schemas & validation'],
          practicalProjects: ["Mario's Pizza Online Ordering System"]
        },
        {
          moduleId: 'react-m12',
          moduleNumber: 12,
          moduleTitle: 'Handling Forms via Form Actions',
          lessonTitles: [
            'Building a User Signup Flow',
            'Designing an Online Pizza Ordering Workflow',
            'Enhancing Forms with Dynamic State & User Interaction',
            'Implementing Validation, Logic, and Smooth Submissions'
          ],
          topics: ['Duration: 2h 55m', 'Modern React form actions, useActionState, and smooth submissions']
        },
        {
          moduleId: 'react-m13',
          moduleNumber: 13,
          moduleTitle: 'Diving into Redux',
          lessonTitles: [
            'Introduction and SetUp',
            'First Redux Store and Slices',
            'Shopping Cart and user authentication',
            'Production Ready Features and Optimization'
          ],
          topics: ['Duration: 2h 55m', 'Redux Toolkit, slices, dispatchers, and immutable states'],
          practicalProjects: ['Redux Shopping Cart & User Authentication System']
        },
        {
          moduleId: 'react-m14',
          moduleNumber: 14,
          moduleTitle: 'Building a Multi-Page SPA with React Router',
          lessonTitles: [
            'Introduction and SetUp',
            'Setting up Routes and Navigations',
            'Dynamic Routes and URL Parameters'
          ],
          topics: ['Duration: 2h 11m', 'Nested routing, dynamic param segments, programmatic navigation']
        },
        {
          moduleId: 'react-m15',
          moduleNumber: 15,
          moduleTitle: 'Adding Authentication to React Apps',
          lessonTitles: [
            'Introduction and Project Setup',
            'Building Login and SignUp Pages',
            'Implementing Authentication Logic with Context API'
          ],
          topics: ['Duration: 2h 11m', 'Client auth persistence, protected route guards']
        },
        {
          moduleId: 'react-m16',
          moduleNumber: 16,
          moduleTitle: 'Testing React Apps',
          lessonTitles: [
            'Introduction and Setup',
            'Writing Tests for Counter Component',
            'Advanced Testing Concepts (Unit & Integration)'
          ],
          topics: ['Duration: 2h 11m', 'Jest and React Testing Library basics']
        },
        {
          moduleId: 'react-m17',
          moduleNumber: 17,
          moduleTitle: 'Deploying React Apps',
          lessonTitles: [
            'Deploying React Apps Part 1',
            'Deploying React Apps Part 2'
          ],
          topics: ['Duration: 1h 27m', 'Production builds, environment variables, Netlify and Vercel hosting']
        }
      ]
    },
    {
      courseId: 'fs-course-dsa',
      courseTitle: 'Course 3: DSA With Python',
      duration: 'Algorithmic Mastery Track (17 Modules)',
      courseDescription: 'Core computer science algorithms and data structures implemented in Python, covering complexity analysis, linked lists, trees, graphs, dynamic programming, and number theory.',
      modules: [
        {
          moduleId: 'dsa-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction',
          lessonTitles: ['Introductory Video & Roadmap'],
          topics: ['Duration: 17m', 'Foundations of algorithmic problem solving']
        },
        {
          moduleId: 'dsa-m2',
          moduleNumber: 2,
          moduleTitle: 'Basics of Programming in Python',
          lessonTitles: [
            'Flowcharts & Logic Design',
            'Variables and Data types',
            'Ref and Operators',
            'Conditional Statements & Loops',
            'Jump Statements & Pattern Printing',
            'Functions, Recursion & Scope'
          ],
          topics: ['Duration: 2h 51m', 'Fundamental logic building and control flow in Python']
        },
        {
          moduleId: 'dsa-m3',
          moduleNumber: 3,
          moduleTitle: 'Some Important Structures',
          lessonTitles: [
            'List & List Questions',
            'Slicing and List comprehension',
            '2D Lists',
            'Strings & Questions on Strings',
            'Dictionary, Sets & Tuples'
          ],
          topics: ['Duration: 2h 34m', 'Built-in linear and hash-based Python collections']
        },
        {
          moduleId: 'dsa-m4',
          moduleNumber: 4,
          moduleTitle: 'Array and String Algorithms',
          lessonTitles: [
            "Kadane's Algorithm & 2D Kadane's Algorithm",
            '2SUM and 3SUM problems',
            'DNF Algorithm (Dutch National Flag)',
            "Moore's voting algorithm",
            'Juggling Algorithm',
            'KMP Algorithm for Pattern Matching',
            'Miscellaneous Algorithms'
          ],
          topics: ['Duration: 2h 17m', 'Optimized two-pointer, sliding window, and pattern searching algorithms']
        },
        {
          moduleId: 'dsa-m5',
          moduleNumber: 5,
          moduleTitle: 'Sorting and Complexities',
          lessonTitles: [
            'Time Complexity & Space Complexity (Big-O)',
            'Binary Search',
            'Bubble Sort, Selection Sort & Insertion Sort',
            'Quick Sort & Merge Sort'
          ],
          topics: ['Duration: 2h 17m', 'Divide and conquer sorting and logarithmic searching']
        },
        {
          moduleId: 'dsa-m6',
          moduleNumber: 6,
          moduleTitle: 'Oops in Python',
          lessonTitles: [
            'Intro to OOPS & Constructors',
            'Inheritance & Polymorphism',
            'Encapsulation and Abstraction',
            'Dunder/Magic methods',
            'Designing a complex number class'
          ],
          topics: ['Duration: 2h', 'Class architectures, method overriding, custom operator overloading']
        },
        {
          moduleId: 'dsa-m7',
          moduleNumber: 7,
          moduleTitle: 'Linked List',
          lessonTitles: [
            'Linked List Intro & Operations 1',
            'Linked List Operations 2',
            'Questions on Linked List & Types of Linked List',
            'Merge Sort for LinkedList'
          ],
          topics: ['Duration: 2h 17m', 'Singly, doubly, and circular linked lists with pointer manipulation']
        },
        {
          moduleId: 'dsa-m8',
          moduleNumber: 8,
          moduleTitle: 'Stacks',
          lessonTitles: [
            'Stack Intro & Stack using Linkedlist',
            'Stack Interview Questions',
            'Infix, Prefix and Postfix Notations',
            'Largest Rectangle in a Histogram',
            'Rainwater Trapping Problem'
          ],
          topics: ['Duration: 1h 43m', 'LIFO structures, monotonic stacks, and histogram area maximization']
        },
        {
          moduleId: 'dsa-m9',
          moduleNumber: 9,
          moduleTitle: 'Queues',
          lessonTitles: [
            'Queue Intro & Implementation',
            'Stacks and Queue Relationships',
            'Interview Questions on Queues'
          ],
          topics: ['Duration: 51m', 'FIFO collections, circular buffers, and double-ended queues (deque)']
        },
        {
          moduleId: 'dsa-m10',
          moduleNumber: 10,
          moduleTitle: 'Trees',
          lessonTitles: [
            'Intro to Trees & Tree Traversal (Pre, In, Post)',
            'Level-order Traversal (BFS)',
            'Left and Right View of a Tree',
            'Top and Bottom View of a Tree',
            'Construction of a Tree from Traversals',
            'Burning a Tree Problem'
          ],
          topics: ['Duration: 2h 34m', 'Hierarchical trees, view calculations, and tree diameter algorithms']
        },
        {
          moduleId: 'dsa-m11',
          moduleNumber: 11,
          moduleTitle: 'Binary Trees (BST)',
          lessonTitles: [
            'Intro to BST',
            'Insertion and Deletion in BST',
            'Basic and Important Problems on BST',
            'Balancing a BST (AVL concept)',
            'Largest BST in a Binary Tree'
          ],
          topics: ['Duration: 1h 43m', 'Binary Search Tree validation, range searches, and rotations']
        },
        {
          moduleId: 'dsa-m12',
          moduleNumber: 12,
          moduleTitle: 'Heaps',
          lessonTitles: [
            'Heaps Intro & Array Representation',
            'Heaps Implementation',
            'Heapify Algorithm & Heap Sort',
            'Questions on Heaps (Top K elements)'
          ],
          topics: ['Duration: 1h 26m', 'Min-heaps, max-heaps, priority queues, and in-place HeapSort']
        },
        {
          moduleId: 'dsa-m13',
          moduleNumber: 13,
          moduleTitle: 'Graphs',
          lessonTitles: [
            'Intro to Graphs & Adjacency Representations',
            'Depth First Search (DFS)',
            'Breadth First Search (BFS)',
            'Cycle Detection in Undirected Graph',
            'Cycle Detection in Directed Graph',
            'Minimum moves by a Knight',
            'Wired Connections Problem'
          ],
          topics: ['Duration: 2h', 'Graph connectivity, bipartite checks, and cycle detection']
        },
        {
          moduleId: 'dsa-m14',
          moduleNumber: 14,
          moduleTitle: 'Most Important Graph Algorithms',
          lessonTitles: [
            'Topological Sort (Kahn_s Algorithm & DFS)',
            "Dijkstra's Shortest Path Algorithm",
            "MST using Prim's Algorithm",
            "Disjoint Set Union (DSU) for Kruskal's",
            "Kruskal's Minimum Spanning Tree Algorithm",
            'Bellman-Ford Algorithm',
            'Floyd-Warshall Algorithm'
          ],
          topics: ['Duration: 2h', 'Shortest paths, all-pairs shortest paths, and minimum spanning trees']
        },
        {
          moduleId: 'dsa-m15',
          moduleNumber: 15,
          moduleTitle: 'Greedy Algorithms',
          lessonTitles: [
            'Intro to Greedy (Meeting Scheduling)',
            'Fractional Knapsack Problem',
            'Interview Questions on Greedy'
          ],
          topics: ['Duration: 51m', 'Locally optimal choices and interval scheduling']
        },
        {
          moduleId: 'dsa-m16',
          moduleNumber: 16,
          moduleTitle: 'Backtracking and Dynamic Programming (DP)',
          lessonTitles: [
            'Backtracking Intro (Rat in a Maze)',
            'N-Queen Problem',
            'Intro to Dynamic Programming (Memoization vs Tabulation)',
            '0/1 Knapsack Problem',
            'Coin Change Problem',
            'Longest Common Subsequence (LCS) & Variations',
            'Longest Arithmetic Progression (AP)',
            'Catalan Numbers & Edit Distance',
            'Matrix Chain Multiplication (MCM)'
          ],
          topics: ['Duration: 3h 26m', 'State spaces, overlapping subproblems, optimal substructure']
        },
        {
          moduleId: 'dsa-m17',
          moduleNumber: 17,
          moduleTitle: 'Number Theory',
          lessonTitles: [
            'Number Theory (Sieve of Eratosthenes)',
            'Greatest Common Divisor (GCD) of 2 numbers',
            'Modulo Arithmetic and Binary Exponentiation'
          ],
          topics: ['Duration: 51m', 'Prime factorizations, Euclidean algorithm, fast power calculation']
        }
      ]
    },
    {
      courseId: 'fs-course-devops',
      courseTitle: 'Course 4: DevOps',
      duration: 'Automation & Infrastructure Track (11 Modules)',
      courseDescription: 'DevOps practices for web developers covering Linux, Bash & Python scripting, Git, Docker containerization, AWS, Kubernetes, Terraform, and CI/CD pipelines.',
      modules: [
        {
          moduleId: 'fs-dev-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction to DevOps',
          lessonTitles: [
            'What Is DevOps',
            'DevOps Main Objectives',
            'DevOps and Software Development Life Cycle',
            'Continuous Integration & Deployment',
            'Containers and Virtual Development',
            'Configuration Management Tools'
          ],
          topics: ['Duration: 1h 32m', 'Cultural transformation and automated pipeline flow']
        },
        {
          moduleId: 'fs-dev-m2',
          moduleNumber: 2,
          moduleTitle: 'Cloud Computing',
          lessonTitles: [
            'What is Cloud?',
            'Evolution of Cloud Computing',
            'IAAS (Infrastructure as a Service)',
            'SAAS (Software as a Service)',
            'PAAS (Platform as a Service)',
            'Private, Public and Hybrid Cloud',
            'Public Clouds'
          ],
          topics: ['Duration: 1h 47m', 'Cloud delivery models and infrastructure strategies']
        },
        {
          moduleId: 'fs-dev-m3',
          moduleNumber: 3,
          moduleTitle: 'LINUX Basics',
          lessonTitles: [
            'Linux OS Introduction',
            'Importance of Linux in DevOps',
            'Linux Basic Command Utilities',
            'Linux Administration',
            'Environment Variables',
            'Networking',
            'APT Installation'
          ],
          topics: ['Duration: 1h 47m', 'CLI administration, user permissions, networking']
        },
        {
          moduleId: 'fs-dev-m4',
          moduleNumber: 4,
          moduleTitle: 'Scripting (Python and Bash)',
          lessonTitles: [
            'Introduction to Scripting',
            'Variables & Flow Controls',
            'Loops & Functions',
            'Lists & Manipulating Strings',
            'Reading and Writing Files',
            'Positional Parameters'
          ],
          topics: ['Duration: 2h 18m', 'Systems automation scripts in Bash and Python']
        },
        {
          moduleId: 'fs-dev-m5',
          moduleNumber: 5,
          moduleTitle: 'Version Control - GIT',
          lessonTitles: [
            'Intro & Git Basics',
            'Commits & GitHub',
            'Remotes (GitLab)',
            'Branching & Pull Requests',
            'Forking & Stashing',
            'Conclusion & Recap'
          ],
          topics: ['Duration: 2h 18m', 'Collaboration workflows and code repository governance']
        },
        {
          moduleId: 'fs-dev-m6',
          moduleNumber: 6,
          moduleTitle: 'Docker',
          lessonTitles: [
            'Intro & Installation',
            'Basic & Advanced Commands',
            'Dockerfiles & Image Handling',
            'Building Microservices',
            'Docker Compose',
            'Push Registry Conclusion'
          ],
          topics: ['Duration: 2h 18m', 'Containerization and multi-container Compose setups'],
          practicalProjects: ['Containerized Web Service with Docker Compose']
        },
        {
          moduleId: 'fs-dev-m7',
          moduleNumber: 7,
          moduleTitle: 'AWS',
          lessonTitles: [
            'Intro, IAM & S3 SDK',
            'Paramstore, S3-Adv & Cloudshell',
            'EC2 Creation, Deployment, Networking & Nginx',
            'ECR, ECS, EB & Lambda',
            'Postgres, RDS, CDN & CloudFront',
            'Additional Topics: CodeCommit & CodePipeline',
            'CloudFormation Intro, Advanced & CF EC2 Recap'
          ],
          topics: ['Duration: 5h 37m', 'AWS virtual servers, container hosting, and IaC pipelines']
        },
        {
          moduleId: 'fs-dev-m8',
          moduleNumber: 8,
          moduleTitle: 'Kubernetes',
          lessonTitles: [
            'Intro & Main Components',
            'K8s Architecture',
            'MiniKube & Kubectl',
            'Dashboard & Basic App',
            'Debugging & Kubectl Commands',
            'Building & Deploying Microservices',
            'Ingress, Volume & Services',
            'Helm & ArgoCD Wrap-up'
          ],
          topics: ['Duration: 3h 19m', 'Orchestration of containerized microservices and GitOps']
        },
        {
          moduleId: 'fs-dev-m9',
          moduleNumber: 9,
          moduleTitle: 'Terraform',
          lessonTitles: [
            'Intro & Setup',
            'Terraform Commands',
            'Demo Project and Wrapup'
          ],
          topics: ['Duration: 1h 1m', 'Declarative Infrastructure as Code (IaC) provisioning']
        },
        {
          moduleId: 'fs-dev-m10',
          moduleNumber: 10,
          moduleTitle: 'Continuous Integration – Jenkins, CircleCI, GH Actions',
          lessonTitles: [
            'CI/CD Intro',
            'Jenkins Intro & Jenkins Jobs',
            'GitHub Actions Workflows',
            'GitHub Jenkins Integration',
            'CircleCI Recap & Wrapup'
          ],
          topics: ['Duration: 1h 32m', 'Automated build, test, and release CI/CD pipelines']
        }
      ]
    },
    {
      courseId: 'fs-course-python',
      courseTitle: 'Course 5: Python Core & Advanced Ecosystem',
      duration: 'Complete Python Development Track (27 Modules)',
      courseDescription: 'Extensive Python programming from syntax basics and OOP to GUI development (Tkinter), databases (PostgreSQL), data analysis, web frameworks (Django, Flask), scraping, and OpenCV.',
      modules: [
        {
          moduleId: 'py-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction',
          lessonTitles: [
            'Installing Python & Installing PyCharm',
            'Introduction to Programming & Python'
          ],
          topics: ['Duration: 30m', 'Interpreter configuration and IDE setup']
        },
        {
          moduleId: 'py-m2',
          moduleNumber: 2,
          moduleTitle: 'Python Basics',
          lessonTitles: [
            'Literals, Variables & Keywords',
            'Primitive Datatypes & String Operations',
            'Type Conversion (int, float, str, boolean)',
            'Arithmetic, Assignment, Comparison & Logical Operators',
            'Associativity & Precedence of Operators',
            'The print() and input() Functions',
            'Getting Started with PyCharm & Numeric Functions',
            'Coding Exercises'
          ],
          topics: ['Duration: 2h 29m', 'Foundational syntax, variables, operators, and I/O']
        },
        {
          moduleId: 'py-m3',
          moduleNumber: 3,
          moduleTitle: 'Strings in Python',
          lessonTitles: [
            'Slicing in Strings & f-strings in Python',
            'Escape Sequences & String Methods (strip, replace, count, cases)'
          ],
          topics: ['Duration: 50m', 'String manipulation and string formatting']
        },
        {
          moduleId: 'py-m4',
          moduleNumber: 4,
          moduleTitle: 'Lists in Python',
          lessonTitles: [
            'Lists Introduction',
            'List Operations (slicing, concat, repeat, append, insert, extend, remove, pop)',
            'Sorting, Reversing & Numerical Operations',
            'Nested Lists'
          ],
          topics: ['Duration: 59m', 'Dynamic list structures and manipulation methods']
        },
        {
          moduleId: 'py-m5',
          moduleNumber: 5,
          moduleTitle: 'Tuples, Sets & Dictionaries',
          lessonTitles: [
            'Tuples & Immutability Concepts',
            'Sets & Set Operations (union, intersection, difference)',
            'Dictionaries & Key-Value Operations',
            'Shallow vs Deep Copying'
          ],
          topics: ['Duration: 1h 59m', 'Hash-based collections and mutable vs immutable behaviors']
        },
        {
          moduleId: 'py-m6',
          moduleNumber: 6,
          moduleTitle: 'Control Statements',
          lessonTitles: [
            'The if, if-else, and if-elif-else Blocks',
            'Nested if Statements',
            'The Ternary Operator'
          ],
          topics: ['Duration: 50m', 'Conditional branching logic']
        },
        {
          moduleId: 'py-m7',
          moduleNumber: 7,
          moduleTitle: 'Loops & Exercises',
          lessonTitles: [
            'for Loop with Strings, Dictionaries & range()',
            'continue and break Statements',
            'The while Loop & Infinite Loops',
            'Nested Loops & Star Patterns',
            'Coding Exercises: Roll a Dice, Number Guessing Game'
          ],
          topics: ['Duration: 2h 29m', 'Iterative executions and game logic exercises'],
          practicalProjects: ['Number Guessing Game Project']
        },
        {
          moduleId: 'py-m8',
          moduleNumber: 8,
          moduleTitle: 'Functions & Modules',
          lessonTitles: [
            'User Defined Functions & Returning Values',
            'Variable Length Positional & Keyword Arguments (*args, **kwargs)',
            'Docstrings & Recursive Functions',
            'Local vs Global Scope & Functions as Arguments',
            'Lambda Functions, filter() & map()',
            'User Defined Modules & __name__ Variable',
            'A Simple Banking Application'
          ],
          topics: ['Duration: 2h 39m', 'Modular programming, higher-order functions, lambda expressions'],
          practicalProjects: ['Simple Banking Python Application']
        },
        {
          moduleId: 'py-m9',
          moduleNumber: 9,
          moduleTitle: 'File Handling & Exception Handling',
          lessonTitles: [
            'File Modes (w, r, a) & The with Statement',
            'Exception Handling with try-except-else-finally',
            'Raising Exceptions & Custom Exceptions',
            'The json and pickle Modules'
          ],
          topics: ['Duration: 2h 19m', 'Robust file I/O, error trapping, object serialization']
        },
        {
          moduleId: 'py-m10',
          moduleNumber: 10,
          moduleTitle: 'Regular Expressions (RegEx)',
          lessonTitles: [
            'Introduction to RegEx & Character Classes',
            'Special Characters & Quantifiers',
            'findall(), finditer(), sub() and compile()',
            'Exercise: Finding Valid Emails'
          ],
          topics: ['Pattern matching, input validation, string replacement']
        },
        {
          moduleId: 'py-m11',
          moduleNumber: 11,
          moduleTitle: 'Object Oriented Programming (OOP)',
          lessonTitles: [
            'Classes, Objects, Attributes & Initializers (__init__)',
            'Instance, Class & Static Methods',
            'Mini Project: Phone Book (Part 1 & 2)',
            'Single, Multiple & Multilevel Inheritance',
            'Polymorphism (Operator & Method Overloading/Overriding)',
            'Encapsulation, Abstraction & Abstract Classes'
          ],
          topics: ['Duration: 3h 58m', 'Full OOP design principles and software design patterns'],
          practicalProjects: ['Phone Book OOP Application']
        },
        {
          moduleId: 'py-m12',
          moduleNumber: 12,
          moduleTitle: 'GUI with Tkinter',
          lessonTitles: [
            'Introduction to GUI and Tkinter',
            'Labels, Titles, Buttons, and Entry Widgets',
            'Frames, Separators, Checkbuttons & Radiobuttons',
            'Listbox, Spinbox & ttk Styling'
          ],
          topics: ['Duration: 1h 59m', 'Desktop graphical user interface engineering']
        },
        {
          moduleId: 'py-m13',
          moduleNumber: 13,
          moduleTitle: 'Calculator Using Tkinter',
          lessonTitles: [
            'Calculator UI & Layout (Part 1)',
            'Calculator Functional Logic (Part 2)',
            'Calculator Finishing & Styling (Part 3)'
          ],
          topics: ['Duration: 30m', 'Building a functional GUI calculator'],
          practicalProjects: ['Desktop Calculator Application with Tkinter']
        },
        {
          moduleId: 'py-m14',
          moduleNumber: 14,
          moduleTitle: 'Building Database Apps with PostgreSQL & Python',
          lessonTitles: [
            'Introduction to Databases & PostgreSQL Installation',
            'Creating Databases, Tables & Adding Data',
            'Virtualenv Setup & psycopg2 Library',
            'Connecting to Database using Python',
            'CRUD Operations via Python Code'
          ],
          topics: ['Duration: 2h 29m', 'Database drivers, table querying, persistent application data'],
          practicalProjects: ['PostgreSQL & Python Persistent Database Application']
        },
        {
          moduleId: 'py-m15',
          moduleNumber: 15,
          moduleTitle: 'Data Analysis with Python',
          lessonTitles: [
            'Data Analysis Tools & Anaconda Installation',
            'Importing CSV & Viewing Data',
            'Data Cleaning, Formatting & Normalization',
            'Binning & Value Counts',
            'Boxplots, Scatterplots, Groupby & Pivots',
            'Correlation, ANOVA & Heatmaps',
            'Simple & Multiple Linear Regression with Python',
            'Model Evaluation: Mean Squared Error & R-Squared'
          ],
          topics: ['Duration: 5h 37m', 'Data exploration, statistical analysis, and linear regression models']
        },
        {
          moduleId: 'py-m16',
          moduleNumber: 16,
          moduleTitle: 'Django Web Framework',
          lessonTitles: [
            'Django Project Structure & Development Server',
            'Django Apps, URLs & Views',
            'Building a Blog Website: Dynamic Paths, Slugs & Converters',
            'Templates, DTL, Variable Injection, Filters & Tags',
            'Template Inheritance & Static Files',
            'Models, Migrations & Database Relationships',
            'Django Admin Panel Configuration',
            'Django Forms, CSRF Tokens & Data Handling',
            'Comments Model & Admin Finishing'
          ],
          topics: ['Duration: 10h 34m', 'Full-featured MVC/MVT web development with Django'],
          practicalProjects: ['Full-Featured Multi-Page Blog Website in Django']
        },
        {
          moduleId: 'py-m17',
          moduleNumber: 17,
          moduleTitle: 'Flask Framework',
          lessonTitles: [
            'Introduction & Installation of Flask',
            'Basic Webpages & Importing HTML Files',
            'Registration Forms & Redirections',
            'Template Inheritance & Styling'
          ],
          topics: ['Duration: 2h 9m', 'Lightweight microframework web application development']
        },
        {
          moduleId: 'py-m18',
          moduleNumber: 18,
          moduleTitle: 'REST APIs using Django',
          lessonTitles: [
            'APIs & REST Concepts',
            'Creating Models & API Views',
            'Pagination & Token Authentication',
            'Permissions, User Filtering & Search Filters'
          ],
          topics: ['Duration: 1h 59m', 'Building robust RESTful API endpoints with Django REST Framework']
        },
        {
          moduleId: 'py-m19',
          moduleNumber: 19,
          moduleTitle: 'Web Scraping',
          lessonTitles: [
            'Introduction to Web Scraping & HTTP Requests',
            'Parsing HTML with BeautifulSoup',
            'Extracting Content, Text & Posting Data',
            'Filtering Data & Exporting to CSV',
            'Downloading Images & Building a Price Tracker'
          ],
          topics: ['Duration: 3h 18m', 'Automated web data extraction and price monitoring'],
          practicalProjects: ['Automated E-Commerce Price Tracker Web Scraper']
        },
        {
          moduleId: 'py-m20',
          moduleNumber: 20,
          moduleTitle: 'Computer Vision with OpenCV',
          lessonTitles: [
            'Installing OpenCV & Image Fundamentals',
            'Reading, Writing & Resizing Images',
            'Morphological Operations, Flipping & Aspect Ratio',
            'Adding Shapes, Text, Shifting & Rotation',
            'Thresholding, Gaussian Blur, Median Blur & Bilateral Filter',
            'Edge Detection (Canny)',
            'Video Processing & Accessing the Webcam'
          ],
          topics: ['Duration: 3h 38m', 'Image processing, spatial filtering, and live webcam feeds']
        },
        {
          moduleId: 'py-m21',
          moduleNumber: 21,
          moduleTitle: 'Automation with Selenium',
          lessonTitles: [
            'Installation & WebDriver Setup',
            'Automating Google Searches & Navigations',
            'Locating Elements (XPath, CSS Selectors)',
            'Clicking, Typing & Extracting Data'
          ],
          topics: ['Duration: 1h 29m', 'Automated browser interactions and test flows']
        },
        {
          moduleId: 'py-m22',
          moduleNumber: 22,
          moduleTitle: 'Social Media Automation',
          lessonTitles: ['Building a Facebook Auto Poster'],
          topics: ['Duration: 10m', 'Automated form submission and social interaction script']
        },
        {
          moduleId: 'py-m23',
          moduleNumber: 23,
          moduleTitle: 'Tips & Tricks in Programming',
          lessonTitles: [
            'Tips to Become a Good Programmer',
            'Logical Thinking & Problem Decomposition'
          ],
          topics: ['Duration: 40m', 'Clean code conventions and algorithmic problem solving']
        },
        {
          moduleId: 'py-m24',
          moduleNumber: 24,
          moduleTitle: 'Network Programming: Socket Chat Application',
          lessonTitles: [
            'IP Addresses, Ports & Socket Basics',
            'Creating Client and Server Sockets',
            'Sending & Receiving Messages with Buffers',
            'Completing Our Multi-Client Chat App'
          ],
          topics: ['Duration: 1h 29m', 'TCP socket communication and network streaming'],
          practicalProjects: ['Real-Time Socket-Based Chat Application']
        },
        {
          moduleId: 'py-m25',
          moduleNumber: 25,
          moduleTitle: 'Miscellaneous Content & Bootstrap in Django',
          lessonTitles: [
            'Updating Entries with Django UpdateView',
            'Bootstrap Integration, Grid System & Classes',
            'Responsive Images & Nested Grids'
          ],
          topics: ['Duration: 1h 29m', 'Front-end styling enhancements in full stack Django apps']
        },
        {
          moduleId: 'py-m26',
          moduleNumber: 26,
          moduleTitle: 'Regular Expressions Revisited',
          lessonTitles: [
            'Raw Strings & Search/Match Methods',
            'Meta Characters, Stars, Pluses, Braces & Wildcards',
            'Caret, Optional Characters & Character Classes'
          ],
          topics: ['Duration: 2h 19m', 'Advanced text parsing and token extraction']
        },
        {
          moduleId: 'py-m27',
          moduleNumber: 27,
          moduleTitle: 'Course Conclusion',
          lessonTitles: ['Course Wrap-up & Further Learning Paths'],
          topics: ['Duration: 10m', 'Roadmap from intermediate programmer to production engineer']
        }
      ]
    },
    {
      courseId: 'fs-course-dbms',
      courseTitle: 'Course 6: Database Management Systems (DBMS) & Oracle SQL',
      duration: 'Relational & Enterprise Database Track (23 Modules)',
      courseDescription: 'Comprehensive DBMS foundations, ER modeling, relational algebra, Oracle SQL commands, functions, PL/SQL, normalization, indexing, and transaction management.',
      modules: [
        {
          moduleId: 'dbms-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction to DBMS',
          lessonTitles: [
            'Concepts and Characteristics of DBMS',
            'History and Evolution of Database',
            'Database System Architecture'
          ],
          topics: ['Duration: 34m', 'Three-schema architecture and data independence']
        },
        {
          moduleId: 'dbms-m2',
          moduleNumber: 2,
          moduleTitle: 'Data Modelling & ER Diagrams',
          lessonTitles: [
            'Relational Database Model & Entity Relationship Model',
            'Attributes, Connectivity & Degrees of Relationships',
            'Designing an ER Model & Converting to Relational Schema',
            'Composite, Derived & Multi-Valued Attributes',
            'Strong vs Weak Entity Sets',
            'Cardinality & Total/Partial Participation',
            "Codd's 12 Rules for Relational Databases"
          ],
          topics: ['Duration: 3h 49m', 'Conceptual data design, mapping rules, and integrity preservation']
        },
        {
          moduleId: 'dbms-m3',
          moduleNumber: 3,
          moduleTitle: 'Database Design & Normalization',
          lessonTitles: [
            'Keys in DBMS (Primary, Candidate, Super, Foreign)',
            'Functional Dependencies & Inference Rules (Armstrong_s Axioms)',
            'Closure of Functional Dependencies & Minimal Cover',
            'Normalization: 1NF, 2NF, 3NF, BCNF, 4NF, 5NF',
            'Anomalies of First Normal Form & Case Studies'
          ],
          topics: ['Duration: 3h 38m', 'Eliminating insertion, deletion, and update anomalies through normalization']
        },
        {
          moduleId: 'dbms-m4',
          moduleNumber: 4,
          moduleTitle: 'Relational Algebra',
          lessonTitles: [
            'Relational Query Languages',
            'Select, Project & Rename Operations',
            'Union, Intersection, Set Difference & Cartesian Product',
            'Join Operations (Natural, Theta, Outer)',
            'Formulating Relational Algebra Queries'
          ],
          topics: ['Duration: 2h 18m', 'Formal procedural query mathematical operators']
        },
        {
          moduleId: 'dbms-m5',
          moduleNumber: 5,
          moduleTitle: 'Oracle Introduction',
          lessonTitles: [
            'Introduction to Oracle Database',
            'DESCRIBE Command & SQL Statement Basics'
          ],
          topics: ['Duration: 34m', 'Oracle database interface and environment setup']
        },
        {
          moduleId: 'dbms-m6',
          moduleNumber: 6,
          moduleTitle: 'Oracle Retrieving Data',
          lessonTitles: [
            'SELECT Statements & Column Aliases',
            'Quote Operator, DISTINCT & Concatenation',
            'Arithmetic Expressions in Queries'
          ],
          topics: ['Duration: 1h 9m', 'Basic projection, expressions, and alias formatting']
        },
        {
          moduleId: 'dbms-m7',
          moduleNumber: 7,
          moduleTitle: 'Oracle Filtering & Ordering',
          lessonTitles: [
            'WHERE Clause & Comparison Operators',
            'BETWEEN...AND, IN, LIKE, IS NULL Operators',
            'Logical Operators (AND, OR, NOT) & Precedence Rules'
          ],
          topics: ['Duration: 1h 32m', 'Conditional selection and pattern matching']
        },
        {
          moduleId: 'dbms-m8',
          moduleNumber: 8,
          moduleTitle: 'Oracle Single-Row Functions',
          lessonTitles: [
            'Case Conversion & Character Manipulation Functions',
            'Numeric Functions & Nested Functions',
            'Date Values, Format Models & Arithmetic',
            'Number Format Models'
          ],
          topics: ['Duration: 1h 55m', 'String, numeric, and date transformation functions']
        },
        {
          moduleId: 'dbms-m9',
          moduleNumber: 9,
          moduleTitle: 'Oracle Conversion Functions',
          lessonTitles: [
            'Implicit vs Explicit Conversion',
            'TO_CHAR, TO_NUMBER, TO_DATE Functions',
            'NVL, NVL2, NULLIF and COALESCE'
          ],
          topics: ['Duration: 46m', 'Handling NULL values and type casting']
        },
        {
          moduleId: 'dbms-m10',
          moduleNumber: 10,
          moduleTitle: 'Oracle Group Functions',
          lessonTitles: [
            'Group Functions: AVG, COUNT, MAX, MIN, SUM',
            'LISTAGG Function',
            'Overview and Rules of Group Functions'
          ],
          topics: ['Duration: 1h 32m', 'Aggregating rows and computing summary statistics']
        },
        {
          moduleId: 'dbms-m11',
          moduleNumber: 11,
          moduleTitle: 'Oracle Grouping Data',
          lessonTitles: [
            'GROUP BY Clause & Filtering with HAVING',
            'Nested Group Functions'
          ],
          topics: ['Duration: 46m', 'Segmented summary reports and aggregate filters']
        },
        {
          moduleId: 'dbms-m12',
          moduleNumber: 12,
          moduleTitle: 'Oracle Joins',
          lessonTitles: [
            'Creating Joins & Natural Join',
            'Join with USING Clause & Ambiguous Columns',
            'INNER Join & Multiple Join Operations',
            'SELF Join, Non-Equijoins, OUTER Joins (Left, Right, Full) & CROSS Join'
          ],
          topics: ['Duration: 2h 29m', 'Multi-table query formulation across normalized entities']
        },
        {
          moduleId: 'dbms-m13',
          moduleNumber: 13,
          moduleTitle: 'Oracle Subqueries',
          lessonTitles: [
            'Single Row Subqueries',
            'Multiple Row Subqueries (IN, ANY, ALL)',
            'Multiple Column Subqueries'
          ],
          topics: ['Duration: 46m', 'Nested query structures and evaluation order']
        },
        {
          moduleId: 'dbms-m14',
          moduleNumber: 14,
          moduleTitle: 'Oracle Set Operators',
          lessonTitles: [
            'UNION and UNION ALL Operators',
            'INTERSECT and MINUS Operators',
            'ORDER BY with Set Operators'
          ],
          topics: ['Duration: 1h 20m', 'Mathematical set operations on query result sets']
        },
        {
          moduleId: 'dbms-m15',
          moduleNumber: 15,
          moduleTitle: 'Oracle DDL Commands',
          lessonTitles: [
            'Database Object Naming Rules',
            'CREATE TABLE, ALTER TABLE, DROP TABLE',
            'TRUNCATE TABLE & RENAME TABLE'
          ],
          topics: ['Duration: 1h 20m', 'Schema creation, column modifications, and object lifecycles']
        },
        {
          moduleId: 'dbms-m16',
          moduleNumber: 16,
          moduleTitle: 'Oracle DML Commands',
          lessonTitles: [
            'INSERT Statement & INSERT INTO SELECT',
            'UPDATE Statement & DELETE Statement'
          ],
          topics: ['Duration: 57m', 'Data manipulation, row updates, batch inserts']
        },
        {
          moduleId: 'dbms-m17',
          moduleNumber: 17,
          moduleTitle: 'Oracle Constraints',
          lessonTitles: [
            'NOT NULL & UNIQUE Constraints',
            'PRIMARY KEY & FOREIGN KEY Constraints',
            'CHECK Constraints'
          ],
          topics: ['Duration: 1h 9m', 'Enforcing relational referential integrity']
        },
        {
          moduleId: 'dbms-m18',
          moduleNumber: 18,
          moduleTitle: 'Oracle PL/SQL',
          lessonTitles: [
            'Introduction to PL/SQL Blocks',
            'Stored Procedures',
            'Database Triggers',
            'User Defined Functions'
          ],
          topics: ['Duration: 46m', 'Procedural database programming and event triggers']
        },
        {
          moduleId: 'dbms-m19',
          moduleNumber: 19,
          moduleTitle: 'Storage, Indexing & Query Optimization',
          lessonTitles: [
            'Disk Management, Pages, Blocks & Access Times',
            'Heap Files vs Sorted Files',
            'Index Structures: Clustered vs Unclustered Index',
            'Sparse vs Dense Index, Multi-Level Indexes',
            'Query Processing & Query Optimization Cost Models'
          ],
          topics: ['Duration: 2h 52m', 'B-Trees, indexing overhead, query execution plans']
        },
        {
          moduleId: 'dbms-m20',
          moduleNumber: 20,
          moduleTitle: 'Transaction Management & Concurrency Control',
          lessonTitles: [
            'Transactions & ACID Properties',
            'Inconsistency Problems: Lost Update, Dirty Read, Phantom Read',
            'Recoverable vs Non-Recoverable Schedules',
            'Cascadeless vs Cascading Schedules',
            'Conflict Serializability & View Serializability',
            'Locking Protocols: Shared, Exclusive & Two-Phase Locking (2PL)',
            'Strict & Rigorous 2PL & Database Recovery Techniques'
          ],
          topics: ['Duration: 5h 56m', 'Serializability tests, lock managers, write-ahead logging (WAL)']
        },
        {
          moduleId: 'dbms-m21',
          moduleNumber: 21,
          moduleTitle: 'NoSQL Databases & Big Data Storage',
          lessonTitles: [
            'Introduction to NoSQL Databases & Types',
            'BASE Properties vs ACID',
            'CAP Theorem & Big Data Overview'
          ],
          topics: ['Duration: 57m', 'Document, key-value, column-family, and graph databases']
        },
        {
          moduleId: 'dbms-m22',
          moduleNumber: 22,
          moduleTitle: 'Data Warehousing & OLAP',
          lessonTitles: [
            'Components of Data Warehouse & Architecture',
            'Online Analytical Processing (OLAP) vs OLTP'
          ],
          topics: ['Duration: 1h 9m', 'Dimensional modeling and enterprise analytics pipelines']
        }
      ]
    }
  ]
};
