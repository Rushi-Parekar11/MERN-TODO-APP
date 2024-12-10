const TodoModel=require("../models/todomodel");

module.exports.getTodo = async (req,res)=>{
  const Todosent= await (TodoModel).find();
  res.send(Todosent)
}

module.exports.saveTodo = async(req,res)=>{
    const {text}=req.body

     TodoModel.create({text})
    .then((data)=>{
        console.log("data added succesfully !");
        console.log(data);
        res.send(data);
    })

}

module.exports.updateTodo = async(req,res)=>{
    const {_id,text}=req.body
    TodoModel.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Update succesfully..!"))
    .catch((err)=>{
      console.log("updation error !",err)
    })
}

module.exports.deleteTodo = async(req,res)=>{
  const {_id}=req.body
  TodoModel.findByIdAndDelete(_id)
  .then(()=>res.send("Delete succesfully..!"))
  .catch((err)=>{console.log("delete error ",err)});

}