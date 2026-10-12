import { Program } from '../types/curriculum';

export const devopsCurriculum: Program = {
  id: 'devops-cloud-engineer',
  slug: 'devops-cloud-engineer',
  title: 'DevOps & Cloud Engineer',
  route: '/programs/devops-cloud-engineer',
  badge: '4 Comprehensive Courses',
  shortDescription: 'Explore the verified curriculum for DevOps, AWS Cloud Practitioner, Linux administration, and Cloud Computing with AWS.',
  overview: 'This comprehensive DevTech IT Solution DevOps & Cloud Engineer internship curriculum includes 4 complete courses: DevOps, AWS Cloud Practitioner, Linux, and Cloud Computing with AWS. Each course provides detailed lesson units, durations, and hands-on lab modules.',
  isVerified: true,
  verificationNotice: 'Official DevTech IT Solution Internship Curriculum and Technical Roadmap.',
  keyTechnologies: [
    'DevOps',
    'AWS Cloud Practitioner',
    'Linux System Admin',
    'Docker & Microservices',
    'Kubernetes (K8s)',
    'Terraform (IaC)',
    'CI/CD (Jenkins, GitHub Actions, CircleCI)',
    'Cloud Computing with AWS',
    'Bash & Python Scripting',
    'Amazon EC2, S3, RDS, VPC'
  ],
  icon: 'Cloud',
  courses: [
    {
      courseId: 'devops-course-1',
      courseTitle: 'Course 1: DevOps',
      duration: 'Comprehensive Engineering Track (11 Modules)',
      courseDescription: 'End-to-end DevOps automation covering continuous integration, containerization, microservices, cloud deployments, orchestration, and infrastructure as code.',
      modules: [
        {
          moduleId: 'devops-m1',
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
          topics: [
            'Duration: 1h 32m',
            'DevOps cultural transformation and collaboration',
            'Agile lifecycle integration & delivery pipeline flow',
            'Virtualization vs containerized workflows'
          ]
        },
        {
          moduleId: 'devops-m2',
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
          topics: [
            'Duration: 1h 47m',
            'Service models comparison (IaaS, PaaS, SaaS)',
            'Deployment models: Public, Private, and Hybrid clouds',
            'Evolutionary drivers of cloud migration'
          ]
        },
        {
          moduleId: 'devops-m3',
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
          topics: [
            'Duration: 1h 47m',
            'Filesystem hierarchy and CLI utilities',
            'Linux administration fundamentals',
            'Network configurations and APT package management'
          ]
        },
        {
          moduleId: 'devops-m4',
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
          topics: [
            'Duration: 2h 18m',
            'Bash and Python automation routines',
            'Command-line arguments and parameter passing',
            'Automated file parsing and data processing'
          ],
          practicalProjects: ['Automated Server Health Check Script']
        },
        {
          moduleId: 'devops-m5',
          moduleNumber: 5,
          moduleTitle: 'Version Control - GIT',
          lessonTitles: [
            'Intro & Git Basics',
            'Commits & Repository Operations',
            'GitHub & Remotes (GitLab)',
            'Branching Strategies',
            'Pull Requests & Code Reviews',
            'Forking & Stashing',
            'Conclusion & Recap'
          ],
          topics: [
            'Duration: 2h 18m',
            'Distributed version control workflows',
            'Feature branch models and pull request review standards',
            'Merge conflict resolution and Git stashing'
          ]
        },
        {
          moduleId: 'devops-m6',
          moduleNumber: 6,
          moduleTitle: 'Docker',
          lessonTitles: [
            'Docker Intro & Installation',
            'Basic Commands & Advanced Commands',
            'Dockerfiles & Image Handling',
            'Building Microservices',
            'Docker Compose',
            'Push Registry Conclusion'
          ],
          topics: [
            'Duration: 2h 18m',
            'Container runtime and image layers',
            'Multi-container environments with Docker Compose',
            'Pushing and pulling images to container registries'
          ],
          practicalProjects: ['Multi-Container Microservice Deployment with Docker Compose']
        },
        {
          moduleId: 'devops-m7',
          moduleNumber: 7,
          moduleTitle: 'AWS',
          lessonTitles: [
            'Intro, IAM & S3 SDK',
            'Paramstore, S3-Adv & Cloudshell',
            'EC2 Creation, Deployment, Networking & Nginx',
            'ECR, ECS, Elastic Beanstalk (EB) & Lambda',
            'Postgres, RDS, CDN & CloudFront',
            'Additional Topics: CodeCommit & CodePipeline',
            'CloudFormation Intro, Advanced & CF EC2 Recap'
          ],
          topics: [
            'Duration: 5h 37m',
            'Core AWS computing and storage services',
            'Serverless functions and containerized ECS deployments',
            'Infrastructure as Code (IaC) with CloudFormation templates',
            'Automated AWS CI/CD pipelines'
          ],
          practicalProjects: ['End-to-End AWS Production Architecture Deployment']
        },
        {
          moduleId: 'devops-m8',
          moduleNumber: 8,
          moduleTitle: 'Kubernetes',
          lessonTitles: [
            'Intro & Main Components',
            'K8s Architecture',
            'MiniKube & Kubectl',
            'Dashboard & Basic App',
            'Debugging & Kubectl Commands',
            'Building Microservices & Deploying Microservices',
            'Ingress, Volume & Services',
            'Helm & ArgoCD Wrap-up'
          ],
          topics: [
            'Duration: 3h 19m',
            'Master-worker node cluster architecture',
            'Pods, Deployments, ReplicaSets, and Services',
            'Package management with Helm charts and GitOps with ArgoCD'
          ],
          practicalProjects: ['Kubernetes Microservice Deployment & Ingress Routing']
        },
        {
          moduleId: 'devops-m9',
          moduleNumber: 9,
          moduleTitle: 'Terraform',
          lessonTitles: [
            'Intro & Architecture',
            'Setup & Providers',
            'Terraform Commands (init, plan, apply, destroy)',
            'Demo Project and Wrapup'
          ],
          topics: [
            'Duration: 1h 1m',
            'Infrastructure as Code (IaC) principles',
            'Declarative HCL syntax and state management',
            'Automated cloud resource provisioning'
          ],
          practicalProjects: ['Automated AWS Cloud Infrastructure Provisioning with Terraform']
        },
        {
          moduleId: 'devops-m10',
          moduleNumber: 10,
          moduleTitle: 'Continuous Integration – Jenkins, CircleCI, GH Actions',
          lessonTitles: [
            'CI/CD Intro',
            'Jenkins Intro & Architecture',
            'Jenkins Jobs & Pipelines',
            'GitHub Actions Workflows',
            'GitHub Jenkins Integration',
            'CircleCI Recap & Wrapup'
          ],
          topics: [
            'Duration: 1h 32m',
            'Continuous Integration pipeline architecture',
            'Automated test triggers and build artifacts',
            'Multi-platform CI comparisons: Jenkins, GitHub Actions, CircleCI'
          ],
          practicalProjects: ['Automated Build & Test CI Pipeline']
        }
      ]
    },
    {
      courseId: 'devops-course-2',
      courseTitle: 'Course 2: AWS Cloud Practitioner',
      duration: 'Foundational Cloud Certification Track (31 Modules)',
      courseDescription: 'Complete preparation for the AWS Certified Cloud Practitioner certification covering global infrastructure, core cloud services, billing, security, and sample question banks.',
      modules: [
        {
          moduleId: 'cp-m1',
          moduleNumber: 1,
          moduleTitle: 'Creating an AWS Account',
          lessonTitles: ['Creating AWS Account'],
          topics: ['Duration: 6m', 'Account registration, verification, and initial security setup']
        },
        {
          moduleId: 'cp-m2',
          moduleNumber: 2,
          moduleTitle: 'Origin of Cloud Computing',
          lessonTitles: [
            'Origin of Cloud',
            'Virtualization',
            'Benefits of Virtualization',
            'Uses and Future aspects of cloud computing'
          ],
          topics: ['Duration: 24m', 'Virtual machines, hypervisors, and computing paradigm shifts']
        },
        {
          moduleId: 'cp-m3',
          moduleNumber: 3,
          moduleTitle: 'Traditional IT Approach vs Cloud Computing',
          lessonTitles: [
            'Traditional IT approach overview',
            'Problems with traditional IT approach',
            'Cloud Computing Key Features',
            'Benefits of cloud',
            'Tabular Comparison'
          ],
          topics: ['Duration: 30m', 'CapEx vs OpEx, scalability, agility, and maintenance trade-offs']
        },
        {
          moduleId: 'cp-m4',
          moduleNumber: 4,
          moduleTitle: 'Cloud Service Models',
          lessonTitles: [
            'Cloud Service Models Overview',
            'Infrastructure as a service (IaaS)',
            'PaaS',
            'SaaS',
            'Tabular Comparison',
            'Other Services'
          ],
          topics: ['Duration: 36m', 'Responsibility matrix across IaaS, PaaS, and SaaS']
        },
        {
          moduleId: 'cp-m5',
          moduleNumber: 5,
          moduleTitle: 'Cloud Deployment Models',
          lessonTitles: [
            'Cloud deployment models Overview',
            'Cloud Deployment Models',
            'Private & Public Cloud',
            'Hybrid Cloud',
            'Community Cloud'
          ],
          topics: ['Duration: 30m', 'Architecture trade-offs across deployment options']
        },
        {
          moduleId: 'cp-m6',
          moduleNumber: 6,
          moduleTitle: 'Cloud Computing Challenges',
          lessonTitles: [
            'Cloud computing challenges Overview',
            'Challenge 1: Security',
            'Challenge 2: Vendor Lock-in',
            'Challenge 3: Monitoring',
            'Challenge 4: Compliance',
            'Challenge 5: Cost Management',
            'Challenge 6: Migration',
            'Challenge 7: Automation',
            'Challenge 8: Performance & Latency'
          ],
          topics: ['Duration: 54m', 'Overcoming organizational and technical migration obstacles']
        },
        {
          moduleId: 'cp-m7',
          moduleNumber: 7,
          moduleTitle: 'Networking in Cloud Computing',
          lessonTitles: [
            'Networking in cloud computing Overview',
            'Networking fundamentals part 1 & part 2',
            'Networking Devices',
            'Network Protocols Part 1 & Part 2',
            'Network design and architecture',
            'Types of network architecture and best practices',
            'Network Security'
          ],
          topics: ['Duration: 54m', 'IP addressing, subnets, routers, OSI model, and firewalls']
        },
        {
          moduleId: 'cp-m8',
          moduleNumber: 8,
          moduleTitle: 'Security Best Practices',
          lessonTitles: [
            'Security Best Practices Overview',
            'Encryption Fundamentals',
            'IAM',
            'Backup & High Availability',
            'Network Security',
            'Account Management & Security Services'
          ],
          topics: ['Duration: 36m', 'Encryption in transit vs at rest, disaster recovery']
        },
        {
          moduleId: 'cp-m9',
          moduleNumber: 9,
          moduleTitle: 'Cloud Providers',
          lessonTitles: [
            'Cloud Providers Overview',
            'AWS',
            'Microsoft Azure',
            'GCP',
            'IBM Cloud',
            'Oracle Cloud Infrastructure',
            'Alibaba Cloud',
            'Digital Ocean'
          ],
          topics: ['Duration: 48m', 'Comparison of hyperscalers and cloud market share']
        },
        {
          moduleId: 'cp-m10',
          moduleNumber: 10,
          moduleTitle: 'Introduction to AWS',
          lessonTitles: [
            'Introduction to AWS Overview',
            'AWS Cloud History & Future',
            'AWS Cloud Facts',
            'AWS Regions & Availability Zones',
            'AWS Shared Responsibility Model'
          ],
          topics: ['Duration: 36m', 'Global footprint, latency zones, and security ownership']
        },
        {
          moduleId: 'cp-m11',
          moduleNumber: 11,
          moduleTitle: 'IAM (Identity & Access Management)',
          lessonTitles: [
            'IAM Overview & Quiz',
            'Users & Groups',
            'Hands-on IAM Users & Groups',
            'IAM Permissions & Policies',
            'IAM policy structure and password policy',
            'MFA (Multi-Factor Authentication)',
            'Hands-on MFA & Access Keys',
            'IAM Roles & Hands-on Roles',
            'IAM Security Tools & Shared Responsibility Model'
          ],
          topics: ['Duration: 1h 23m', 'Principle of least privilege, JSON policies, credentials']
        },
        {
          moduleId: 'cp-m12',
          moduleNumber: 12,
          moduleTitle: 'Amazon EC2 (Elastic Compute Cloud)',
          lessonTitles: [
            'EC2 Overview & Quiz',
            'Public IP vs Private IP vs Elastic IP',
            'Placement Groups & Hands-on',
            'ENIs (Elastic Network Interfaces)',
            'EC2 Hibernate & Hands-on',
            'EC2 Purchasing Options (On-Demand, Spot, Reserved) & Hands-on',
            'AWS CLI Integration',
            'Hands-on Launching first EC2 instance',
            'EC2 instance types & Hands-on',
            'Security Groups & Properties with Hands-on',
            'Classic Ports & Access Controls'
          ],
          topics: ['Duration: 2h 5m', 'Instance lifecycle, security groups, CLI interaction']
        },
        {
          moduleId: 'cp-m13',
          moduleNumber: 13,
          moduleTitle: 'EC2 Instance Storage',
          lessonTitles: [
            'EC2 instance storage Overview & Quiz',
            'EBS volumes & Encryption',
            'EFS (Elastic File System) & Hands-on',
            'EFS vs EBS Comparison',
            'Shared Responsibility Model for Storage',
            'Hands-on Multi-EBS volumes & Snapshots',
            'AMI (Amazon Machine Image)',
            'Instance Store vs EBS Volume Types',
            'EBS multi-attach'
          ],
          topics: ['Duration: 1h 35m', 'Persistent block storage vs network filesystems vs ephemeral storage']
        },
        {
          moduleId: 'cp-m14',
          moduleNumber: 14,
          moduleTitle: 'Scalability & Load Balancing',
          lessonTitles: [
            'Scalability & Load Balancing Overview',
            'Cross Zone Load Balancing',
            'Hands-on Application Load Balancer (ALB)',
            'Hands-on Network Load Balancer (NLB)',
            'Sticky Sessions & Connection Draining',
            'Auto Scaling Groups (ASG) & Best Practices',
            'High Availability & Elasticity vs Scalability vs Agility',
            'Load Balancing types Dedicated Comparison'
          ],
          topics: ['Duration: 1h 53m', 'Dynamic scaling policies, target groups, health checks']
        },
        {
          moduleId: 'cp-m15',
          moduleNumber: 15,
          moduleTitle: 'Amazon S3 (Simple Storage Service)',
          lessonTitles: [
            'S3 Overview & Quiz',
            'S3 Buckets & Objects',
            'S3 Storage Classes & Hands-on',
            'S3 Lifecycle Rules & Hands-on',
            'S3 Performance Enhancers & Analytics',
            'S3 Batch Operations & Requester Pays',
            'Hands-on creating bucket and uploading objects',
            'S3 Bucket Policies & Hands-on',
            'Static Website Hosting Hands-on',
            'S3 Versioning and Replication Hands-on'
          ],
          topics: ['Duration: 2h 5m', 'Unlimited object storage, durability, lifecycle automation']
        },
        {
          moduleId: 'cp-m16',
          moduleNumber: 16,
          moduleTitle: 'S3 Security',
          lessonTitles: [
            'S3 Security overview & Quiz',
            'S3 Encryption & types with Hands-on',
            'S3 Access Points',
            'S3 CORS Configuration',
            'S3 MFA Delete with Hands-on',
            'S3 Access logs warning',
            'S3 Pre-Signed URLs with Hands-on',
            'S3 Object Lock with Hands-on'
          ],
          topics: ['Duration: 1h 23m', 'KMS encryption, compliance locks, secure access points']
        },
        {
          moduleId: 'cp-m17',
          moduleNumber: 17,
          moduleTitle: 'AWS Snow Family',
          lessonTitles: [
            'AWS Snow Family Overview & Quiz',
            'Edge Computing Concepts',
            'Snowball Edge',
            'Snowball Cone',
            'Snowmobile',
            'Snow family pricing comparison & Best Practices'
          ],
          topics: ['Duration: 54m', 'Petabyte/exabyte physical data transfer devices']
        },
        {
          moduleId: 'cp-m18',
          moduleNumber: 18,
          moduleTitle: 'Databases and Analytics',
          lessonTitles: [
            'Databases and Analytics Overview & Quiz',
            'Relational Database Concepts',
            'Athena & Hands-on Query S3 data',
            'QuickSight, AWS Neptune & QLDB',
            'Amazon Managed Blockchain',
            'AWS Glue & Timestream Database',
            'Amazon RDS Hands-on & Aurora Hands-on',
            'AWS DMS (Database Migration Service)',
            'DynamoDB & Hands-on',
            'AWS EMR & Redshift Data Warehouse'
          ],
          topics: ['Duration: 2h 29m', 'SQL vs NoSQL vs Graph vs Ledger databases, ETL with Glue']
        },
        {
          moduleId: 'cp-m19',
          moduleNumber: 19,
          moduleTitle: 'Databases & Caching',
          lessonTitles: [
            'Databases & Caching Overview',
            'RDS Proxy',
            'Hands-on Connecting to RDS MySQL',
            'Aurora Advanced Features',
            'ElastiCache (Redis & Memcached)'
          ],
          topics: ['Duration: 36m', 'Sub-millisecond in-memory caching and connection pooling']
        },
        {
          moduleId: 'cp-m20',
          moduleNumber: 20,
          moduleTitle: 'Containerization & Serverless Services',
          lessonTitles: [
            'Containerization Overview & Quiz',
            'Docker on AWS',
            'S3 trigger Lambda function',
            'EKS & Hands-on EKS',
            'Lightsail & Hands-on Lightsail',
            'API Gateway & Hands-on',
            'ECS, Fargate & ECR with Hands-on',
            'AWS Lambda & Hands-on function'
          ],
          topics: ['Duration: 1h 53m', 'Serverless event triggers, managed Kubernetes, Fargate tasks']
        },
        {
          moduleId: 'cp-m21',
          moduleNumber: 21,
          moduleTitle: 'DNS Route 53',
          lessonTitles: [
            'DNS Route 53 Overview & Quiz',
            'DNS Fundamentals',
            'Route 53 Hosted Zones',
            'Record Types (A, AAAA, CNAME, Alias)',
            'TTL & Routing Policies (Simple, Weighted, Latency, Failover)',
            'Hands-on Route 53 Configuration'
          ],
          topics: ['Duration: 54m', 'Global DNS routing policies and health check failover']
        },
        {
          moduleId: 'cp-m22',
          moduleNumber: 22,
          moduleTitle: 'Global Services',
          lessonTitles: [
            'Global Services Overview & Quiz',
            'CloudFront CDN & Hands-on',
            'Global Accelerator & Hands-on',
            'CloudFront vs Global Accelerator',
            'Local Zones & AWS Wavelength'
          ],
          topics: ['Duration: 59m', 'Edge locations, anycast IP acceleration, low-latency telco edge']
        },
        {
          moduleId: 'cp-m23',
          moduleNumber: 23,
          moduleTitle: 'Infrastructure Creation & Management Services',
          lessonTitles: [
            'Infrastructure Creation Overview & Quiz',
            'AWS CodeArtifact',
            'AWS CloudFormation with Hands-on',
            'Dedicated Pipeline/DevOps services',
            'AWS Elastic Beanstalk with Hands-on'
          ],
          topics: ['Duration: 59m', 'Declarative templating and automated PaaS deployment']
        },
        {
          moduleId: 'cp-m24',
          moduleNumber: 24,
          moduleTitle: 'Storage Advanced',
          lessonTitles: [
            'Storage Advanced Overview & Quiz',
            'Amazon FSx (Windows & Lustre) with Hands-on',
            'AWS File Gateway & Storage Gateway with Hands-on',
            'AWS Transfer Family',
            'AWS DataSync & App2Container'
          ],
          topics: ['Duration: 59m', 'High-performance computing storage and hybrid gateways']
        },
        {
          moduleId: 'cp-m25',
          moduleNumber: 25,
          moduleTitle: 'Monitoring & Observability',
          lessonTitles: [
            'Monitoring Overview & Quiz',
            'Amazon CloudWatch with Hands-on',
            'AWS CloudTrail with Hands-on',
            'Amazon EventBridge',
            'AWS X-Ray Distributed Tracing',
            'AWS Health Dashboard with Hands-on'
          ],
          topics: ['Duration: 1h 5m', 'Metric alarms, API governance auditing, distributed microservice tracing']
        },
        {
          moduleId: 'cp-m26',
          moduleNumber: 26,
          moduleTitle: 'Decoupling & Application Integration',
          lessonTitles: [
            'Decoupling Overview & Quiz',
            'Decoupling Principles',
            'Amazon SQS (Simple Queue Service)',
            'Amazon SNS (Simple Notification Service) with Hands-on',
            'AWS Kinesis & Streaming Types',
            'Amazon MQ (Managed Message Broker)'
          ],
          topics: ['Duration: 59m', 'Asynchronous message queues, pub/sub topics, streaming pipelines']
        },
        {
          moduleId: 'cp-m27',
          moduleNumber: 27,
          moduleTitle: 'Networking in AWS (VPC)',
          lessonTitles: [
            'Networking in AWS Overview & Quiz',
            'Amazon VPC (Virtual Private Cloud) & Hands-on',
            'Subnets (Public/Private) with Hands-on',
            'Internet Gateway & NAT Gateway with Hands-on',
            'VPC Peering with Hands-on',
            'Transit Gateway',
            'VPC Endpoints & Flow Logs'
          ],
          topics: ['Duration: 1h 29m', 'CIDR blocks, route tables, network access control lists (NACL)']
        },
        {
          moduleId: 'cp-m28',
          moduleNumber: 28,
          moduleTitle: 'AI & ML Services',
          lessonTitles: [
            'AI & ML services Overview',
            'AWS Rekognition & Textract',
            'Amazon Forecast & Kendra',
            'Amazon Transcribe with Hands-on',
            'Amazon Polly with Hands-on',
            'Amazon Translate with Hands-on',
            'AWS Lex & Connect',
            'Amazon Comprehend',
            'Amazon SageMaker Platform'
          ],
          topics: ['Duration: 1h 29m', 'Pre-trained computer vision, NLP, text-to-speech, and ML platforms']
        },
        {
          moduleId: 'cp-m29',
          moduleNumber: 29,
          moduleTitle: 'Security Services',
          lessonTitles: [
            'Security Services Overview & Quiz',
            'AWS Shield (DDoS) with Hands-on',
            'AWS WAF (Web Application Firewall) with Hands-on',
            'Network Firewall',
            'Amazon GuardDuty & Inspector',
            'AWS Config, Macie & Detective',
            'AWS KMS & CloudHSM with Hands-on',
            'ACM (Certificate Manager)',
            'AWS Secrets Manager with Hands-on'
          ],
          topics: ['Duration: 1h 59m', 'Automated threat detection, compliance rules, encryption keys']
        },
        {
          moduleId: 'cp-m30',
          moduleNumber: 30,
          moduleTitle: 'Management and Billing Console',
          lessonTitles: [
            'Management and Billing Console Overview & Quiz',
            'AWS Organizations & Consolidated Billing',
            'Service Control Policies (SCPs)',
            'AWS Control Tower & Resource Access Manager',
            'AWS Cost Explorer & Budgets',
            'AWS Cost Anomaly Detection',
            'Hands-on full AWS Billing & Cost Management console'
          ],
          topics: ['Duration: 1h 11m', 'Enterprise multi-account governance and cost threshold alarms']
        },
        {
          moduleId: 'cp-m31',
          moduleNumber: 31,
          moduleTitle: 'Cloud Practitioner Question Bank',
          lessonTitles: [
            'Practice Set 1',
            'Practice Set 2',
            'Practice Set 3',
            'Practice Set 4',
            'Practice Set 5',
            'Practice Set 6',
            'Practice Set 7',
            'Practice Set 8'
          ],
          topics: ['Duration: 48m', 'Official-style exam practice questions with verified explanations']
        }
      ]
    },
    {
      courseId: 'devops-course-3',
      courseTitle: 'Course 3: Linux System Administration',
      duration: 'In-Depth Operating System Track (12 Modules)',
      courseDescription: 'Comprehensive Linux administration from fundamental file operations and process scheduling to advanced networking, system hardening, and enterprise services.',
      modules: [
        {
          moduleId: 'linux-m1',
          moduleNumber: 1,
          moduleTitle: 'Course Overview',
          lessonTitles: ['Course Overview & Linux Architecture'],
          topics: ['Duration: 8m', 'Linux kernel foundations and distributions landscape']
        },
        {
          moduleId: 'linux-m2',
          moduleNumber: 2,
          moduleTitle: 'Introduction To Linux',
          lessonTitles: [
            'Section 1 Overview',
            'Introduction To Linux',
            'Key Functions, Linux Distributions And History',
            'Linux Vs Unix',
            'Linux Flavours & Tabular Comparison',
            'Linux Users',
            'Linux Vs Windows',
            'Creating An AWS Account for Linux Labs'
          ],
          topics: ['Duration: 1h 14m', 'Linux history, distributions (RHEL, Ubuntu, CentOS), and multi-user environments']
        },
        {
          moduleId: 'linux-m3',
          moduleNumber: 3,
          moduleTitle: 'Virtualization',
          lessonTitles: [
            'Section 2 Overview',
            'Virtualization Concepts & Types',
            'VirtualBox Lab Setup',
            'AWS Virtualization',
            'Understanding EC2 Instances',
            'Understanding AMIs'
          ],
          topics: ['Duration: 57m', 'Type 1 vs Type 2 hypervisors, cloud instances, and virtualization layers']
        },
        {
          moduleId: 'linux-m4',
          moduleNumber: 4,
          moduleTitle: 'System Access & File System',
          lessonTitles: [
            'Section 3 Overview',
            'File System Structure And Description (FHS)',
            'Navigation Through Files & Hands-on',
            'Relative And Absolute Paths Hands-on',
            'Creating & Removing Files and Directories Hands-on',
            'Wildcards & Hands-on',
            'Soft And Hard Links',
            'Find & Locate Commands',
            'Copy & Move Commands Hands-on'
          ],
          topics: ['Duration: 2h 3m', 'FHS directories, inode pointers, symlinks, recursive operations']
        },
        {
          moduleId: 'linux-m5',
          moduleNumber: 5,
          moduleTitle: 'Linux Fundamentals & Text Processing',
          lessonTitles: [
            'Section 4 Overview',
            'Command Syntax & Redirections Hands-on',
            'ACL (Access Control List) & Commands Hands-on',
            'Help Command & Executing Multiple Commands',
            'User And Permission Management (chmod, chown)',
            'Tab Completion, Up Arrow & Linux Pipes (|)',
            'Compressing & Uncompressing (tar, gzip, gunzip)',
            'File Display (cat, head, tail, less, diff, cmp)',
            'Text Filters: Cat, Awk, Grep, Uniq, Sort, Wc',
            'File Editing with Vi / Vim'
          ],
          topics: ['Duration: 4h 39m', 'Standard streams, regex parsing, pipeline chaining, Vi modal editing']
        },
        {
          moduleId: 'linux-m6',
          moduleNumber: 6,
          moduleTitle: 'System Management & Administration',
          lessonTitles: [
            'Section 5 Overview',
            'Stream Editor (Sed) Commands Hands-on',
            'Password Aging & User Account Controls',
            'Process Management: ps, top, kill, systemctl',
            'Task Automation: crontab, at command',
            'Package Management (APT, RPM, YUM, DNF)',
            'Hostnames, Network ID & Environmental Variables',
            'System Diagnostics: uname, uptime, date, which, cal',
            'Screen & Tmux Session Persistence',
            'Log Monitoring, SOS Reports & System Maintenance (shutdown, reboot)'
          ],
          topics: ['Duration: 4h 6m', 'Service management via Systemd, process states, automated cron scheduling']
        },
        {
          moduleId: 'linux-m7',
          moduleNumber: 7,
          moduleTitle: 'Shell Scripting',
          lessonTitles: [
            'Section 6 Overview & Introduction To Shell',
            'Writing Our First Shell Script',
            'If-Else Conditional Scripts',
            'For Loops & While Loops',
            'Case Statements & Exit Statuses',
            'Setting User IDs and Parameter Passing',
            'Commonly Used Administration Scripts'
          ],
          topics: ['Duration: 1h 22m', 'Bash syntax, defensive error checks, administrative automation']
        },
        {
          moduleId: 'linux-m8',
          moduleNumber: 8,
          moduleTitle: 'Linux Networking & Server Services',
          lessonTitles: [
            'Section 7 Overview & Client-Server Relationship',
            'Network Configurations & Internet Connectivity',
            'Network Commands: curl, wget, ping, ss, netstat, traceroute',
            'NIC Bonding, SSH & Telnet Configurations',
            'FTP, SCP & Rsync Remote Synchronization',
            'Package Upgrades, Patch Management & Local Repositories',
            'DNS Configuration (nslookup, dig) & NTP (chronyd)',
            'Nginx & Apache Web Server Deployments',
            'Central Logging with Rsyslog',
            'OS Hardening & Firewall Management (UFW / Iptables)',
            'Container Deployments with Docker, OpenVPN, DHCP, Ansible & Nagios'
          ],
          topics: ['Duration: 9h 59m', 'Enterprise networking, secure remote transfers, infrastructure hardening']
        },
        {
          moduleId: 'linux-m9',
          moduleNumber: 9,
          moduleTitle: 'Disk Partition & Storage Management',
          lessonTitles: [
            'Section 8 Overview',
            'Linux Run Levels & Systemd Booting Process',
            'Systemd-Analyze Command Hands-on',
            'MOTD (Message Of The Day)',
            'Disk Partitioning (fdisk, parted, gdisk)',
            'LVM (Logical Volume Manager): PV, VG, LV Creation & Extension',
            'Swap Space Management',
            'Filesystems Check (fsck, xfs_info)',
            'RAID Arrays & Backups using dd',
            'NFS (Network File System) Configuration',
            'Installing MySQL / MariaDB Server & LAMP Stack'
          ],
          topics: ['Duration: 4h 23m', 'Dynamic storage scaling with LVM, redundant arrays, network shares']
        },
        {
          moduleId: 'linux-m10',
          moduleNumber: 10,
          moduleTitle: 'Practical Real-World Projects',
          lessonTitles: [
            'Section 9 Overview',
            'Java Application Shell Script Project Overview',
            'Project Hands-on 1: Automated Deployment Script',
            'Project Hands-on 2: System Monitor & Alerting',
            'Nginx Web Server Reverse Proxy Project'
          ],
          topics: ['Duration: 49m', 'Deploying production web services and automation pipelines'],
          practicalProjects: [
            'Java Application Automated Shell Script Project',
            'Nginx Reverse Proxy & Static Site Server Project'
          ]
        },
        {
          moduleId: 'linux-m11',
          moduleNumber: 11,
          moduleTitle: 'All About Resume & Career Guide',
          lessonTitles: [
            'Section 10 Overview',
            'Linux Administrator Duties',
            'Resume Workshop & Best Practices',
            'Job Applications Strategy'
          ],
          topics: ['Duration: 33m', 'Portfolio alignment, interview keywords, and system admin duties']
        },
        {
          moduleId: 'linux-m12',
          moduleNumber: 12,
          moduleTitle: 'Exam & Interview Preparation',
          lessonTitles: [
            'File & Process Management Questions',
            'File Permissions & Search Scenarios',
            'Compression, Networking & Shortcuts',
            'Medium Level File & Process Scenarios',
            'Medium Level Security & System Administration'
          ],
          topics: ['Duration: 1h 47m', 'Scenario-based system administration interview drills']
        }
      ]
    },
    {
      courseId: 'devops-course-4',
      courseTitle: 'Course 4: Cloud Computing with AWS',
      duration: 'Advanced Architecture & Engineering Track (31 Modules)',
      courseDescription: 'Advanced architectural implementation of AWS services including multi-tier compute, serverless orchestration, enterprise databases, and high availability systems.',
      modules: [
        {
          moduleId: 'cc-m1',
          moduleNumber: 1,
          moduleTitle: 'Course Overview',
          lessonTitles: ['Course Overview & Learning Objectives'],
          topics: ['Duration: 5m', 'Cloud architecture patterns and certification syllabus']
        },
        {
          moduleId: 'cc-m2',
          moduleNumber: 2,
          moduleTitle: 'Creating an AWS Account',
          lessonTitles: ['Creating AWS Account & Free Tier Utilization'],
          topics: ['Duration: 5m', 'Root credentials hardening and billing alerts']
        },
        {
          moduleId: 'cc-m3',
          moduleNumber: 3,
          moduleTitle: 'Origin of Cloud Computing',
          lessonTitles: [
            'Origin of Cloud',
            'Virtualization',
            'Benefits of Virtualization',
            'Uses and Future Aspects of Cloud Computing'
          ],
          topics: ['Duration: 20m', 'Hardware abstraction and utility computing model']
        },
        {
          moduleId: 'cc-m4',
          moduleNumber: 4,
          moduleTitle: 'Traditional IT Approach vs Cloud Computing',
          lessonTitles: [
            'Traditional IT Approach Overview',
            'Problems with Traditional IT Approach',
            'Cloud Computing Key Features',
            'Benefits of Cloud',
            'Tabular Comparison'
          ],
          topics: ['Duration: 26m', 'Elasticity, failover, operational agility vs on-premise hardware']
        },
        {
          moduleId: 'cc-m5',
          moduleNumber: 5,
          moduleTitle: 'Cloud Service Models',
          lessonTitles: [
            'Cloud Service Models Overview',
            'Infrastructure as a Service (IaaS)',
            'Platform as a Service (PaaS)',
            'Software as a Service (SaaS)',
            'Tabular Comparison & Other Specialized Services'
          ],
          topics: ['Duration: 31m', 'Service boundary delineation and management scope']
        },
        {
          moduleId: 'cc-m6',
          moduleNumber: 6,
          moduleTitle: 'Cloud Deployment Models',
          lessonTitles: [
            'Cloud Deployment Models Overview',
            'Private & Public Cloud',
            'Hybrid Cloud',
            'Community Cloud'
          ],
          topics: ['Duration: 26m', 'Connectivity and compliance in hybrid deployments']
        },
        {
          moduleId: 'cc-m7',
          moduleNumber: 7,
          moduleTitle: 'Security Best Practices',
          lessonTitles: [
            'Account Management Security Services',
            'Backup & High Availability Architecture',
            'Encryption Fundamentals',
            'IAM Governance',
            'Network Security',
            'Security Best Practices Overview'
          ],
          topics: ['Duration: 31m', 'Defense in depth, encryption key management, compliance standards']
        },
        {
          moduleId: 'cc-m8',
          moduleNumber: 8,
          moduleTitle: 'Cloud Providers',
          lessonTitles: [
            'AWS',
            'Microsoft Azure',
            'GCP',
            'IBM Cloud',
            'Oracle Cloud Infrastructure',
            'Alibaba Cloud',
            'Digital Ocean',
            'Cloud Providers Overview'
          ],
          topics: ['Duration: 41m', 'Comparative service mapping and multi-cloud strategies']
        },
        {
          moduleId: 'cc-m9',
          moduleNumber: 9,
          moduleTitle: 'Introduction to AWS',
          lessonTitles: [
            'AWS Cloud History & Future',
            'AWS Cloud Facts',
            'AWS Global Regions & Edge Network',
            'AWS Shared Responsibility Model',
            'Introduction to AWS Overview'
          ],
          topics: ['Duration: 31m', 'Availability zones, regional isolation, and shared responsibility']
        },
        {
          moduleId: 'cc-m10',
          moduleNumber: 10,
          moduleTitle: 'IAM (Identity & Access Management)',
          lessonTitles: [
            'Users & Groups',
            'Hands-on IAM Roles',
            'IAM Security Tools',
            'Shared Responsibility Model for IAM',
            'Hands-on Users & Groups',
            'IAM Permissions & Policies',
            'IAM Policy Structure & Password Policy',
            'MFA (Multi-Factor Authentication)',
            'Access to AWS & CLI',
            'Hands-on MFA & Access Keys',
            'IAM Overview'
          ],
          topics: ['Duration: 1h 7m', 'Granular IAM policies, role assumption, security auditing']
        },
        {
          moduleId: 'cc-m11',
          moduleNumber: 11,
          moduleTitle: 'Amazon EC2 (Elastic Compute Cloud)',
          lessonTitles: [
            'EC2 Instance Lifecycle',
            'Placement Groups & Hands-on',
            'ENIs (Elastic Network Interfaces)',
            'EC2 Hibernate & Hands-on',
            'EC2 Purchasing Options & Shared Responsibility',
            'AWS CLI Hands-on Launching First Instance',
            'EC2 Instance Types & Hands-on',
            'Security Groups & Classic Ports',
            'Public IP vs Private IP vs Elastic IP',
            'EC2 Overview'
          ],
          topics: ['Duration: 1h 37m', 'Virtual machines provisioning, instance configuration, security groups']
        },
        {
          moduleId: 'cc-m12',
          moduleNumber: 12,
          moduleTitle: 'EC2 Instance Storage',
          lessonTitles: [
            'EBS Volumes & Encryption',
            'Amazon EFS & Hands-on',
            'EFS vs EBS Comparison',
            'Shared Responsibility Model for Storage',
            'Hands-on Multi-EBS Volumes & Snapshots',
            'AMI Creation & Management',
            'Instance Store vs EBS Volume Types',
            'EBS Multi-Attach',
            'EC2 Instance Storage Overview'
          ],
          topics: ['Duration: 1h 17m', 'Block storage encryption, snapshot lifecycles, and shared EFS shares']
        },
        {
          moduleId: 'cc-m13',
          moduleNumber: 13,
          moduleTitle: 'Scalability & Load Balancing',
          lessonTitles: [
            'Scalability & High Availability',
            'Cross-Zone Load Balancing',
            'Hands-on Application Load Balancer (ALB)',
            'Hands-on Network Load Balancer (NLB)',
            'Sticky Sessions & Connection Draining',
            'Auto Scaling Groups (ASG) & Best Practices',
            'Elasticity vs Scalability vs Agility',
            'Load Balancing Types Dedicated Comparison',
            'Scalability & LB Overview'
          ],
          topics: ['Duration: 1h 37m', 'Traffic distribution, health checking, dynamic target scaling']
        },
        {
          moduleId: 'cc-m14',
          moduleNumber: 14,
          moduleTitle: 'Amazon S3 (Simple Storage Service)',
          lessonTitles: [
            'S3 Buckets & Objects Architecture',
            'S3 Storage Classes & Hands-on',
            'S3 Lifecycle Rules & Hands-on',
            'S3 Performance Enhancers & Analytics',
            'S3 Batch Operations & Requester Pays',
            'Hands-on Creating Bucket & Uploading Objects',
            'S3 Bucket Policies & Static Website Hosting',
            'S3 Versioning & Replication Hands-on',
            'S3 Overview'
          ],
          topics: ['Duration: 1h 42m', 'Scalable object store, cross-region replication, lifecycle transitions']
        },
        {
          moduleId: 'cc-m15',
          moduleNumber: 15,
          moduleTitle: 'S3 Security',
          lessonTitles: [
            'S3 Encryption Types & Hands-on',
            'S3 Access Points & CORS',
            'Security Best Practices & Shared Responsibility',
            'S3 MFA Delete with Hands-on',
            'S3 Pre-Signed URLs with Hands-on',
            'S3 Object Lock with Hands-on',
            'S3 Security Overview'
          ],
          topics: ['Duration: 1h 7m', 'WORM compliance storage, secure temporary access URLs']
        },
        {
          moduleId: 'cc-m16',
          moduleNumber: 16,
          moduleTitle: 'AWS Snow Family',
          lessonTitles: [
            'Edge Computing Foundations',
            'Snowball Edge, Snowball Cone & Snowmobile',
            'Snow Family Pricing Comparison',
            'Hands-on Snow Family Operations',
            'Snow Family Best Practices & Overview'
          ],
          topics: ['Duration: 41m', 'Mass data migration and edge processing devices']
        },
        {
          moduleId: 'cc-m17',
          moduleNumber: 17,
          moduleTitle: 'Databases & Analytics',
          lessonTitles: [
            'Relational Database Concepts',
            'Athena & Hands-on Querying S3 Data',
            'QuickSight, Neptune & QLDB',
            'Amazon Managed Blockchain',
            'AWS Glue & Timestream Database',
            'RDS & Aurora Hands-on',
            'AWS DMS (Database Migration Service)',
            'DynamoDB Hands-on',
            'AWS EMR & Redshift Data Warehouse',
            'Databases & Analytics Overview'
          ],
          topics: ['Duration: 2h 3m', 'Managed relational, document, serverless query, and analytics solutions']
        },
        {
          moduleId: 'cc-m18',
          moduleNumber: 18,
          moduleTitle: 'Databases & Caching',
          lessonTitles: [
            'RDS Proxy Configuration',
            'Hands-on Connecting to RDS MySQL',
            'Aurora Advanced High-Availability Features',
            'ElastiCache (Redis & Memcached) with Hands-on',
            'Databases & Caching Overview'
          ],
          topics: ['Duration: 31m', 'Database caching patterns, query offloading, proxy pooling']
        },
        {
          moduleId: 'cc-m19',
          moduleNumber: 19,
          moduleTitle: 'Containerization & Serverless Services',
          lessonTitles: [
            'Docker on AWS Infrastructure',
            'S3 Trigger Lambda Function',
            'Amazon EKS & Hands-on Kubernetes',
            'Amazon Lightsail & Hands-on',
            'Amazon API Gateway with Hands-on',
            'Amazon ECS & Fargate with Hands-on',
            'Amazon ECR Registry',
            'AWS Lambda Functions Hands-on',
            'Containerization & Serverless Overview'
          ],
          topics: ['Duration: 1h 32m', 'Serverless microservice execution, container registry, ECS task services']
        },
        {
          moduleId: 'cc-m20',
          moduleNumber: 20,
          moduleTitle: 'DNS Route 53',
          lessonTitles: [
            'DNS Fundamentals & Terminology',
            'Amazon Route 53 Hosted Zones',
            'Record Types & TTL Management',
            'Routing Policies (Simple, Weighted, Latency, Failover)',
            'Hands-on Route 53 Configuration',
            'DNS & Route 53 Overview'
          ],
          topics: ['Duration: 41m', 'Domain registration, health checking, global traffic steering']
        },
        {
          moduleId: 'cc-m21',
          moduleNumber: 21,
          moduleTitle: 'Global Services',
          lessonTitles: [
            'CloudFront CDN Architecture',
            'Global Accelerator & Edge Anycast',
            'CloudFront vs Global Accelerator Comparison',
            'Hands-on CloudFront & Global Accelerator',
            'Local Zones, S3 CORS & AWS Wavelength',
            'Global Services Overview'
          ],
          topics: ['Duration: 46m', 'Latency optimization, edge caching, real-time application delivery']
        },
        {
          moduleId: 'cc-m22',
          moduleNumber: 22,
          moduleTitle: 'Infrastructure Creation & Management Services',
          lessonTitles: [
            'AWS CodeArtifact Repository',
            'AWS CloudFormation with Hands-on',
            'Dedicated DevOps Pipelines',
            'DevOps Basics on AWS',
            'AWS Elastic Beanstalk with Hands-on',
            'Infrastructure Creation & Management Overview'
          ],
          topics: ['Duration: 46m', 'Automated resource templates, PaaS hosting, package management']
        },
        {
          moduleId: 'cc-m23',
          moduleNumber: 23,
          moduleTitle: 'Storage Advanced',
          lessonTitles: [
            'Amazon FSx with Hands-on',
            'AWS File Gateway & Storage Gateway with Hands-on',
            'AWS Transfer Family (SFTP, FTPS, FTP)',
            'AWS DataSync & App2Container',
            'Storage Advanced Overview'
          ],
          topics: ['Duration: 46m', 'Enterprise hybrid file gateways and automated container migration']
        },
        {
          moduleId: 'cc-m24',
          moduleNumber: 24,
          moduleTitle: 'Monitoring & Observability',
          lessonTitles: [
            'Amazon CloudWatch Metrics & Alarms with Hands-on',
            'AWS CloudTrail Auditing with Hands-on',
            'Amazon EventBridge Event Routing',
            'AWS X-Ray Distributed Tracing',
            'AWS Health Dashboard with Hands-on',
            'Monitoring Overview'
          ],
          topics: ['Duration: 51m', 'System logging, compliance tracking, and service health alarms']
        },
        {
          moduleId: 'cc-m25',
          moduleNumber: 25,
          moduleTitle: 'Decoupling & Messaging',
          lessonTitles: [
            'Decoupling Architecture Fundamentals',
            'Amazon SQS (Simple Queue Service)',
            'Amazon SNS (Simple Notification Service) with Hands-on',
            'AWS Kinesis Real-Time Streaming',
            'Amazon MQ',
            'Decoupling Overview'
          ],
          topics: ['Duration: 46m', 'Loose coupling, message fan-out, dead-letter queues']
        },
        {
          moduleId: 'cc-m26',
          moduleNumber: 26,
          moduleTitle: 'Networking in AWS (VPC)',
          lessonTitles: [
            'Amazon VPC Core Architecture',
            'Subnets, Route Tables & Gateways with Hands-on',
            'VPC Flow Logs & Security with Hands-on',
            'VPC Peering & Transit Gateway with Hands-on',
            'VPC Endpoints & PrivateLink',
            'Networking Overview'
          ],
          topics: ['Duration: 1h 12m', 'Isolated cloud networking, private subnets, peering connections']
        },
        {
          moduleId: 'cc-m27',
          moduleNumber: 27,
          moduleTitle: 'AI & ML Services',
          lessonTitles: [
            'AWS Rekognition & Textract Vision',
            'Amazon Forecast & Kendra Search',
            'Amazon Transcribe & Polly with Hands-on',
            'Amazon Translate with Hands-on',
            'AWS Lex & Connect Chatbots',
            'Amazon Comprehend NLP',
            'Amazon SageMaker Studio',
            'AI & ML Services Overview'
          ],
          topics: ['Duration: 1h 17m', 'Cloud AI APIs, speech recognition, and machine learning pipelines']
        },
        {
          moduleId: 'cc-m28',
          moduleNumber: 28,
          moduleTitle: 'Security Services & Governance',
          lessonTitles: [
            'DDoS Protection with AWS Shield Hands-on',
            'AWS WAF (Web Application Firewall) Hands-on',
            'Network Firewall Architecture',
            'Amazon GuardDuty & Inspector',
            'AWS Config, Macie & Detective',
            'AWS KMS & CloudHSM with Hands-on',
            'ACM (Certificate Manager)',
            'AWS Secrets Manager with Hands-on',
            'Security Services Overview'
          ],
          topics: ['Duration: 1h 37m', 'Enterprise security operations, vulnerability scanning, automated secrets rotation']
        },
        {
          moduleId: 'cc-m29',
          moduleNumber: 29,
          moduleTitle: 'Management & Billing Console',
          lessonTitles: [
            'AWS Organizations & Multi-Account Governance',
            'AWS Trusted Advisor Health Checks',
            'Service Control Policies (SCPs)',
            'Consolidated Billing & AWS Control Tower',
            'AWS Resource Access Manager (RAM)',
            'AWS Cost Explorer & Budgets',
            'Cost Anomaly Detection',
            'Hands-on Billing & Cost Management Console',
            'Management & Billing Console Overview'
          ],
          topics: ['Duration: 56m', 'Organization hierarchy, financial governance, cost optimization policies']
        }
      ]
    }
  ]
};
