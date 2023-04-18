import json

# the follwing shows how to convert a json into a dictionary
# create some sample json
userJSON = '{"first_name": "Ridoan Khan", "last_name": "Anik", "age": 30}'

# Parse to dict
user = json.loads(userJSON)

print(user['first_name'])
print(user)

# the following converts a dictioanry into a JSON
car = {
    'make': 'Ford',
    'model': 'Mustang',
    'year': 1970
}

carJSON = json.dumps(car)

print(carJSON)
