const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Design Homepage",
                "description": "Create responsive homepage layout",
                "date": "2026-01-05",
                "category": "Frontend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix Navbar Bug",
                "description": "Resolve dropdown issue in navbar",
                "date": "2026-01-06",
                "category": "Bugfix",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Write Unit Tests",
                "description": "Add tests for login component",
                "date": "2026-01-07",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Database Backup",
                "description": "Perform weekly backup of user database",
                "date": "2026-01-05",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Optimize Queries",
                "description": "Improve performance of product search queries",
                "date": "2026-01-08",
                "category": "Backend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "API Documentation",
                "description": "Update API docs for new endpoints",
                "date": "2026-01-09",
                "category": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Error Logging",
                "description": "Implement centralized error logging",
                "date": "2026-01-10",
                "category": "Backend",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstName": "Vihaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "UI Testing",
                "description": "Perform cross-browser testing",
                "date": "2026-01-06",
                "category": "Testing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Accessibility Audit",
                "description": "Check compliance with WCAG standards",
                "date": "2026-01-07",
                "category": "Frontend",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Bug Fix #342",
                "description": "Resolve login redirect issue",
                "date": "2026-01-08",
                "category": "Bugfix",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Deploy Update",
                "description": "Push latest changes to staging",
                "date": "2026-01-09",
                "category": "DevOps",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Kabir",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Client Meeting",
                "description": "Discuss project requirements",
                "date": "2026-01-05",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Prepare Report",
                "description": "Generate weekly progress report",
                "date": "2026-01-06",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Training",
                "description": "Conduct React workshop",
                "date": "2026-01-07",
                "category": "Training",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstName": "Arjun",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Security Patch",
                "description": "Apply latest security updates",
                "date": "2026-01-05",
                "category": "Security",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review pull requests for project X",
                "date": "2026-01-06",
                "category": "Code Review",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Feature Development",
                "description": "Implement search filter functionality",
                "date": "2026-01-07",
                "category": "Frontend",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Integration Testing",
                "description": "Test integration of payment gateway",
                "date": "2026-01-08",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "Documentation Update",
                "description": "Update README with setup instructions",
                "date": "2026-01-09",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskSummary": {
            "active": 2,
            "newTask": 1,
            "completed": 2,
            "failed": 1
        }
    }
]
  
const admin = [{
    "id": 100,
    "firstName":"Pratham",
    "email": "admin@example.com",
    "password": "123"
}]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    // localStorage.setItem('loggedInUser')
}

export const getLocalStorage=()=>{
    const empData=JSON.parse(localStorage.getItem('employees'))
    const admData=JSON.parse(localStorage.getItem('admin'))
    return({empData,admData})
}