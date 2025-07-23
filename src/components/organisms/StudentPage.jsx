import { useState, useEffect } from 'react';
import StudentForm from '../molecules/StudentForm';
import api from '../../services/api';

export default function StudentPage() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ name: '', email: '', phone: '', departmentId: '' });

  const fetchStudents = async () => {
    const response = await api.get('/Students');
    setStudents(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/Students', student);
    fetchStudents();
    setStudent({ name: '', email: '', phone: '', departmentId: '' });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Student Management</h1>
      <StudentForm student={student} setStudent={setStudent} handleSubmit={handleSubmit} />
      <div className="mt-6">
        <h2 className="text-xl mb-2">Students List</h2>
        <ul>
          {students.map(s => (
            <li key={s.studentId} className="border p-2 mb-2">
              {s.name} - {s.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
