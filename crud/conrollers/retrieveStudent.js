import StudentModel from "../models/studentModel.js";

const getAllDoc = async () => {
//   const result = await StudentModel.find();
// find by specific fields
//   const result = await StudentModel.find().select('name age hobbies');   // include
//   const result = await StudentModel.find().select(['name age hobbies']);   // include
//   const result = await StudentModel.find().select({name:1,age:1});   // include
//   const result = await StudentModel.find().select('-name -age');   // exclude
//   const result = await StudentModel.find().select(['-name -age']);   // exclude
//   const result = await StudentModel.find().select({name:0,hobbies:0});   // exclude

// get single doc 
// const result = await StudentModel.findById("63aa78c5aea9b0f3428d1ddc")
// const result = await StudentModel.find({name:'sam'})

// get by limit
// const result = await StudentModel.find().limit(3)
// const result = await StudentModel.find({}, null, {limit:2})

// skip doc
// const result = await StudentModel.find({}, null, {skip:2})

// count docs
// const result = await StudentModel.find().countDocuments()

/// sort docs
// const result = await StudentModel.find().sort({age:1}) // increasing order
// const result = await StudentModel.find().sort({name:-1}) // decreasing order

// mix docs 

// const result = await StudentModel.find({}, {name:1,age:1}, {limit: 5,skip:3})

// comparison query
// const result = await StudentModel.find({age: {$gt: 22}})
// const result = await StudentModel.find({age: {$gte: 26}})
// const result = await StudentModel.find({age: {$lt: 12}})
// const result = await StudentModel.find({age: {$ne: 12}})
// const result = await StudentModel.find({age: {$in: [30,25]}})

// logical operators
const result = await StudentModel.find({$and:[{age:35}]})
// const result = await StudentModel.find().skip(1)
  console.log(result)
//   console.log(result);
// result.forEach((item) => {
//     console.log(item.hobbies[1])
// })

};
export default getAllDoc;
