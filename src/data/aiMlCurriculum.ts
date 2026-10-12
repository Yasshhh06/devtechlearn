import { Program } from '../types/curriculum';

export const aiMlCurriculum: Program = {
  id: 'ai-ml-engineer',
  slug: 'ai-ml-engineer',
  title: 'AI & ML Engineer',
  route: '/programs/ai-ml-engineer',
  badge: '6 Comprehensive Courses',
  shortDescription: 'Explore the verified course structure for Python, Generative AI & LangChain, Data Science, Machine Learning, Deep Learning, and NLP.',
  overview: 'The DevTech IT Solution AI & ML Engineer internship curriculum provides industry-grade mastery across foundational Python programming, modern Generative AI & LangChain agentic systems, statistical Data Science, Supervised & Unsupervised Machine Learning, Deep Neural Networks, and Natural Language Processing.',
  isVerified: true,
  verificationNotice: 'Official DevTech IT Solution Internship Curriculum and Technical Roadmap.',
  keyTechnologies: [
    'Python (OOP, Scientific Stack)',
    'Generative AI & LLMs (ChatGPT, Llama3)',
    'LangChain, LCEL & RAG Architectures',
    'Vector DBs (ChromaDB, FAISS, AstraDB)',
    'Machine Learning (Scikit-Learn, XGBoost)',
    'Deep Learning (ANN, CNN, RNN, LSTM)',
    'Natural Language Processing (NLTK, SpaCy)',
    'Data Science & Statistics',
    'Time Series & Forecasting',
    'Streamlit & Cloud Model Deployment'
  ],
  icon: 'Brain',
  courses: [
    {
      courseId: 'ai-course-python',
      courseTitle: 'Course 1: Python Core & Advanced Programming',
      duration: 'Complete Python Development Track (27 Modules)',
      courseDescription: 'Foundational programming in Python, data structures, control statements, OOP, Tkinter, PostgreSQL, Django web development, OpenCV, Selenium, and network socket programming.',
      modules: [
        {
          moduleId: 'ai-py-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction',
          lessonTitles: [
            'Installing Python & Installing PyCharm',
            'Introduction to programming & Python'
          ],
          topics: ['Duration: 30m', 'Interpreter configuration, IDE setup and first programs']
        },
        {
          moduleId: 'ai-py-m2',
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
          topics: ['Duration: 2h 29m', 'Syntax rules, type inference, console I/O']
        },
        {
          moduleId: 'ai-py-m3',
          moduleNumber: 3,
          moduleTitle: 'Strings in Python',
          lessonTitles: [
            'Slicing in Strings & f-strings in Python',
            'Escape Sequences & String Methods (strip, replace, count, cases, start, end)'
          ],
          topics: ['Duration: 50m', 'String formatting and sequence indexing']
        },
        {
          moduleId: 'ai-py-m4',
          moduleNumber: 4,
          moduleTitle: 'Lists in Python',
          lessonTitles: [
            'Lists Introduction',
            'List Operations (slicing, concat, repeat, append, insert, extend, remove, pop)',
            'Sorting, Reversing, Count & Membership',
            'Numerical Operations on List Elements & Nested Lists'
          ],
          topics: ['Duration: 59m', 'Dynamic list manipulation and multi-dimensional matrices']
        },
        {
          moduleId: 'ai-py-m5',
          moduleNumber: 5,
          moduleTitle: 'Tuples, Sets & Dictionaries',
          lessonTitles: [
            'Introducing Tuples & Immutability Rules',
            'Sets & Set Operations (union, intersection, difference)',
            'Frozen Sets & Dictionaries',
            'Updating, Deleting, Keys & Values in Dictionaries',
            'Shallow vs Deep Copying'
          ],
          topics: ['Duration: 1h 59m', 'Hash-based structures, fast lookups, memory references']
        },
        {
          moduleId: 'ai-py-m6',
          moduleNumber: 6,
          moduleTitle: 'Control Statements',
          lessonTitles: [
            'The if, if-else, and if-elif-else Blocks',
            'Nested if Statements & The Ternary Operator'
          ],
          topics: ['Duration: 50m', 'Logical branching and conditional evaluations']
        },
        {
          moduleId: 'ai-py-m7',
          moduleNumber: 7,
          moduleTitle: 'Loops & Coding Exercises',
          lessonTitles: [
            'for Loops with Strings, Dictionaries & range()',
            'continue and break Statements',
            'The while Loop & Infinite Loops',
            'random Module & Nested Loops',
            'Star Patterns using for Loops',
            'Exercises: Roll a Dice, List & Loops, Number Guessing Game'
          ],
          topics: ['Duration: 2h 29m', 'Iterative execution patterns and algorithmic logic exercises'],
          practicalProjects: ['Number Guessing Game Project']
        },
        {
          moduleId: 'ai-py-m8',
          moduleNumber: 8,
          moduleTitle: 'Functions & Modules',
          lessonTitles: [
            'User Defined Functions & Returning Values',
            'Variable Length Arguments (*args, **kwargs)',
            'Docstrings & Recursive Functions',
            'Local and Global Scope & Functions as Arguments',
            'Lambda Functions, filter() & map()',
            'Modules in Python, __name__ Variable & Simple Banking App'
          ],
          topics: ['Duration: 2h 39m', 'Functional abstractions and reusable module architecture'],
          practicalProjects: ['Simple Banking Python Application']
        },
        {
          moduleId: 'ai-py-m9',
          moduleNumber: 9,
          moduleTitle: 'File Handling & Exception Handling',
          lessonTitles: [
            'File Handling Modes (w, r, a) & The with Statement',
            'Checking File Existence & Common I/O Issues',
            'Exception Handling with try-except-else-finally',
            'Raising Custom Exceptions',
            'The json and pickle Modules'
          ],
          topics: ['Duration: 2h 19m', 'Defensive programming and persistent file serialization']
        },
        {
          moduleId: 'ai-py-m10',
          moduleNumber: 10,
          moduleTitle: 'Regular Expression (RegEx)',
          lessonTitles: [
            'Introduction to RegEx & Character Classes',
            'Special Characters, Metacharacters & Quantifiers',
            'findall(), finditer(), sub() and compile()',
            'Exercise: Finding Valid Emails'
          ],
          topics: ['Pattern matching and text validation routines']
        },
        {
          moduleId: 'ai-py-m11',
          moduleNumber: 11,
          moduleTitle: 'Object Oriented Programming (OOP)',
          lessonTitles: [
            'Introduction to OOPs, Classes, Objects & Attributes',
            'Instance, Class & Static Methods',
            'Initializers (__init__) & Instance/Class Variables',
            'Mini Project: Phone Book (Part 1 & 2)',
            'Single, Multiple & Multilevel Inheritance',
            'Polymorphism (Operator & Method Overloading/Overriding)',
            'Encapsulation, Abstraction & Abstract Classes'
          ],
          topics: ['Duration: 3h 58m', 'Software design principles and object model design'],
          practicalProjects: ['Phone Book OOP Application']
        },
        {
          moduleId: 'ai-py-m12',
          moduleNumber: 12,
          moduleTitle: 'GUI with Tkinter',
          lessonTitles: [
            'Introduction to GUI and Tkinter',
            'Labels, Titles, Buttons & Entry Components',
            'ttk Styling, Frames & Padding',
            'Checkbuttons, Radiobuttons, Listbox & Spinbox Widgets'
          ],
          topics: ['Duration: 1h 59m', 'Desktop graphical application design']
        },
        {
          moduleId: 'ai-py-m13',
          moduleNumber: 13,
          moduleTitle: 'Calculator Using Tkinter',
          lessonTitles: [
            'Calculator UI (1)',
            'Calculator Logic (2)',
            'Calculator Complete (3)'
          ],
          topics: ['Duration: 30m', 'Building a functional GUI calculator'],
          practicalProjects: ['Desktop Calculator Application with Tkinter']
        },
        {
          moduleId: 'ai-py-m14',
          moduleNumber: 14,
          moduleTitle: 'Building Database Apps with PostgreSQL & Python',
          lessonTitles: [
            'PostgreSQL Installation & Database Creation',
            'Table Schemas & Inserting Data',
            'virtualenv & psycopg2 Library',
            'Extracting Data and User Inputs in Python'
          ],
          topics: ['Duration: 2h 29m', 'Database drivers and programmatic SQL manipulation'],
          practicalProjects: ['PostgreSQL & Python Persistent Database Application']
        },
        {
          moduleId: 'ai-py-m15',
          moduleNumber: 15,
          moduleTitle: 'Data Analysis with Python',
          lessonTitles: [
            'Anaconda Installation & Library Exploration',
            'Importing CSV & Data Cleaning / Formatting',
            'Data Normalization & Binning',
            'Value Counts, Boxplots, Scatterplots & Groupby',
            'Pivots, Heatmaps, ANOVA & Correlation',
            'Simple & Multiple Linear Regression in Python',
            'Regression Plots, Residual Plots & Polynomial Regression',
            'Model Evaluation: Mean Squared Error & R-Squared'
          ],
          topics: ['Duration: 5h 37m', 'Exploratory data analysis and linear predictive modeling']
        },
        {
          moduleId: 'ai-py-m16',
          moduleNumber: 16,
          moduleTitle: 'Django Web Framework',
          lessonTitles: [
            'Django Project Structure & Development Server',
            'Django Apps, URLs & Views',
            'Building a Blog Website: Dynamic Paths, Slugs & Converters',
            'Templates, DTL, Filters, Tags & Template Inheritance',
            'Static Files & Dynamic HTML Pages',
            'Data Models, Migrations & Database Relationships',
            'Admin Panel Customization & Model Registration',
            'Django Forms, CSRF Protection & Comment Handling'
          ],
          topics: ['Duration: 10h 34m', 'Enterprise MVC web architecture with Django'],
          practicalProjects: ['Full-Featured Multi-Page Blog Website in Django']
        },
        {
          moduleId: 'ai-py-m17',
          moduleNumber: 17,
          moduleTitle: 'Flask Framework',
          lessonTitles: [
            'Installation & Basic Webpages in Flask',
            'Importing HTML Files & Registration Forms',
            'Hyperlink Redirects, Images & Template Inheritance'
          ],
          topics: ['Duration: 2h 9m', 'Microframework architecture and endpoint routing']
        },
        {
          moduleId: 'ai-py-m18',
          moduleNumber: 18,
          moduleTitle: 'REST APIs using Django',
          lessonTitles: [
            'REST API Foundations & Model ViewSets',
            'Pagination, Token Authentication & Permissions',
            'User Filtering, Search Filters & Ordering Filters'
          ],
          topics: ['Duration: 1h 59m', 'RESTful API creation with Django REST Framework']
        },
        {
          moduleId: 'ai-py-m19',
          moduleNumber: 19,
          moduleTitle: 'Web Scraping',
          lessonTitles: [
            'Web Scraping Basics, Unicode & ASCII',
            'Fetching Web Content & Parsing HTML',
            'Filtering Data, Exporting to CSV & Downloading Images',
            'Building a Price Tracker (Part 1 & 2)'
          ],
          topics: ['Duration: 3h 18m', 'Automated data harvesting and price tracking'],
          practicalProjects: ['Automated E-Commerce Price Tracker Web Scraper']
        },
        {
          moduleId: 'ai-py-m20',
          moduleNumber: 20,
          moduleTitle: 'OpenCV Computer Vision',
          lessonTitles: [
            'Installing OpenCV & Image Fundamentals',
            'Reading, Writing, Resizing & Flipping Images',
            'Morphological Operations, Shapes & Text',
            'Image Rotation, Shifting & Thresholding',
            'Gaussian, Median & Bilateral Filtering',
            'Edge Detection (Canny) & Video Webcam Processing'
          ],
          topics: ['Duration: 3h 38m', 'Spatial filtering, matrix image transformations, and webcam processing']
        },
        {
          moduleId: 'ai-py-m21',
          moduleNumber: 21,
          moduleTitle: 'Automation with Selenium',
          lessonTitles: [
            'Selenium WebDriver Setup & URL Automation',
            'Automating Google Searches & Page Navigations',
            'Element Locators (XPath, CSS) & Data Extraction'
          ],
          topics: ['Duration: 1h 29m', 'Headless and browser test automation']
        },
        {
          moduleId: 'ai-py-m22',
          moduleNumber: 22,
          moduleTitle: 'Social Media Automation',
          lessonTitles: ['Building a Facebook Auto Poster'],
          topics: ['Duration: 10m', 'Automated interaction script']
        },
        {
          moduleId: 'ai-py-m23',
          moduleNumber: 23,
          moduleTitle: 'Tips and Tricks in Programming',
          lessonTitles: ['Tips to Become a Good Programmer & Logical Thinking'],
          topics: ['Duration: 40m', 'Algorithmic problem breakdown']
        },
        {
          moduleId: 'ai-py-m24',
          moduleNumber: 24,
          moduleTitle: 'Network Programming: Socket Chat Application',
          lessonTitles: [
            'IP Addresses, Ports & Socket Basics',
            'Creating Clients & Sending Messages with Buffers',
            'Completing Our Chat App'
          ],
          topics: ['Duration: 1h 29m', 'Low-level TCP network socket communication'],
          practicalProjects: ['Real-Time Socket-Based Chat Application']
        },
        {
          moduleId: 'ai-py-m25',
          moduleNumber: 25,
          moduleTitle: 'Miscellaneous Content: Bootstrap in Django',
          lessonTitles: [
            'UpdateView in Django',
            'Bootstrap Integration, Grids, Offsets & Responsive Images'
          ],
          topics: ['Duration: 1h 29m', 'Responsive UI styling in Django full stack apps']
        },
        {
          moduleId: 'ai-py-m26',
          moduleNumber: 26,
          moduleTitle: 'Regular Expressions Revisited',
          lessonTitles: [
            'Raw Strings, Search & Match Methods',
            'Meta Characters, Stars, Pluses, Braces & Wildcards',
            'Carets, Character Classes & Anchors'
          ],
          topics: ['Duration: 2h 19m', 'Advanced regex parsing and tokenization']
        },
        {
          moduleId: 'ai-py-m27',
          moduleNumber: 27,
          moduleTitle: 'Conclusion',
          lessonTitles: ['Python Programming Wrap-Up & Next Milestones'],
          topics: ['Duration: 10m', 'Path forward to data science and production engineering']
        }
      ]
    },
    {
      courseId: 'ai-course-genai',
      courseTitle: 'Course 2: Generative AI, LLMs & LangChain Agents',
      duration: 'Advanced Generative Intelligence (41 Modules)',
      courseDescription: 'Cutting-edge Generative AI engineering: Python deep dive, Streamlit, NumPy, Pandas, Matplotlib, Seaborn, ML lifecycle, NLP pipelines, deep neural architectures (ANN, RNN, LSTM, GRU), Transformer attention mechanisms, LangChain, LCEL, RAG pipelines, AI Agents with tools, SQL agents, and cloud deployments.',
      modules: [
        {
          moduleId: 'genai-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction to Generative AI',
          lessonTitles: [
            'Generative AI Introduction',
            'Generative AI End to End Flowchart Roadmap'
          ],
          topics: ['Duration: 1h 32m', 'Evolution from discriminative ML to modern generative models']
        },
        {
          moduleId: 'genai-m2',
          moduleNumber: 2,
          moduleTitle: 'Deep Dive In Python for AI',
          lessonTitles: [
            'Python Getting Started, Variables, Data Types & Operators',
            'Data Structures: List Mutability, Slicing, Methods & Comprehensions',
            'Tuples, Dictionaries, Sets & Loop Control Statements',
            'Functions: Recursive, Variable Arguments, Lambda, Map, Filter',
            'File Handling, OS Library, Modules, Packages & Exception Handling'
          ],
          topics: ['Duration: 21h 26m', 'High-performance Python fundamentals for AI engineers']
        },
        {
          moduleId: 'genai-m3',
          moduleNumber: 3,
          moduleTitle: 'Object Oriented Programming for AI',
          lessonTitles: [
            'OOP Introduction & Concepts',
            'Inheritance, Polymorphism, Encapsulation & Abstraction',
            'Magic Methods & Operator Overloading'
          ],
          topics: ['Duration: 6h 8m', 'Software modeling and clean code design for AI systems']
        },
        {
          moduleId: 'genai-m4',
          moduleNumber: 4,
          moduleTitle: 'Streamlit in Python',
          lessonTitles: ['Streamlit for Rapid AI Prototyping & Web UI'],
          topics: ['Duration: 46m', 'Building reactive web interfaces for AI models']
        },
        {
          moduleId: 'genai-m5',
          moduleNumber: 5,
          moduleTitle: 'NumPy for Numerical Computation',
          lessonTitles: [
            'NumPy Overview & Important Formulas',
            'Mathematical Operations in NumPy',
            'Statistical Functions & Array Manipulation'
          ],
          topics: ['Duration: 3h 4m', 'Vectorization, broadcasting, and matrix operations']
        },
        {
          moduleId: 'genai-m6',
          moduleNumber: 6,
          moduleTitle: 'Pandas Data Analysis',
          lessonTitles: [
            'Pandas Series & Indexing Functions',
            'Real World Datasets with Series',
            'DataFrame Creation, Attributes & Functions',
            'Fetching Specific Records, Filtering & Adding New Columns'
          ],
          topics: ['Duration: 6h 53m', 'High-speed dataset manipulation and cleaning']
        },
        {
          moduleId: 'genai-m7',
          moduleNumber: 7,
          moduleTitle: 'Matplotlib Visualizations',
          lessonTitles: [
            'Matplotlib Overview & Installation',
            'Line Plots, Scatter Plots & Bar Plots',
            'Horizontal, Multiple & Stacked Bars',
            'Histograms, Pie Charts & Styling'
          ],
          topics: ['Duration: 6h 8m', 'Statistical visualization and distribution plotting']
        },
        {
          moduleId: 'genai-m8',
          moduleNumber: 8,
          moduleTitle: 'Seaborn Advanced Analytics',
          lessonTitles: [
            'Seaborn Overview & Relational Plots',
            'Lineplot, Scatter & Facet Plots',
            'Distribution Plots (histplot, kdeplot, rugplot)',
            'Bivariate Histograms, KDE Plots, Matrix Plots & Categorical Plots',
            'Regression Plots & Multi-Plot Grids'
          ],
          topics: ['Duration: 5h 22m', 'Statistical relationship mapping and feature correlations']
        },
        {
          moduleId: 'genai-m9',
          moduleNumber: 9,
          moduleTitle: 'Data Science Knowledge for AI Engineers',
          lessonTitles: ['Why Data Science Knowledge is Crucial for AI Engineers'],
          topics: ['Duration: 46m', 'Bridging statistical distributions and neural network behavior']
        },
        {
          moduleId: 'genai-m10',
          moduleNumber: 10,
          moduleTitle: 'Machine Learning Core Foundations',
          lessonTitles: [
            'AI vs ML vs NLP vs DL vs GenAI',
            'Machine Learning Development Life Cycle (MLDLC)',
            'Building Demo ML Models (Part 1, 2, 3)',
            'Framing Business Problems into ML Problems',
            'Data Gathering (CSV, JSON, SQL, APIs for AI Apps & RAG)',
            'Data Cleaning, LangChain Preprocessing & Automated Cleaning',
            'EDA & Feature Engineering: One Hot Encoder, Column Transformer, Scaling',
            'ML Pipelines & Algorithms: Linear, Logistic, Naive Bayes, KNN, SVM, Decision Trees',
            'Metrics: RMSE, MAE, MSE, Accuracy, Precision, Recall, Cross Validation',
            'Ensemble Learning: Bagging vs Boosting, Random Forest',
            'Unsupervised ML: K-Means, Hierarchical, DBSCAN, Anomaly Detection'
          ],
          topics: ['Duration: 30h 38m', 'Complete machine learning lifecycle from business framing to unsupervised clustering'],
          practicalProjects: ['Automated Data Gathering & Publishing Pipeline', 'Supervised & Unsupervised ML Predictive Suite']
        },
        {
          moduleId: 'genai-m11',
          moduleNumber: 11,
          moduleTitle: 'Natural Language Processing (NLP)',
          lessonTitles: [
            'NLP Pipeline Overview & Challenges',
            'Feature Engineering for Rule-Based vs GenAI Chatbots',
            'Recommendation System Project Overview & Preprocessing',
            'NLP Vectorization, Building & Launching Recommendation System',
            'Connecting to GitHub and Deployment on Render',
            'Text Cleaning, One Hot Encoding, Bag of Words, N-Grams & TF-IDF',
            'Word2Vec Vector Embeddings & Training Personal Word2Vec Models'
          ],
          topics: ['Duration: 15h 19m', 'Text tokenization, embeddings, and content recommendation'],
          practicalProjects: ['NLP Content Recommendation System Deployed to Render']
        },
        {
          moduleId: 'genai-m12',
          moduleNumber: 12,
          moduleTitle: 'Deep Learning & Perceptrons',
          lessonTitles: [
            'Introduction to Deep Learning & ML vs DL',
            'Perceptron & Multi-Layered Perceptrons (MLP)'
          ],
          topics: ['Duration: 3h 4m', 'Biological vs artificial neurons, feedforward passes']
        },
        {
          moduleId: 'genai-m13',
          moduleNumber: 13,
          moduleTitle: 'Fundamentals for Training Deep Learning Models',
          lessonTitles: [
            'Requirements for Building DL Models',
            'Loss Functions & Training of GPT-Like Networks (Cross Entropy)',
            'Backpropagation Step-by-Step & Use in Training ChatGPT',
            'Gradient Descent Variations & Batch Sizes',
            'Vanishing Gradient Problem: Causes, Detection & Solutions'
          ],
          topics: ['Duration: 7h 39m', 'Mathematical optimization, gradient flows, and loss minimization']
        },
        {
          moduleId: 'genai-m14',
          moduleNumber: 14,
          moduleTitle: 'Improving Model Performance & Optimization',
          lessonTitles: [
            'Early Stopping & Data Scaling',
            'Dropout Layers & Regularization in Neural Networks',
            'Batch Normalization in Depth & Use in GenAI Models',
            'Activation Functions in DL & GenAI Models',
            'Optimizers: Adagrad, RMSProp, Adam & GenAI Optimizers'
          ],
          topics: ['Duration: 8h 25m', 'Preventing overfitting and accelerating convergence']
        },
        {
          moduleId: 'genai-m15',
          moduleNumber: 15,
          moduleTitle: 'ANN Project Implementation & Hyperparameter Tuning',
          lessonTitles: [
            'Building ANN Classification Model: Data Cleaning & Scaling',
            'Model Training, Predictions & Streamlit UI Creation',
            'Deployment of ANN Application to Cloud',
            'Regression Problems with ANN',
            'Hyperparameter Tuning with KerasTuner (Layers, Nodes, Optimizers)'
          ],
          topics: ['Duration: 9h 57m', 'End-to-end neural network deployment and tuning'],
          practicalProjects: ['Cloud-Deployed ANN Application with Streamlit & KerasTuner']
        },
        {
          moduleId: 'genai-m16',
          moduleNumber: 16,
          moduleTitle: 'Pretraining & Transfer Learning',
          lessonTitles: [
            'Pretrained Models in Industry',
            'Pretraining for GenAI Applications',
            'Transfer Learning in Neural Networks'
          ],
          topics: ['Duration: 3h 4m', 'Leveraging pretrained weights for downstream tasks']
        },
        {
          moduleId: 'genai-m17',
          moduleNumber: 17,
          moduleTitle: 'Simple Recurrent Neural Networks (RNN)',
          lessonTitles: [
            'Why RNNs are Needed for Sequential Data',
            'Forward Propagation & Architectures (Many to One, Many to Many)',
            'Backpropagation Through Time (BPTT)',
            'Long-Term Vanishing Gradient Challenges'
          ],
          topics: ['Duration: 7h 39m', 'Sequential modeling and hidden recurrent states']
        },
        {
          moduleId: 'genai-m18',
          moduleNumber: 18,
          moduleTitle: 'Deep Learning Project with Simple RNN',
          lessonTitles: [
            'Traditional Embedding vs Embedding Layers',
            'Training Simple RNN with and without Embedding Layers',
            'Creating Streamlit UI for App & GitHub Cloud Deployment'
          ],
          topics: ['Duration: 6h 8m', 'Sequence processing and text generation interface'],
          practicalProjects: ['Streamlit Sequence Classifier with RNN']
        },
        {
          moduleId: 'genai-m19',
          moduleNumber: 19,
          moduleTitle: 'LSTM and GRU Architectures',
          lessonTitles: [
            'From RNN to LSTM & Memory Cell Types',
            'Forget, Input & Output Gates in LSTM',
            'Gated Recurrent Units (GRU) Introduction & Working'
          ],
          topics: ['Duration: 3h 50m', 'Long-term dependency preservation and gated mechanisms']
        },
        {
          moduleId: 'genai-m20',
          moduleNumber: 20,
          moduleTitle: 'LSTM Next Word Prediction Project (Mini LLM)',
          lessonTitles: [
            'Project Task Overview & Tokenization',
            'Creating Next Word Prediction Model',
            'Streamlit UI for Real-Time Prediction & Cloud Deployment'
          ],
          topics: ['Duration: 4h 36m', 'Autoregressive language modeling with LSTM networks'],
          practicalProjects: ['LSTM Next Word Prediction Autoregressive App']
        },
        {
          moduleId: 'genai-m21',
          moduleNumber: 21,
          moduleTitle: 'BiDirectional RNN',
          lessonTitles: [
            'Introduction to BiDirectional RNN',
            'Working of Forward and Backward Passes'
          ],
          topics: ['Duration: 1h 32m', 'Capturing future and past context in language']
        },
        {
          moduleId: 'genai-m22',
          moduleNumber: 22,
          moduleTitle: 'Transformers and ChatGPT Evolution',
          lessonTitles: [
            'How LLMs Work & TikTokenizer Tokenization',
            'OpenAI & HuggingFace Embeddings',
            'Positional Encoding, Self-Attention & Multi-Head Attention',
            'Encoder-Decoder Layers & HuggingFace Models for Predictions',
            'History of LLMs & Attention Mechanism Evolution',
            'Transfer Learning with Language Modeling Tasks',
            'LLMs from OpenAI and Google & The ChatGPT Revolution'
          ],
          topics: ['Duration: 10h 43m', 'Self-attention mechanisms, multi-head projections, and modern transformer scaling']
        },
        {
          moduleId: 'genai-m23',
          moduleNumber: 23,
          moduleTitle: 'Introduction To Gen AI and LLM Models',
          lessonTitles: [
            'AI vs ML vs DL vs GenAI',
            'How Transformers Were Introduced for ChatGPT',
            'ChatGPT Training Initial Steps & RLHF (Reinforcement Learning from Human Feedback)',
            'Evolution and Comparative Analysis of ALL Modern LLMs'
          ],
          topics: ['Duration: 4h 36m', 'Foundation models, instruction fine-tuning, and alignment']
        },
        {
          moduleId: 'genai-m24',
          moduleNumber: 24,
          moduleTitle: 'Introduction To LangChain for Generative AI',
          lessonTitles: [
            'Getting Started with LangChain Framework',
            'Why LangChain and Core Ecosystem Benefits'
          ],
          topics: ['Duration: 1h 32m', 'Composability, model abstraction, and orchestration']
        },
        {
          moduleId: 'genai-m25',
          moduleNumber: 25,
          moduleTitle: 'Getting Started with LangChain and OpenAI',
          lessonTitles: [
            'LangChain Ecosystem: LangSmith, LangGraph & LangServe',
            'Connecting and Invoking OpenAI LLMs'
          ],
          topics: ['Duration: 1h 32m', 'LLM integrations, prompt formatting, tracing with LangSmith']
        },
        {
          moduleId: 'genai-m26',
          moduleNumber: 26,
          moduleTitle: 'Important Components and Modules in LangChain',
          lessonTitles: [
            'LangChain Components: Models, Prompts, Chains & Memory',
            'Document Loaders: Text, PDF, Directory, WebBase & CSV Loaders',
            'Text Splitters: Character, Recursive, Structure & Semantic Chunking',
            'Embedding Models: OpenAI, HuggingFace & Ollama Embeddings',
            'Vector Stores: ChromaDB, FAISS Vector Store Integration',
            'Document Similarity Search Application'
          ],
          topics: ['Duration: 16h 5m', 'Comprehensive document chunking, embeddings, and vector indexing'],
          practicalProjects: ['Document Similarity Search Engine with Vector Embeddings']
        },
        {
          moduleId: 'genai-m27',
          moduleNumber: 27,
          moduleTitle: 'Retrievers, Ollama & Building RAG',
          lessonTitles: [
            'Retrievers: Vector Store, Wikipedia & Maximal Marginal Relevance (MMR)',
            'Multi-Query & Contextual Compression Retrievers',
            'What is RAG: Transitioning from Fine-Tuning to Retrieval-Augmented Generation',
            'YouTube Content Chatbot (RAG Application)',
            'Local Ollama Models with LangSmith Tracing'
          ],
          topics: ['Duration: 5h 22m', 'Grounded generation, semantic search, and hallucination reduction'],
          practicalProjects: ['YouTube Video Content RAG Chatbot Application']
        },
        {
          moduleId: 'genai-m28',
          moduleNumber: 28,
          moduleTitle: 'Building LLM Applications using LCEL & FastAPI',
          lessonTitles: [
            'Prompt Templates & ChatPromptTemplate',
            'Structured Output using Pydantic Schemas',
            'Output Parsers: StrOutputParser, JsonOutputParser, PydanticOutputParser',
            'LangChain Expression Language (LCEL) & Parallel / Conditional Chains',
            'Working with Groq API for High-Speed Inference',
            'Creating RESTful APIs with FastAPI & Serving Groq Apps'
          ],
          topics: ['Duration: 9h 11m', 'Declarative LCEL chaining, ultra-fast Groq inference, and FastAPI serving'],
          practicalProjects: ['High-Speed Groq LLM API Service Built with FastAPI & LCEL']
        },
        {
          moduleId: 'genai-m29',
          moduleNumber: 29,
          moduleTitle: 'Building Chatbots with Conversation History',
          lessonTitles: [
            'Chatbots with Message History & MessagesPlaceholder',
            'Trimming Chat History Buffers',
            'Q&A RAG Chatbot with Persistent Conversation Memory'
          ],
          topics: ['Duration: 3h 4m', 'Contextual dialogue persistence and token window management']
        },
        {
          moduleId: 'genai-m30',
          moduleNumber: 30,
          moduleTitle: 'Conversational Q&A RAG Chatbot',
          lessonTitles: ['Q&A RAG Chatbot with Conversational Memory Optimization'],
          topics: ['Duration: 46m', 'Interactive contextual query generation']
        },
        {
          moduleId: 'genai-m31',
          moduleNumber: 31,
          moduleTitle: 'End-to-End Q&A ChatBot Gen AI App',
          lessonTitles: [
            'Environment Setup, Secrets & API Keys',
            'Building the OpenAI Cloud Application',
            'Integrating Ollama Open-Source Local Models'
          ],
          topics: ['Duration: 2h 18m', 'Hybrid cloud and on-premise local model architecture'],
          practicalProjects: ['End-to-End Hybrid Q&A Chatbot Application']
        },
        {
          moduleId: 'genai-m32',
          moduleNumber: 32,
          moduleTitle: 'RAG Document Q&A with Groq API & LLaMA 3',
          lessonTitles: [
            'ChatGroq Integration with LLaMA 3 70B',
            'Building End-to-End Ultra-Fast Document Q&A App'
          ],
          topics: ['Duration: 1h 32m', 'Production inference with open-weights LLaMA 3 on Groq LPUs'],
          practicalProjects: ['Groq & LLaMA 3 Document Intelligence System']
        },
        {
          moduleId: 'genai-m33',
          moduleNumber: 33,
          moduleTitle: 'Conversational PDF ChatBot with History',
          lessonTitles: [
            'PDF Document Ingestion & Chunking',
            'Interactive Chat with Uploaded PDF Files'
          ],
          topics: ['Duration: 1h 32m', 'Multi-document QA with conversation tracking'],
          practicalProjects: ['Chat With PDF Knowledgebase Application']
        },
        {
          moduleId: 'genai-m34',
          moduleNumber: 34,
          moduleTitle: 'AI Agents & Search Engines with LangChain Tools',
          lessonTitles: [
            'Built-in Tools vs Custom Tools and Toolkits',
            'Tool Binding for Function Calling',
            'Tool Calling & Execution Flow',
            'What is an AI Agent & Creating ReAct (Reason + Act) Agents'
          ],
          topics: ['Duration: 5h 22m', 'Autonomous tool calling, dynamic decision loops, and ReAct agent architecture'],
          practicalProjects: ['Autonomous Search Engine & Research AI Agent']
        },
        {
          moduleId: 'genai-m35',
          moduleNumber: 35,
          moduleTitle: 'Chat with SQL Database using LangChain SQL Toolkit',
          lessonTitles: [
            'Storing Data in SQLite Database',
            'Connecting to SQL DB & LangChain Database Engine',
            'Building Autonomous SQL Agent with Schema Introspection'
          ],
          topics: ['Duration: 3h 4m', 'Natural language to SQL query execution with guardrails'],
          practicalProjects: ['Enterprise Text-to-SQL Agentic Database Assistant']
        },
        {
          moduleId: 'genai-m36',
          moduleNumber: 36,
          moduleTitle: 'Text Summarization with LangChain',
          lessonTitles: [
            'Stuff Summarization Chain',
            'Map-Reduce Summarization for Large Documents',
            'Refine Summarization Strategy'
          ],
          topics: ['Duration: 2h 18m', 'Processing 100+ page documents with hierarchical map-reduce chains']
        },
        {
          moduleId: 'genai-m37',
          moduleNumber: 37,
          moduleTitle: 'Text to Math Problem Solver Agent',
          lessonTitles: [
            'Agent Setup with Math Tools & Calculator',
            'Session State Management for Math Problem Solving'
          ],
          topics: ['Duration: 1h 32m', 'Mathematical symbolic reasoning agents']
        },
        {
          moduleId: 'genai-m38',
          moduleNumber: 38,
          moduleTitle: 'HuggingFace and LangChain Integration',
          lessonTitles: [
            'HuggingFace Inference Models & Hub Pipelines',
            'ChatPromptTemplates with Open-Source HuggingFace Models'
          ],
          topics: ['Duration: 1h 32m', 'Open-source community models integration']
        },
        {
          moduleId: 'genai-m39',
          moduleNumber: 39,
          moduleTitle: 'PDF Query RAG with AstraDB Vector Database',
          lessonTitles: [
            'AstraDB Setup using DataStax Serverless Vector Store',
            'Building Cloud Native RAG Application with AstraDB'
          ],
          topics: ['Duration: 1h 32m', 'Cassandra-powered enterprise vector database scaling']
        },
        {
          moduleId: 'ai-genai-m40',
          moduleNumber: 40,
          moduleTitle: 'Working with CodeLlama & Local Ollama',
          lessonTitles: [
            'Getting Started with CodeLlama Models',
            'Building Local Code Generation & Explaining Assistant'
          ],
          topics: ['Duration: 1h 32m', 'Local code intelligence without third-party API exposure'],
          practicalProjects: ['Local CodeLlama Programming Assistant']
        },
        {
          moduleId: 'ai-genai-m41',
          moduleNumber: 41,
          moduleTitle: 'Production Deployment of Gen AI Applications',
          lessonTitles: [
            'Deployment on Streamlit Community Cloud',
            'Deployment to Hugging Face Spaces & Production Monitoring'
          ],
          topics: ['Duration: 1h 32m', 'Public cloud sharing, Dockerized spaces, and API token protection']
        }
      ]
    },
    {
      courseId: 'ai-course-datascience',
      courseTitle: 'Course 3: Data Science & Statistical Inference',
      duration: 'Statistical Foundations Track (26 Modules)',
      courseDescription: 'Mathematical data science covering Python operators, data structures, statistics, hypothesis testing, EDA, regression models, classification, clustering, time series forecasting, and capstone deployment.',
      modules: [
        {
          moduleId: 'ds-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction to Data Science',
          lessonTitles: [
            'What is Data Science',
            'Data Science Case Studies across Industries'
          ],
          topics: ['Duration: 1h 38m', 'Data lifecycle and industrial analytics applications']
        },
        {
          moduleId: 'ds-m2',
          moduleNumber: 2,
          moduleTitle: 'Python Identifiers & Operators for Data Science',
          lessonTitles: [
            'Getting Started with Python Identifiers & Datatypes',
            'Python Operators in Scientific Computing'
          ],
          topics: ['Duration: 1h 38m', 'Variable definitions, assignment and logical evaluation']
        },
        {
          moduleId: 'ds-m3',
          moduleNumber: 3,
          moduleTitle: 'Python Conditional Statements & Loops',
          lessonTitles: [
            'Conditional if and elif Logic',
            'while and for Loops',
            'Nested Loops, continue and break'
          ],
          topics: ['Duration: 1h 38m', 'Control structures for iterative calculations']
        },
        {
          moduleId: 'ds-m4',
          moduleNumber: 4,
          moduleTitle: 'Python Data Structures for Data Science',
          lessonTitles: [
            'String Manipulation (Part 1 & 2)',
            'List Comprehension in Analytics',
            'Tuples and Sets'
          ],
          topics: ['Duration: 2h 11m', 'Efficient memory manipulation of structured data']
        },
        {
          moduleId: 'ds-m5',
          moduleNumber: 5,
          moduleTitle: 'Functions & Lambdas with Case Studies',
          lessonTitles: [
            'Functions, map() and lambda Expressions',
            'Banking Case Study with Functional Programming'
          ],
          topics: ['Duration: 1h 6m', 'Applied lambda mapping to tabular records'],
          practicalProjects: ['Banking Transaction Analytical Case Study']
        },
        {
          moduleId: 'ds-m6',
          moduleNumber: 6,
          moduleTitle: 'NumPy with Insurance Case Study',
          lessonTitles: [
            'NumPy Operations in Analytics',
            'Insurance Risk Case Study with NumPy Arrays'
          ],
          topics: ['Duration: 1h 6m', 'Matrix calculations and statistical actuarial arrays']
        },
        {
          moduleId: 'ds-m7',
          moduleNumber: 7,
          moduleTitle: 'Pandas with Healthcare Case Study',
          lessonTitles: [
            'Pandas DataFrames & Operations',
            'Missing Values (NA), Sorting & Grouping',
            'Healthcare Analytics Case Study'
          ],
          topics: ['Duration: 1h 38m', 'Data wrangling, hospital patient records analytics'],
          practicalProjects: ['Healthcare Patient Analytics Case Study']
        },
        {
          moduleId: 'ds-m8',
          moduleNumber: 8,
          moduleTitle: 'Visualisation: Matplotlib, Seaborn & Plotly',
          lessonTitles: [
            'Matplotlib Visualisation Techniques',
            'Seaborn Statistical Plots',
            'Comparative Case Study: Matplotlib vs Seaborn',
            'Interactive Dashboards with Plotly'
          ],
          topics: ['Duration: 2h 11m', 'Static and interactive visual dashboards']
        },
        {
          moduleId: 'ds-m9',
          moduleNumber: 9,
          moduleTitle: 'Exploratory Data Analysis (EDA)',
          lessonTitles: [
            'EDA Principles & Summary Statistics',
            'Transformations & Feature Engineering'
          ],
          topics: ['Duration: 1h 6m', 'Uncovering patterns, skewness correction, and log transforms']
        },
        {
          moduleId: 'ds-m10',
          moduleNumber: 10,
          moduleTitle: 'Data Preprocessing & Wrangling',
          lessonTitles: [
            'Data Wrangling & File Handling',
            'Imputation & Outlier Preprocessing'
          ],
          topics: ['Duration: 1h 6m', 'Cleaning inconsistent real-world datasets']
        },
        {
          moduleId: 'ds-m11',
          moduleNumber: 11,
          moduleTitle: 'Statistics & Hypothesis Testing',
          lessonTitles: [
            'Descriptive Statistics (Mean, Median, Mode, Variance, SD)',
            'Inferential Statistics & Probability Distributions',
            'Hypothesis Testing & P-Values',
            'Hypothesis Test Python Case Study',
            'Type 1 and Type 2 Errors in Decision Making'
          ],
          topics: ['Duration: 3h 17m', 'Statistical significance, Z-tests, t-tests, ANOVA']
        },
        {
          moduleId: 'ds-m12',
          moduleNumber: 12,
          moduleTitle: 'Machine Learning Concepts & Typologies',
          lessonTitles: ['ML Concepts, Supervised vs Unsupervised'],
          topics: ['Duration: 33m', 'Problem framing and model categories']
        },
        {
          moduleId: 'ds-m13',
          moduleNumber: 13,
          moduleTitle: 'Simple Linear Regression',
          lessonTitles: [
            'Linear Regression Concepts & Ordinary Least Squares (OLS)',
            'Simple Linear Regression Code in Python'
          ],
          topics: ['Duration: 1h 6m', 'Slope, intercept, and line-fitting optimization']
        },
        {
          moduleId: 'ds-m14',
          moduleNumber: 14,
          moduleTitle: 'Multiple Linear Regression & Polynomials',
          lessonTitles: [
            'Multiple Linear Regression Evaluation Techniques',
            'Multi Linear Regression in Python',
            'Non-Linear Polynomial Regression'
          ],
          topics: ['Duration: 1h 38m', 'Multivariate relationships, multicollinearity, VIF']
        },
        {
          moduleId: 'ds-m15',
          moduleNumber: 15,
          moduleTitle: 'Logistic Regression with Churn Case Study',
          lessonTitles: [
            'Logistic Regression Mathematical Concepts',
            'Customer Churn Prediction in Python',
            'Claimant Prediction Case Study'
          ],
          topics: ['Duration: 1h 38m', 'Sigmoid activation, odds ratios, and binary churn classification'],
          practicalProjects: ['Telecom Customer Churn Prediction Model']
        },
        {
          moduleId: 'ds-m16',
          moduleNumber: 16,
          moduleTitle: 'Decision Trees with Mushroom Case Study',
          lessonTitles: [
            'Decision Tree Concepts & Gini Impurity',
            'Decision Tree Python Implementation',
            'Mushroom Classification Case Study'
          ],
          topics: ['Duration: 1h 38m', 'Information gain, recursive splitting, and tree pruning']
        },
        {
          moduleId: 'ds-m17',
          moduleNumber: 17,
          moduleTitle: 'Random Forest with Wine Quality Case Study',
          lessonTitles: [
            'Random Forest Ensemble Concepts & Mathematics',
            'Red Wine Quality Prediction in Python'
          ],
          topics: ['Duration: 1h 38m', 'Bootstrap aggregation and feature importance ranking']
        },
        {
          moduleId: 'ds-m18',
          moduleNumber: 18,
          moduleTitle: 'Boosting & Stacking Ensembles',
          lessonTitles: [
            'AdaBoost Algorithm',
            'Gradient Boosting Machines',
            'Stacking Ensemble Models'
          ],
          topics: ['Duration: 1h 38m', 'Sequential residual reduction and meta-learners']
        },
        {
          moduleId: 'ds-m19',
          moduleNumber: 19,
          moduleTitle: 'K-Nearest Neighbors with Diabetes Case Study',
          lessonTitles: [
            'KNN Concepts in Python',
            'Diabetes Prediction Case Study'
          ],
          topics: ['Duration: 1h 6m', 'Distance metrics and non-parametric classification']
        },
        {
          moduleId: 'ds-m20',
          moduleNumber: 20,
          moduleTitle: 'Naive Bayes with Titanic Case Study',
          lessonTitles: [
            'Naive Bayes Probabilistic Concepts',
            'Titanic Survival Prediction Case Study'
          ],
          topics: ['Duration: 1h 6m', 'Bayes theorem, prior/posterior probabilities']
        },
        {
          moduleId: 'ds-m21',
          moduleNumber: 21,
          moduleTitle: 'Unsupervised Learning: K-Means & PCA',
          lessonTitles: [
            'Unsupervised ML Clustering Concepts',
            'K-Means Algorithm in Python',
            'Hierarchical Clustering & Customer Segmentation',
            'Principal Component Analysis (PCA) Case Study'
          ],
          topics: ['Duration: 3h 17m', 'Centroid clustering, dendrograms, and dimensionality reduction'],
          practicalProjects: ['Retail Customer Segmentation Model']
        },
        {
          moduleId: 'ds-m22',
          moduleNumber: 22,
          moduleTitle: 'Model Evaluation & Cross-Validation',
          lessonTitles: ['Cross Validation Techniques & Hyperparameter Tuning'],
          topics: ['Duration: 33m', 'K-fold validation, bias-variance tradeoff']
        },
        {
          moduleId: 'ds-m23',
          moduleNumber: 23,
          moduleTitle: 'NLP & Email Spam Case Study',
          lessonTitles: [
            'NLP Concepts, Tokenization, Stemming & Lemmatization',
            'TF-IDF Case Study',
            'Email Spam Classifier using Naive Bayes'
          ],
          topics: ['Duration: 2h 44m', 'Text categorization and spam detection'],
          practicalProjects: ['Email Spam Detection System']
        },
        {
          moduleId: 'ds-m24',
          moduleNumber: 24,
          moduleTitle: 'Time Series Forecasting (ARIMA & SARIMA)',
          lessonTitles: [
            'Time Series Concepts & Data Preparation',
            'Stationarity & Differencing (ADF Test)',
            'Autocorrelation (ACF) & Partial Autocorrelation (PACF)',
            'ARIMA & SARIMA Seasonal Model Forecasting'
          ],
          topics: ['Duration: 3h 17m', 'Trend decomposition, seasonality, and autoregressive forecasting']
        },
        {
          moduleId: 'ds-m25',
          moduleNumber: 25,
          moduleTitle: 'Capstone Project — Cardiac Diagnosis',
          lessonTitles: [
            'Capstone Project: Cardiac Diagnosis (Part 1)',
            'Capstone Project: Cardiac Diagnosis (Part 2)'
          ],
          topics: ['Duration: 1h 6m', 'End-to-end medical diagnosis machine learning solution'],
          practicalProjects: ['Cardiac Diagnosis Healthcare Capstone Machine Learning Project']
        },
        {
          moduleId: 'ds-m26',
          moduleNumber: 26,
          moduleTitle: 'Model Deployment',
          lessonTitles: ['Deploying Data Science Models to Web Services'],
          topics: ['Duration: 33m', 'REST API packaging and web application integration']
        }
      ]
    },
    {
      courseId: 'ai-course-machinelearning',
      courseTitle: 'Course 4: Machine Learning (Python & R)',
      duration: 'Algorithmic Engineering Track (32 Modules)',
      courseDescription: 'Comprehensive machine learning from data preprocessing in Python and R, regression models, classification models, clustering, association rules (Apriori/ECLAT), reinforcement learning, and deployment.',
      modules: [
        {
          moduleId: 'ml-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction',
          lessonTitles: [
            'Intro to ML and its Types',
            'Applications, Challenges & Python Module Overview'
          ],
          topics: ['Duration: 42m', 'Machine learning workflow and algorithmic categories']
        },
        {
          moduleId: 'ml-m2',
          moduleNumber: 2,
          moduleTitle: 'Python Programming for ML',
          lessonTitles: [
            'Python Data Types Practical',
            'Lists, Tuples, Dictionaries & Sets',
            'Loops, Comprehensions, Functions, Lambdas & Exceptions'
          ],
          topics: ['Duration: 2h 46m', 'Core data structures and mathematical routines']
        },
        {
          moduleId: 'ml-m3',
          moduleNumber: 3,
          moduleTitle: 'Data Preprocessing in Python',
          lessonTitles: [
            'Dataset Preparation & Train-Test Splits',
            'NumPy Operations & Bonus Manipulations',
            'Pandas Data Operations & Matplotlib Plotting'
          ],
          topics: ['Duration: 2h 32m', 'Feature matrices and target vector construction']
        },
        {
          moduleId: 'ml-m4',
          moduleNumber: 4,
          moduleTitle: 'Handling Missing Data & Feature Scaling',
          lessonTitles: [
            'Handling Missing Data Imputations',
            'Feature Scaling in Machine Learning (Standard vs MinMax)'
          ],
          topics: ['Duration: 28m', 'Mean/median imputation, standardization']
        },
        {
          moduleId: 'ml-m5',
          moduleNumber: 5,
          moduleTitle: 'Data Preprocessing in R',
          lessonTitles: [
            'Introduction to R & R Installation',
            'Preprocessing Codes in R Language'
          ],
          topics: ['Duration: 42m', 'R dataframes, data manipulation, and splits']
        },
        {
          moduleId: 'ml-m6',
          moduleNumber: 6,
          moduleTitle: 'Linear Regression in Python & R',
          lessonTitles: [
            'Linear Regression Concepts & Python Code',
            'Plotting Predicted vs Test Data',
            'Linear Regression using R'
          ],
          topics: ['Duration: 55m', 'Ordinary least squares across Python and R']
        },
        {
          moduleId: 'ml-m7',
          moduleNumber: 7,
          moduleTitle: 'Multiple Linear Regression',
          lessonTitles: [
            'Multiple Linear Regression Concepts & Python Code',
            'Multiple Linear Regression using R'
          ],
          topics: ['Duration: 42m', 'Multivariate regression equations and significance']
        },
        {
          moduleId: 'ml-m8',
          moduleNumber: 8,
          moduleTitle: 'Polynomial Regression',
          lessonTitles: [
            'Polynomial Regression Concepts & Python Code',
            'Polynomial Regression using R'
          ],
          topics: ['Duration: 42m', 'Non-linear feature expansion']
        },
        {
          moduleId: 'ml-m9',
          moduleNumber: 9,
          moduleTitle: 'Support Vector Regression (SVR)',
          lessonTitles: [
            'Support Vector Regression Concepts & Python Code',
            'SVR using R'
          ],
          topics: ['Duration: 42m', 'Epsilon-insensitive loss and kernel tricks']
        },
        {
          moduleId: 'ml-m10',
          moduleNumber: 10,
          moduleTitle: 'Decision Tree Regression',
          lessonTitles: [
            'Decision Tree Regression & Code',
            'Decision Tree Regression using R'
          ],
          topics: ['Duration: 42m', 'Non-continuous segmented predictions']
        },
        {
          moduleId: 'ml-m11',
          moduleNumber: 11,
          moduleTitle: 'Random Forest Regression',
          lessonTitles: [
            'Random Forest Regression & Python Code',
            'Random Forest Regression in R'
          ],
          topics: ['Duration: 42m', 'Bagged ensemble tree regressions']
        },
        {
          moduleId: 'ml-m12',
          moduleNumber: 12,
          moduleTitle: 'Evaluation of Regression Models',
          lessonTitles: [
            'Evaluation of Regression Models & Selection in Python',
            'Evaluation Metrics: R-Squared, Adjusted R-Squared, RMSE'
          ],
          topics: ['Duration: 42m', 'Statistical error benchmarking']
        },
        {
          moduleId: 'ml-m13',
          moduleNumber: 13,
          moduleTitle: 'Logistic Regression in Python & R',
          lessonTitles: [
            'Logistic Regression Theory & Python Code',
            'Logistic Regression using R'
          ],
          topics: ['Duration: 28m', 'Classification probability curves']
        },
        {
          moduleId: 'ml-m14',
          moduleNumber: 14,
          moduleTitle: 'Support Vector Machine (SVM)',
          lessonTitles: [
            'Support Vector Machine Theory & Code',
            'SVM using R'
          ],
          topics: ['Duration: 28m', 'Maximum margin hyperplanes and RBF kernels']
        },
        {
          moduleId: 'ml-m15',
          moduleNumber: 15,
          moduleTitle: 'K Nearest Neighbors (KNN)',
          lessonTitles: [
            'K Nearest Neighbors Theory & Python Code',
            'KNN using R'
          ],
          topics: ['Duration: 42m', 'Instance-based classification and distance functions']
        },
        {
          moduleId: 'ml-m16',
          moduleNumber: 16,
          moduleTitle: 'Decision Tree Classification',
          lessonTitles: [
            'Decision Tree Classification & Code',
            'Decision Tree Classification using R'
          ],
          topics: ['Duration: 28m', 'Entropy and Gini splits']
        },
        {
          moduleId: 'ml-m17',
          moduleNumber: 17,
          moduleTitle: 'Random Forest Classification',
          lessonTitles: [
            'Random Forest Classification & Code',
            'Random Forest Classification using R'
          ],
          topics: ['Duration: 28m', 'Ensemble majority voting']
        },
        {
          moduleId: 'ml-m18',
          moduleNumber: 18,
          moduleTitle: 'Naive Bayes Classification',
          lessonTitles: [
            'Naive Bayes Classification & Code',
            'Naive Bayes using R'
          ],
          topics: ['Duration: 28m', 'Probabilistic class conditionally independent prediction']
        },
        {
          moduleId: 'ml-m19',
          moduleNumber: 19,
          moduleTitle: 'Evaluation of Classification Models',
          lessonTitles: ['Evaluation Metrics: Accuracy, Precision, Recall, F1, ROC-AUC'],
          topics: ['Duration: 14m', 'Confusion matrix analysis']
        },
        {
          moduleId: 'ml-m20',
          moduleNumber: 20,
          moduleTitle: 'K Means Clustering',
          lessonTitles: [
            'K Means Clustering Theory & Python Code',
            'Optimising K Means with the Elbow Method',
            'K Means Clustering using R'
          ],
          topics: ['Duration: 55m', 'Centroid convergence and WCSS analysis']
        },
        {
          moduleId: 'ml-m21',
          moduleNumber: 21,
          moduleTitle: 'Hierarchical Clustering',
          lessonTitles: [
            'Hierarchical Clustering Theory & Python Code',
            'Hierarchical Clustering using R'
          ],
          topics: ['Duration: 42m', 'Agglomerative dendrogram tree construction']
        },
        {
          moduleId: 'ml-m22',
          moduleNumber: 22,
          moduleTitle: 'Apriori Association Rule Algorithm',
          lessonTitles: [
            'Apriori Algorithm & Market Basket Analysis',
            'Apriori Implementation in Python and R'
          ],
          topics: ['Duration: 55m', 'Support, confidence, and lift calculation']
        },
        {
          moduleId: 'ml-m23',
          moduleNumber: 23,
          moduleTitle: 'ECLAT Association Algorithm',
          lessonTitles: [
            'ECLAT Algorithm Theory & Code',
            'ECLAT vs Apriori Comparison'
          ],
          topics: ['Duration: 42m', 'Equivalence class clustering and itemsets']
        },
        {
          moduleId: 'ml-m24',
          moduleNumber: 24,
          moduleTitle: 'Reinforcement Learning',
          lessonTitles: [
            'Reinforcement Learning Fundamentals',
            'Multi-Armed Bandit: Exploration vs Exploitation',
            'Upper Confidence Bound (UCB) Algorithm (Python & R)',
            'Thompson Sampling Algorithm (Python & R)'
          ],
          topics: ['Duration: 1h 37m', 'Dynamic reward optimization and probabilistic bandit exploration']
        },
        {
          moduleId: 'ml-m25',
          moduleNumber: 25,
          moduleTitle: 'Natural Language Processing in ML',
          lessonTitles: [
            'NLP Introduction, NLTK, Stop Words, Tokenization, Stemming & Lemmatization',
            'Named Entity Recognition & POS Tagging',
            'Bag of Words, Word Embeddings & Sentiment Analysis Implementation',
            'Hyperparameter Tuning for Sentiment ML Models'
          ],
          topics: ['Duration: 3h 56m', 'Text feature extraction and classical ML text models']
        },
        {
          moduleId: 'ml-m26',
          moduleNumber: 26,
          moduleTitle: 'ML Model Deployment using Streamlit',
          lessonTitles: [
            'What is Model Deployment',
            'Model Deployment using Streamlit Web Apps'
          ],
          topics: ['Duration: 42m', 'Publishing trained ML pipelines as accessible web apps'],
          practicalProjects: ['Streamlit Machine Learning Web Application']
        },
        {
          moduleId: 'ml-m27',
          moduleNumber: 27,
          moduleTitle: 'Deep Learning : Artificial Neural Networks',
          lessonTitles: [
            'Deep Learning History, Neurons, Synapses & Activation Functions',
            'Artificial Neural Networks (ANN) & Gradient Descent',
            'ANN Code in Python & R'
          ],
          topics: ['Duration: 1h 51m', 'Multi-layer perceptron training']
        },
        {
          moduleId: 'ml-m28',
          moduleNumber: 28,
          moduleTitle: 'Deep Learning : Convolutional Neural Networks',
          lessonTitles: [
            'Convolutional Neural Networks (CNN) Architecture',
            'Keras & TensorFlow Implementation of CNN',
            'Introduction to Transformers & Encoder-Decoder Architecture'
          ],
          topics: ['Duration: 1h 37m', 'Spatial feature extraction and vision models']
        },
        {
          moduleId: 'ml-m29',
          moduleNumber: 29,
          moduleTitle: 'Dimensionality Reduction (PCA, LDA & Kernel PCA)',
          lessonTitles: [
            'Principal Component Analysis (PCA) in Python & R',
            'Linear Discriminant Analysis (LDA)',
            'Kernel PCA for Non-Linear Projections'
          ],
          topics: ['Duration: 1h 23m', 'Eigenvectors, variance preservation, and projection matrices']
        },
        {
          moduleId: 'ml-m30',
          moduleNumber: 30,
          moduleTitle: 'Model Selection and Boosting',
          lessonTitles: [
            'K-Fold Cross Validation Code',
            'Gradient Boosting for Classification Problems'
          ],
          topics: ['Duration: 28m', 'Hyperparameter optimization and boosting']
        },
        {
          moduleId: 'ml-m31',
          moduleNumber: 31,
          moduleTitle: 'Capstone Machine Learning Project',
          lessonTitles: ['End-to-End Industry Machine Learning Capstone Implementation'],
          topics: ['Duration: 14m', 'Production-grade ML solution delivery'],
          practicalProjects: ['End-to-End Machine Learning Capstone Project']
        },
        {
          moduleId: 'ml-m32',
          moduleNumber: 32,
          moduleTitle: 'Conclusion & Future Scope',
          lessonTitles: ['Machine Learning Conclusion & Industry Roadmap'],
          topics: ['Duration: 14m', 'From classical learning to modern autonomous AI']
        }
      ]
    },
    {
      courseId: 'ai-course-deeplearning',
      courseTitle: 'Course 5: Deep Learning & Advanced Neural Architectures',
      duration: 'Neural Engineering Track (18 Modules)',
      courseDescription: 'Neural networks in depth: ANNs, CNNs, RNNs, LSTMs, Self-Organizing Maps (SOM), Boltzmann Machines, Autoencoders, sentiment analysis, poetry generation, and capstone implementations.',
      modules: [
        {
          moduleId: 'dl-m1',
          moduleNumber: 1,
          moduleTitle: 'Introduction to Course',
          lessonTitles: ['Course Intro to Deep Learning'],
          topics: ['Duration: 14m', 'Scope and objectives of neural network engineering']
        },
        {
          moduleId: 'dl-m2',
          moduleNumber: 2,
          moduleTitle: 'Introduction to Deep Learning',
          lessonTitles: [
            'History & Context of Deep Learning',
            'Machine Learning vs Deep Learning'
          ],
          topics: ['Duration: 29m', 'Feature engineering vs representation learning']
        },
        {
          moduleId: 'dl-m3',
          moduleNumber: 3,
          moduleTitle: 'Artificial Neural Networks (ANN)',
          lessonTitles: [
            'Neurons, Synapses, Activation Functions',
            'Gradient Descent vs Optimization',
            'ANN Code in Python & R'
          ],
          topics: ['Duration: 1h 26m', 'Backpropagation and weight updates in ANNs']
        },
        {
          moduleId: 'dl-m4',
          moduleNumber: 4,
          moduleTitle: 'Convolutional Neural Networks (CNN)',
          lessonTitles: [
            'CNN Layers: Convolution, Pooling, Dense',
            'Keras & TensorFlow Implementation',
            'Introduction to Transformers & Attention'
          ],
          topics: ['Duration: 1h 40m', 'Image recognition and vision models']
        },
        {
          moduleId: 'dl-m5',
          moduleNumber: 5,
          moduleTitle: 'Recurrent Neural Networks (RNN) & LSTM',
          lessonTitles: [
            'RNN Architecture & Vanishing Gradients',
            'LSTM Working, Memory Cells & Variations'
          ],
          topics: ['Duration: 1h 12m', 'Sequence learning and long-term memory']
        },
        {
          moduleId: 'dl-m6',
          moduleNumber: 6,
          moduleTitle: 'Building RNN Code',
          lessonTitles: ['Building RNN from Scratch - Hands-on Code'],
          topics: ['Duration: 14m', 'Implementing recurrent nodes in Python']
        },
        {
          moduleId: 'dl-m7',
          moduleNumber: 7,
          moduleTitle: 'Self Organizing Maps (SOM)',
          lessonTitles: [
            'SOM Concept & Unsupervised Neural Clustering',
            'SOM Working with K-Means & Code in Python and R'
          ],
          topics: ['Duration: 1h 40m', 'Topological map projections and competitive learning']
        },
        {
          moduleId: 'dl-m8',
          moduleNumber: 8,
          moduleTitle: 'Building Self Organizing Maps',
          lessonTitles: ['Building SOM - Python Implementation Code'],
          topics: ['Duration: 14m', 'Customer fraud detection with SOM']
        },
        {
          moduleId: 'dl-m9',
          moduleNumber: 9,
          moduleTitle: 'Boltzmann Machines',
          lessonTitles: [
            'Boltzmann Machines vs Standard Neural Networks',
            'Restricted Boltzmann Machine (RBM) Code in Python'
          ],
          topics: ['Duration: 43m', 'Energy-based probabilistic generative models']
        },
        {
          moduleId: 'dl-m10',
          moduleNumber: 10,
          moduleTitle: 'Autoencoders in Deep Learning',
          lessonTitles: [
            'Autoencoders, Encoders, Bottleneck & Decoders',
            'Types of Autoencoders (Denoising, Sparse, Variational)',
            'Training Process in Autoencoders'
          ],
          topics: ['Duration: 57m', 'Unsupervised feature compression and reconstruction']
        },
        {
          moduleId: 'dl-m11',
          moduleNumber: 11,
          moduleTitle: 'Building an Autoencoder',
          lessonTitles: ['Autoencoder Python Code Implementation'],
          topics: ['Duration: 14m', 'Dimensionality reduction and noise removal']
        },
        {
          moduleId: 'dl-m12',
          moduleNumber: 12,
          moduleTitle: 'Annexure: Machine Learning Basics for DL',
          lessonTitles: [
            'Linear, Logistic, SVM, KNN, Decision Trees, Random Forest'
          ],
          topics: ['Duration: 1h 26m', 'Core baseline algorithm review']
        },
        {
          moduleId: 'dl-m13',
          moduleNumber: 13,
          moduleTitle: 'Data Preprocessing in Python',
          lessonTitles: [
            'Dataset Preparation, Missing Data & Feature Scaling'
          ],
          topics: ['Duration: 3h 6m', 'Preparing large tensor inputs']
        },
        {
          moduleId: 'dl-m14',
          moduleNumber: 14,
          moduleTitle: 'Sentiment Analysis for Deep Learning',
          lessonTitles: [
            'Data Preparation & Train-Test Splits for Deep NLP Sentiment'
          ],
          topics: ['Duration: 43m', 'Deep text classification with neural networks']
        },
        {
          moduleId: 'dl-m15',
          moduleNumber: 15,
          moduleTitle: 'Poetry Generation in Deep Learning',
          lessonTitles: ['Text & Poetry Generation with Recurrent Neural Networks'],
          topics: ['Duration: 14m', 'Character-level sequence modeling']
        },
        {
          moduleId: 'dl-m16',
          moduleNumber: 16,
          moduleTitle: 'Deep Learning for Advanced AI (RL & GenAI)',
          lessonTitles: [
            'Deep Reinforcement Learning & Generative AI',
            'Prompt Engineering Techniques & Examples'
          ],
          topics: ['Duration: 57m', 'Deep Q-networks and modern generative prompts']
        },
        {
          moduleId: 'dl-m17',
          moduleNumber: 17,
          moduleTitle: 'Deep Learning Capstone Project',
          lessonTitles: ['Comprehensive Deep Learning Capstone Project'],
          topics: ['Duration: 14m', 'Computer vision and neural classification pipeline'],
          practicalProjects: ['Deep Learning Image Recognition & Classification Capstone']
        },
        {
          moduleId: 'dl-m18',
          moduleNumber: 18,
          moduleTitle: 'Conclusion of Deep Learning',
          lessonTitles: ['Deep Learning Wrap-up & Future Horizons'],
          topics: ['Duration: 14m', 'Emerging trends in neural computation']
        }
      ]
    },
    {
      courseId: 'ai-course-nlp',
      courseTitle: 'Course 6: Natural Language Processing (NLP)',
      duration: 'Linguistic Computing Track (25 Modules)',
      courseDescription: 'Computational linguistics from Python foundations, NLTK, and SpaCy preprocessing to Word2Vec, GloVe embeddings, Transformers (BERT & GPT), multi-modal NLP, and prompt engineering.',
      modules: [
        {
          moduleId: 'nlp-m1',
          moduleNumber: 1,
          moduleTitle: 'Python Data Types & Structures for NLP',
          lessonTitles: [
            'Machine Learning Intuition',
            'Python Data Types, Lists, Tuples, Dictionaries, Sets'
          ],
          topics: ['Duration: 2h 3m', 'Vocabulary sets, lookup maps, and text structures']
        },
        {
          moduleId: 'nlp-m2',
          moduleNumber: 2,
          moduleTitle: 'Fundamentals of Python Programming',
          lessonTitles: [
            'Loops, Comprehensions, Functions, Lambdas & Exceptions'
          ],
          topics: ['Duration: 1h 28m', 'Processing text corpora with list comprehensions']
        },
        {
          moduleId: 'nlp-m3',
          moduleNumber: 3,
          moduleTitle: 'Python Libraries: NumPy, Pandas, Matplotlib',
          lessonTitles: [
            'NumPy Arrays & Bonus Operations',
            'Working with CSV Files in Pandas',
            'Matplotlib Text Analytics Plots'
          ],
          topics: ['Duration: 2h 20m', 'Corpus statistics and frequency distributions']
        },
        {
          moduleId: 'nlp-m4',
          moduleNumber: 4,
          moduleTitle: 'Regular Expressions in Python',
          lessonTitles: ['Regex Patterns for Text Cleaning and Token Isolation'],
          topics: ['Duration: 18m', 'Sanitizing dirty textual data']
        },
        {
          moduleId: 'nlp-m5',
          moduleNumber: 5,
          moduleTitle: 'Introduction to NLP: Challenges & Pipelines',
          lessonTitles: [
            'NLP Introduction, Challenges & Applications',
            'Text Classification & Translation Pipelines'
          ],
          topics: ['Duration: 53m', 'Ambiguity, syntax, semantics, and morphology']
        },
        {
          moduleId: 'nlp-m6',
          moduleNumber: 6,
          moduleTitle: 'Text Cleaning & Preprocessing using NLTK',
          lessonTitles: [
            'NLTK Tokenization & Stop Word Removal',
            'Stemming and Lemmatization',
            'Named Entity Recognition (NER)',
            'Part-of-Speech (POS) Tagging Architecture & Approaches',
            'Rare Word Removal & Word Corrections using NLTK'
          ],
          topics: ['Duration: 2h 55m', 'Classical natural language toolkit pipelines']
        },
        {
          moduleId: 'nlp-m7',
          moduleNumber: 7,
          moduleTitle: 'Text Cleaning and Preprocessing using SpaCy',
          lessonTitles: [
            'Tokenization & POS Tagging using SpaCy',
            'Dependency Parsing & Lemmatization in SpaCy',
            'NER & Vector Similarity in SpaCy',
            'NLTK vs SpaCy Performance Benchmark'
          ],
          topics: ['Duration: 2h 3m', 'Industrial-strength NLP pipelines and grammatical dependency graphs']
        },
        {
          moduleId: 'nlp-m8',
          moduleNumber: 8,
          moduleTitle: 'Machine Learning Crash Course for NLP',
          lessonTitles: [
            'Linear, Logistic, SVM, KNN, Decision Trees, Random Forest'
          ],
          topics: ['Duration: 1h 45m', 'Classification baselines for text vectors']
        },
        {
          moduleId: 'nlp-m9',
          moduleNumber: 9,
          moduleTitle: 'Text Representation Techniques in NLP',
          lessonTitles: [
            'Bag of Words Technique',
            'Term Frequency - Inverse Document Frequency (TF-IDF)',
            'Word Embeddings & Sentence Embeddings'
          ],
          topics: ['Duration: 1h 10m', 'Converting human text into mathematical vector spaces']
        },
        {
          moduleId: 'nlp-m10',
          moduleNumber: 10,
          moduleTitle: 'Working with Text Files',
          lessonTitles: ['Corpus Reading, Encoding & File Stream Manipulation'],
          topics: ['Duration: 18m', 'UTF-8 encoding and large corpus handling']
        },
        {
          moduleId: 'nlp-m11',
          moduleNumber: 11,
          moduleTitle: 'Sentiment Analysis in NLP',
          lessonTitles: [
            'How Sentiment is Detected & Applications',
            'Text Preprocessing and Cleaning Code for Sentiment',
            'Sentiment Analysis with Machine Learning & Model Training'
          ],
          topics: ['Duration: 2h 38m', 'Polarity scoring and subjective text classification'],
          practicalProjects: ['Machine Learning Sentiment Analysis System']
        },
        {
          moduleId: 'nlp-m12',
          moduleNumber: 12,
          moduleTitle: 'ML Model Deployment using Streamlit',
          lessonTitles: ['Deploying NLP Sentiment Models with Streamlit UI'],
          topics: ['Duration: 53m', 'Interactive web interface for real-time text analysis'],
          practicalProjects: ['Streamlit NLP Sentiment Web Application']
        },
        {
          moduleId: 'nlp-m13',
          moduleNumber: 13,
          moduleTitle: 'Multi-Label Text Classification',
          lessonTitles: [
            'Multi-Label Classification Concepts',
            'Multi-Label Binarization'
          ],
          topics: ['Duration: 35m', 'Tagging documents with multiple non-exclusive labels']
        },
        {
          moduleId: 'nlp-m14',
          moduleNumber: 14,
          moduleTitle: 'Sentiment Analysis using Word2Vec Embeddings',
          lessonTitles: [
            'Word2Vec Embeddings Architecture (Skip-gram & CBOW)',
            'Data Preprocessing for Sentiment Analysis with Word2Vec'
          ],
          topics: ['Duration: 53m', 'Semantic word vectors preserving conceptual relationships']
        },
        {
          moduleId: 'nlp-m15',
          moduleNumber: 15,
          moduleTitle: 'Emotion Recognition in Text using GloVe',
          lessonTitles: ['Global Vectors for Word Representation (GloVe) & Emotion Tagging'],
          topics: ['Duration: 18m', 'Co-occurrence matrix factorization and emotion classification']
        },
        {
          moduleId: 'nlp-m16',
          moduleNumber: 16,
          moduleTitle: 'CV Parsing in NLP',
          lessonTitles: ['Implementation of Resume / CV Parsing using SpaCy 3'],
          topics: ['Duration: 35m', 'Information extraction and entity recognition on resumes'],
          practicalProjects: ['Automated Resume / CV Parser using SpaCy']
        },
        {
          moduleId: 'nlp-m17',
          moduleNumber: 17,
          moduleTitle: 'Sentiment Analysis using Deep Learning',
          lessonTitles: [
            'ML vs DL for Sentiment Analysis',
            'Data Preparation & Train-Test Splits',
            'Artificial Neural Networks & Convolutional Neural Networks for Text'
          ],
          topics: ['Duration: 2h 3m', '1D CNNs and deep architectures for textual sentiment']
        },
        {
          moduleId: 'nlp-m18',
          moduleNumber: 18,
          moduleTitle: 'Hate Speech Classification',
          lessonTitles: [
            'Introduction & Workflow of Hate Speech Classification',
            'Implementation & Testing in Hate Speech Detection'
          ],
          topics: ['Duration: 1h 10m', 'Automated content moderation and safety filters'],
          practicalProjects: ['Hate Speech & Toxic Content Classifier']
        },
        {
          moduleId: 'nlp-m19',
          moduleNumber: 19,
          moduleTitle: 'Poetry Generation in NLP',
          lessonTitles: [
            'Understanding RNNs and Recurrent Challenges',
            'Poetry & Text Generation Models'
          ],
          topics: ['Duration: 53m', 'Character and token sequence generation']
        },
        {
          moduleId: 'nlp-m20',
          moduleNumber: 20,
          moduleTitle: 'Transformers Architecture',
          lessonTitles: [
            'Introduction to Transformers & Encoder-Decoder Architecture',
            'Applications of Transformers',
            'Pretrained Language Models: BERT & GPT'
          ],
          topics: ['Duration: 1h 10m', 'Bidirectional encoder representations and generative autoregressive models']
        },
        {
          moduleId: 'nlp-m21',
          moduleNumber: 21,
          moduleTitle: 'Prompt Engineering',
          lessonTitles: ['Prompt Engineering Techniques, Frameworks & Industry Examples'],
          topics: ['Duration: 18m', 'Zero-shot, few-shot, and chain-of-thought prompt engineering']
        },
        {
          moduleId: 'nlp-m22',
          moduleNumber: 22,
          moduleTitle: 'Multi-Modal NLP',
          lessonTitles: ['Multi-Modal NLP Concepts & Cross-Modal Applications'],
          topics: ['Duration: 18m', 'Vision-language alignment and multimodal token embeddings']
        },
        {
          moduleId: 'nlp-m23',
          moduleNumber: 23,
          moduleTitle: 'Introduction to Gen AI',
          lessonTitles: ['Generative AI Paradigms in Modern Linguistics'],
          topics: ['Duration: 18m', 'Foundations of generative natural language processing']
        },
        {
          moduleId: 'nlp-m24',
          moduleNumber: 24,
          moduleTitle: 'NLP Capstone Project',
          lessonTitles: ['Complete Hands-on NLP Capstone Project Implementation'],
          topics: ['Duration: 18m', 'End-to-end linguistic intelligence solution'],
          practicalProjects: ['Enterprise NLP Intelligence Capstone Project']
        },
        {
          moduleId: 'nlp-m25',
          moduleNumber: 25,
          moduleTitle: 'Conclusion & Future of NLP',
          lessonTitles: ['NLP Conclusion, Large Language Models & Future Scope'],
          topics: ['Duration: 35m', 'Career trajectories and emergent LLM advancements']
        }
      ]
    }
  ]
};
