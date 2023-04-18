# python has functions for files to performt the CRUD operations

# open a file
myFile = open('myFile.txt', 'w')

print('Name: ', myFile.name)
print('Is closed: ', myFile.closed)
print('Opening mode: ', myFile.mode)

# write to file
myFile.write('I love learning python')
myFile.write(' and JavaScript as well')
myFile.close()

# still want to append to it
myFile = open('myFile.txt', 'a')
myFile.write(' and I also like to Java')

# read from a file
myFile = open('myFile.txt', 'r+')
text = myFile.read(100)
print(text)
