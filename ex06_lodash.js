const _ = require ('lodash')

const alunos = [{
  nome: 'Rafael',
  nota: 8.5
},
{
  nome: 'Raissa',
  nota: 10
},
{
  nome: 'Sayonara',
  nota: 7
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media);
