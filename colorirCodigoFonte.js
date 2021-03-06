const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files')

const texto = files.read('codigofonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i

let codigo = texto.match(codeRegex)[0]

// Strings: tudo que tiver entre " "
codigo = aplicarCor(codigo, /(\".*\")/g, 'CE9178')

// palavras reservadas 
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'D857CF')

// Tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385E2')

// comentário de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

// comentário de linha única
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigofonte.html', conteudoFinal)