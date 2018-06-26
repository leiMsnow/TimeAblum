
#coding:utf-8

import json, sys, os


def get(old_path, new_path):
    with open(old_path, "r") as f:
        json_str = f.read()

    your_dict = json.loads(json_str)

    icons = your_dict.get('icons')
    new_list = []
    for i in icons:
        if i.__contains__('properties'):
            # print(i.pop('properties'))
            properties = i.pop('properties')
            name = properties['name']
            code = properties['code']
            new_properties = {
                "properties": {
                    "name": name,
                    "code": code
                }
            }
            # print(new_properties)
            new_list.append(new_properties)

    new_json = {
        "icons": new_list
    }
    # print(new_json)
    with open(new_path, "w") as f:
        f.write(json.dumps(new_json))

if len(sys.argv) == 1:
    args = 'icomoon'
elif len(sys.argv) == 2:
    args = sys.argv[1]
else:
    raise u"输入参数错误"

get('./temp/' + args + '/selection.json', './src/utils/vectoricons/' + args + '.config.json')