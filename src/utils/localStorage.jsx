
 const employees = [
      {
        "id": 1, "email": "employee1@example.com", "password": "123",
        "tasks": [
          { "active": true, "newtask": false, "completed": false, "failed": false, "title": "Task 1", "description": "Complete report", "date": "2025-04-01", "category": "Work" },
          { "active": false, "newtask": true, "completed": false, "failed": false, "title": "Task 2", "description": "Prepare presentation", "date": "2025-04-02", "category": "Work" }
        ]
      },
      {
        "id": 2, "email": "employee2@example.com", "password": "123",
        "tasks": [
          { "active": true, "newtask": false, "completed": false, "failed": false, "title": "Task 1", "description": "Fix bug in project", "date": "2025-04-01", "category": "Development" },
          { "active": false, "newtask": true, "completed": false, "failed": false, "title": "Task 2", "description": "Write documentation", "date": "2025-04-03", "category": "Documentation" }
        ]
      },
      {
        "id": 3, "email": "employee3@example.com", "password": "123",
        "tasks": [
          { "active": true, "newtask": false, "completed": false, "failed": false, "title": "Task 1", "description": "Update database schema", "date": "2025-04-01", "category": "Database" },
          { "active": false, "newtask": true, "completed": false, "failed": false, "title": "Task 2", "description": "Optimize query performance", "date": "2025-04-05", "category": "Database" }
        ]
      },
      {
        "id": 4, "email": "employee4@example.com", "password": "123",
        "tasks": [
          { "active": true, "newtask": false, "completed": false, "failed": false, "title": "Task 1", "description": "Design new UI mockups", "date": "2025-04-02", "category": "Design" },
          { "active": false, "newtask": true, "completed": false, "failed": false, "title": "Task 2", "description": "Conduct UX research", "date": "2025-04-06", "category": "Design" }
        ]
      },
      {
        "id": 5, "email": "employee5@example.com", "password": "123",
        "tasks": [
          { "active": true, "newtask": false, "completed": false, "failed": false, "title": "Task 1", "description": "Monitor server logs", "date": "2025-04-02", "category": "IT Support" },
          { "active": false, "newtask": true, "completed": false, "failed": false, "title": "Task 2", "description": "Update security policies", "date": "2025-04-04", "category": "IT Security" }
        ]
    },
    ];

const admin = [
    {
        "id": 1, "email": "admin@example.com", "password": "123"
    }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));

}
export const getLocalStorage=()=>{
   const employees= JSON.parse(localStorage.getItem('employees'));
  
   const admin= JSON.parse(localStorage.getItem('admin'));
   return{employees, admin}
}