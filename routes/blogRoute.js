const express = require('express')
const Blog = require('../schemas/blogSchema')
const jwt = require('jsonwebtoken')
const { authenticateToken } = require('../middleware/jwt')

const blogRoute = express.Router()


blogRoute.get(':/username', authenticateToken, (req, res) => {
    //GET all blog entries by username
    let username = req.params.username

    Blog.find({created_by: username}, (err, blogs) =>{
        if(err){
            res.status(400).json({message: err.message})
        }
        res.status(200).json({message: blogs})
    })
})

blogRoute.post('/:username', authenticateToken, (req, res) => {
    //CREATE blog & assign it to username
    let username = req.params.username
    let blogPost = req.body
    blogPost.created_by = username
    blogPost.created_at = Date.now()

    Blog.create(blogPost, (err, blog) =>{
        if(err){
            res.status(400).json({message: err.message})
        }
        res.status(200).json({message: blog})
    })
})

blogRoute.get('/:id ', (req, res) => {
    //GET specific blog
    let id = req.params.id
    Blog.findById(id, (err, blog) => {
        if(err){
            res.status(400).json({message: err.message})
        }
        res.status(200).json({message: blog})
    })
})

blogRoute.put('/:id', (req, res) => {
    //UPDATE specific blog
    let id = req.params.id
    Blog.findByIdAndUpdate(id, newBlog, (err, blog) => {
        if(err){
            res.status(400).json({message: err.message})
        }
        res.status(200).json({message: blog})
    })
})

blogRoute.delete('/:id', (req, res) => {
    //DELETE specific blog
    let id = req.params.id
    Blog.findByIdAndDelete(id, (err) =>{
    if(err){
        res.status(404).json({message: err.message})
    }
    res.status(204).json({message: "DELETED"})
    })
})

module.exports = blogRoute