# A dictionary is a collection which is unordered, changable and indexed. No duplicate members
# in other languages, we usually call it as hashMap or hashTable
person = {
    'first_name': 'Ridoan Khan',
    'last_name': 'Anik',
    'age': 28
}

# using constructor
# person2 = dict(first_name='Zahid', last_name='Hossain', age=27)

# get a value
# print(person['first_name'])
# print(person.get('last_name'))

# add key-value
person['phone'] = '555-888-9999'

# get dict keys
# print(person.keys())
# print(person.items())

# copy dict
person2 = person.copy()
# this extra property is not added to the origignal dict
person2['city'] = 'Dhaka'

# remove an item
# del (person['age'])  # method-1
# person.pop('phone')  # method-2

# clear
# person.clear()

# get length
# print(len(person))


# list of dict
people = [
    {'name': 'John', 'age': 25},
    {'name': 'lorem', 'age': 30},
]

print(people[0]['name'])
