const express = require('express');
const router = express.Router()
const Book = require('../model/books')

router.get('/',async function(request,response){
    let books = await Book.find();
    return response.json(books)
});


router.post('/add',async function(request,response){
    const { name,description, pagecount,date, author }= request.body;
    let book = new Book({
        name:name,
        description:description,
        pagecount:pagecount,
        date:date,
        author:author
    });
    let promise = book.save()
    promise.then((doc)=>{
        console.log(doc)
        return response.status(200).json({message:'Successfully added'})
    })

    promise.catch((err)=>{
        console.log(err.message)
        return response.status(501).json({message:err.message})
    })
});


router.post('/delete',function(request,response){
    const {id,name} = request.body;
    const book =  Book.findOneAndDelete({id:id,name:name});

    book.then((doc)=>{
      
        return response.status(200).json({message:'Successfully deleted'})
    })

    book.catch((err)=>{
        console.log(err.message)
        return response.status(501).json({message:err.message})
    })
})
router.get('/authors',async function(request,response){
    let obj =[
        {name:'Shive Khera'},
        {name:'arper Lee'},
        {name:'Leo Tolstoy'},
        {name: 'F. Scott Fitzgeralds'},
        {name:'Gabriel García Márquez'} ,
        {name: 'E.M. Forster'}
    ]
    return response.status(200).json(obj)
})
module.exports=router