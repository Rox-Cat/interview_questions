import os
import shutil
folder_path = 'E:\研究生\自我学习\leetcode'  # 替换为你要获取信息的文件夹路径

# 获取文件夹下所有文件和文件夹的名称
file_names = os.listdir(folder_path)

# 遍历文件夹下的每个文件和文件夹
for file_name in file_names:
    # 获取文件或文件夹的完整路径
    file_path = os.path.join(folder_path, file_name)
    
    # 判断是否为文件
    if os.path.isfile(file_path):
        # 获取文件的信息
        file_size = os.path.getsize(file_path)  # 文件大小（字节）
        file_creation_time = os.path.getctime(file_path)  # 文件创建时间
        file_modification_time = os.path.getmtime(file_path)  # 文件修改时间
        
        # 打印文件信息
        print(f'文件名: {file_name}')
        print(f'文件大小: {file_size} 字节')
        print(f'创建时间: {file_creation_time}')
        print(f'修改时间: {file_modification_time}')
        print('---')
        
    # 如果是文件夹，可以选择是否获取文件夹的信息
    elif os.path.isdir(file_path):
        # 获取文件夹的信息
        folder_creation_time = os.path.getctime(file_path)  # 文件夹创建时间
        folder_modification_time = os.path.getmtime(file_path)  # 文件夹修改时间
        folder_size = shutil.disk_usage(file_path).total
        # 打印文件夹信息
        print(f'文件夹名: {file_name}')
        print(f'文件价大小: {folder_size} 字节')
        print(f'创建时间: {folder_creation_time}')
        print(f'修改时间: {folder_modification_time}')
        print('---')