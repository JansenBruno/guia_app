const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')


const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    body: { 
        type:Sequelize.TEXT,
        allowNull: false
    }


})

Category.hasMany(Article); // hasmany=> cria relacionamento de 1 para muitos 
Article.belongsTo(Category); // Um Artigo pertence a uma Categoria Article=>Category.
                            //belongsTo representa o relacionamento 1 para 1    

// Article.sync({force: true}) // toda vez que exetucar o metodo, ele vai recriar a tabela
module.exports = Article;