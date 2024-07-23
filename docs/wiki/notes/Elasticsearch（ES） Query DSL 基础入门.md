### 基础

#### 且（同时满足 A 和 B）

```json
{
	"must": [ {
		"match": {
			"A": "A"
		}
	}, {
		"match": {
			"B": "B"
		}
	}]
}
```

#### 或（满足 A 或 B 其中之一）

```json
{
	"should": [ {
		"match": {
			"A": "A"
		}
	}, {
		"match": {
			"B": "B"
		}
	}]
}
```

### 示例

比如要按照数据清洗规则中的要求，实现漏洞数据的筛选，其 Query DSL 如下：

```json
{
  "query": {
    "bool": {
      "should": [
        {
          "match": {
            "source": "ti_info"
          }
        },
        {
          "bool": {
            "must": [
              {
                "match": {
                  "source": "tiother_info"
                }
              },
              {
                "bool": {
                  "should": [
                    {
                      "match": {
                        "name": "漏洞"
                      }
                    },
                    {
                      "match": {
                        "name": "vul"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
}
```

### 参考资料

- [Elasticsearch——Query DSL语法入门 - 简书 (jianshu.com)](https://www.jianshu.com/p/6c62170f8907)
- [kibana操作elasticsearch（增删改查）_kibana删除指定数据-CSDN博客](https://blog.csdn.net/mo_sss/article/details/133808562)
- [【ES专题】ElasticSearch快速入门-CSDN博客](https://blog.csdn.net/qq_32681589/article/details/134106958?spm=1001.2014.3001.5501)
- [【ES专题】ElasticSearch搜索进阶_es bm25-CSDN博客](https://blog.csdn.net/qq_32681589/article/details/134170193?spm=1001.2014.3001.5502)
- [【ES专题】ElasticSearch 高级查询语法Query DSL实战_es query-CSDN博客](https://blog.csdn.net/qq_32681589/article/details/134143724)