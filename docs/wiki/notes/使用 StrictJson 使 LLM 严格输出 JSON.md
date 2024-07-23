使用 StrictJson 库

```
Output in the following json string format: {'###reasons###': '<一个列表，组件列表中和给定关键词有强关联性的分析原因>', '###components###': '<一个列表，组件列表中和给定关键词有强关联性的组件名称，排除掉无关的组件名称>', '###scores###': '<一个列表，对组件列表中和给定关键词有强关联性的每一个组件进行相关性评分，从 0 到 100>'}
Update text enclosed in <>. Output only a valid json string beginning with { and ending with }
```

### 参考资料

- [掌握严格JSON：解决LLM输出的难题-CSDN博客](https://blog.csdn.net/gitblog_00099/article/details/139461721)
- [strictjson/Tutorial.ipynb at main · tanchongmin/strictjson (github.com)](https://github.com/tanchongmin/strictjson/blob/main/Tutorial.ipynb)