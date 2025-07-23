import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function StudentForm({ student, setStudent, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
      <Input placeholder="Name" value={student.name} onChange={(e) => setStudent({...student, name: e.target.value})} />
      <Input placeholder="Email" value={student.email} onChange={(e) => setStudent({...student, email: e.target.value})} />
      <Input placeholder="Phone" value={student.phone} onChange={(e) => setStudent({...student, phone: e.target.value})} />
      <Input placeholder="Department ID" value={student.departmentId} onChange={(e) => setStudent({...student, departmentId: e.target.value})} />
      <Button text="Save" type="submit" />
    </form>
  );
}
