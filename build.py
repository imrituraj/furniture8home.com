import json

with open('products_data.json', 'r', encoding='utf-8') as f:
    products_json = f.read().strip()

with open('template.html', 'r', encoding='utf-8') as f:
    template = f.read()

final_html = template.replace('__PRODUCTS_JSON__', products_json)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print(f"Generated index.html ({len(final_html)} bytes)")

