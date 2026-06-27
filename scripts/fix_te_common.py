import sys

file_path = r'd:\community-hero\src\i18n\index.ts'
out_path = r'd:\community-hero\scripts\te_output.txt'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# The Telugu section starts around line 3136
# Find "const te = {" line
te_start = None
for i, line in enumerate(lines):
    if 'const te = {' in line:
        te_start = i
        break

new_lines = list(lines)

if te_start is not None:
    # The common section is at te_start + 2 (translation: { then common: {)
    # Find the end of the common section
    common_start = te_start + 2  # common: {
    common_end = None
    brace_depth = 0
    for i in range(common_start, te_start + 30):
        stripped = lines[i].strip()
        if stripped == 'common: {':
            brace_depth = 1
        elif brace_depth > 0:
            brace_depth += stripped.count('{') - stripped.count('}')
            if brace_depth == 0:
                common_end = i
                break

    # Replace lines common_start through common_end with new content
    new_common = [
        '    common: {\n',
        '      loading: "\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n',
        '      error: "\u0c32\u0c4b\u0c2a\u0c02",\n',
        '      reset: "\u0c30\u0c40\u0c38\u0c46\u0c1f\u0c4d",\n',
        '      submit: "\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c02\u0c1a\u0c41",\n',
        '      cancel: "\u0c30\u0c26\u0c4d\u0c26\u0c41 \u0c1a\u0c47\u0c2f\u0c3f",\n',
        '      back: "\u0c35\u0c46\u0c28\u0c41\u0c15\u0c15\u0c41",\n',
        '      retry: "\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c2f\u0c24\u0c4d\u0c28\u0c3f\u0c02\u0c1a\u0c41",\n',
        '      progress: "\u0c2a\u0c41\u0c30\u0c4b\u0c17\u0c24\u0c3f",\n',
        '      chooseFile: "\u0c2b\u0c48\u0c32\u0c4d \u0c0e\u0c02\u0c1a\u0c41\u0c15\u0c4b\u0c02\u0c21\u0c3f",\n',
        '      camera: "\u0c15\u0c46\u0c2e\u0c46\u0c30\u0c3e",\n',
        '      dragDrop: "\u0c07\u0c15\u0c4d\u0c15\u0c21 \u0c1a\u0c3f\u0c24\u0c4d\u0c30\u0c02 \u0c32\u0c47\u0c26\u0c3e \u0c35\u0c40\u0c21\u0c3f\u0c2f\u0c4b\u0c28\u0c41 \u0c32\u0c3e\u0c17\u0c02\u0c21\u0c3f \u0c2e\u0c30\u0c3f\u0c2f\u0c41 \u0c35\u0c26\u0c32\u0c02\u0c21\u0c3f",\n',
        '      viewLiveTracking: "\u0c32\u0c48\u0c35\u0c4d \u0c1f\u0c4d\u0c30\u0c3e\u0c15\u0c3f\u0c02\u0c17\u0c4d \u0c1a\u0c42\u0c21\u0c02\u0c21\u0c3f",\n',
        '      play: "\u0c2a\u0c4d\u0c32\u0c47 \u0c1a\u0c47\u0c2f\u0c3f",\n',
        '      pause: "\u0c2a\u0c3e\u0c1c\u0c4d \u0c1a\u0c47\u0c2f\u0c3f",\n',
        '      resume: "\u0c2e\u0c33\u0c4d\u0c33\u0c40 \u0c2a\u0c4d\u0c30\u0c3e\u0c30\u0c02\u0c2d\u0c3f\u0c02\u0c1a\u0c41",\n',
        '      stop: "\u0c06\u0c2a\u0c41",\n',
        '      preview: "\u0c2e\u0c41\u0c02\u0c26\u0c41\u0c1a\u0c42\u0c2a\u0c41",\n',
        '      remove: "\u0c24\u0c40\u0c38\u0c3f\u0c35\u0c47\u0c2f\u0c3f",\n',
        '    },\n',
    ]

    new_lines[common_start:common_end+1] = new_common

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

with open(out_path, 'w', encoding='utf-8') as out:
    out.write(f'te_start = {te_start}\n')
    out.write(f'common_start = {common_start}\n')
    out.write(f'common_end = {common_end}\n')
    out.write('SUCCESS\n')

print('Done - check te_output.txt')
