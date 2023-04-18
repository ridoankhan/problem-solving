# create class

class User:
    # constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

    def greeting(self):
        return f'My name is {self.name} and I am {self.age}'

    def has_birthday(self):
        self.age += 1

# extend class

# this is how we extend a class in python


class Customer(User):
    # constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0

    def setBalance(self, balance):
        self.balance = balance

    def greeting(self):
        return f'My name is {self.name} and my balance is {self.balance}'


# initialize user object
me = User('Ridoan Khan Anik', 'anik@email.com', 28)
me.has_birthday()

print(me.greeting())

# initialize customer object
zahid = Customer('Zahid Hossain', 'zahid@enail.com', 27)
zahid.setBalance(500)

print(zahid.greeting())
