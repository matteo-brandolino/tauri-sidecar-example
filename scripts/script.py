import os
import platform

if platform.system() == 'Windows':
    desktop_path = os.path.join(os.environ['HOMEPATH'], 'Desktop')
else:
    desktop_path = os.path.join(os.path.join(os.path.expanduser('~')), 'Desktop')

folder_path = os.path.join(desktop_path, 'test_folder')
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

file_path = os.path.join(folder_path, 'test.txt')
if not os.path.exists(file_path):
    with open(file_path, 'w') as f:
        f.write('Test test test')
