class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  getAverage() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }
  getGrade() {
    const avg = this.getAverage();
    if (avg >= 90) return "A";
    else if (avg >= 80) return "B";
    else if (avg >= 70) return "C";
    else if (avg >= 60) return "D";
    else if (avg >= 50) return "E";
    else return "F";
  }
  getResult() {
    const avg = this.getAverage();
    if (avg >= 50 && this.attendance >= 75) return "ناجح";
    else return "يحتاج مراجعة";
  }
}
const studentsList = [
  new Student(1, "احمد علي", [85, 90, 78], 92),
  new Student(2, "سارة محمد", [45, 42, 48], 80),
  new Student(3, "عمر خالد", [48, 44, 46], 70),
  new Student(4, "لينا حسن", [65, 70, 60], 88),
];
console.log("===== تقرير الطلاب =====");
studentsList.forEach((student) => {
  console.log(`الاسم: ${student.name} | المتوسط: ${student.getAverage().toFixed(2)} | التقدير: ${student.getGrade()} | النتيجة: ${student.getResult()}`);
});
const strugglingStudents = studentsList.filter((student) => {
  const avg = student.getAverage();
  return avg >= 40 && avg < 50;
});
const afterRafa = strugglingStudents.map((student) => {
  return { name: student.name, oldAverage: student.getAverage(), newAverage: student.getAverage() + 5 };
});
const sumAfterRafa = afterRafa.reduce((acc, student) => acc + student.newAverage, 0);
const averageAfterRafa = afterRafa.length > 0 ? sumAfterRafa / afterRafa.length : 0;
console.log("\n===== الطلاب المتعثرون بعد الرأفة =====");
console.log(afterRafa);
console.log(`\nمتوسط درجات الطلاب المتعثرين بعد التعديل: ${averageAfterRafa.toFixed(2)}`);
