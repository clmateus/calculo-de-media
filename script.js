const students = [
  {
    name: 'João',
    grade1: 3,
    grade2: 9,
  },
  {
    name: 'Maria',
    grade1: 10,
    grade2: 8,
  },
  {
    name: 'Mateus',
    grade1: 2,
    grade2: 4,
  },
]

function calcMean(grade1, grade2, studentName){
  const mean = (grade1 + grade2) / 2

  if(mean >= 7) {
    return alert(`A média do(a) aluno(a) ${studentName} é: ${mean}\nParabéns, ${studentName}! Você foi aprovado(a) no concurso!`)
  } else {
    return alert(`A média do(a) aluno(a) ${studentName} é: ${mean}\nNão foi dessa vez ${studentName}! Tente novamente!`)
  }
} 

for(let student of students) {
  calcMean(student.grade1, student.grade2, student.name)
}