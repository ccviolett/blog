---
order: 350
icon: cube
---

# 数据分析 Pandas

## 基本功能

### Excel 文件交互

```python
# 读取
data = pd.read_excel("excel.xlsx").to_dict('records')
data = pd.read_excel("excel.xlsx", sheet_name="Sheet 1").to_dict('records')

# 写入
pd.DataFrame(excel_data).to_excel("excel.xlsx")
```