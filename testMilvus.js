import * as Milvus from './Milvus/Milvus.js'
await Milvus.createData()


// await Milvus.dropCollection()
// await Milvus.insertData()
await Milvus.getAnswerData('你是谁？')
