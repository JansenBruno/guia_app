const express = require('express');
const router = express.Router();
const Category = require('./Category');
const slugify = require('slugify');


router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new')

});

router.post('/categories/save', (req, res) => { //utilizar .post nos formularios
    var title = req.body.title
    if (title != undefined) {  // caso o titulo seja undefined ou vazio direcionar para pagina principal
        // adicionando informação de titulo ao banco de dados 
        Category.create({
            title: title,
            slug: slugify(title) // (slugify)=> transforma isso "TESTE CODIGO" em "teste-codigo" facilita para pesquisa de rotas 
        }).then(() => {
            res.redirect('/')
        })

    } else {
        res.redirect('/admin/categories/new')
    }
})

router.get('/admin/categories', (req, res) => { //rotas
    Category.findAll().then(categories =>{ 
        res.render('admin/categories/index', { categories: categories });
    });
});

module.exports = router;