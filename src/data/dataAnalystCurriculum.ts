import { Program } from '../types/curriculum';

export const dataAnalystCurriculum: Program = {
  id: 'data-analyst',
  slug: 'data-analyst',
  title: 'Data Analyst',
  route: '/programs/data-analyst',
  badge: '4 Comprehensive Courses',
  shortDescription: 'Explore the verified course structure for Data Analysis (Excel, SQL & Python), Microsoft Power BI, Tableau Business Intelligence, and Enterprise SQL.',
  overview: 'The DevTech IT Solution Data Analyst internship curriculum provides mastery across foundational Data Analysis (Excel, SQL, Python, Pandas, Matplotlib), end-to-end Microsoft Power BI dashboarding & DAX, visual analytics with Tableau, and advanced database engineering with SQL.',
  isVerified: true,
  verificationNotice: 'Official DevTech IT Solution Internship Curriculum and Technical Roadmap.',
  keyTechnologies: [
    'Advanced Excel & XLOOKUP',
    'SQL Server & SSMS',
    'Microsoft Power BI',
    'DAX (Data Analysis Expressions)',
    'Tableau Visual Analytics',
    'Python for Analytics (NumPy, Pandas)',
    'Matplotlib, Seaborn & Plotly',
    'Power Query ETL & Data Modeling',
    'Window Functions & CTEs',
    'E-Commerce & Healthcare Analytics Projects'
  ],
  icon: 'BarChart3',
  courses: [
    {
      courseId: 'da-course-dataanalysis',
      courseTitle: 'Course 1: Data Analysis (Excel, SQL, Python & Visualization)',
      duration: 'Applied Analytics Mastery (40 Modules)',
      courseDescription: 'Complete foundational analytics covering Excel formulas, XLOOKUP, pivot charts, macros, SQL querying, window functions, Python programming, NumPy, Pandas, visualization libraries, and risk prediction models.',
      modules: [
        {
          moduleId: 'da-m1',
          moduleNumber: 1,
          moduleTitle: 'How to Connect with Mentors',
          lessonTitles: ['How to Connect with Mentors & Course Guidelines'],
          topics: ['Duration: 12m', 'Mentorship interaction and project review guidelines']
        },
        {
          moduleId: 'da-m2',
          moduleNumber: 2,
          moduleTitle: 'Introduction to Data Analysis',
          lessonTitles: ['Introduction to Course & Analytics Roadmap'],
          topics: ['Duration: 12m', 'Data lifecycle and business problem formulation']
        },
        {
          moduleId: 'da-m3',
          moduleNumber: 3,
          moduleTitle: 'Excel Basics',
          lessonTitles: [
            'Worksheet Basics & Grid Navigation',
            'Data Formats (Text, Number, Currency, Date)',
            'Data Handling Basics: Cut, Copy & Paste',
            'Saving and Printing Basics'
          ],
          topics: ['Duration: 59m', 'Spreadsheet environment and data hygiene']
        },
        {
          moduleId: 'da-m4',
          moduleNumber: 4,
          moduleTitle: 'Essential Formulas in Excel',
          lessonTitles: [
            'Basic Formula Operations & Syntax',
            'Mathematical Functions (Part 1 & 2)',
            'Textual Functions (Part 1 & 2)',
            'Logical Functions (IF, AND, OR)',
            'Date-Time Functions',
            'Lookup Functions (VLOOKUP, HLOOKUP, INDEX-MATCH)'
          ],
          topics: ['Duration: 1h 35m', 'Matrix lookups, logical validations, and date arithmetic']
        },
        {
          moduleId: 'da-m5',
          moduleNumber: 5,
          moduleTitle: 'XLOOKUP (Excel 2021 & Office 365)',
          lessonTitles: [
            'XLOOKUP as a Modern Replacement of VLOOKUP',
            'Handling NA and Approximate Matches in XLOOKUP',
            'Wildcard Matching in XLOOKUP',
            'Search Modes and Bidirectional Matrix Retrieval'
          ],
          topics: ['Duration: 47m', 'Next-generation array matching and fault tolerance']
        },
        {
          moduleId: 'da-m6',
          moduleNumber: 6,
          moduleTitle: 'Excel Data Tools',
          lessonTitles: [
            'Sorting, Filtering and Data Validation Lists',
            'Text-to-Columns and Remove Duplicates',
            'Advanced Filter Option',
            'Formatting Data and Excel Tables'
          ],
          topics: ['Duration: 47m', 'Data cleaning, deduplication, and input boundaries']
        },
        {
          moduleId: 'da-m7',
          moduleNumber: 7,
          moduleTitle: 'Excel Visual Charts',
          lessonTitles: [
            'Importance of Data Visualization & Chart Elements',
            'The Easy Way of Creating Charts: Bar and Column',
            'Formatting Charts (Part 1 & 2)',
            'Line Charts, Area Charts, Pie & Doughnut Charts',
            'Scatter Plots (XY Chart), Waterfall Charts & Sparklines'
          ],
          topics: ['Duration: 2h 34m', 'Selecting visual encodings, custom legends, and trend displays']
        },
        {
          moduleId: 'da-m8',
          moduleNumber: 8,
          moduleTitle: 'Pivot Tables and Pivot Charts',
          lessonTitles: [
            'Multi-Dimensional Pivot Tables Summary',
            'Interactive Pivot Charts'
          ],
          topics: ['Duration: 24m', 'Summarizing transactional records and dynamic slicers']
        },
        {
          moduleId: 'da-m9',
          moduleNumber: 9,
          moduleTitle: 'Map Charts in Excel',
          lessonTitles: ['Geographic Maps Charts (Excel 2019 & 365)'],
          topics: ['Duration: 12m', 'Visualizing regional metrics by country/state']
        },
        {
          moduleId: 'da-m10',
          moduleNumber: 10,
          moduleTitle: 'Using ChatGPT with Excel',
          lessonTitles: ['Using ChatGPT for Excel Formulas & Complex VBA Problem Solving'],
          topics: ['Duration: 12m', 'Prompt engineering for spreadsheet automation']
        },
        {
          moduleId: 'da-m11',
          moduleNumber: 11,
          moduleTitle: 'Excel Macros',
          lessonTitles: ['Recording and Executing Excel Macros'],
          topics: ['Duration: 12m', 'Automating repetitive data entry tasks']
        },
        {
          moduleId: 'da-m12',
          moduleNumber: 12,
          moduleTitle: 'Importing Data from External Sources',
          lessonTitles: ['Importing Data from Websites and External Connections'],
          topics: ['Duration: 12m', 'Web scraping and Power Query import in Excel']
        },
        {
          moduleId: 'da-m13',
          moduleNumber: 13,
          moduleTitle: 'SQL Introduction for Analysts',
          lessonTitles: ['Introduction to Relational Databases in Analytics'],
          topics: ['Duration: 12m', 'Relational data structures vs spreadsheets']
        },
        {
          moduleId: 'da-m14',
          moduleNumber: 14,
          moduleTitle: 'SQL Server Installation & SSMS',
          lessonTitles: ['Installing SQL Server & SQL Server Management Studio (SSMS)'],
          topics: ['Duration: 12m', 'Local database instance configuration']
        },
        {
          moduleId: 'da-m15',
          moduleNumber: 15,
          moduleTitle: 'Database Basics',
          lessonTitles: [
            'What is SQL & Relational Tables',
            'Types of SQL Commands (DDL, DML, DCL, TCL)'
          ],
          topics: ['Duration: 35m', 'Database schemas, keys, and transaction modes']
        },
        {
          moduleId: 'da-m16',
          moduleNumber: 16,
          moduleTitle: 'Fundamental SQL Statements',
          lessonTitles: [
            'CREATE & INSERT Statements',
            'Primary Key and Foreign Key Constraints',
            'Import Data from Flat Files (CSV)',
            'SELECT & SELECT DISTINCT',
            'WHERE Clause & Logical Operators',
            'UPDATE, DELETE & ALTER Table (Part 1 & 2)'
          ],
          topics: ['Duration: 2h 22m', 'CRUD operations, schema modification, and data integrity']
        },
        {
          moduleId: 'da-m17',
          moduleNumber: 17,
          moduleTitle: 'Restore, Backup & Sample Databases',
          lessonTitles: [
            'Database Backup and Restore Procedures',
            'Restoring AdventureWorks Sample Database',
            'Creating Tables using CSV Files'
          ],
          topics: ['Duration: 35m', 'Working with production enterprise sample datasets']
        },
        {
          moduleId: 'da-m18',
          moduleNumber: 18,
          moduleTitle: 'Selection Commands: Filtering',
          lessonTitles: [
            'IN Operator for Multiple Matches',
            'BETWEEN Operator for Range Lookups',
            'LIKE Operator with Wildcards (% and _)'
          ],
          topics: ['Duration: 35m', 'Precision dataset row filtering']
        },
        {
          moduleId: 'da-m19',
          moduleNumber: 19,
          moduleTitle: 'Selection Commands: Ordering & Limits',
          lessonTitles: [
            'Commenting in SQL Scripts',
            'ORDER BY (ASC / DESC)',
            'TOP / LIMIT Operator'
          ],
          topics: ['Duration: 35m', 'Sorting multi-column result sets and pagination']
        },
        {
          moduleId: 'da-m20',
          moduleNumber: 20,
          moduleTitle: 'Aliasing in Queries',
          lessonTitles: ['Column and Table Aliases with AS'],
          topics: ['Duration: 12m', 'Improving query clarity and joining aliases']
        },
        {
          moduleId: 'da-m21',
          moduleNumber: 21,
          moduleTitle: 'Aggregate Commands',
          lessonTitles: ['COUNT, SUM, AVG, MIN and MAX Functions'],
          topics: ['Duration: 47m', 'Computing mathematical summaries on column sets']
        },
        {
          moduleId: 'da-m22',
          moduleNumber: 22,
          moduleTitle: 'GROUP BY & HAVING Clauses',
          lessonTitles: [
            'Segmenting Data with GROUP BY',
            'Filtering Aggregates with HAVING'
          ],
          topics: ['Duration: 24m', 'Category level summaries and aggregate condition filtering']
        },
        {
          moduleId: 'da-m23',
          moduleNumber: 23,
          moduleTitle: 'Conditional CASE Statements',
          lessonTitles: ['CASE WHEN Conditional Expressions in SELECT'],
          topics: ['Duration: 12m', 'Creating derived categorical classification columns']
        },
        {
          moduleId: 'da-m24',
          moduleNumber: 24,
          moduleTitle: 'Relational JOINS in SQL',
          lessonTitles: [
            'Introduction & Concepts of Combining Data',
            'INNER JOIN & Preparing the Data',
            'LEFT JOIN & RIGHT JOIN',
            'FULL OUTER JOIN & CROSS JOIN',
            'Set Operations: INTERSECT, EXCEPT, UNION ALL'
          ],
          topics: ['Duration: 2h 10m', 'Normalized table combinations, Venn diagram mechanics, set operations']
        },
        {
          moduleId: 'da-m25',
          moduleNumber: 25,
          moduleTitle: 'Subqueries in SQL',
          lessonTitles: [
            'Subquery in WHERE Clause',
            'Subquery in FROM Clause (Derived Tables)',
            'Subquery in SELECT Clause (Scalar Subqueries)'
          ],
          topics: ['Duration: 35m', 'Nested query evaluations and correlated lookups']
        },
        {
          moduleId: 'da-m26',
          moduleNumber: 26,
          moduleTitle: 'Views and Indexes',
          lessonTitles: [
            'Creating and Managing SQL VIEWs',
            'Database INDEXing for High Performance'
          ],
          topics: ['Duration: 24m', 'Virtual tables and query acceleration']
        },
        {
          moduleId: 'da-m27',
          moduleNumber: 27,
          moduleTitle: 'String Functions in SQL',
          lessonTitles: [
            'LENGTH, UPPER, LOWER, REPLACE',
            'TRIM, LTRIM, RTRIM & Concatenation',
            'SUBSTRING & LIST AGGREGATION'
          ],
          topics: ['Duration: 1h 23m', 'Data cleaning and text formatting directly in SQL']
        },
        {
          moduleId: 'da-m28',
          moduleNumber: 28,
          moduleTitle: 'Mathematical Functions in SQL',
          lessonTitles: ['CEIL, FLOOR, RANDOM, ROUND, POWER'],
          topics: ['Duration: 47m', 'Numeric calculations and rounding rules']
        },
        {
          moduleId: 'da-m29',
          moduleNumber: 29,
          moduleTitle: 'Date & Time Functions in SQL',
          lessonTitles: [
            'Current Date and Time Expressions',
            'AGE / DATEDIFF Date Differences',
            'EXTRACT Date Parts (Year, Month, Day, Hour)'
          ],
          topics: ['Duration: 35m', 'Temporal analysis and cohort date grouping']
        },
        {
          moduleId: 'da-m30',
          moduleNumber: 30,
          moduleTitle: 'Pattern (String) Matching',
          lessonTitles: [
            'Pattern Matching Basics',
            'Advanced Pattern Matching (Part 1 & 2)'
          ],
          topics: ['Duration: 35m', 'Complex regex-like text filtering']
        },
        {
          moduleId: 'da-m31',
          moduleNumber: 31,
          moduleTitle: 'Analytical Window Functions',
          lessonTitles: [
            'Introduction to Window Functions & Row Numbers',
            'Implementing ROW_NUMBER() in SQL',
            'RANK() and DENSE_RANK()',
            'NTILE() Quartiles & Percentiles',
            'AVERAGE, COUNT, SUM TOTAL & RUNNING TOTAL Window Functions',
            'LAG and LEAD Trend Analysis'
          ],
          topics: ['Duration: 1h 58m', 'OVER(), PARTITION BY, running totals, and period-over-period differences']
        },
        {
          moduleId: 'da-m32',
          moduleNumber: 32,
          moduleTitle: 'Data Type Conversion Functions',
          lessonTitles: ['Converting Numbers to String, Dates to String & String to Date'],
          topics: ['Duration: 12m', 'CAST and CONVERT operations']
        },
        {
          moduleId: 'da-m33',
          moduleNumber: 33,
          moduleTitle: 'Deep Dive into Python for Analysts',
          lessonTitles: [
            'Python & Anaconda Installation, Jupyter Walkthrough',
            'Data Types, Numbers, Math, Operators & Strings 101',
            'Booleans, Lists, List Methods & Unpacking',
            'Dictionaries, Sets, Tuples & Conditional Logic',
            'Truthiness, Short Circuiting, Loops (for, while) & Exercises',
            'Functions: Parameters, Arguments, Return, Clean Code, *args, **kwargs',
            'Pure Functions: map(), filter(), zip(), reduce(), lambda, Error Handling'
          ],
          topics: ['Duration: 10h 14m', 'Full Python foundational programming for data analysts']
        },
        {
          moduleId: 'da-m34',
          moduleNumber: 34,
          moduleTitle: 'End-to-End Analytics Projects',
          lessonTitles: [
            'Creating Tables in SQL & Schema Design',
            'SQL Queries Across Multiple Tables for Data Extraction',
            'Analysis, Validation and Visualization using Excel',
            'Creating Risk Prediction Model in Python',
            'Deploying Healthcare Risk Stratification App'
          ],
          topics: ['Duration: 59m', 'Cross-tool workflow: SQL to Excel to Python web app'],
          practicalProjects: ['Healthcare Risk Stratification Predictive Analytics App']
        },
        {
          moduleId: 'da-m35',
          moduleNumber: 35,
          moduleTitle: 'Modules, Packages and Libraries',
          lessonTitles: [
            'Built-in Modules & Packages in Python',
            'Import Conventions & Python Ecosystem Libraries'
          ],
          topics: ['Duration: 59m', 'Organizing reusable analytical code']
        },
        {
          moduleId: 'da-m36',
          moduleNumber: 36,
          moduleTitle: 'NumPy for Data Manipulation',
          lessonTitles: [
            'NumPy Datatypes, Attributes & Creating Arrays',
            'Arithmetic & Aggregate Manipulations on Arrays',
            'Variance, Standard Deviation, Reshaping & Transpose',
            'Dot Product, Comparisons, Sorting & Images to NumPy'
          ],
          topics: ['Duration: 2h 22m', 'Vectorized high-speed calculations']
        },
        {
          moduleId: 'da-m37',
          moduleNumber: 37,
          moduleTitle: 'Data Analysis using Pandas',
          lessonTitles: [
            'Series, DataFrames and CSV Handling',
            'Describing, Selecting and Viewing Data',
            'Asking the Right Business Questions',
            'Manipulating DataFrames & apply() Function'
          ],
          topics: ['Duration: 1h 35m', 'Tabular data transformation and metric calculation']
        },
        {
          moduleId: 'da-m38',
          moduleNumber: 38,
          moduleTitle: 'Data Visualization: Matplotlib, Seaborn & Plotly',
          lessonTitles: [
            'Matplotlib Workflow, Scatter, Bar, Histograms & Subplots',
            'Plotting Directly from Pandas Series & DataFrames (Part 1-6)',
            'Customizing Plots & Aesthetics',
            'Seaborn Univariate & Bivariate Analysis, Plotting Relationships',
            'Plotly Express Interactive Visuals'
          ],
          topics: ['Duration: 3h 56m', 'Building publication-quality statistical charts']
        },
        {
          moduleId: 'da-m39',
          moduleNumber: 39,
          moduleTitle: 'Power BI Integration for Analysts',
          lessonTitles: [
            'Data Transformation, Cleaning, Replacing, Splitting, Trimming',
            'Data Modeling & Core Visualizations (Column, Pie, Line, Tables, Slicers)',
            'Tree Visualizations, Logical DAX, Text DAX, DateTime DAX',
            'Hands-on Analytical Problems (1 through 6)',
            'Bookmarks, Row Level Security (RLS), Field Parameters',
            'AI Visuals, Quick Measures & SQL + Power BI Integration'
          ],
          topics: ['Duration: 6h 6m', 'Applied business intelligence reporting and DAX calculations'],
          practicalProjects: ['SQL + Power BI Executive Business Analytics Report']
        },
        {
          moduleId: 'da-m40',
          moduleNumber: 40,
          moduleTitle: 'Job Readiness & Placement Support',
          lessonTitles: [
            'How to Build a Technical Data Analyst Resume',
            'Customizing Resume as per Specific Job Descriptions',
            'Interview Preparation Guidelines & Mock Interview Flow',
            'Profile Enhancement, Portfolio and Upskilling'
          ],
          topics: ['Duration: 1h 11m', 'Career strategy, portfolio presentations, and technical mock interviews']
        }
      ]
    },
    {
      courseId: 'da-course-powerbi',
      courseTitle: 'Course 2: Microsoft Power BI Specialization',
      duration: 'Enterprise Business Intelligence Track (10 Modules)',
      courseDescription: 'Dedicated Power BI specialization covering Power Query Editor ETL, Star and Snowflake data modeling, advanced DAX expressions, interactive executive dashboarding, AI visuals, query optimization, and end-to-end retail projects.',
      modules: [
        {
          moduleId: 'pbi-m1',
          moduleNumber: 1,
          moduleTitle: 'Introducing Microsoft Power BI',
          lessonTitles: [
            'Power BI Introduction & Desktop Installation',
            'Adjusting Global & File Settings',
            'Workflow of Power BI Desktop to Cloud Service',
            'Helpful Community Resources'
          ],
          topics: ['Duration: 1h 4m', 'Workspace configuration and BI lifecycle']
        },
        {
          moduleId: 'pbi-m2',
          moduleNumber: 2,
          moduleTitle: 'Connecting and Shaping Data (Power Query)',
          lessonTitles: [
            'Front End vs Back End & Connector Types',
            'Power Query Editor & Basic Data Transformations',
            'Storage Modes: Import vs DirectQuery',
            'Connecting to Databases & Gathering Website Data',
            'Data Profiling & Quality Assurance Tools',
            'Text, Numeric, Date and Time Transformation Tools',
            'Creating Rolling Calendar Tables',
            'Index Columns, Conditional Columns, Grouping & Aggregating',
            'Pivoting vs Unpivoting Columns',
            'Merging Queries vs Appending Queries',
            'Gathering Data from Folders & Refresh Mechanics'
          ],
          topics: ['Duration: 6h 24m', 'Robust ETL transformations and data shaping'],
          practicalProjects: ['Automated Multi-File Folder Ingestion Pipeline']
        },
        {
          moduleId: 'pbi-m3',
          moduleNumber: 3,
          moduleTitle: 'Creating an Enterprise Data Model',
          lessonTitles: [
            'Data Modeling Concepts & Database Normalization',
            'Fact Tables vs Dimension Tables (Primary & Foreign Keys)',
            'Merged Tables vs Relational Models',
            'Creating, Managing and Editing Table Relationships',
            'Star Schema vs Snowflake Schema Architecture',
            'Active vs Inactive Relationships & Cardinality (1:*, *:*)',
            'Connecting Multiple Fact Tables & Filter Flow Context',
            'Bi-Directional Filtering & Resolving Ambiguity',
            'Hiding Foreign Keys, Model Layouts & Hierarchies'
          ],
          topics: ['Duration: 5h 7m', 'High-performance schema modeling and filter propagation']
        },
        {
          moduleId: 'pbi-m4',
          moduleNumber: 4,
          moduleTitle: 'Calculated Fields with DAX (Data Analysis Expressions)',
          lessonTitles: [
            'DAX Introduction: DAX vs Power Query M-Code',
            'Calculated Columns vs DAX Measures (Implicit vs Explicit)',
            'Quick Measures & Dedicated Measure Tables',
            'Filter Context, DAX Syntax & Operators',
            'Basic Math, Stats and Counting DAX Functions',
            'Conditional Logic: IF & SWITCH Functions',
            'Text, Date and Time DAX Functions',
            'Joining Data with RELATED and RELATEDTABLE',
            'The CALCULATE Function (Modifying Filter Context)',
            'The ALL Function and Ratio Calculations',
            'Iterator Functions (SUMX, AVERAGEX, COUNTX)',
            'Time Intelligence DAX Patterns (YTD, Prior Year, Moving Averages)'
          ],
          topics: ['Duration: 8h 20m', 'Advanced business metrics, context transition, and time intelligence']
        },
        {
          moduleId: 'pbi-m5',
          moduleNumber: 5,
          moduleTitle: 'Visualizing Interactive Dashboards',
          lessonTitles: [
            'Dashboard Design Principles & Three Key Questions',
            'Cards, Multi-Row Cards & Line Charts with Forecasts',
            'KPI Visuals, Bar Charts, Donut Charts & Slicers',
            'Table & Matrix Visuals with Conditional Formatting',
            'Top N Filtering & Text Summaries',
            'Map Visuals, Gauge Charts & Area Charts',
            'Drill-Up, Drill-Down & Drill-Through Filters',
            'Report Visual Interactions & Bookmarks',
            'Navigation Buttons, Slicer Panels & Field Parameters',
            'Custom Tooltips, Custom Visuals & Mobile Layout',
            'Publishing Dashboards to Power BI Service'
          ],
          topics: ['Duration: 11h 6m', 'Executive UX design, dynamic drill-throughs, and cloud publishing'],
          practicalProjects: ['Executive Interactive Sales Performance Dashboard']
        },
        {
          moduleId: 'pbi-m6',
          moduleNumber: 6,
          moduleTitle: 'Artificial Intelligence in Power BI',
          lessonTitles: [
            'Anomaly Detection in Time Series',
            'Smart Narrative Natural Language Summaries',
            'Q&A Natural Language Visuals',
            'Decomposition Trees for Root-Cause Analysis',
            'Key Influencers Visual'
          ],
          topics: ['Duration: 1h 4m', 'Built-in machine learning diagnostics and AI visuals']
        },
        {
          moduleId: 'pbi-m7',
          moduleNumber: 7,
          moduleTitle: 'Performance Optimization in Power BI',
          lessonTitles: [
            'Pause Visuals & Optimization Presets',
            'Apply All Slicers Button',
            'Performance Analyzer & Query Profiling'
          ],
          topics: ['Duration: 51m', 'DAX formula optimization and visual rendering acceleration']
        },
        {
          moduleId: 'pbi-m8',
          moduleNumber: 8,
          moduleTitle: 'Power BI Modern Features and Updates',
          lessonTitles: ['Modern Power BI Features, Copilot & Monthly Updates'],
          topics: ['Duration: 13m', 'Continuous platform improvements and new visual capabilities']
        },
        {
          moduleId: 'pbi-m9',
          moduleNumber: 9,
          moduleTitle: 'Power BI Analytics Capstone Project',
          lessonTitles: [
            'Overview of the PowerBI Analytics Project',
            'Understanding the Data & SQL ETL Transformation',
            'Real World Usecases using SQL Transformation Queries',
            'Data Modeling and Data Validation',
            'DAX (Basic to Advanced) Usecases & Formulas',
            'Customer, Product and Inventory Analysis Measures',
            'Visualization and Dashboard Building',
            'Store Performance, Product, Inventory and Customer Analytics'
          ],
          topics: ['Duration: 2h 21m', 'Complete enterprise end-to-end retail BI solution'],
          practicalProjects: [
            'Store Performance and Product Analytics Dashboard',
            'Inventory and Customer Analytics Executive Suite'
          ]
        },
        {
          moduleId: 'pbi-m10',
          moduleNumber: 10,
          moduleTitle: 'Career Guidance & Placement Support',
          lessonTitles: [
            'Building a Power BI Portfolio Resume',
            'Customizing Resume as per BI Job Descriptions',
            'How to Apply for Jobs & Mock Interview Flow'
          ],
          topics: ['Duration: 1h 17m', 'BI analyst interview preparation and portfolio hosting']
        }
      ]
    },
    {
      courseId: 'da-course-tableau',
      courseTitle: 'Course 3: Tableau Visual Analytics & Reporting',
      duration: 'Visual Analytics Track (10 Modules)',
      courseDescription: 'Master visual data discovery in Tableau: charts, time series, filters, maps, joins vs blends, Level of Detail (LOD) expressions, parameters, table calculations, clusters, and business storytelling.',
      modules: [
        {
          moduleId: 'tab-m1',
          moduleNumber: 1,
          moduleTitle: "Module 1 - Getting Started with Tableau",
          lessonTitles: [
            'Tableau Introduction & Architecture',
            'Installation & Workspace Navigation',
            'Hands-on Exercise: Exploring Sample Data'
          ],
          topics: ['Duration: 49m', 'Tableau Desktop environment overview']
        },
        {
          moduleId: 'tab-m2',
          moduleNumber: 2,
          moduleTitle: 'Module 2 - Tableau Basics: Your First Bar Chart',
          lessonTitles: [
            'The Business Challenge - Who Gets the Annual Reward',
            'Connecting Tableau to CSV Files',
            'Navigating Tableau Canvas & Creating Calculated Fields',
            'Adding Colors, Labels & Formatting Worksheets',
            'Exporting Your Worksheet'
          ],
          topics: ['Duration: 1h 54m', 'Basic dimensions, measures, and visual formatting']
        },
        {
          moduleId: 'tab-m3',
          moduleNumber: 3,
          moduleTitle: 'Module 3 - Time Series, Aggregation and Filters',
          lessonTitles: [
            'Working with Data Extracts in Tableau',
            'Working with Time Series & Granularity',
            'Understanding Aggregation and Level of Detail',
            'Creating Area Charts & Highlighting',
            'Adding Filters and Quick Filters'
          ],
          topics: ['Duration: 1h 37m', 'Continuous vs discrete dates and filtering dimensions']
        },
        {
          moduleId: 'tab-m4',
          moduleNumber: 4,
          moduleTitle: 'Module 4 - Maps, Scatterplots & Your First Dashboard',
          lessonTitles: [
            'Relationships vs Joins in Tableau',
            'Joining Data in Tableau & Creating Geographic Maps',
            'Hierarchies & Creating Scatterplots',
            'Applying Filters to Multiple Worksheets',
            'Creating Your First Dashboard with Interactive Actions (Filter & Highlight)'
          ],
          topics: ['Duration: 2h 10m', 'Geographic roles, multi-sheet filters, and dashboard actions'],
          practicalProjects: ['First Interactive Multi-Sheet Tableau Dashboard']
        },
        {
          moduleId: 'tab-m5',
          moduleNumber: 5,
          moduleTitle: 'Module 5 - Joining, Blending & Dual Axis Charts',
          lessonTitles: [
            'Understanding LEFT, RIGHT, INNER and OUTER Joins',
            'Joins with Duplicate Values & Multiple Fields',
            'Joining Data vs Blending Data in Tableau',
            'Data Blending & Dual Axis Charts',
            'Calculated Fields in a Blend & Modern Data Model'
          ],
          topics: ['Duration: 3h 15m', 'Multi-source data federation and dual-axis metric comparisons']
        },
        {
          moduleId: 'tab-m6',
          moduleNumber: 6,
          moduleTitle: 'Module 6 - Table Calculations, Dashboards & Storytelling',
          lessonTitles: [
            'Setting Geographical Roles & Table Calculations',
            'Creating Bins and Distributions for Age',
            'Leveraging the Power of Parameters',
            'Creating Tree Map Charts',
            'Customer Segmentation Dashboard & Advanced Interactivity',
            'Creating a Compelling Business Storyline'
          ],
          topics: ['Duration: 2h 58m', 'Running totals, percent of total, parameter-driven charts, and story points'],
          practicalProjects: ['Customer Segmentation Interactive Tableau Story']
        },
        {
          moduleId: 'tab-m7',
          moduleNumber: 7,
          moduleTitle: 'Module 7 - Advanced Data Preparation',
          lessonTitles: [
            'Structuring Data for Tableau',
            'Tableau Data Interpreter & Pivot',
            'Splitting Columns into Multiple Fields',
            'Metadata Grid & Fixing Geographical Errors'
          ],
          topics: ['Duration: 1h 54m', 'Data reshaping and resolving unmapped locations']
        },
        {
          moduleId: 'tab-m8',
          moduleNumber: 8,
          moduleTitle: 'Module 8 - Clusters, Custom Territories & Design Features',
          lessonTitles: [
            'The Challenge - Startup Expansion Analytics',
            'Custom Territories via Groups & Geographic Roles',
            'Clustering in Tableau & Modeling with Clusters',
            'Cross-Database Joins & Highlighters',
            'Saving Clusters & Mobile Layout Features'
          ],
          topics: ['Duration: 2h 42m', 'Machine learning clustering and spatial group boundaries'],
          practicalProjects: ['Startup Geographic Expansion Analytics Model']
        },
        {
          moduleId: 'tab-m9',
          moduleNumber: 9,
          moduleTitle: 'Module 9 - Tableau Toolkit & Advanced Features',
          lessonTitles: [
            'Extracting Data from PDF Files',
            'Connecting and Joining Spatial Files',
            'Step and Jump Line Charts',
            'Viz in Tooltip (Micro-Visualizations on Hover)'
          ],
          topics: ['Duration: 2h 10m', 'Spatial geometry files, PDF tables, and nested hover charts']
        },
        {
          moduleId: 'tab-m10',
          moduleNumber: 10,
          moduleTitle: 'Module 10 - Course Conclusion',
          lessonTitles: [
            'Course Overview & Next Milestones',
            'Tableau Desktop Specialist Preparation'
          ],
          topics: ['Duration: 32m', 'Tableau portfolio assembly and certification guide']
        }
      ]
    },
    {
      courseId: 'da-course-sql',
      courseTitle: 'Course 4: Enterprise SQL for Database Engineering',
      duration: 'Relational Database Track (16 Modules)',
      courseDescription: 'Enterprise SQL database engineering covering DDL, DML, DCL, TCL, filtering, aggregates, complex joins, subqueries, CTEs, window functions, normalization, indexing, stored procedures, and an e-commerce analytics capstone.',
      modules: [
        {
          moduleId: 'sql-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction to DBMS',
          lessonTitles: ['DBMS Architecture & Relational Concepts'],
          topics: ['Duration: 42m', 'Relational database management principles']
        },
        {
          moduleId: 'sql-m2',
          moduleNumber: 2,
          moduleTitle: 'SQL Commands Classification',
          lessonTitles: [
            'Overview of SQL Commands',
            'Detailed Study of SQL Command Types (DDL, DML, DCL, TCL)'
          ],
          topics: ['Duration: 1h 24m', 'Schema definitions, data mutations, transactions, and permission grants']
        },
        {
          moduleId: 'sql-m3',
          moduleNumber: 3,
          moduleTitle: 'SQL Fundamentals',
          lessonTitles: [
            'SQL Basics: Sorting, Filtering, Logical & String Operators'
          ],
          topics: ['Duration: 42m', 'Core SELECT statements and conditional filters']
        },
        {
          moduleId: 'sql-m4',
          moduleNumber: 4,
          moduleTitle: 'Aggregate Functions & Grouping',
          lessonTitles: [
            'Common Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
            'GROUP BY and HAVING Clauses',
            'Use of COALESCE and Null Handling'
          ],
          topics: ['Duration: 42m', 'Aggregating metric dimensions and removing NULL biases']
        },
        {
          moduleId: 'sql-m5',
          moduleNumber: 5,
          moduleTitle: 'Relational Joins Deep Dive',
          lessonTitles: [
            'Theoretical Understanding of Joins',
            'Inner Join, Left Join, Right Join, Full Outer Join, Self Join, Cross Join',
            'Practical Implementation & Exercises on Joins'
          ],
          topics: ['Duration: 2h 7m', 'Comprehensive multi-table query joins and cardinality management']
        },
        {
          moduleId: 'sql-m6',
          moduleNumber: 6,
          moduleTitle: 'CASE Statements',
          lessonTitles: ['Working with CASE WHEN Conditional Logic'],
          topics: ['Duration: 42m', 'Dynamic column transformations']
        },
        {
          moduleId: 'sql-m7',
          moduleNumber: 7,
          moduleTitle: 'Date and Time Functions',
          lessonTitles: ['Date and Time Functions in SQL (DATEADD, DATEDIFF, DATEPART)'],
          topics: ['Duration: 42m', 'Timestamp calculations and cohort analysis']
        },
        {
          moduleId: 'sql-m8',
          moduleNumber: 8,
          moduleTitle: 'Set Operators',
          lessonTitles: [
            'SET Operators: UNION, UNION ALL, INTERSECT, MINUS / EXCEPT'
          ],
          topics: ['Duration: 42m', 'Combining query result sets with and without duplicates']
        },
        {
          moduleId: 'sql-m9',
          moduleNumber: 9,
          moduleTitle: 'Subqueries',
          lessonTitles: [
            'Non-Correlated Subqueries',
            'Correlated Subqueries in WHERE and SELECT'
          ],
          topics: ['Duration: 42m', 'Nested query formulation and execution order']
        },
        {
          moduleId: 'sql-m10',
          moduleNumber: 10,
          moduleTitle: 'Common Table Expressions (CTEs) & Views',
          lessonTitles: [
            'Common Table Expressions (WITH Clause)',
            'Recursive CTEs & Creating Views'
          ],
          topics: ['Duration: 42m', 'Modular and readable multi-step query pipelines']
        },
        {
          moduleId: 'sql-m11',
          moduleNumber: 11,
          moduleTitle: 'Analytical Window Functions',
          lessonTitles: [
            'RANK, DENSE_RANK, ROW_NUMBER & Running Totals',
            'LEAD, LAG & Working with Window Frames (ROWS BETWEEN)'
          ],
          topics: ['Duration: 1h 24m', 'Moving averages, period growth calculations, and ranking']
        },
        {
          moduleId: 'sql-m12',
          moduleNumber: 12,
          moduleTitle: 'Database Normalization',
          lessonTitles: ['Database Normalization: 1NF, 2NF, 3NF & BCNF'],
          topics: ['Duration: 42m', 'Reducing data redundancy and preventing anomalies']
        },
        {
          moduleId: 'sql-m13',
          moduleNumber: 13,
          moduleTitle: 'ACID Properties in Databases',
          lessonTitles: ['Atomicity, Consistency, Isolation, Durability in Transactions'],
          topics: ['Duration: 42m', 'Transactional integrity and concurrency guarantees']
        },
        {
          moduleId: 'sql-m14',
          moduleNumber: 14,
          moduleTitle: 'Query Optimization',
          lessonTitles: [
            'Query Optimization Techniques & Execution Plans',
            'Indexing Strategies (Clustered & Non-Clustered)'
          ],
          topics: ['Duration: 42m', 'Eliminating full table scans and tuning query runtime']
        },
        {
          moduleId: 'sql-m15',
          moduleNumber: 15,
          moduleTitle: 'Advanced Database Topics (Bonus)',
          lessonTitles: [
            'Import and Export ERD Diagrams',
            'Users, Roles & Security Privileges',
            'Locking and Unlocking Tables',
            'Variables & Stored Procedures'
          ],
          topics: ['Duration: 3h 31m', 'Database administration and procedural batch logic']
        },
        {
          moduleId: 'sql-m16',
          moduleNumber: 16,
          moduleTitle: 'Final Project: E-Commerce Store Analytics',
          lessonTitles: [
            'General Sales Insights & Order Volume',
            'Customer Insights & Lifetime Value (CLV)',
            'Product and Order Insights & Category Performance',
            'Temporal Trends, Regional Insights, Return and Refund Analysis'
          ],
          topics: ['Duration: 2h 49m', 'Comprehensive multi-dimensional retail analytics SQL case study'],
          practicalProjects: ['E-Commerce Store Insights and Analytics Capstone Project']
        }
      ]
    }
  ]
};
