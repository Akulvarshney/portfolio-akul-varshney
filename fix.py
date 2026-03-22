import os
import glob
import re

jsx_files = glob.glob('src/components/*.jsx')
for file in jsx_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('<br>', '<br />')
    # Replace HTML comments with JSX comments
    content = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', content)
    # Also handle &nbsp;
    content = content.replace('&nbsp;', ' ')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
