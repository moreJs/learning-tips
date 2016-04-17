# 核心
 > 将复杂的嵌套的实体模型，扁平化处理

 - new Schema(key, [options])
    * 初始化一个实体的schema，key是这个实体schema的唯一标示,
    options.idAttribute 十分重要，实体的id字段,也可以称之为外键字段

 - Schema.prototype.define(nestedSchema)
    * 定义实体的结构，主要是引用结构
    * 这里面是核心，通过外键引用，将实体之间的深层代码级别的嵌套，通过外键解除耦合，这样所有的实体都是在同一层,被称之为：entities层,通过外键维持引用关系

 - arrayOf(schema, [options])
    * 用来描述一对多的关系，也是出现频率很高的

 - valuesOf(schema, [options])
    * 这个很有意思，不产生引用关系，描述的是一种包含关系
    * 主要是不产生引用关系

 - unionOf(schemaMap, [options])
    * 这个我没看懂，从行为上来看，和valuesOf大致保持一致，就是多了一个schema字段
    * 目前看到，貌似和上个方法没有太大区别，后面再仔细研究研究

# 扁平化的state,对于我们编写可靠高效的react应用是非常重要的