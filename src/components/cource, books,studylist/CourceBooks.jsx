import React from 'react'
import './CourceBooks.css'

function CourceBooks() {
    const studyForm = document.getElementById('studyForm');
    const studySubjectInput = document.getElementById('studySubject');
    const studyDateInput = document.getElementById('studyDate');
    const studyTable = document.getElementById('studyTable').getElementsByTagName('tbody')[0];

    let editingStudyIndex = -1; // No study material being edited initially

    // Function to render the study list
    function renderStudies() {
        const studies = getStudies();
        studyTable.innerHTML = ''; // Clear the table body

        studies.forEach((study, index) => {
            const row = studyTable.insertRow();
            row.dataset.index = index;

            const subjectCell = row.insertCell(0);
            const dateCell = row.insertCell(1);
            const statusCell = row.insertCell(2);
            const actionsCell = row.insertCell(3);

            subjectCell.textContent = study.subject;
            dateCell.textContent = study.date;

            // Status: Check if the study date has passed, today or upcoming
            const today = new Date();
            const studyDate = new Date(study.date);
            let statusText = '';
            if (studyDate < today) {
                statusText = 'Past Due';
            } else if (studyDate.toDateString() === today.toDateString()) {
                statusText = 'Today';
            } else {
                statusText = 'Upcoming';
            }
            statusCell.textContent = statusText;

            // Add a reminder if the date is today or upcoming
            if (statusText !== 'Past Due') {
                const reminder = document.createElement('span');
                reminder.classList.add('reminder');
                reminder.textContent = reminder;
                statusCell.appendChild(reminder);
            }

            // Edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.onclick = () => editStudy(index);
            actionsCell.appendChild(editButton);

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.onclick = () => deleteStudy(index);
            actionsCell.appendChild(deleteButton);
        });
    }

    // Function to add a new study material
    function addStudy(subject, date) {
        const studies = getStudies();
        studies.push({ subject, date });
        saveStudies(studies);
        renderStudies();
    }

    // Function to edit an existing study material
    function editStudy(index) {
        const studies = getStudies();
        const study = studies[index];

        studySubjectInput.value = study.subject;
        studyDateInput.value = study.date;

        editingStudyIndex = index; // Set the index to know we're editing
        studyForm.querySelector('button').textContent = 'Update Study';
    }

    // Function to update a study material
    function updateStudy(subject, date) {
        const studies = getStudies();
        studies[editingStudyIndex] = { subject, date };
        saveStudies(studies);
        renderStudies();

        // Reset the form
        studySubjectInput.value = '';
        studyDateInput.value = '';
        editingStudyIndex = -1;
        studyForm.querySelector('button').textContent = 'Add Study Material';
    }

    // Function to delete a study material
    function deleteStudy(index) {
        const studies = getStudies();
        studies.splice(index, 1);
        saveStudies(studies);
        renderStudies();
    }

    // Function to get studies from local storage or use an empty array if none
    function getStudies() {
        const studies = localStorage.getItem('studies');
        return studies ? JSON.parse(studies) : [];
    }

    // Function to save studies to local storage
    function saveStudies(studies) {
        localStorage.setItem('studies', JSON.stringify(studies));
    }

    // Form submission handler
    studyForm.onsubmit = function (e) {
        e.preventDefault();

        const subject = studySubjectInput.value.trim();
        const date = studyDateInput.value.trim();

        if (!subject || !date) {
            alert('Please enter both subject and date.');
            return;
        }

        if (editingStudyIndex === -1) {
            addStudy(subject, date);
        } else {
            updateStudy(subject, date);
        }

        studySubjectInput.value = '';
        studyDateInput.value = '';
    };

    // Initial render
    renderStudies();
    return (
        <>
            <div class="container">
                <h1>Study List</h1>

                <form id="studyForm">
                    <input type="text" id="studySubject" placeholder="Subject/Topic" required />
                    <input type="date" id="studyDate" required />
                    <button type="submit">Add Study Material</button>
                </form>


                <h2>Your Study Schedule</h2>
                <table id="studyTable">
                    <thead>
                        <tr>
                            <th>Subject/Topic</th>
                            <th>Start Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                </table>
            </div>
        </>
    )
}

export default CourceBooks