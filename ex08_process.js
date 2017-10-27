function temParam(param){
  console.log(process.argv.indexOf(param) !== 0);
  return process.argv.indexOf(param) !== 0
}

if(temParam('Rafael')){
  console.log('Tem Rafael');
}else{
  console.log('Não tem Rafael');
}
