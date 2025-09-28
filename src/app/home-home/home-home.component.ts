import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-home',
  imports: [],
  templateUrl: './home-home.component.html',
  styleUrls: ['./home-home.component.css']
})
export class HomeHomeComponent implements OnInit {
devName = 'Trevon Mays';
devAddress = '422 Walden Chase Ln';
devCity = 'Columbus';
devState = 'GA';
devZip = '31909';
devPhone = '(404) 960-9318';
devEmail = 'mays.trevon94@email.com';

// Summary
summary = `I’m Trevon Mays—an Associate of Science graduate in Computer Information Systems from the California Institute of Applied Technology,
currently pursuing a B.S. in Software Engineering at Western Governors University.

As a U.S. Marine Corps veteran, I bring discipline, teamwork, and a mission-first mindset to every project.
I’m passionate about learning and I love experimenting with hardware—exploring devices like the Flipper Zero and similar open-source tools to better understand systems at a low level.`;

// Education (two entries from your HTML)
school1 = 'California Institute of Applied Technology';
schoolDates1 = '05/2023 – 12/2024';
schoolDegree1 = 'Associate of Science, Computer Information Systems';

school2 = 'Western Governors University';
schoolDates2 = '05/2025 – Present';
schoolDegree2 = 'Bachelor of Science, Software Engineering';

// Experience 1 — USMC
employerName1 = 'United States Marine Corps';
jobTitle1 = 'Rifleman & Primary Marksmanship Instructor';
employmentDates1 = '07/2014 – 01/2022';
job1Bullet1 = 'Served two overseas deployments as a Rifleman, demonstrating discipline and teamwork in high-pressure environments';
job1Bullet2 = 'Trained and certified over 3000 Marines in marksmanship as an Infantry Non-Commissioned Officer';
job1Bullet3 = 'Recognized for leadership and mentorship of junior Marines, fostering skill development and team cohesion';
job1Bullet4 = 'Maintained accountability and readiness of weapons, gear, and personnel in diverse operational settings';

// Experience 2 — SuddenlySpaces
employerName2 = 'SuddenlySpaces';
jobTitle2 = 'Frontend Web Developer';
employmentDates2 = '05/2024 – 02/2025';
job2Bullet1 = 'Develop responsive web applications using PHP, Angular, React, Node.js, HTML5, and SASS';
job2Bullet2 = 'Collaborate with backend developers to integrate MySQL databases and REST APIs';
job2Bullet3 = 'Implement secure authentication and optimize performance, improving page load times by ~20%';
job2Bullet4 = 'Manage deployments and hosting using cPanel, Bluehost, and the XAMPP stack';
job2Bullet5 = 'Contribute to cross-functional projects, ensuring code quality, scalability, and maintainability';

// Experience 3 — TechNet Partners
employerName3 = 'TechNet Partners';
jobTitle3 = 'IT Support / Systems Technician';
employmentDates3 = '03/2025 – 04/2025';
job3Bullet1 = 'Provided technical support and troubleshooting for Windows and Linux systems across diverse client environments';
job3Bullet2 = 'Configured, deployed, and maintained servers, networking equipment, and cloud-based solutions';
job3Bullet3 = 'Assisted with system migrations, including Active Directory, Microsoft 365, and AWS services';
job3Bullet4 = 'Improved helpdesk efficiency by documenting repeatable processes and standard operating procedures';
job3Bullet5 = 'Worked directly with clients to resolve hardware and software issues, ensuring minimal downtime';   
constructor(){}
ngOnInit(): void { }
}
