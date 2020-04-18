const filesystem = require('fs')
const dirname = `${__dirname}`

const read = nomeArquivo => {
    return filesystem.readFileSync(`${dirname}/originais/${nomeArquivo}`, {encoding: 'utf8'})
} 

const write = (nomeArquivo, conteudo) => {
    const alteradosdir = `${dirname}/alterados`
    if(!filesystem.existsSync(alteradosdir)){
        filesystem.mkdirSync(alteradosdir)
    }

    filesystem.writeFileSync(`${alteradosdir}/${nomeArquivo}`, conteudo, {encoding: 'utf8'})
}

module.exports = {read, write}
