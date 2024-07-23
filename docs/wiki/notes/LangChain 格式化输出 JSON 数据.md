
```python
from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain.output_parsers import PydanticOutputParser
from langchain_core.pydantic_v1 import BaseModel, Field
import json

llm = ChatOpenAI(
    base_url="http://hunyuanapi.woa.com/openapi/v1",
    api_key="HWiNj7muC8RNMu3xR0050RoE31uu2vkI",
    model="hunyuan")

class ResultItem(BaseModel):
    key1 : str = Field(description="key1 的描述")
    key2 : str = Field(description="key2 的描述")
    key3 : str = Field(description="key3 的描述")

parser = PydanticOutputParser(pydantic_object=ResultItem)

print(parser.get_format_instructions())

first_prompt = PromptTemplate(
    input_variables=["input"],
    partial_variables={
        "format_instructions": parser.get_format_instructions(), 
    },
    template="""
    假设你是一个 XX 专家，请根据输入的内容分析出结构化的信息。请一步一步分析
    step1: 分析 XXX，写入 key1 字段
    step2: 分析 XXX，写入 key2 字段
    step3: 分析 XXX，写入 key3 字段

    {format_instructions}

    {input}
    """
)

chain1 = first_prompt | llm | StrOutputParser()
llm_answer = chain1.invoke(input_data)
json_answer = json.loads(llm_answer)
```

注意：输入的数据要放在 `{format_instructions}` 之后，否则可能会出现 Markdown 格式的 JSON 甚至乱码格式，导致解析出错，需要 adapter 特殊处理，很不优雅。

### 参考资料

- [如何在langchain中对大模型的输出进行格式化 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/668955609)