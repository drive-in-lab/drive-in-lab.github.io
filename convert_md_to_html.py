import markdown
import os

def convert_md_to_html(md_file, html_file):
    with open(md_file, 'r', encoding='utf-8') as f:
        text = f.read()
        html = markdown.markdown(text)

    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(html)

# List of Markdown files to convert
files_to_convert = [
    ('index.md', 'index.html'),
    ('about.md', 'about.html'),
    ('research.md', 'research.html'),
    ('team/index.md', 'team/index.html')
]

for md_file, html_file in files_to_convert:
    if os.path.exists(md_file):
        print(f"Converting {md_file} to {html_file}...")
        convert_md_to_html(md_file, html_file)
        print(f"Converted {md_file} to {html_file}.")
    else:
        print(f"Markdown file {md_file} not found.")