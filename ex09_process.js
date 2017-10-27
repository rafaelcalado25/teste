process.stdout.write ('Tem gente ai?')
process.stdin.on('data',function (info) {
  process.stdout.write (`A sua resposta foi ${info}`)
  process.exit()
})
