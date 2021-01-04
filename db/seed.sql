INSERT INTO department (dept_name)
VALUES ('Sales'),
	('Accounting'),
    ('Human Resources'),
    ('Legal');
    
INSERT INTO employee_tracker_db.role (title, salary, department_id)
	VALUES ('Sales Manager', 65000, 1),
			('Sales Associate', 50000, 1),
            ('Sales Intern', 35000, 1),
            ('Financial Manager', 100000, 2),
            ('Financial Advisor', 95000, 2),
            ('HR Manager', 75000, 3),
            ('HR Representative', 69000, 3),
            ('Head of Legal Affairs', 150000, 4),
            ('Legal Intern', 40000, 4);
            
INSERT INTO employee(first_name, last_name, role_id)
	VALUES 
		('Jack', 'Larson', 2),
		('Nick', 'Manning', 3),
        ('Bryce', 'Berglund', 6),
        ('Michael', 'Scott', 8),
        ('Norville', 'Rogers', 9);
        
INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES 
        ('Bo', 'Stevenson', 1, 1),
        ('Nathan', 'Bidinger', 44, 2),
        ('Darth', 'Vader', 11, 3),
        ('Joe', 'Yetzer', 15, 4);
        
        
        
		
            
    
    