import sys
import os

file_path = r'd:\community-hero\src\i18n\index.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Write output to a file to avoid console encoding issues
with open(r'd:\community-hero\scripts\te_output.txt', 'w', encoding='utf-8') as out:
    out.write(f'Total lines: {len(lines)}\n')
    for i in range(3138, 3150):
        out.write(f'Line {i+1}: {repr(lines[i])}\n')

    # Now do the fix - replace lines 3143-3146 (0-indexed) with correct Telugu
    # Line 3144 (index 3143) has the wrong back value
    # We need to replace lines 3143-3146 with new content including all missing keys

    te_common_end = None
    for i in range(3135, 3155):
        if lines[i].strip() == '},':
            te_common_end = i
            out.write(f'Found closing brace at line {i+1}\n')
            break

    out.write('Done inspecting\n')

print('Output written to scripts/te_output.txt')
